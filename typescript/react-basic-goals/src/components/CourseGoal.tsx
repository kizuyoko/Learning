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

type CourseGoalProps = PropsWithChildren<{title:string}>;

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return <article>
    <div>
      <h2>{title}</h2>
      {children}
    </div>
    <button>Delete</button>
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