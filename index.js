const music = document.getElementById("play")
const playSound = document.querySelector(".audio")
const image = document.querySelector(".image")
const title = document.querySelector(".title")
const artist = document.querySelector(".artist")
const next = document.getElementById("next")
const prev = document.getElementById("prev")

const durtn = document.getElementById("duration")
const crntTime = document.getElementById("current-time")
const prgrs = document.querySelector(".progress")
const prgrsClick = document.querySelector(".prog-div")


const song = [

    {
        names: "songOne",
        title: "Khas",
        artist: "Dino James"
    },
    {
        names: "songTwo",
        title: "Let's crack it",
        artist: "Naezy"
    },
    {
        names: "songThree",
        title: "Unstoppable",
        artist: "Dino James"

    }
]

let playing = false
// function to play
// as initially we gave for playing false it will play on click
const playMusic = () => {
    // making playing true so on other click we can go to pause function
    playing = true
    playSound.play()
    // to the image class adding animation class name so in css we defined
    // animation class to rotate can be applied
    image.classList.add("animation")
    //change icon from play to pause using class names
    music.classList.replace("fa-play", "fa-pause")
    loops=false

}

// function to pause
const pauseMusic = () => {
    // we make playing false so on next click play function can be called 
    playing = false
    playSound.pause()

    image.classList.remove("animation")
    music.classList.replace("fa-pause", "fa-play")
}


music.addEventListener("click", () => {
    // if playing is true call pauseMusic function else call playMusic if false
    playing ? pauseMusic() : playMusic();

})

// to change song 
const loadSong = (song) => {

    title.textContent = song.title;
    artist.textContent = song.artist;
    playSound.src = "music/" + song.names + ".mp3"
    image.src = "images/" + song.names + ".jpg"


}
// for count
let songsIndex = 0
// functin for next song
const nextSong = () => {
    songsIndex = (songsIndex + 1) % song.length
    loadSong(song[songsIndex])
    if (playing) {
        playMusic()
    } else {
        pauseMusic()
    }


}
// function for previous song
const prevSong = () => {

    songsIndex = (songsIndex - 1 + song.length) % song.length;
    loadSong(song[songsIndex])
    if (playing) {
        playMusic()
    } else {
        pauseMusic()
    }

}

// progress bar
playSound.addEventListener("timeupdate", (e) => {
    // const {currentTime,duration}=e.target or below is seperately defining
    const currentTime = Math.floor(e.target.currentTime)

    const duration = e.target.duration;
    const progressShow = currentTime / duration * 100
    prgrs.style.width = `${progressShow}%`;
    const min = Math.floor(duration / 60);
    const sec = Math.floor(duration % 60)

    if (duration) {

        durtn.textContent = `${min}:${sec}`;
     }
    else{
        durtn.textContent=`${0}:${0}${0}`
    }

    //    current time update

    let minCur = Math.floor(currentTime / 60);
    let secCur = Math.floor(currentTime % 60)
    if (secCur < 10) {
        secCur = `0${secCur}`
    }
    if (duration) {
        crntTime.textContent = `${minCur}:${secCur}`;
    }
})


prgrsClick.addEventListener("click", (e) => {
    const {duration} = playSound

    let curClickWidth = e.offsetX
    let totalWidth
    if (e.target.parentElement.clientWidth <= 500) {
        totalWidth = e.target.parentElement.clientWidth
    } else if (e.target.parentElement.clientWidth > 500) {
        totalWidth = e.target.clientWidth
    }

    let currentWidth = curClickWidth / totalWidth * duration

    playSound.currentTime = currentWidth

})

playSound.addEventListener("ended", nextSong)
next.addEventListener("click", nextSong)
prev.addEventListener("click", prevSong)


