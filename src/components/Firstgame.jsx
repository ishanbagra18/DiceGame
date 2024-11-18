const Firstgame = ({ toggle }) => {
  return (
    <div className="flex  min-h-screen justify-end">
      <div className="flex justify-items-center items-center max-w-[1180px] mx-auto py-8">
        <img
          src="/images/dice.jpg"
          alt="Dice Game"
        />
        <div className="px-5">
          <h1 className="text-8xl font-bold mb-4">DICE GAME</h1>
          <button 
            onClick={toggle}
            className="py-3 px-5 bg-black text-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Firstgame;
