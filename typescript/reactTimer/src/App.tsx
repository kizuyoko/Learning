import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input label="Your name?" id="name" type="text" disabled />
      <Input label="Your age?" id="age" type="number" />

      <p>
        <Button el='button' className="button">A Button</Button>
      </p>
      <p>
        <Button el='anchor' className="button" href='https://google.com'>A Link</Button>
      </p>
    </main>
  );
}

export default App;
