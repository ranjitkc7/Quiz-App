import React, { useState } from "react";
import QuestionDisplay from "./QuestionDisplay";
import SetScore from "./SetScore";

const PlayQuiz = () => {
  const questionBank = [
    {
      id: 1,
      question: "What is the full form of G-mail?",
      options: ["Go-mail", "Giga-mail", "Google-mail", "No of above"],
      answer: "Google-mail",
    },
    {
      id: 2,
      question: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "Hyperlink and Text Markup Language",
        "Home Tool Markup Language",
        "None of the above",
      ],
      answer: "HyperText Markup Language",
    },
    {
      id: 3,
      question: "What is the full form of CSS?",
      options: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Computer Styling Syntax",
        "None of the above",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      id: 4,
      question:
        "Which programming language is primarily used for iOS development?",
      options: ["Swift", "Java", "Python", "Kotlin"],
      answer: "Swift",
    },
    {
      id: 5,
      question: "What is the primary purpose of DNS?",
      options: [
        "To translate domain names to IP addresses",
        "To provide email services",
        "To secure websites",
        "None of the above",
      ],
      answer: "To translate domain names to IP addresses",
    },
    {
      id: 6,
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Sequential Query Language",
        "Server Query Language",
        "Secure Query Language",
      ],
      answer: "Structured Query Language",
    },
    {
      id: 7,
      question: "Which company developed the Java programming language?",
      options: ["Microsoft", "Sun Microsystems", "Google", "IBM"],
      answer: "Sun Microsystems",
    },
    {
      id: 8,
      question: "Which HTTP status code represents 'Not Found'?",
      options: ["200", "301", "404", "500"],
      answer: "404",
    },
    {
      id: 9,
      question: "What is the full form of IP in networking?",
      options: [
        "Internet Protocol",
        "Internal Protocol",
        "Interconnected Protocol",
        "Integrated Protocol",
      ],
      answer: "Internet Protocol",
    },
    {
      id: 10,
      question: "Which symbol is used to reference an ID in CSS?",
      options: ["#", ".", "*", "&"],
      answer: "#",
    },
    {
      id: 11,
      question: "Which of the following is not a programming language?",
      options: ["Python", "JavaScript", "HTML", "Java"],
      answer: "HTML",
    },
    {
      id: 12,
      question: "Which company created the Windows operating system?",
      options: ["Apple", "Microsoft", "Google", "IBM"],
      answer: "Microsoft",
    },
    {
      id: 13,
      question:
        "Which version control system is widely used in software development?",
      options: ["Git", "SVN", "Mercurial", "All of the above"],
      answer: "All of the above",
    },
    {
      id: 14,
      question: "What does RAM stand for?",
      options: [
        "Random Access Memory",
        "Read Access Memory",
        "Run Active Memory",
        "None of the above",
      ],
      answer: "Random Access Memory",
    },
    {
      id: 15,
      question: "What is the correct syntax for a JavaScript function?",
      options: [
        "function myFunction()",
        "func myFunction()",
        "def myFunction()",
        "None of the above",
      ],
      answer: "function myFunction()",
    },
    {
      id: 16,
      question: "Which HTML element is used for the largest heading?",
      options: ["<h1>", "<h2>", "<h3>", "<h4>"],
      answer: "<h1>",
    },
  ];
  const [curIndex, setCurIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [curAns, setCurAns] = useState(null);

  const handleNext = () => {
    if(curAns === questionBank[curIndex].answer){
      setScore(score + 5);
    }else{
      alert("Answer is Incorrect.")
    }

    if (curIndex < questionBank.length - 1) {
      setCurIndex(curIndex + 1);
      setCurAns(" ");
    } else {
      alert("You have completed the quiz!");
    }
  };
  const handleSelect = (selectAnswer) => {
   setCurAns(selectAnswer)
  }
  const clearScore = () => {
    setScore(0);
   }
  
  return (
    <div
      className="h-[100vh] bg-slate-300 md:pt-[1rem] md:flex md:px-[17rem] 
      md:justify-between"
    >
      <section className=" flex flex-col gap-[1rem] items-center justify-start">
        <h1 className=" text-3xl p-[12px]">Learn and Play With Fun</h1>
        <div className=" h-[18rem] relative pl-[12px] flex flex-col  
        gap-[1rem] w-[21rem] md:w-[30rem] text-white bg-blue-400 rounded-md 
        border-2 border-white shadow-md">
          <div className="flex flex-col gap-[1rem] text-[1.2rem]">
            <QuestionDisplay {...questionBank[curIndex]} 
            curAns = {curAns}
             handleSelect = {handleSelect}
            />
          </div>
          <button
            className="px-4 py-1 w-fit rounded-[10px] bg-yellow-400 absolute bottom-[1rem]
           right-[1rem] text-[black] text-[1.2rem] font-[700] hover:bg-black hover:text-yellow-400
         "
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </section>
      <section>
         <SetScore score = {score} clearScore={clearScore}/>
      </section>
    </div>
  );
};

export default PlayQuiz;
