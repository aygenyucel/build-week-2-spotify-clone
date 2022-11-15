function createList() {
  createOl();
  // const ol = document.querySelector(".music-container ol");
  // for (let i = 0; i < 5; i++) {
  //   createLiContent(ol);
  // }
  createSequenceOfFiveSongs();
}

function createOl() {
  const placeToAppend = document.querySelectorAll(".music-container .row")[1];
  const placeToAppendOl = placeToAppend.querySelector("div:first-child");
  placeToAppendOl.innerHTML += `<ol></ol>`;

  createSeeMoreButton(placeToAppendOl);
  // placeToAppendOl.appendChild(seeMoreButton);
}

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

function createSequenceOfFiveSongs() {
  const ol = document.querySelector(".music-container ol");
  for (let i = 0; i < 10; i++) {
    createLiContent(ol);
  }
  const liList = ol.querySelectorAll("li");

  for (let i = 5; i < liList.length; i++) {
    console.log(liList[i]);
    const currentLi = liList[i];
    currentLi.classList.add("d-none");
  }
}

function seeMore() {
  const ol = document.querySelector(".music-container ol");
  const liList = ol.querySelectorAll("li");

  for (let i = 5; i < liList.length; i++) {
    // console.log(liList[i]);
    const currentLi = liList[i];
    currentLi.classList.toggle("d-none");
  }
}

function createLiContent(ol) {
  const li = document.createElement("li");
  li.innerHTML = `<div class="d-flex justify-content-between align-items-center mb-2">
                    <div class="d-flex align-items-center">
                      <div class="song-image-li-item d-flex align-items-center justify-content-center">
                      Image
                      </div>
                    <div class="ml-3">Song name</div>
                  </div>
                  <span>1.0438432.322</span>
                  <span>3:32</span>
                  </div>`;
  ol.appendChild(li);
}

function createCardPopularReleases() {
  let container = document.querySelector("#popular-releases");
  let whereToAppend = container.querySelector("div.row");
  whereToAppend.innerHTML += `
  <div class="col-sm-6 col-md-4 col-xl-2 mb-3 mx-md-auto">
          <div class="card container">
          <div class="relative-position">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Shawn_Mendes_and_Camila_Cabello_-_Se%C3%B1orita.png"
              class="card-img-top mt-3"
              alt="..."
            />
            <div><i class="bi bi-play-circle-fill play-button-on-card"></i></div>
            </div>
            <div
              class="card-body text-light d-flex flex-column align-items-start"
            >
              <h5 class="card-title wirte-just-on-one-line">Song title</h5>
              <p class="card-text">
                <span>year</span>
                <span>
                  <i class="bi bi-dot"></i>
                </span>
                <span>Album</span>
              </p>
            </div>
          </div>
        </div>
  `;
}

function generatePopularReleasesContent() {
  for (let i = 0; i < 6; i++) createCardPopularReleases();
}

//change the color of the navbar when scrolling
const navbar = document.querySelector("#navbar-container nav");
window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};

window.onload = () => {
  createList();
  generatePopularReleasesContent();
};
