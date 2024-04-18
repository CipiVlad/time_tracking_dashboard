export type Data = {
  title: string
  timeframes: {
    daily: {
      current: number
      previous: number
    }
    weekly: {
      current: number
      previous: number
    }
    monthly: {
      current: number
      previous: number
    }
  }
}

export const Work: Data =
{
  "title": "Work",
  "timeframes": {
    "daily": {
      "current": 5,
      "previous": 7
    },
    "weekly": {
      "current": 32,
      "previous": 36
    },
    "monthly": {
      "current": 103,
      "previous": 128
    }
  }
};

export const Play: Data =
{
  "title": "Play",
  "timeframes": {
    "daily": {
      "current": 1,
      "previous": 2
    },
    "weekly": {
      "current": 10,
      "previous": 8
    },
    "monthly": {
      "current": 23,
      "previous": 29
    }
  }
}
export const Study: Data =
{
  "title": "Study",
  "timeframes": {
    "daily": {
      "current": 0,
      "previous": 1
    },
    "weekly": {
      "current": 4,
      "previous": 7
    },
    "monthly": {
      "current": 13,
      "previous": 19
    }
  }
}

export const Exercise: Data =
{
  "title": "Exercise",
  "timeframes": {
    "daily": {
      "current": 1,
      "previous": 1
    },
    "weekly": {
      "current": 4,
      "previous": 5
    },
    "monthly": {
      "current": 11,
      "previous": 18
    }
  }
}

export const Social: Data =
{
  "title": "Social",
  "timeframes": {
    "daily": {
      "current": 1,
      "previous": 3
    },
    "weekly": {
      "current": 5,
      "previous": 10
    },
    "monthly": {
      "current": 21,
      "previous": 23
    }
  }
}

export const SelfCare: Data =
{
  "title": "Self Care",
  "timeframes": {
    "daily": {
      "current": 0,
      "previous": 1
    },
    "weekly": {
      "current": 2,
      "previous": 2
    },
    "monthly": {
      "current": 7,
      "previous": 11
    }
  }
}
