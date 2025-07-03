import { Server } from "socket.io";
import jwt, { JwtPayload } from "jsonwebtoken";

import { getJWTSecret } from "@/util";

interface IOServer extends Server {
    userSocketMap: Map<string, string>;
}

export const userSocketMap = new Map();

const setupSocketIO = (server) => {
    const io = new Server(server, {
        cors: { origin: "*" },
    }) as IOServer;

    io.use((socket, next) => {
        const token = socket.handshake.auth.token;
        if (!token) {
            return next(new Error("Authentication error: No token provided"));
        }
        try {
            const payload = jwt.verify(token, getJWTSecret()) as JwtPayload;
            console.log(payload);
            socket.data.userId = payload.id;
            userSocketMap.set(payload.id, socket.id);
            next();
        } catch (err) {
            next(new Error("Authentication error: Invalid token"));
        }
    });

    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id, 'User:', socket.data.userId);

        socket.on('disconnect', () => {
            for (const [userId, sId] of userSocketMap.entries()) {
                if (sId === socket.id) {
                    userSocketMap.delete(userId);
                    break;
                }
            }
            console.log('User disconnected:', socket.id);
        });
    });

    io.userSocketMap = userSocketMap;
    return io;
};

export default setupSocketIO;