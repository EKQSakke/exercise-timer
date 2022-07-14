import type { NextPage } from 'next'
import { useRef, useState } from 'react'
import Timer from '../components/timer'

const Home: NextPage = () => {
  const [options, setOptions] = useState(false)
  const intervalInput = useRef<HTMLInputElement>(null)
  const [intervals, setIntervals] = useState([30, 10])
  

  function saveIntervals() {
    if (intervalInput === null) {
      toggleOptions()
      return
    }

    const split = intervalInput.current?.value.split(',')
    const newIntervals: number[] = []
    split?.forEach(e=> newIntervals.push(parseInt(e)))

    setIntervals(newIntervals)

    toggleOptions()
  }

  function toggleOptions() {
    setOptions(!options)
  }

  return (
    <div>
      <button
        className="w-8 h-8 m-8 bg-slate-300 float-right"
        onClick={toggleOptions}
      >
        O
      </button>
      {options && (
        <div className="bg-black bg-opacity-50 absolute w-screen h-screen">
          <div className="flex flex-col h-full w-full items-center justify-center">
            <div className="bg-slate-200 w-fit h-fit">
              <div>Set Intervals</div>
              <input ref={intervalInput} />
              <button onClick={saveIntervals}>Save</button>
            </div>
          </div>
        </div>
      )}
      <Timer maxTimes={intervals} />
    </div>
  )
}

export default Home
