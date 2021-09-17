const music = document.getElementById("play")
const playSound = document.querySelector(".audio")
const image = document.querySelector(".image")
const title = document.querySelector(".title")
const artist = document.querySelector(".artist")
const next=document.getElementById("next")
const prev=document.getElementById("prev")

const song = [{
        names:"songOne",
        title: "Brown Munde",
        artist: "AP Dhilon"
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

const playMusic=()=> {
    playing = true
    playSound.play()

    image.classList.add("animation")

    music.classList.replace("fa-play", "fa-pause")

}

const pauseMusic=()=> {
    playing = false
    playSound.pause()
    image.classList.remove("animation")
    music.classList.replace("fa-pause", "fa-play")
}


music.addEventListener("click", () => {

    playing?pauseMusic():playMusic();
    
})


const loadSong=(song)=> {
 
    title.textContent=song.title;
    artist.textContent=song.artist;
    playSound.src="music/"+song.names+".mp3"
    image.src="images/"+song.names+".jpg"

    
}

let songsIndex=0
console.log(songsIndex)
const nextSong =()=>{
    songsIndex=(songsIndex+1)%song.length
    loadSong(song[songsIndex])
    if(playing){
        playMusic()
    }else{
        pauseMusic()
    }
    

}

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
