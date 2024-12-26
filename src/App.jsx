import React, { useState } from 'react'
import StartQuiz from './Components/StartQuiz'
import PlayQuiz from './Components/PlayQuiz';

const App = () => {
  const[toogle, setToogle] = useState(false);

  const handleToogle = () => {
    setToogle((prevMode) => !prevMode);
  }
  return (
    <div>
      {
        toogle ? <PlayQuiz/>: <StartQuiz toogleMode = {handleToogle}/>
      }
    </div>
  )
}

export default App