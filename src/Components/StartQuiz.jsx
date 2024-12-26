import React from "react";

const StartQuiz = ({ toogleMode }) => {
  return (
    <div className="h-[100vh] bg-slate-300  md:pt-[1rem]">
      <p className="text-[3rem] font-[800] tracking-[3px] text-center">
        IT Quiz Question
      </p>
      <p className="text-[1.1rem] text-center font-[600]">
        "Learn on Funniest Ways"
      </p>
      <div className="md:flex items-start md:justify-between pt-[1rem]">
        <section>
          <img src="quiz11.png" alt="Error" />
        </section>
        <button
          className="px-4 py-1 ml-[8.5rem] md:ml-[0px] md:mt-[12rem] rounded-[10px] bg-yellow-400
         text-[1.2rem] font-[700] hover:bg-black hover:text-yellow-400
        hover:scale-110 duration-200 ease-out-in"
          onClick={toogleMode}
        >
          Start Now
        </button>
        <section className="">
          <img src="quiz11.png" alt="Error" />
        </section>
      </div>
    </div>
  );
};

export default StartQuiz;
