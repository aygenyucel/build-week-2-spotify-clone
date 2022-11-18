//when click on follow button, it will toggle background-color
const followButton = document.querySelector(".follow-button");
followButton.addEventListener("click", () => {
  followButton.classList.toggle("make-it-green");
});

//when cclick on navbar header left arrow, you go back to home page
function goBackToHomePage() {
  const goBackButton = document.querySelector(
    ".right-container ul li:first-child a"
  );
  goBackButton.addEventListener("click", () => {
    goBackButton.href = "./homePage.html";
  });
}

//creates the ol list from "Popular" section with all li-s and the see more button
function createOlList() {
  createOl();
  createSequenceOfFiveSongs();
}

//creates an empty ol list and attaches it the container
function createOl() {
  const placeToAppend = document.querySelectorAll(".music-container .row")[1];
  const placeToAppendOl = placeToAppend.querySelector("div:first-child");
  placeToAppendOl.innerHTML += `<ol class="list-styling"></ol>`;

  createSeeMoreButton(placeToAppendOl);
}

//creates the "See more/Show less button" and appends it to the ol
function createSeeMoreButton(ol) {
  const seeMoreButton = document.createElement("button");
  seeMoreButton.innerText = "SEE MORE";
  seeMoreButton.addEventListener("click", () => {
    if (seeMoreButton.innerText === "SEE MORE") {
      seeMoreButton.innerText = "SHOW LESS";
    } else {
      seeMoreButton.innerText = "SEE MORE";
    }
    seeMore(); //displays 5 more songs on click and if you click again, they are displayed-none again
  });
  seeMoreButton.classList = "btn";
  seeMoreButton.setAttribute("type", "button");
  seeMoreButton.classList.add("seeMoreButton");
  seeMoreButton.classList.add("text-light");
  seeMoreButton.classList.add("mt-3");
  ol.appendChild(seeMoreButton);
}

//creates a sequence of 10 songs for the Popular section
//the first 5 are displayed
//the last 5 are not displayed, but they will be when click on "Show more" button
function createSequenceOfFiveSongs() {
  const ol = document.querySelector(".music-container ol");
  for (let i = 0; i < 10; i++) {
    createLiContent(ol);
  }
  const liList = ol.querySelectorAll("li");

  for (let i = 5; i < liList.length; i++) {
    const currentLi = liList[i];
    currentLi.classList.add("d-none");
  }
}

//if the last five songs are not displayed, they will be displayed
//if the five songs are displayed they will be not displayed
//we use this function on "createSeeMoreButton" function
//so we will toggle the display property on click
function seeMore() {
  const ol = document.querySelector(".music-container ol");
  const liList = ol.querySelectorAll("li");

  for (let i = 5; i < liList.length; i++) {
    const currentLi = liList[i];
    currentLi.classList.toggle("d-none");
  }
}

//creates an li element and appends it to the ol
function createLiContent(ol) {
  const li = document.createElement("li");
  li.innerHTML = `<div class="d-flex justify-content-between align-items-center mb-2">
                    <div class="d-flex align-items-center liSongAndImageContainer ">
                      <div class="ml-3 song-image-li-item d-flex align-items-center justify-content-center">
                      <img src="https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/270x250-000000-80-0-0.jpg" alt=""/>
                      </div>
                    <div class="ml-3 song-name">Song name</div>
                  </div>
                  <span class="rank d-none d-lg-block">1.0438432.322</span>
                  <span class="duration d-none d-sm-block">3:32</span>
                  </div>`;
  ol.appendChild(li);

  let index = 0;
  const songNamesList = document.querySelectorAll(".song-name");
  for (let i = 0; i < songNamesList.length; i++) {
    let clicked = 0;

    songNamesList[i].addEventListener("click", () => {
      if (index != 0) {
        songNamesList[i].style.color = "#1fb750";
        songNamesList[index - 1].style.color = "white";
      } else {
        songNamesList[i].style.color = "#1fb750";
      }
      index = i + 1;
      clicked = 1;
    });
  }
}

