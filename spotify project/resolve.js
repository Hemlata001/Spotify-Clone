// code by chatgpt

/*console.log("Let's write javascript");/
async function getSongs(songs){
    currFolder = songs;
    let a = await fetch(`/songs/`)
    let response= await a.text();
    // console.log(response)
    let div = document.createElement("div")
    div.innerHTML=response;
    let as=div.getElementsByTagName("a")
    songs=[]
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split(`/songs/`)[1])
        } 
    }
    return songs;
} catch (error) {
    console.error("Error fetching songs:", error);
    return [];
}


--------------------------------------------
async function getSongs(){
    try {
        let response = await fetch("http://127.0.0.1:3000/video/video84/songs/");
        let text = await response.text();
        let div = document.createElement("div");
        div.innerHTML = text;
        let as = div.getElementsByTagName("a");
        let songs = [];
        for (let index = 0; index < as.length; index++) {
            const element = as[index];
            if (element.href.endsWith(".mp3")) {
                songs.push(element.href.split("/songs/")[1]);
            }
        }
       

const playMusic = (track) => {
    let filePath = '/songs/' + track;
    console.log("Playing:", filePath); // Debugging line
    let audio = new Audio(filePath);
    audio.play()
        .catch(error => console.error("Audio playback error:", error));
}

async function main() {
    try {
        // Get the list of all the songs
        let songs = await getSongs();
        
        // Show all songs in playlist
        let songUL = document.querySelector(".songList ul");
        if (!songUL) {
            console.error("Song list element not found");
            return;
        }

        for (const song of songs) {
            songUL.innerHTML += `
                <li>
                    <img class="invert" width="34" src="img/music.svg" alt="">
                    <div class="info">
                        <div>${song.replaceAll("%20", " ")}</div>
                        <div>Harry</div>
                    </div>
                    <div class="playnow">
                        <span>Play Now</span>
                        <img class="invert" src="img/play.svg" alt="">
                    </div>
                </li>`;
        }

        // Attach event listener to each song
        Array.from(document.querySelectorAll(".songList li")).forEach(e => {
            e.addEventListener("click", element => {
                let songName = e.querySelector(".info").firstElementChild.innerHTML.trim();
                console.log("Selected song:", songName); // Debugging line
                playMusic(songName);
            });
        });
    } catch (error) {
        console.error("Error in main function:", error);
    }
}

main();*/
