function TimerControls(props: {
  togglePlayFunc: Function
  toggleAudio: Function
  isPlaying: boolean
  audioOn: boolean
}) {
  const okColor = 'bg-green-500'
  const noColor = 'bg-red-500'

  const playColor = props.isPlaying ? okColor : noColor
  const muteColor = props.audioOn ? okColor : noColor

  return (
    <div className="p-2 flex flex-row bg-slate-400 h-16 justify-center gap-12">
      <button
        className={`w-12  text-4xl ${playColor}`}
        onClick={props.togglePlayFunc()}
      >
        II
      </button>
      <button
        className={`w-12  text-4xl ${muteColor}`}
        onClick={props.toggleAudio()}
      >
        M
      </button>
    </div>
  )
}

export default TimerControls
