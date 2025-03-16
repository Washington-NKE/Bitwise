
const Generating = ({ className}:{className?: string}) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-black/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src='/assets/loading.png' alt="Loading" />
      Bitwise is customizing|
    </div>
  );
};

export default Generating;