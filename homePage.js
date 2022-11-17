// window.onload = async () => {
//   //we need to display 6 cards
//   for (let i = 0; i < 6; i++) {
//     const randomArtist =
//       randomArtistArray[Math.floor(Math.random() * randomArtistArray.length)];
//     const artistData = await fetchData(
//       `https://striveschool-api.herokuapp.com/api/deezer/search?q=${randomArtist}`
//     );
//     const albumData = [];
//     artistData.forEach((song) => {
//       albumData.push(song.album);
//     });
//     displayAlbumCard(albumData);
//   }
// };

window.onload = () => {
  displayGoodMorningSection();
};

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
  console.log("jkfd:", albumData);

  const { id, title, cover } =
    albumData[Math.floor(Math.random() * albumData.length)];
  console.log("RANDOM ALBUM:", { id, title, cover });

  const goodMorningSectionRow = document.querySelector(
    ".good-morning-section-row"
  );
  const col = document.createElement("div");
  col.classList = "col-12 col-md-6 col-lg-4";
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
