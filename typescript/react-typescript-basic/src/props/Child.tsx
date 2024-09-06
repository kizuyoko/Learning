interface ChildProps {
  color: string;
  onClick: () => void;
  children: string;
}

export const Child = ({ color, onClick, children }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

// FC means Function Component. It can be both od 'FC' and 'FunctionComponent' 
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

