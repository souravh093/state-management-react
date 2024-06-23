const ChildrenComponent = ({ count }: { count: number }) => {
  return (
    <div className="border-2 border-blue-500 p-10 m-10 max-w-xl">{count}</div>
  );
};

export default ChildrenComponent;
