import ChildrenComponent from "./ChildrenComponent";

type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterWithFunctional = ({ count, setCount }: TProps) => {
  return (
    <div className="border-2 m-10 p-10 border-green-500">
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-orange-500 px-5 py-3 rounded-md text-white hover:bg-orange-600"
      >
        {count}
      </button>

      <ChildrenComponent count={count} />
    </div>
  );
};

export default CounterWithFunctional;
