const Rolldice = ({ dicenumber, rolldice }) => {
    return (
      <div className="flex flex-col items-center justify-center">
        <div onClick={rolldice} className="flex items-center justify-center cursor-pointer">
          <img src={`/images/alldices/${dicenumber}.png`} alt={`Dice showing ${dicenumber}`} />
        </div>
        <p className="mt-4 text-2xl font-semibold">Click on the dice to roll</p>
      </div>
    );
  };
  
  export default Rolldice;
  