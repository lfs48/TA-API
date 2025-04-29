import { Server } from "socket.io";

const setupSocketIO = (server) => {
    const io = new Server(server, {
        cors: { origin: "*" },
    });

    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);

        socket.on('disconnect', () => {
            console.log('User disconnected:', socket.id);
        });
    });

    return io;
};

export default setupSocketIO;