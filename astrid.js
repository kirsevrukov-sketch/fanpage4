function openModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  caption.innerHTML = img.alt;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

let currentIndex = 0;
let images = [];

function openModal(img) {
  images = Array.from(document.querySelectorAll(".carousel img"));
  currentIndex = images.indexOf(img);

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = img.src;
  caption.innerHTML = img.alt;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  const modalImg = document.getElementById("modal-img");
  const caption = document.getElementById("caption");

  modalImg.src = images[currentIndex].src;
  caption.innerHTML = images[currentIndex].alt;
}


function showBlock(id) {
  const block = document.getElementById(id);

  
  if (block.classList.contains("show")) {
    block.classList.remove("show");
    return;
  }


  const blocks = document.querySelectorAll(".content-block");
  blocks.forEach(b => b.classList.remove("show"));


  block.classList.add("show");
}


document.querySelector('#toTop').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


let currentVideoIndex = 0;
const videos = document.querySelectorAll(".video-carousel video");

function openVideo(video) {
  currentVideoIndex = Array.from(videos).indexOf(video);
  const modal = document.getElementById("video-modal");
  const modalVideo = document.getElementById("modal-video");

  modal.style.display = "flex";
  modalVideo.src = video.src;
  modalVideo.play();
}

function closeVideo() {
  const modal = document.getElementById("video-modal");
  const modalVideo = document.getElementById("modal-video");

  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.src = "";
}

function changeVideo(direction) {
  currentVideoIndex += direction;

  if (currentVideoIndex < 0) currentVideoIndex = videos.length - 1;
  if (currentVideoIndex >= videos.length) currentVideoIndex = 0;

  const modalVideo = document.getElementById("modal-video");
  modalVideo.src = videos[currentVideoIndex].src;
  modalVideo.play();
}


const trackSecond = document.querySelector('.carousel-track-second');
const itemsSecond = document.querySelectorAll('.carousel-item-second');
const prevBtnSecond = document.querySelector('.prev-second');
const nextBtnSecond = document.querySelector('.next-second');

let indexSecond = 0;
const intervalTimeSecond = 3000; 
let slideIntervalSecond;

function showSlideSecond(i) {
  trackSecond.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlideSecond() {
  indexSecond = (indexSecond + 1) % itemsSecond.length;
  showSlideSecond(indexSecond);
}

function prevSlideSecond() {
  indexSecond = (indexSecond - 1 + itemsSecond.length) % itemsSecond.length;
  showSlideSecond(indexSecond);
}

nextBtnSecond.addEventListener('click', () => {
  nextSlideSecond();
  resetIntervalSecond();
});

prevBtnSecond.addEventListener('click', () => {
  prevSlideSecond();
  resetIntervalSecond();
});


function startIntervalSecond() {
  slideIntervalSecond = setInterval(nextSlideSecond, intervalTimeSecond);
}

function resetIntervalSecond() {
  clearInterval(slideIntervalSecond);
  startIntervalSecond();
}

startIntervalSecond();


const modalSecond = document.getElementById("modal-second");
const modalImgSecond = document.getElementById("modal-img-second");
const captionTextSecond = document.getElementById("caption-second");
const closeBtnSecond = document.querySelector(".close-second");
const prevModalSecond = document.querySelector(".prev-modal-second");
const nextModalSecond = document.querySelector(".next-modal-second");

let currentModalIndex = 0;

itemsSecond.forEach((item, i) => {
  item.addEventListener("click", () => {
    modalSecond.style.display = "block";
    modalImgSecond.src = item.src;
    captionTextSecond.innerHTML = item.alt;
    currentModalIndex = i;
  });
});

closeBtnSecond.onclick = function() {
  modalSecond.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === modalSecond) {
    modalSecond.style.display = "none";
  }
};


function showModalImage(i) {
  modalImgSecond.src = itemsSecond[i].src;
  captionTextSecond.innerHTML = itemsSecond[i].alt;
}

prevModalSecond.addEventListener("click", () => {
  currentModalIndex = (currentModalIndex - 1 + itemsSecond.length) % itemsSecond.length;
  showModalImage(currentModalIndex);
});

nextModalSecond.addEventListener("click", () => {
  currentModalIndex = (currentModalIndex + 1) % itemsSecond.length;
  showModalImage(currentModalIndex);
});



const trackThird = document.querySelector('.carousel-track-third');
const itemsThird = document.querySelectorAll('.carousel-item-third');
const prevBtnThird = document.querySelector('.prev-third');
const nextBtnThird = document.querySelector('.next-third');

let indexThird = 0;
const intervalTimeThird = 3000; 
let slideIntervalThird;

function showSlideThird(i) {
  trackThird.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlideThird() {
  indexThird = (indexThird + 1) % itemsThird.length;
  showSlideThird(indexThird);
}

function prevSlideThird() {
  indexThird = (indexThird - 1 + itemsThird.length) % itemsThird.length;
  showSlideThird(indexThird);
}

nextBtnThird.addEventListener('click', () => {
  nextSlideThird();
  resetIntervalThird();
});

prevBtnThird.addEventListener('click', () => {
  prevSlideThird();
  resetIntervalThird();
});


function startIntervalThird() {
  slideIntervalThird = setInterval(nextSlideThird, intervalTimeThird);
}

function resetIntervalThird() {
  clearInterval(slideIntervalThird);
  startIntervalThird();
}

startIntervalThird();


const modalThird = document.getElementById("modal-third");
const modalImgThird = document.getElementById("modal-img-third");
const captionTextThird = document.getElementById("caption-third");
const closeBtnThird = document.querySelector(".close-third");
const prevModalThird = document.querySelector(".prev-modal-third");
const nextModalThird = document.querySelector(".next-modal-third");

let currentModalIndexThird = 0;

itemsThird.forEach((item, i) => {
  item.addEventListener("click", () => {
    modalThird.style.display = "block";
    modalImgThird.src = item.src;
    captionTextThird.innerHTML = item.alt;
    currentModalIndexThird = i;
  });
});

closeBtnThird.onclick = function() {
  modalThird.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === modalThird) {
    modalThird.style.display = "none";
  }
};


function showModalImageThird(i) {
  modalImgThird.src = itemsThird[i].src;
  captionTextThird.innerHTML = itemsThird[i].alt;
}

prevModalThird.addEventListener("click", () => {
  currentModalIndexThird = (currentModalIndexThird - 1 + itemsThird.length) % itemsThird.length;
  showModalImageThird(currentModalIndexThird);
});

nextModalThird.addEventListener("click", () => {
  currentModalIndexThird = (currentModalIndexThird + 1) % itemsThird.length;
  showModalImageThird(currentModalIndexThird);
});
