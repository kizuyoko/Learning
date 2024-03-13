import { 
  // FC means Functional Component
  // type FC, 
  type PropsWithChildren, 
  // type ReactNode 
} from "react";

//interface CourseGoalProps {
//  title: string;
//  children: ReactNode;
//}

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title:string;
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({ 
  id, 
  title, 
  children, 
  onDelete 
}: CourseGoalProps) {
  return <article>
    <div>
      <h2>{title}</h2>
      {children}
    </div>
    <button onClick={() => onDelete(id)}>Delete</button>
  </article>;
}

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return <article>
//     <div>
//       <h2>{title}</h2>
//       {children}
//     </div>
//     <button>Delete</button>
//   </article>;
// };
// export default CourseGoal;