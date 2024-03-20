import { createContext } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimerState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimerState & {
  addTimer: (timerData: Timer) => void,
  startTimers: () => void,
  stopTimers: () => void,
};

const TimersContext = createContext<TimersContextValue | null>(null);