//creates card and appends it to the "Popular releases container"
function createCardPopularReleases() {
  let container = document.querySelector("#popular-releases");
  let whereToAppend = container.querySelector("div.row");
  whereToAppend.innerHTML += `
  <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 mx-md-auto">
          <div class="card container song-card-vertical">
          <div class="relative-position">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Shawn_Mendes_and_Camila_Cabello_-_Se%C3%B1orita.png"
              class="card-img-top mt-3 song-card-vertical-img song-img"
              alt="..."
            />
            <div><i class="bi bi-play-circle-fill play-button-on-card"></i></div>
            </div>
            <div
              class="card-body text-light d-flex flex-column align-items-start"
            >
              <h5 class="card-title wirte-just-on-one-line">Song title</h5>
              <div class="card-text pt-1">
                <span class="d-flex justify-content-start">2022</span>
                <span>
                  <i class="bi bi-dot"></i>
                </span>
                <span class="album-card-body">Album</span>
              </div>
            </div>
          </div>
        </div>
  `;
}

//generates the cards on "Popular releases" section
//By calling the createCardPopularReleases function
//and adds the d-none and d-block class regarding the size of the page
function generatePopularReleasesContent() {
  for (let i = 0; i < 6; i++) createCardPopularReleases();
  const cardsList = document.querySelectorAll(
    "#popular-releases div.row > div"
  );
  for (let i = 0; i < cardsList.length; i++) {
    if (i === 0) cardsList[i].classList.add("d-block");
    else if (i === 1) {
      cardsList[i].classList.add("d-none");
      cardsList[i].classList.add("d-sm-block");
    } else if (i === 2) {
      cardsList[i].classList.add("d-none");
      cardsList[i].classList.add("d-md-block");
    } else if (i === 3) {
      cardsList[i].classList.add("d-none");
      cardsList[i].classList.add("d-lg-block");
    } else if (i === 4) {
      cardsList[i].classList.add("d-none");
      cardsList[i].classList.add("d-xl-block");
    } else if (i === 5) {
      cardsList[i].classList.add("d-none");
      cardsList[i].classList.add("d-xl-block");
    }
  }
}

//change the color of the navbar when scrolling
const navbar = document.querySelector("#navbar-container");
const rightContainer = document.querySelector(".right-container");
rightContainer.onscroll = () => {
  if (rightContainer.scrollTop > 250) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};

//get the query params from the url for displaying data on artist page
const params = new URLSearchParams(window.location.search);
const artistId = params.get("artistId");
const artistName = params.get("artistName");

const url = `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`;

//fetches the data from the url
async function fetchDataFunction() {
  //this returns a promise
  const response = await fetch(url, { method: "GET" });
  //this returns an object
  const result = await response.json();
  //with the result.data you have access to the array itself
  return result;
}

//fetches data for the artist page
async function fetchForArtistPageSongsList(url) {
  const response = await fetch(url, { method: "GET" });
  const result = await response.json();
  return result.data;
}

