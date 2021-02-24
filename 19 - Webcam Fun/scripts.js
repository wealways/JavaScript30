const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

// 웹캠 카메라 사용하기
function getVideo(){
  navigator.mediaDevices.getUserMedia({video:true, audio:false})
    .then(localMediaStream=>{
      console.log(localMediaStream)
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err=>{
      console.error('OH NO!!!!',err);
    });
};

// 카메라 이미지 컨버스에 뿌리기
function paintToCanvas(){
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    //픽셀가져오기
    let pixels = ctx.getImageData(0,0,width,height);
    // 변화주기
    // pixels = redEffect(pixels)
    pixels = rgbSplit(pixels)
    // ctx.globalAlpha = 0.8;
    // pixels = greenScreen(pixels);
    // 변화준거 가져오기
    ctx.putImageData(pixels, 0, 0);
    
  }, 16);
}

function redEffect(pixels){
  for(let i=0; i<pixels.data.length; i+=4){
    pixels.data[i+0] = pixels.data[i+0] + 100// r
    pixels.data[i+1] = pixels.data[i+1] - 50 // g
    pixels.data[i+2] = pixels.data[i+2] * 0.5//b
  }
  return pixels;
}

function rgbSplit(pixels){
  for(let i=0; i<pixels.data.length; i+=4){
    pixels.data[i-150] = pixels.data[i+0] + 100// r
    pixels.data[i+300] = pixels.data[i+1] - 50 // g
    pixels.data[i-350] = pixels.data[i+2] * 0.5//b
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

// 사진찍기
function takePhoto(){
  // 찰칵!
  snap.currentTime = 0;
  snap.play();

  //캔버스에서 데이터 꺼내오기
  const data =canvas.toDataURL('image/jpeg')
  // console.log(data)
  // -> 여기까지는 내 그림을 텍스트 기반 표현기법 base64로 뽑아낸거임.
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download','ITSME')
  // link.textContent = 'Download Image';
  link.innerHTML = `<img src="${data}" alt="ITSME"/>`
  strip.insertBefore(link,strip.firstChild)
}



getVideo();

video.addEventListener('canplay',paintToCanvas);