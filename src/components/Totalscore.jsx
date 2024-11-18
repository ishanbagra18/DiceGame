const Totalscore = ({score}) => {
  return (
    <div className="w-40 h-40  mt-10 flex flex-col justify-end items-center">
      <h1 className="text-7xl leading-20">{score}</h1>
      <p className="text-3xl">Total Score</p>
    </div>
  );
};

export default Totalscore;
