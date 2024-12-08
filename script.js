console.log("Welcome to Spotify");
console.log("Build By SHUBHAM MITTAL");

let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');


let songs=[
    {SongName:"It's Always Blue", filePath:"songs/1.mp3",coverPath:"Covers/1.jpg" },
    {SongName:"Trap", filePath:"songs/2.mp3",coverPath:"Covers/2.jpg" },
    {SongName:"They Mad", filePath:"songs/3.mp3",coverPath:"Covers/3.jpg" },
    {SongName:"Plug walk ", filePath:"songs/4.mp3",coverPath:"Covers/4.jpg" },
    {SongName:"Alone", filePath:"songs/5.mp3",coverPath:"Covers/5.jpg" },
    {SongName:"Safety Dance", filePath:"songs/6.mp3",coverPath:"Covers/6.jpg" },
    {SongName:"Back It Up", filePath:"songs/7.mp3",coverPath:"Covers/7.jpg" },
    {SongName:"Girl", filePath:"songs/8.mp3",coverPath:"Covers/8.jpg" },
    {SongName:"Clay orange", filePath:"songs/9.mp3",coverPath:"Covers/9.jpg" },
    {SongName:"True Love", filePath:"songs/10.mp3",coverPath:"Covers/10.jpg" }

]

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
    }

})
songitemplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    update=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogressbar.value=update;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value * audioElement.duration/100;
})
Array.from(document.getElementsByClassName('songitemplay')).forEach((element, index) => {
    element.addEventListener('click', (e) => {
        makeAllPlays(); // Reset all buttons to "play" state

        // Set the clicked button to "pause" state
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        // Load the selected song and play it
        audioElement.src = songs[index].filePath;
        audioElement.play();

        // Update the master play button and gif
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    });
});
