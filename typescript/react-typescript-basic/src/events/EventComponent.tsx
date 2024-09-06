import { HtmlHTMLAttributes } from "react";

const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };

  return (
    <div>
      <h2>Event</h2>
      <input onChange={onChange} />
      <h1
        draggable
        onDragStart={onDragStart}
      >Drag Me!</h1>
    </div>
  );
};

export default EventComponent;