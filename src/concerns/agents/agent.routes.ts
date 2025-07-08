import express from 'express';

import agentsController from './agents.controller';
import { 
    authenticator, 
    validator 
} from '@/middlewares';
import { 
    postAgentValidation,
} from './agent.validation';

const agentRouter = express.Router();

agentRouter.get("/agent/:id", authenticator, agentsController.getAgentById);
agentRouter.get("/user/:id/agents", authenticator, agentsController.getUserAgents);
agentRouter.get("/game/:id/agents", authenticator, agentsController.getGameAgents);
agentRouter.post("/agent", authenticator, validator(postAgentValidation), agentsController.postAgent);

export default agentRouter;