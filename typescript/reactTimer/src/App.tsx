import Button from "./components/Button";
//import Input from "./components/Input";
import Container from "./components/Container";

function App() {
  return (
    <main>
      {/* <Input label="Your name?" id="name" type="text" disabled />
      <Input label="Your age?" id="age" type="number" /> */}
      <Container as={Button} onClick={() => {}}>Button</Container>
        <Button href='https://google.com'>A Link</Button>
    </main>
  );
}

export default App;
