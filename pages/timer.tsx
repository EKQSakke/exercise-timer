import { useEffect, useState } from 'react'

function Timer(props: { maxTime: number }) {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1)
      if (seconds >= props.maxTime) {
        setSeconds(0)
      }
    }, 1000)

    return () => clearInterval(interval)
  })

  var percentage = Math.floor((seconds / props.maxTime) * 100) + '%'
  console.log(percentage)

  var timeLeft = props.maxTime - seconds

  return (
    <div className="bg-slate-800 w-screen h-screen">
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
