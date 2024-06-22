import { useState } from "react";
import CounterWithFunctional from "./components/CounterWithFunctional";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="border-2 border-red-500 m-10 p-10">
      <button className="bg-orange-500 px-5 py-3 rounded-md text-white hover:bg-orange-600">
        {count}
      </button>
      <CounterWithFunctional count={count} setCount={setCount} />
    </div>
  );
}

export default App;
