import { type FormEvent } from "react";
import { useRef } from "react";

export default function NewGoal() {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
  }

  return <form onSubmit={handleSubmit}>
    <p>
      <label htmlFor="goal">Your Goal</label>
      <input id='goal' type='text' ref={goal}/>
    </p>
    <p>
      <label htmlFor="summary">Short Summary</label>
      <input id='summary' type='text' ref={summary} />
    </p>
    <p>
      <button>Add Goal</button>
    </p>
  </form>;
}