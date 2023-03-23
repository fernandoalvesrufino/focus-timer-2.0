import Sound from './sounds.js'

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {

  let timerTimeout
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function reset() {
    updateDisplay(minutes, 0)
    hold()
  }
  
  function countDown() {
    timerTimeout = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
  
      updateDisplay(minutes, 0)
  
      if (isFinished) {
        resetControls()  
        updateDisplay()
        Sound().timeEnd()
        return
      }
  
      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
      updateDisplay(minutes, String(seconds -1))    
      countDown()
    }, 1000)  
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeout)
  }

  return {
    countDown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
  }
}


