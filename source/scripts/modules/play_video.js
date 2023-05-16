const video = document.getElementById('video');
const videoBtn = document.querySelector('.video__button');

let isPlay = false;

function handleVideo() {
    isPlay = !isPlay;
    videoBtn.classList.toggle('hidden');
    isPlay ? video.play() : video.pause();
}


if (videoBtn !== null) {
    videoBtn.addEventListener('click', handleVideo)
}