import React from "react";

const QuestionDisplay = (props) => {
  const { question, options, id , handleSelect} = props;
  return (
    <div>
      <h1 className="text-[1.3rem] font-[800] mt-[1rem]">{`${id}.  ${question}`}</h1>
      <div className="flex flex-col mt-[1rem] ">
        {options &&
          options.map((curOption, index) => {
            return (
              <label className="flex gap-[6px]" key={index}>
                <input type="radio" name="quiz-option" value={curOption} 
                 onClick={() => handleSelect(curOption)}/>
                {curOption}
              </label>
            );
          })}
      </div>
    </div>
  );
};

export default QuestionDisplay;
