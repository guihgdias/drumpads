document.body.addEventListener('keyup', (event) => {
   playSound(event.code.toLowerCase())
})

document.querySelector('#play').addEventListener('click', () => {
   let song = document.querySelector('#tablature').value

   if(song !== '') {
      let tabArray = song.split('')
      playTablature(tabArray)
   }
})

let playSound = (sound) => {
   let audioElement = document.querySelector(`#s-${sound}`)
   let keyElement = document.querySelector(`div[data-key="${sound}"]`)
   
   if(audioElement) {
      audioElement.currentTime = 0
      audioElement.play();
   }

   if(keyElement) {
      keyElement.classList.add('active')
      setTimeout(() => {
         keyElement.classList.remove('active')
      }, 100)
   }
}

let playTablature = (tablature) => {
   let delay = document.querySelector('#delay').value
   let time = 0

   for(let tabKey of tablature) {
      setTimeout(() => {
         playSound(`numpad${tabKey}`)
      }, time)
      time += parseInt(delay)
   }
}