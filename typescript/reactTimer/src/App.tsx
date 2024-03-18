import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input label="Your name?" id="name" type="text" disabled />
      <Input label="Your age?" id="age" type="number" />
    </main>
  );
}

export default App;
