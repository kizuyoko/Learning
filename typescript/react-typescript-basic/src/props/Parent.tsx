import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC 
      color="red" 
      onClick={() => {console.log('Clicked!')}}
    >jhjkhh

    </ChildAsFC>
  );
};

export default Parent;