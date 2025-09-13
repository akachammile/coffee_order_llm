import { useReducer } from "react";
import { stateReducer, initialState } from "./counterReducer";
//TODO: 泛型的使用,这里需要重新看下
export function useCounter() {
//   const [state, dispatch] = useReducer<React.Reducer<State, CounterAction>, React.AnyActionArg>(stateReducer, initialState);
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });

  return { state, addFive, reset };
}
