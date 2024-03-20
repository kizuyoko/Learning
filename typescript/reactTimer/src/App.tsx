//import { useRef } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
//import Container from "./components/Container";
import Form from "./components/Form";

function App() {
  // const input = useRef<HTMLInputElement>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  }

  return (
    <main>
      <Form onSave={handleSave} >
        <Input type='text' label='Name' id='name' />
        <Input type='number' label='Age' id='age' />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
