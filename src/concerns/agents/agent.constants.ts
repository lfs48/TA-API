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

export const DEFAULT_AGENT_CURRENCY = {
  "commendations": {
    "current": 0,
    "banked": 0,
    "spent": 0,
  },
  "demerits": {
    "current": 0,
    "banked": 0,
    "spent": 0
  },
} as const;

export const DEFAULT_AGENT_TRACKS = {
  "competency": {
    "length": 30,
    "time": 0,
    "mvp": 0,
    "blocked": 0,
    "unlocks": {
      3: "A3",
      6: "D4",
      9: "G3",
      12: "J3",
      15: "N3",
      18: "Q3",
      21: "T3",
      24: "W8",
      27: "Y2",
    },
  },
  "reality": {
    "length": 30,
    "time": 0,
    "mvp": 0,
    "blocked": 0,
    "unlocks": {
      1: "C4",
      4: "L11",
      8: "E2",
      10: "O4",
      14: "T6",
      16: "V2",
      20: "X3",
      22: "H5",
      26: "E3",
    },
  },
  "anomaly": {
    "length": 30,
    "time": 0,
    "mvp": 0,
    "blocked": 0,
    "unlocks": {
      1: "H4",
      2: "H3",
      5: "U2",
      7: "X2",
      11: "N1",
      13: "Q2",
      17: "L10",
      19: "G8",
      21: "A7",
    },
  },
} as const;
