const music = document.getElementById("play")
const playSound = document.querySelector(".audio")
const image = document.querySelector(".image")
const title = document.querySelector(".title")
const artist = document.querySelector(".artist")
const next=document.getElementById("next")
const prev=document.getElementById("prev")

const song = [
  
    {
        names:"songOne",
        title: "Khas",
        artist: "Dino James"
    },
    {
        names:"songTwo",
        title: "Let's crack it",
        artist: "Naezy"
    },
    {
        names:"songThree",
        title: "Unstoppable",
        artist: "Dino James"

    }
]

let playing = false
// function to play
// as initially we gave for playing false it will play on click
const playMusic=()=> {
    // making playing true so on other click we can go to pause function
    playing = true
    playSound.play()
    // to the image class adding animation class name so in css we defined
    // animation class to rotate can be applied
    image.classList.add("animation")
    //change icon from play to pause using class names
    music.classList.replace("fa-play", "fa-pause")

}

// function to pause
const pauseMusic=()=> {
    // we make playing false so on next click play function can be called 
    playing = false
    playSound.pause()
    
    image.classList.remove("animation")
    music.classList.replace("fa-pause", "fa-play")
}


music.addEventListener("click", () => {
// if playing is true call pauseMusic function else call playMusic if false
    playing?pauseMusic():playMusic();
    
})

// to change song 
const loadSong=(song)=> {
 
    title.textContent=song.title;
    artist.textContent=song.artist;
    playSound.src="music/"+song.names+".mp3"
    image.src="images/"+song.names+".jpg"

    
}
// for count
let songsIndex=0
// functin for next song
const nextSong =()=>{
    songsIndex=(songsIndex+1)%song.length
    loadSong(song[songsIndex])
    if(playing){
        playMusic()
    }else{
        pauseMusic()
    }
    

}
// function for previous song
const prevSong=()=>{
  
   songsIndex=(songsIndex-1+song.length)%song.length;
    loadSong(song[songsIndex])
    if(playing){
        playMusic()
    }else{
        pauseMusic()
    }

}

next.addEventListener("click",nextSong)
prev.addEventListener("click",prevSong)
