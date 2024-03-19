import { useRef } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      {/* <Input label="Your name?" id="name" type="text" disabled />
      <Input label="Your age?" id="age" type="number" /> */}
      <Input label='Test' id='test' ref={input} />
      <Container as={Button}>Button</Container>
      <Container as={Button} href='https://google.com'>A Link</Container>
    </main>
  );
}

export default App;
