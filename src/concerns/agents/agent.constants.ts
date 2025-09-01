// Default agent qualities structure
export const DEFAULT_AGENT_QUALITIES = {
  "attentiveness": {
    "current": 0,
    "max": 0
  },
  "duplicity": {
    "current": 0,
    "max": 0
  },
  "dynamism": {
    "current": 0,
    "max": 0
  },
  "empathy": {
    "current": 0,
    "max": 0
  },
  "initiative": {
    "current": 0,
    "max": 0
  },
  "persistence": {
    "current": 0,
    "max": 0
  },
  "presence": {
    "current": 0,
    "max": 0
  },
  "professionalism": {
    "current": 0,
    "max": 0
  },
  "subtlety": {
    "current": 0,
    "max": 0
  }
} as const;

export type AgentQualities = typeof DEFAULT_AGENT_QUALITIES;
