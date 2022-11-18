window.onload = async () => {
  const albumID = getParams();

  const data = await fetchData(
    `https://striveschool-api.herokuapp.com/api/deezer/album/${albumID}`
  );

  displayAlbum(data);
};

function getParams() {
  const params = new URLSearchParams(window.location.search);
  //   console.log(params);
  const id = params.get("id");
  //   console.log("id:", id);
  return id;
}

async function fetchData(url) {
  const response = await fetch(url, {
    method: "GET",
  });
  const result = await response.json();
  return result;
}

function displayAlbum(data) {
  const albumSongsData = data.tracks.data;

  const songsElement = document.querySelector(".songs-row");
  songsElement.innerHTML = "";

  //   console.log(albumSongsData.duration);
  let albumDuration = 0;
  albumSongsData.forEach((track, index) => {
    // console.log(track.duration);

    let trackMinutes = Math.floor(track.duration / 60);
    let trackSeconds = track.duration - trackMinutes * 60;
    if (trackSeconds < 10) {
      trackSeconds = `0${trackSeconds}`;
    }

    trackDuration = `${trackMinutes}: ${trackSeconds}`;

    albumDuration += track.duration;

    songsElement.innerHTML += `<div class="col d-flex align-items-center">
    <span class="track_num align-self-center">
      <span class="number">${index + 1}</span>
      <i class="display_none fa-solid fa-play"></i>
    </span>
    <div class="song_is">
      <span class="song_name">${track.title_short}</span>
      <div class="song_artist">${data.artist.name}</div>
    </div>
    <i class="bi bi-heart ml-auto track_heart"></i>
    <span class="margin_span">${trackDuration}</span>
    <i class="fa-solid fa-ellipsis track_dots"></i>
  </div>`;
  });

  let albumMinutes = Math.floor(albumDuration / 60);
  let albumSeconds = albumDuration - albumMinutes * 60;

  let albumYear = data.release_date.substr(0, 4);

  //   console.log("data:", data);

  const albumCoverElement = document.querySelector(".album_cover");
  albumCoverElement.innerHTML = `<img src="${data.cover_big}" alt="..." />
                                          <div class="album_name d-flex flex-column justify-content-end">
                                          <span class="font-weight-bold">ALBUM</span>
                                          <span class="font-weight-bold"
                                              >${data.title}</span
                                          >
                                          <div class="bottom_text d-flex flex-row align-items-center">
                                              <img src="${data.cover_small}" alt="..." />
                                              
                                              <div class="d-flex flex-row align-items-center">
                                                <div class="font-weight-bold">${data.artist.name}</div>
                                                <div class="point-divider"></div>
                                                <div>${albumYear}</div>
                                                <div class="point-divider"></div>
                                                <div class="mr-1">${data.nb_tracks} songs,</div>
                                                <div><small> ${albumMinutes} min ${albumSeconds} sec </small></div>
                                              </div>
                                          </div>
                                      </div>`;
}

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