//generates a random number between min(included) and max (excluded)
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//puts the fetched data on the artist page
async function displayCurrentArtistDataOnPage() {
  const currentArtistResult = await fetchDataFunction();
  const jumbotronImage = currentArtistResult.picture_xl;
  const artistPickImage = currentArtistResult.picture_medium;
  const postedByImage = currentArtistResult.picture_small;
  const name = currentArtistResult.name;
  const footerImage = document.querySelector("#image-music-player");
  footerImage.style.backgroundImage = `url(${artistPickImage})`;
  const artistName = document.querySelector("h1#artist-name");
  artistName.innerText = name;
  const artistPick = document.querySelector("#artist-pick-image");
  artistPick.style.backgroundImage = `url(${artistPickImage})`;
  const postedBy = document.querySelector("#image-tag-posted-by img");
  postedBy.src = `${postedByImage}`;
  const postedByArtistName = document.querySelector("#posted-by");
  postedByArtistName.innerText = `Posted by ${name}`;
  const bestOf = document.querySelector("#best-of");
  bestOf.innerText = `${name} Best Of`;
  const jumbotron = document.querySelector("#jumbotron-container");
  jumbotron.style.backgroundImage = `url(${jumbotronImage})`;
  const monthlyListeners = document.querySelector("#monthly-listeners");
  const listeners = currentArtistResult.nb_fan;
  monthlyListeners.innerText = `${listeners} monthly listeners`;
  const urlTrackList = currentArtistResult.tracklist;

  const trackList = await fetchForArtistPageSongsList(urlTrackList);
  const multipleTracksUrl = trackList[0].artist.tracklist;

  const contributorsKeyOfTracklist = trackList.contributors;

  //puts the fetched data in the Popular section
  const liList = document.querySelectorAll("ol li");
  let index = 0;
  for (let i = 0; i < liList.length; i++) {
    let currentTracklist = trackList[index];
    if (index === trackList.length) {
      index = 0;
      currentTracklist = trackList[index];
    }
    const currentLi = liList[i];
    let songName = currentLi.querySelector(".song-name");
    songName.innerText = currentTracklist.title_short;
    const artistSongContainer = document.querySelector(
      "#artist-and-song-footer"
    );
    const nameAndSong = artistSongContainer.querySelectorAll("div");
    nameAndSong[0].innerText = "-";
    const h1 = document.querySelector("h1");
    nameAndSong[1].innerText = h1.innerText;

    //on click on a song name, it toggles background-color to green
    songName.addEventListener("click", () => {
      const audioTag = document.querySelector("#audio-tag");
      audioTag.src = currentTracklist.preview;
      const playerPlayButton = document.querySelector(".playPauseButton");
      playerPlayButton.innerHTML = `<i id="play-icon" class="bi bi-play-circle-fill"></i>`;
      playState = "play";
      const artistSongContainer = document.querySelector(
        "#artist-and-song-footer"
      );
      const nameAndSong = artistSongContainer.querySelectorAll("div");
      nameAndSong[0].innerText = songName.innerText;
      const h1 = document.querySelector("h1");
      nameAndSong[1].innerText = h1.innerText;
      const footerImage = document.querySelector("#image-music-player");
      const imageOfClickedSong = songName.parentElement;
      const imageSong = imageOfClickedSong.querySelector(
        "div.song-image-li-item img"
      );

      //updates the image footer with the one from the current selected song
      footerImage.style.backgroundImage = `url(${imageSong.src})`;
    });

    //updates the song image for Popular section
    const liImage = currentLi.querySelector("div.song-image-li-item img");
    const songImageLi = currentTracklist.album.cover_medium;
    liImage.src = `${songImageLi}`;

    //updated the rank with the data fetched for a certain artist
    const rankLi = currentLi.querySelector("span.rank");
    const fetchedRank = currentTracklist.rank;
    rankLi.innerText = fetchedRank;

    //updates the song duration with data fetched for it
    const songDurationLi = currentLi.querySelector("span.duration");
    const duration = currentTracklist.duration;
    //transforming duration from seconds to minutes in a normal format
    const minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    songDurationLi.innerText = `${minutes}:${seconds}`;
    index++;
  }

  const popularReleasesList = document.querySelectorAll(
    "#popular-releases div.row > div"
  );

  //displays the Popular releases section on Artist page
  //by updating the card data with the fetched data
  index = 0;
  for (let i = 0; i < popularReleasesList.length; i++) {
    let currentTracklist = trackList[index];
    if (index === trackList.length) {
      index = 0;
      currentTracklist = trackList[index];
    }
    const imageCard = popularReleasesList[i].querySelector("img");
    const fetchedImage = currentTracklist.album.cover_big;
    imageCard.src = fetchedImage;
    const cardTitle = popularReleasesList[i].querySelector(".card-title");
    const fetchedTitle = currentTracklist.title_short;
    cardTitle.innerText = fetchedTitle;
    const albumNameCardBody =
      popularReleasesList[i].querySelector(".album-card-body");
    const fetchedAlbumName = currentTracklist.album.title;
    index++;
    albumNameCardBody.innerText = fetchedAlbumName;
  }
}

//when click on hearts icon from footer
//it toggles the color in red
const heartIconFooter = document.querySelector("#heart-footer i");
heartIconFooter.addEventListener("click", () => {
  heartIconFooter.classList.toggle("red-color");
});

//call functions when window loads
window.onload = () => {
  goBackToHomePage();
  fetchDataFunction();
  createOlList();
  generatePopularReleasesContent();
  displayCurrentArtistDataOnPage();
};

//---------------music player functionality

//targeting some elements of the player that we will use
const playIconContainer = document.getElementById("play-icon");
const audioPlayerContainer = document.getElementById("audio-player-container");
const seekSlider = document.getElementById("seek-slider");
const volumeSlider = document.getElementById("volume-slider");
const muteIconContainer = document.getElementById("mute-icon");
let playState = "play";
let muteState = "unmute";

