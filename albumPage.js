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

  albumSongsData.forEach((track, index) => {
    // console.log(track.duration);

    var trackMinutes = Math.floor(track.duration / 60);
    var trackSeconds = track.duration - trackMinutes * 60;
    if (trackSeconds < 10) {
      trackSeconds = `0${trackSeconds}`;
    }
    if (trackMinutes < 10) {
      trackMinutes = `0${trackMinutes}`;
    }

    trackDuration = `${trackMinutes}: ${trackSeconds}`;

    songsElement.innerHTML += `<div class="col d-flex">
                                        <span class="track_num align-self-center">${
                                          index + 1
                                        }</span>
                                        <div class="song_is">
                                        <span class="song_name">${
                                          track.title_short
                                        }</span>
                                        <div class="song_artist">
                                        ${data.artist.name}</div>
                                        </div>
                                        <span class="ml-auto">${trackDuration}</span>
                                    </div>`;
  });

  //   console.log("data:", data);

  const albumCoverElement = document.querySelector(".album_cover");
  albumCoverElement.innerHTML = `<img src="${data.cover_big}" alt="..." />
                                          <div class="album_name d-flex flex-column justify-content-end">
                                          <span class="font-weight-bold">Album</span>
                                          <span class="font-weight-bold"
                                              >${data.title}</span
                                          >
                                          <div class="bottom_text">
                                              <img src="${data.cover_small}" alt="..." />
                                              <span><span class="font-weight-bold">${data.artist.name}</span></span>
                                          </div>
                                      </div>`;
}
