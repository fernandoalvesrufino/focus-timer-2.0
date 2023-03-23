export default function Controls({
  buttonPlay,
  buttonPause,
  minutesDisplay,
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function pause() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function sumMinutes() {
    let newMinutes = Number(minutesDisplay.textContent) + 5

    return newMinutes
  }

  function subtractMinutes() {
    let newMinutes = Number(minutesDisplay.textContent) - 5

    if (newMinutes < 0) {
      newMinutes = 0
    }

    return newMinutes
  }

  return {
    reset,
    play,
    pause,
    sumMinutes,
    subtractMinutes,
  } 
}
