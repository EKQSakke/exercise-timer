import { useEffect, useState } from 'react'
import TimerControls from './timerControls'

function Timer(props: { maxTimes: number[] }) {
  const [counter, setCounter] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [playing, setPlay] = useState(false)
  const [audio, setAudio] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      if (playing) {
        setSeconds(seconds + 1)
      }
      if (seconds >= props.maxTimes[counter]) {
        nextTimerInterval()
      }
    }, 1000)

    return () => clearInterval(interval)
  })

  function nextTimerInterval() {
    setSeconds(0)
    if (counter + 1 === props.maxTimes.length) {
      setCounter(0)
    } else {
      setCounter(counter + 1)
    }
    if (audio) {
      document.getElementsByTagName('audio')[0].play()
    }
  }

  function togglePlay() {
    setPlay(!playing)
  }

  function toggleAudio() {
    setAudio(!audio)
  }

  var percentage = Math.floor((seconds / props.maxTimes[counter]) * 100) + '%'

  var timeLeft = props.maxTimes[counter] - seconds

  return (
    <div className="bg-slate-800 w-screen h-screen">
      <audio controls src="/assets/pickupCoin.wav" className="hidden"></audio>
      <div className="px-32 py-64 h-fit">
        <div className="bg-slate-300 w-full h-full">
          <div className="text-9xl text-center">{timeLeft}</div>
          <div className="bg-white h-8">
            <div
              className="bg-green-600 h-8"
              style={{ width: percentage, maxWidth: '100%' }}
            ></div>
          </div>
          <TimerControls
            togglePlayFunc={() => togglePlay}
            toggleAudio={() => toggleAudio}
            isPlaying={playing}
            audioOn={audio}
          />
        </div>
      </div>
    </div>
  )
}

export default Timer
