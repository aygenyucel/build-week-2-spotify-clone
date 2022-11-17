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

  let albumMinutes = Math.floor(albumDuration / 60);
  let albumSeconds = albumDuration - albumMinutes * 60;

  let albumYear = data.release_date.substr(0, 4);

  console.log("data:", data);

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
