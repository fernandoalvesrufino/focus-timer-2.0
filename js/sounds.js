export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
  const forestAudio = new Audio('./assets/forestAudio.wav')
  const rainAudio = new Audio('./assets/rainAudio.wav')
  const coffeeAudio = new Audio('./assets/coffeeAudio.wav')
  const fireplaceAudio = new Audio('./assets/fireplaceAudio.wav')

  bgAudio.loop = true
  forestAudio.loop = true
  rainAudio.loop = true
  coffeeAudio.loop = true
  fireplaceAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function resetSounds() {
    forestAudio.pause()
    rainAudio.pause()
    coffeeAudio.pause()
    fireplaceAudio.pause()
  }


  return {
    pressButton,
    timeEnd,
    resetSounds,
    bgAudio,
    forestAudio,
    rainAudio,
    coffeeAudio,
    fireplaceAudio
  }
}