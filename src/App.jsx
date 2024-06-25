import { useState } from 'react';
import './App.css';
import musicAudio from '../src/audios/auifdinnsvsjx6lujw8b.mp3';

const audio = new Audio(musicAudio)

function App() {

  const [count, setCount] = useState(0)

const increment = () => {

  if(count < 100){
    setCount(count + 1)
  }
}

if(count === 33 || count === 66 || count === 99){
  audio.play();
}
console.log(count)
if(count === 34 || count === 67|| count === 100){
  audio.pause();
}

setInterval(() =>{
  if(count === 99){
    setCount(0)
    audio.pause();
  }
}, 1000);

const Clear = () => {
  setCount(0)
}

  return(
    <>
      <div className='clock'>
        <h1 className='text'>{count}</h1>
        <button className='btn' onClick={increment}>Start counting 📿</button>
        <button className='btn' onClick={Clear}>Clear</button>
      </div>
    </>
  )
}

export default App