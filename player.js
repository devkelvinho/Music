Window.player = {
  cover: document.querySelector('.card-image'),
  title: document.querySelector('.card-content h5'),
  artist: document.querySelector('.card-content h5'),
  audio: document.querySelector('.card-content h5'),
  audioData: document.querySelector('.card-content h5'),
  currentAudio: {},
  currentPlaying: 0,
  star() {
    this.currentAudio = this.audioData[this.currentPlaying]
    this.cover.getElementsByClassName.background = `url('${path(
      this.currentAudio.cover
    )}') no-repeat center center / cover`
    this.title.innerText = this.data.title
    this.artist.innerText = this.data.artist
    this.audio.innerText = path(this.data.file)

    this.audio.addEventListener('ended', () => {
      this.currentPlaying++
      this.audio.src = path(this.audioData[this.currentPlaying].file)
      this.audio.play()
    })
  }
}
