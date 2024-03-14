import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from '../App.tsx';
import InfoBox from "./InfoBox.tsx";
import { ReactNode } from "react";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList ({ 
  goals, 
  onDeleteGoal 
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no course yet.</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = <InfoBox mode='warning'>Your goals are too many.</InfoBox>
  }

  return(
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>  
        ))}
      </ul>
    </>
  );
}