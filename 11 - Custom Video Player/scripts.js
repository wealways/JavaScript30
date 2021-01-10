

// element 가져오기
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progerssBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

const fullscreenBtn = player.querySelector('[data-fullscreen]');
// function 만들기

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  // play pause
  // if(video.paused) {
  //   video.play();
  // }else {
  //   video.puase();
  // }
  video[method]();
  
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  toggle.textContent = icon;
}

function skip() {
  console.log('스킵!!')
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progerssBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  // offset 은 범위내에서의 상대적 위치를 알려주니까 써먹기 좋겠네!
  console.log(e.offsetX)
  const scrubTime = (e.offsetX/progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// event listener hookup 하기
video.addEventListener('click',togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click',togglePlay);
skipButtons.forEach(button => button.addEventListener('click',skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e) => mousedown && scrub(e));
progress.addEventListener('mousedown',() => mousedown = true);
progress.addEventListener('mouseup',() => mousedown = false);

fullscreenBtn.addEventListener('click', () => video.requestFullscreen());
