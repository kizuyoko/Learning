import { useRef } from "react";
//import Button from "./components/UI/Button";
//import Input from "./components/UI/Input";
//import Container from "./components/Container";
import Form, { type FormHandle } from "./components/UI/Form";
import AddTimer from "./components/AddTimer";
import Header from "./components/Header";
import Timers from "./components/Timers";
import TimersContextProvider from "./store/timers-context";

function App() {
  // const input = useRef<HTMLInputElement>(null);

  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <TimersContextProvider>
      <Header />
      <main>
        {/* <Form onSave={handleSave} ref={customForm}>
          <Input type='text' label='Name' id='name' />
          <Input type='number' label='Age' id='age' />
          <p>
            <Button>Save</Button>
          </p>
        </Form> */}
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  );
}

export default App;
