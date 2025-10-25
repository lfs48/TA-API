import { Request, Response } from "express";
import { getIdFromJWT } from "@/util";
import { findRelationshipById, updateRelationship } from "./relationship.service";
import { whitelistRelationshipFields } from "./relationship.util";

// PATCH /relationship/:id endpoint controller
export const patchRelationship = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = getIdFromJWT(req);
        const relationshipData = req.body.relationship;

        // Get existing relationship to verify ownership
        const existingRelationship = await findRelationshipById(id);
        if (!existingRelationship) {
            res.status(404).json({ messages: ['Relationship not found'] });
            return;
        }

        // Check if user owns the agent associated with this relationship
        if (existingRelationship.agent.playerId !== userId) {
            res.status(403).json({ messages: ['Not your relationship'] });
            return;
        }

        const updatedRelationship = await updateRelationship(id, relationshipData);
        if (!updatedRelationship) {
            res.status(404).json({ messages: ['Relationship not found'] });
            return;
        }

        res.status(200).json({ relationship: whitelistRelationshipFields(updatedRelationship) });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ["Internal Server Error"] });
    }
};

export default {
    patchRelationship,
};