const followButton = document.querySelector(".follow-button");
followButton.addEventListener("click", () => {
  followButton.classList.toggle("make-it-green");
});

function goBackToHomePage() {
  const goBackButton = document.querySelector(
    ".right-container ul li:first-child a"
  );
  goBackButton.addEventListener("click", () => {
    goBackButton.href = "./homePage.html";
  });
}

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
  // placeToAppendOl.appendChild(seeMoreButton);
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
    seeMore();
  });
  seeMoreButton.classList = "btn";
  seeMoreButton.setAttribute("type", "button");
  seeMoreButton.classList.add("seeMoreButton");
  seeMoreButton.classList.add("text-light");
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
    // console.log(liList[i]);
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
    // console.log(liList[i]);
    const currentLi = liList[i];
    currentLi.classList.toggle("d-none");
  }
}

//creates an li element and appends it to the ol
function createLiContent(ol) {
  const li = document.createElement("li");
  li.innerHTML = `<div class="d-flex justify-content-between align-items-center mb-2">
                    <div class="d-flex align-items-center">
                      <div class="song-image-li-item d-flex align-items-center justify-content-center">
                      Image
                      </div>
                    <div class="ml-3 song-name">Song name</div>
                  </div>
                  <span class="rank">1.0438432.322</span>
                  <span class="duration">3:32</span>
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
window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};

// const customUrl = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${albumName}`;

const params = new URLSearchParams(window.location.search);
console.log(params);
const artistId = params.get("artistId");
const artistName = params.get("artistName");
console.log(artistId);
console.log(artistName);

const url = `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`;

async function fetchDataFunction() {
  //this returns a promise
  const response = await fetch(url, { method: "GET" });
  console.log(response);
  //this returns an object
  const result = await response.json();
  console.log(result);
  //with the result.data you have access to the array itself
  // console.log(result.data);
  return result;
}

async function fetchForArtistPageSongsList(url) {
  const response = await fetch(url, { method: "GET" });
  const result = await response.json();
  console.log(result.data);
  return result.data;
}

// function generateListOfSongsWithApiData(obj, currentLi) {
//   const liImage = currentLi.querySelector("div.song-image-li-item");
//   const rankLi = currentLi.querySelector("span.rank");
//   const fetchedRank = obj.rank;
//   rankLi.innerText = fetchedRank;
//   const songDurationLi = currentLi.querySelector("span.duration");
//   const duration = obj.duration;
//   const minutes = duration / 60;
//   const seconds = duration % 60;
//   if (seconds < 10) {
//     seconds = `0${seconds}`;
//   }
//   songDurationLi.innerText = `${minutes}:${seconds}`;
//   const songImageLi = obj.md5_image;
//   liImage.style.backgroundImage = `url(${songImageLi});`;
//   const contributors = obj.contributors;
//   const songNameLi = obj.title_short;
//   const audioPlayerSrc = obj.preview;
// }
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

async function displayCurrentArtistDataOnPage() {
  const currentArtistResult = await fetchDataFunction();
  console.log("our obj", currentArtistResult);
  const jumbotronImage = currentArtistResult.picture_big;
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

  console.log(urlTrackList);
  // const url = urlTrackList;
  const trackList = await fetchForArtistPageSongsList(urlTrackList);
  const multipleTracksUrl = trackList[0].artist.tracklist;

  const contributorsKeyOfTracklist = trackList.contributors;
  console.log("Tracklist", trackList);
  const liList = document.querySelectorAll("ol li");
  let index = 0;
  for (let i = 0; i < liList.length; i++) {
    let currentTracklist = trackList[index];
    if (index === trackList.length) {
      console.log(trackList.length);
      index = 0;
      currentTracklist = trackList[index];
    }
    // console.log("currentLi", liList[i]);
    // const currentTracklist = trackList[index];
    console.log("currentTracklist", currentTracklist);
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

    songName.addEventListener("click", () => {
      console.log(songName.innerText);
      // songName.style.color = "red";
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
      // const footerImage = document.querySelector("#image-music-player");
      // const imageOfClickedSong = songName.parentElement;
      // footerImage.style.backgroundImage = `url(${artistPickImage})`;
    });

    // generateListOfSongsWithApiData(currentTracklist, liList[i]);
    const liImage = currentLi.querySelector("div.song-image-li-item");
    const songImageLi = currentTracklist.album.cover_medium;
    // console.log("image", songImageLi);
    liImage.style.backgroundImage = `url(${songImageLi})`;

    const rankLi = currentLi.querySelector("span.rank");
    const fetchedRank = currentTracklist.rank;
    rankLi.innerText = fetchedRank;
    const songDurationLi = currentLi.querySelector("span.duration");
    const duration = currentTracklist.duration;
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

  index = 0;
  for (let i = 0; i < popularReleasesList.length; i++) {
    let currentTracklist = trackList[index];
    if (index === trackList.length) {
      console.log(trackList.length);
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

const heartIconFooter = document.querySelector("#heart-footer i");
heartIconFooter.addEventListener("click", () => {
  heartIconFooter.classList.toggle("red-color");
});

window.onload = () => {
  goBackToHomePage();
  fetchDataFunction();
  createOlList();
  generatePopularReleasesContent();
  displayCurrentArtistDataOnPage();
};

//music player

const playIconContainer = document.getElementById("play-icon");
const audioPlayerContainer = document.getElementById("audio-player-container");
const seekSlider = document.getElementById("seek-slider");
const volumeSlider = document.getElementById("volume-slider");
const muteIconContainer = document.getElementById("mute-icon");
let playState = "play";
let muteState = "unmute";

const playPauseButton = document.querySelector("div .playPauseButton");
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

seekSlider.addEventListener("input", (e) => {
  showRangeProgress(e.target);
});
volumeSlider.addEventListener("input", (e) => {
  showRangeProgress(e.target);
});

/** Implementation of the functionality of the audio player */

const audio = document.querySelector("audio");
const durationContainer = document.getElementById("duration");
const currentTimeContainer = document.getElementById("current-time");
// const outputContainer = document.getElementById("volume-output");
let raf = null;

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
};

const displayDuration = () => {
  durationContainer.textContent = calculateTime(audio.duration);
};

const setSliderMax = () => {
  seekSlider.max = Math.floor(audio.duration);
};

const displayBufferedAmount = () => {
  const bufferedAmount = Math.floor(
    audio.buffered.end(audio.buffered.length - 1)
  );
  audioPlayerContainer.style.setProperty(
    "--buffered-width",
    `${(bufferedAmount / seekSlider.max) * 100}%`
  );
};

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
  displayBufferedAmount();
} else {
  audio.addEventListener("loadedmetadata", () => {
    displayDuration();
    setSliderMax();
    displayBufferedAmount();
  });
}

audio.addEventListener("progress", displayBufferedAmount);

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

volumeSlider.addEventListener("input", (e) => {
  const muteIcon = document.querySelector("#mute-icon i");
  const value = e.target.value;
  showRangeProgress(e.target);
  // outputContainer.textContent = value;
  audio.volume = value / 100;
  muteIcon.addEventListener("click", () => {
    showRangeProgress(0);
  });
});
