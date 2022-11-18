window.onload = () => {
  // fetchDataFunction();
  createCardsForRecentlyPlayedSection();
  createCardsForShowsToTrySection();
  callApiFromAlbumArray();
  displayGoodMorningSection();
};

const navbar = document.querySelector("#navbar-container");
const rightContainer = document.querySelector("#right-container");
rightContainer.onscroll = () => {
  if (rightContainer.scrollTop > 250) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};

// **************displaying Good Morning Section************
async function displayGoodMorningSection() {
  //we need to display 6 cards
  for (let i = 0; i < 6; i++) {
    const randomArtist =
      randomArtistArray[Math.floor(Math.random() * randomArtistArray.length)];
    const artistData = await fetchData(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${randomArtist}`
    );
    const albumData = [];
    artistData.forEach((song) => {
      albumData.push(song.album);
    });
    displayAlbumCard(albumData);
  }
}

async function fetchData(url) {
  const response = await fetch(url, {
    method: "GET",
  });
  const result = await response.json();
  const data = result.data;
  return data;
}

const randomArtistArray = [
  "queen",
  "metallica",
  "pinkfloyd",
  "daftpunk",
  "rihanna",
  "drake",
  "deeppurple",
  "theweeknd",
  "beyonce",
  "thebeatles",
  "ledzeppelin",
  "therollingstones",
  "aerosmith",
];

function displayAlbumCard(albumData) {
  // console.log("jkfd:", albumData);

  const { id, title, cover } =
    albumData[Math.floor(Math.random() * albumData.length)];
  // console.log("RANDOM ALBUM:", { id, title, cover });

  const goodMorningSectionRow = document.querySelector(
    ".good-morning-section-row"
  );
  const col = document.createElement("div");
  col.classList = "col-6 col-sm-12 col-md-6 col-lg-4";
  col.innerHTML = `<a class="album-link card-link" href="./albumPage.html?id=${id}">
                      <div class="album-card-horizontal d-flex align-items-center">
                        <div>
                          <img
                            class="album-img album-card-horizontal-img"
                            src="${cover}"
                            alt="album image"
                          />
                        </div>
                        <div class="album-name album-card-horizontal-name">
                          ${title}
                        </div>
                      </div>
                    </a>`;
  goodMorningSectionRow.appendChild(col);
}

// **************displaying Recently Played & Shows to Try Section************

const recentlyPlayedSection = document.querySelector(
  "div .recently-played-section-row"
);

function createSingelCardForRecentlyPlayedSection() {
  const recentlyPlayedSection = document.querySelector(
    "div .recently-played-section-row"
  );

  recentlyPlayedSection.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 mx-sm-auto mx-md-auto">
                                  <div class="song-card-vertical">
                                    <div class="position-relative">
                                      <img src="https://i.scdn.co/image/ab67616d0000b2736976009675621c80cafa1ff5" alt="" class="song-card-vertical-img song-img"/>
                                      <div>
                                        <i class="bi bi-play-circle-fill play-button-on-card"></i>
                                      </div>
                                    </div>
                                    <div class="mt-3 w-100 d-flex flex-column">
                                      <div class="song-name song-card-vertical-song-name">Master of Puppet</div>
                                      <a class="artist-link card-link" href="./artistPage.html">
                                        <div class="artist-name song-card-vertical-artist-name">Metallica</div>
                                      </a>
                                    </div>
                                  </div>
                                </div>`;
}

function createSingelCardForShowsToTrySection() {
  const showsToTrySection = document.querySelector(
    "div .shows-to-try-section-row"
  );

  showsToTrySection.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 mx-sm-auto mx-md-auto">
                                    <a class="artist-link card-link" href="./artistPage.html">
                                      <div class="artist-card-vertical">
                                        <div class="position-relative">
                                          <img
                                            src="https://i.scdn.co/image/ab6761610000e5eb0accbbe13e1aa147dd27671c"
                                            alt=""
                                            class="artist-card-vertical-img song-img"
                                          />
                                        </div>
                                        <div class="mt-3 w-100">
                                          <div class="artist-name artist-card-vertical-artist-name">
                                            Muse
                                          </div>
                                          <div class="artist-card-badge">Artist</div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>`;
}

function createCardsForRecentlyPlayedSection() {
  const recentlyPlayedSection = document.querySelector(
    "div .recently-played-section-row"
  );
  for (let i = 0; i < 6; i++) {
    createSingelCardForRecentlyPlayedSection();
    const cardsList = document.querySelectorAll(
      "div .recently-played-section-row > div"
    );
    for (let i = 0; i < cardsList.length; i++) {
      if (i === 0) cardsList[i].classList.add("d-block");
      if (i === 1) {
        // cardsList[i].classList.add("d-none");
        cardsList[i].classList.add("d-sm-block");
      } else if (i === 2) {
        // cardsList[i].classList.add("d-none");
        cardsList[i].classList.add("d-md-block");
      } else if (i === 3) {
        // cardsList[i].classList.add("d-none");
        cardsList[i].classList.add("d-lg-block");
      } else if (i === 4) {
        // cardsList[i].classList.add("d-none");
        cardsList[i].classList.add("d-xl-block");
      } else if (i === 5) {
        // cardsList[i].classList.add("d-none");
        cardsList[i].classList.add("d-xl-block");
      }
    }
  }
}

function createCardsForShowsToTrySection() {
  const ShowsToTrySection = document.querySelector(
    "div .shows-to-try-section-row"
  );
  for (let i = 0; i < 6; i++) {
    createSingelCardForShowsToTrySection();
    const cardsList = document.querySelectorAll(
      "div .shows-to-try-section-row > div"
    );
    for (let i = 0; i < cardsList.length; i++) {
      if (i === 0) cardsList[i].classList.add("d-block");
      if (i === 1) {
        // cardsList[i].classList.add("d-none");
        cardsList[i].classList.add("d-sm-block");
      } else if (i === 2) {
        // cardsList[i].classList.add("d-none");
        cardsList[i].classList.add("d-md-block");
      } else if (i === 3) {
        // cardsList[i].classList.add("d-none");
        cardsList[i].classList.add("d-lg-block");
      } else if (i === 4) {
        // cardsList[i].classList.add("d-none");
        cardsList[i].classList.add("d-xl-block");
      } else if (i === 5) {
        // cardsList[i].classList.add("d-none");
        cardsList[i].classList.add("d-xl-block");
      }
    }
  }
}

const albumArray = [
  "romance",
  "metallica",
  "loud",
  "renaissance",
  "wonder",
  "lover",
];

const albumArrayShowsToTry = [
  "relapse",
  "load",
  "queen",
  "voyage",
  "magia",
  "esquemas",
];

let url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

async function fetchDataFunction(url) {
  //this returns a promise
  // url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${album}`;
  const response = await fetch(url, { method: "GET" });
  //this returns an object
  const result = await response.json();
  //with the result.data you have access to the array itself
  return result.data;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

async function callApiFromAlbumArray() {
  let index = 0;
  for (let i = 0; i < albumArray.length; i++) {
    let randomIndex = randomNumber(0, 25);
    const recentlyPlayedCardList = document.querySelectorAll(
      "div.recently-played-section div.recently-played-section-row div.song-card-vertical"
    );
    const showsToTryCardList = document.querySelectorAll(
      "div.shows-to-try-section div.shows-to-try-section-row div a.artist-link"
    );
    const showsToTrySectionUrl = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${albumArrayShowsToTry[i]}`;
    const showsToTrySectionAlbumArrayFetch = await fetchDataFunction(
      showsToTrySectionUrl
    );
    const currentShowsToTryArtist =
      showsToTrySectionAlbumArrayFetch[randomIndex];
    addApiDataForShowsToTrySectionCard(
      currentShowsToTryArtist,
      showsToTryCardList[index]
    );

    url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${albumArray[i]}`;
    const albumArrayFetchResult = await fetchDataFunction(url);
    const currentObjectArtist = albumArrayFetchResult[randomIndex];
    addApiDataForOneCard(currentObjectArtist, recentlyPlayedCardList[index]);
    index++;
  }
}

function addApiDataForShowsToTrySectionCard(objectArtistFetched, card) {
  const artistKeyOfObjectArtistFetched = objectArtistFetched.artist;
  const artistName = artistKeyOfObjectArtistFetched.name;
  const artistId = artistKeyOfObjectArtistFetched.id;
  const cardImage = card.querySelector("img");
  const cardSongName = card.querySelector(".artist-card-badge");
  const cardArtistName = card.querySelector(".artist-name");
  cardImage.src = artistKeyOfObjectArtistFetched.picture_medium;
  cardSongName.innerText = objectArtistFetched.title;
  cardArtistName.innerText = artistName;
  card.href = `./artistPage.html?artistName=${artistName}&artistId=${artistId}`;
}

function addApiDataForOneCard(objectArtistFetched, card) {
  const artistKeyOfObjectArtistFetched = objectArtistFetched.artist;
  const artistName = artistKeyOfObjectArtistFetched.name;
  const artistId = artistKeyOfObjectArtistFetched.id;
  const cardImage = card.querySelector("img");
  const cardSongName = card.querySelector(".song-name");
  const cardArtistName = card.querySelector(".artist-name");
  const cardArtistLink = card.querySelector(".artist-link");
  cardImage.src = artistKeyOfObjectArtistFetched.picture_medium;
  cardSongName.innerText = objectArtistFetched.title;
  cardArtistName.innerText = artistName;
  cardArtistLink.href = `./artistPage.html?artistName=${artistName}&artistId=${artistId}`;
}
