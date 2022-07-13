import { useEffect, useState } from 'react'
import useSound from 'use-sound'


function Timer(props: { maxTime: number }) {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1)
      if (seconds >= props.maxTime) {
        resetTimer()
      }
    }, 1000)

    return () => clearInterval(interval)
  })

  function resetTimer() {
    setSeconds(0)
    document.getElementsByTagName('audio')[0].play()
  }

  var percentage = Math.floor((seconds / props.maxTime) * 100) + '%'
  console.log(percentage)

  var timeLeft = props.maxTime - seconds

  return (
    <div className="bg-slate-800 w-screen h-screen">
      <audio controls src='/assets/pickupCoin.wav' className='hidden'></audio>
      <div className="px-32 py-64 h-fit">
        <div className="bg-slate-300 w-full h-full">
          <div className="text-9xl text-center">{timeLeft}</div>
          <div className="bg-white h-8">
            <div
              className="bg-green-600 h-8"
              style={{ width: percentage, maxWidth: '100%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Timer
