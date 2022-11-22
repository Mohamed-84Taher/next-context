import { useState } from "react";

const AddOneButton = ({ setCounter }) => (
  <div>
    <button onClick={() => setCounter(v => v + 1)}>Add One</button>
  </div>
);
const Container = ({ children }) => <div>{children}</div>;

const Counter = ({ counter }) => <div>Counter : {counter}</div>;

export default function CounterUserState() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Container>
        <AddOneButton setCounter={setCounter} />
      </Container>
      <Counter counter={counter} />
    </div>
  );
}
