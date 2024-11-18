import { useState } from "react";
import Totalscore from "./Totalscore";
import Numberselector from "./Numberselector";
import Rolldice from "./Rolldice";

const Playgame = () => {
  const [score, setscore] = useState(0);
  const [selectnumber, setselectnumber] = useState(null);
  const [dicenumber, setdicenumber] = useState(1);
  const [error, seterror] = useState("");
  const [showrules, setshowrules] = useState(false); // Track visibility of rules

  // Function to generate a random number between min (inclusive) and max (exclusive)
  const Randomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  // Function to handle dice roll and update the score
  const rolldice = () => {
    if (!selectnumber) {
      seterror("You haven't selected any number");
      return;
    }

    seterror("");
    const random = Randomnumber(1, 7); // Generate a dice roll (1 to 6)
    setdicenumber(random); // Update dice number state

    // Check if selected number matches rolled dice number
    if (selectnumber === random) {
      setscore((prev) => prev + random); // Increase score
    } else {
      setscore((prev) => prev - 1); // Decrease score
    }
  };

  const resetscore = () => {
    setscore(0);
  };

  return (
    <div className="max-w-[1280px] mx-auto p-4">
      <div className="flex justify-between">
        {/* Display Total Score */}
        <Totalscore score={score} />

        {/* Number Selector */}
        <Numberselector
          error={error}
          selectnumber={selectnumber}
          setselectnumber={setselectnumber}
        />
      </div>

      {/* Roll Dice */}
      <Rolldice dicenumber={dicenumber} rolldice={rolldice} />

      <div className="flex flex-col items-center gap-3 p-3 max-w-sm mx-auto">
        <button
          onClick={resetscore}
          className="w-full p-2 max-w-xs bg-black text-white rounded-lg hover:bg-white hover:text-black outline transition duration-300"
        >
          RESET SCORE
        </button>
        <button
          onClick={() => setshowrules(!showrules)} // Toggle rules visibility
          className="w-full p-2 max-w-xs bg-black text-white rounded-lg hover:bg-white hover:text-black outline transition duration-300"
        >
          {showrules ? "HIDE RULES" : "SHOW RULES"} {/* Change button text */}
        </button>
      </div>

      {/* Conditionally Render Rules */}
      {showrules && (
        <div className="mt-5 p-4 border rounded-lg bg-gray-100">
          <h2 className="text-lg font-bold mb-2">How to Play the Game</h2>
          <div className="text-sm">
            <p>1. Select any number</p>
            <p>2. Click on the dice image</p>
            <p>
              3. After clicking the dice, if the selected number equals the dice
              number, you earn points equal to the dice.
            </p>
            <p>4. If no number is selected, an error will occur.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Playgame;
