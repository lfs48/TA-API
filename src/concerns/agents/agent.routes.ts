import express from 'express';

import agentsController from './agents.controller';
import { 
    authenticator, 
    validator 
} from '@/middlewares';
import { 
    postAgentValidation,
    patchAgentValidation,
    patchAgentQualityValidation,
    patchAgentCurrencyValidation,
    patchAgentCurrencyResetValidation,
    patchAbilityInstanceValidation,
} from './agent.validation';

const agentRouter = express.Router();

agentRouter.get("/agent/:id", authenticator, agentsController.getAgentById);
agentRouter.get("/user/:id/agents", authenticator, agentsController.getUserAgents);
agentRouter.get("/game/:id/agents", authenticator, agentsController.getGameAgents);
agentRouter.post("/agent", authenticator, validator(postAgentValidation), agentsController.postAgent);
agentRouter.patch("/agent/:id", authenticator, validator(patchAgentValidation), agentsController.patchAgent);
agentRouter.patch("/agent/:id/qa/current", authenticator, validator(patchAgentQualityValidation), agentsController.patchAgentQualityCurrent);
agentRouter.patch("/agent/:id/qa/max", authenticator, validator(patchAgentQualityValidation), agentsController.patchAgentQualityMax);
agentRouter.patch("/agent/:id/currency/earn", authenticator, validator(patchAgentCurrencyValidation), agentsController.patchAgentCurrencyEarn);
agentRouter.patch("/agent/:id/currency/spend", authenticator, validator(patchAgentCurrencyValidation), agentsController.patchAgentCurrencySpend);
agentRouter.patch("/agent/:id/currency/reset-current", authenticator, validator(patchAgentCurrencyResetValidation), agentsController.patchAgentCurrencyResetCurrent);
agentRouter.patch("/agent/:id/reset", authenticator, agentsController.patchAgentReset);
agentRouter.patch("/ability-instance/:id", authenticator, validator(patchAbilityInstanceValidation), agentsController.patchAbilityInstance);

export default agentRouter;