const playPauseButton = document.querySelector("div .playPauseButton");

//when click on play/pause button of the player,
//you change the appearence of the button
//and you declare the state of the player
//when click on play button, the state is "play the song"
//when click on pause button, the state is "pause the song"
playPauseButton.addEventListener("click", () => {
  const playIconContainer = document.getElementById("play-icon");
  if (playState === "play") {
    playPauseButton.innerHTML = "";
    playPauseButton.innerHTML = `<i id="play-icon" class="bi bi-pause-circle-fill"></i>`;
    playState = "pause";
    const audioTag = document.querySelector("audio");
    audioTag.play();
    requestAnimationFrame(whilePlaying);
  } else {
    playPauseButton.innerHTML = "";
    playPauseButton.innerHTML = `<i id="play-icon" class="bi bi-play-circle-fill"></i>`;
    playState = "play";
    const audioTag = document.querySelector("audio");
    audioTag.pause();
  }
});

//when click on the volume icon, you display the mute one
//also, when click on the icon, you change the state of the volume
//from mute to unmute and viceversa
muteIconContainer.addEventListener("click", () => {
  if (muteState === "unmute") {
    muteIconContainer.innerHTML = "";
    muteIconContainer.innerHTML = `<i class="bi bi-volume-mute"></i>`;
    audio.muted = true;
    muteState = "mute";
  } else {
    muteIconContainer.innerHTML = "";
    muteIconContainer.innerHTML = `<i class="bi bi-volume-down"></i>`;
    audio.muted = false;
    muteState = "unmute";
  }
});

//updates the audio player range according to
//evolution of the time during the playing song
//the if is for the audio player, where the song plays
//the else is for the volume range
const showRangeProgress = (rangeInput) => {
  if (rangeInput === seekSlider) {
    audioPlayerContainer.style.setProperty(
      "--seek-before-width",
      (rangeInput.value / rangeInput.max) * 100 + "%"
    );
  } else {
    audioPlayerContainer.style.setProperty(
      "--volume-before-width",
      (rangeInput.value / rangeInput.max) * 100 + "%"
    );
  }
};

//updates the player with every input, meaning with every second
seekSlider.addEventListener("input", (e) => {
  showRangeProgress(e.target);
});
//updates the volume according to the input
volumeSlider.addEventListener("input", (e) => {
  showRangeProgress(e.target);
});

/** Implementation of the functionality of the audio player */

//targeting some elements that we will manipulate
const audio = document.querySelector("audio");
const durationContainer = document.getElementById("duration");
const currentTimeContainer = document.getElementById("current-time");
let raf = null;

//transforms the time from seconds into minutes in a clear format
const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
};

//updates the song duration
const displayDuration = () => {
  durationContainer.textContent = calculateTime(audio.duration);
};

//updates the max width of the slider(the song slider) with the duration of the song
const setSliderMax = () => {
  seekSlider.max = Math.floor(audio.duration);
};

//updates the time passed since the song started to play
const whilePlaying = () => {
  seekSlider.value = Math.floor(audio.currentTime);
  currentTimeContainer.textContent = calculateTime(seekSlider.value);
  audioPlayerContainer.style.setProperty(
    "--seek-before-width",
    `${(seekSlider.value / seekSlider.max) * 100}%`
  );
  raf = requestAnimationFrame(whilePlaying);
};

if (audio.readyState > 0) {
  displayDuration();
  setSliderMax();
} else {
  audio.addEventListener("loadedmetadata", () => {
    displayDuration();
    setSliderMax();
  });
}

seekSlider.addEventListener("input", () => {
  currentTimeContainer.textContent = calculateTime(seekSlider.value);
  if (!audio.paused) {
    cancelAnimationFrame(raf);
  }
});

seekSlider.addEventListener("change", () => {
  audio.currentTime = seekSlider.value;
  if (!audio.paused) {
    requestAnimationFrame(whilePlaying);
  }
});

//makes the volume slider functional
volumeSlider.addEventListener("input", (e) => {
  const muteIcon = document.querySelector("#mute-icon i");
  const value = e.target.value;
  showRangeProgress(e.target);
  audio.volume = value / 100;
  muteIcon.addEventListener("click", () => {
    showRangeProgress(0);
  });
});
