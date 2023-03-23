import {
  buttonPlay, 
  buttonPause, 
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffee,
  buttonSoundFireplace,
  buttonLightMode,
  buttonDarkMode,
  forestVolumeSlider,
  rainVolumeSlider,
  coffeeVolumeSlider,
  fireplaceVolumeSlider,
  volumeSlider,
} from './elements.js'

export default function Events({
  controls,
  timer,
  sound
}) {

  function removeSelection() {
    buttonSoundForest.classList.remove('select')
    buttonSoundRain.classList.remove('select')
    buttonSoundCoffee.classList.remove('select')
    buttonSoundFireplace.classList.remove('select')
    
  }
  
  function addSelection(card) {
    removeSelection()
    
    card.classList.add('select')
  }
  
  function changeView() {
    buttonLightMode.classList.toggle('hide')
    buttonDarkMode.classList.toggle('hide')
    document.querySelector('html').classList.toggle('light')
  }

  function changeVolume(audio, valueSlider) {
    audio.volume = valueSlider.value;
  }

  function turnOnVolume(audio, valueSlider) {
    valueSlider.value = 0.5
    audio.volume = valueSlider.value
  }

  function turnOffVolume(audio, valueSlider) {
    valueSlider.value = 0
    audio.volume = valueSlider.value
  }


  buttonPlay.addEventListener('click', () => {
    controls.play()  
    timer.countDown()  
    sound.pressButton()
  })
  
  buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })
  
  buttonStop.addEventListener('click', () => {
    controls.reset()   
    timer.reset()
    sound.pressButton()
  })
  
  buttonPlus.addEventListener('click', () => {
    let newMinutes = controls.sumMinutes()
    
    sound.pressButton()
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
  
  buttonMinus.addEventListener('click', () => {
    let newMinutes = controls.subtractMinutes()
    
    sound.pressButton()
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })


  buttonSoundForest.addEventListener('click', () => {
    sound.resetSounds()
    turnOffVolume(sound.forestAudio, forestVolumeSlider)
    if (!buttonSoundForest.classList.contains('select')) {
      addSelection(buttonSoundForest)
      turnOnVolume(sound.forestAudio, forestVolumeSlider)
      sound.forestAudio.play()
      return
    }
    removeSelection()
    
  })
  
  buttonSoundRain.addEventListener('click', () => {
    sound.resetSounds()
    turnOffVolume(sound.rainAudio, rainVolumeSlider)
    if (!buttonSoundRain.classList.contains('select')) {
      addSelection(buttonSoundRain)
      turnOnVolume(sound.rainAudio, rainVolumeSlider)
      sound.rainAudio.play()
      return
    }
    removeSelection()
  })
  
  buttonSoundCoffee.addEventListener('click', () => {
    sound.resetSounds()
    turnOffVolume(sound.coffeeAudio, coffeeVolumeSlider)
    if (!buttonSoundCoffee.classList.contains('select')) {
      addSelection(buttonSoundCoffee)
      turnOnVolume(sound.coffeeAudio, coffeeVolumeSlider)
      sound.coffeeAudio.play()
      return
    }
    removeSelection()
  })
  
  buttonSoundFireplace.addEventListener('click', () => {
    sound.resetSounds()
    turnOffVolume(sound.fireplaceAudio, fireplaceVolumeSlider)
    if (!buttonSoundFireplace.classList.contains('select')) {
      addSelection(buttonSoundFireplace)
      turnOnVolume(sound.fireplaceAudio, fireplaceVolumeSlider)
      sound.fireplaceAudio.play()
      return
    }
    removeSelection()
  })

  buttonLightMode.addEventListener('click', () => {
    changeView()
  })
  
  buttonDarkMode.addEventListener('click', () => {
    changeView()
  })

  forestVolumeSlider.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  rainVolumeSlider.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  coffeeVolumeSlider.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  fireplaceVolumeSlider.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  
  forestVolumeSlider.addEventListener('change', () => {
    changeVolume(sound.forestAudio, forestVolumeSlider)
  })

  rainVolumeSlider.addEventListener('change', () => {
    changeVolume(sound.rainAudio, rainVolumeSlider)
  })

  coffeeVolumeSlider.addEventListener('change', () => {
    changeVolume(sound.coffeeAudio, coffeeVolumeSlider)
  })

  fireplaceVolumeSlider.addEventListener('change', () => {
    changeVolume(sound.fireplaceAudio, fireplaceVolumeSlider)
  })
}
