import { useReducer, createContext, useContext } from "react";

const CounterContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    default:
      return state;
  }
};

const CounterContextProvider = ({ children }) => {
  return (
    <CounterContext.Provider value={useReducer(reducer, 0)}>
      {children}
    </CounterContext.Provider>
  );
};

const Container = () => (
  <div>
    <AddOneButton />
    <SubtractOneButton />
  </div>
);
const AddOneButton = () => {
  const [, dispatch] = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: "add" })}>Add One</button>
    </div>
  );
};
const SubtractOneButton = () => {
  const [, dispatch] = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: "subtract" })}>
        Subtract One
      </button>
    </div>
  );
};

const Counter = () => {
  const [counter] = useContext(CounterContext);
  return <div>Counter : {counter}</div>;
};

function CounterUserState() {
  return (
    <CounterContextProvider>
      <div>
        <Container />
        <Counter />
      </div>
    </CounterContextProvider>
  );
}
export default function ProvideUseState() {
  return (
    <div>
      <CounterUserState />
      <CounterUserState />
      <CounterUserState />
      <CounterUserState />
      <CounterUserState />
    </div>
  );
}
