import React from 'react'

const SetScore = ({score, clearScore}) => {
   
  return (
    <div className=' h-[12rem] md:h-[16rem] mt-[1rem] border-2 border-white md:mt-[5rem] rounded-md
      shadow-md flex flex-col ml-[4rem] items-center justify-start md:pt-[2rem] 
      w-[15rem]'>
      <h1 className='text-[1.4rem] font-[600]'>Your Score:</h1>
      <p className='text-[4rem] md:text-[6rem] font-[700]'>{score}</p>
      <button className='px-3 py-1 text-[1.2rem] bg-pink-400 rounded-md 
        hover:bg-black font-[700] hover:text-pink-300'
        onClick={clearScore}>
        Clear Score
      </button>
    </div>
  )
}

export default SetScore