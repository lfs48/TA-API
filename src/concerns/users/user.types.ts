import { Agent, Game, Invite, User } from "@prisma/client";

export interface PostUser {
    username: string;
    password: string;
};

export type UserWithRelations = User & {
    agents?: Agent[] | null;
    games?: Game[] | null;
    invites?: Invite[] | null;
}