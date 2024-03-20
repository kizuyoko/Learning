import { type ReactNode, createContext, useContext, useReducer } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimerState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true;
  timers: [];
}

type TimersContextValue = TimerState & {
  addTimer: (timerData: Timer) => void,
  startTimers: () => void,
  stopTimers: () => void,
};

export const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error ('TimersContext is null!')
  }
  return timersCtx;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({ children }: TimersContextProviderProps) {
  const [] = useReducer(reducer, initialState);
  

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