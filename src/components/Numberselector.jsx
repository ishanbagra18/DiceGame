const Numberselector = ({error, selectnumber, setselectnumber }) => {
    const arraynumber = [1, 2, 3, 4, 5, 6];
  
    const handleClick = (value) => {
      setselectnumber(value);
    };
  
    return (
      <div className="flex flex-col items-start p-4">
        <p className="text-red-600	">{error}</p>
        <p className="text-lg mb-4 font-bold">Select the number</p>
        <div className="flex justify-end w-full">
          <div className="flex gap-4 flex-wrap">
            {arraynumber.map((value, i) => (
              <div
                onClick={() => handleClick(value)}
                key={i}
                className={`flex justify-center items-center w-12 h-12 border rounded text-xl font-bold cursor-pointer ${
                  selectnumber === value ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Numberselector;
  