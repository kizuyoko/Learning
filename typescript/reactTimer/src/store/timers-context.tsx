import { type ReactNode, createContext } from "react";

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

type TimersContextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({ children }: TimersContextProviderProps) {

  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {

    },
    startTimers() {
      
    },
    stopTimers() {
      
    },
  };

  return <TimersContext.Provider value={ctx}>
    { children }
  </TimersContext.Provider>;
}