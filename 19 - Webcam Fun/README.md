# 19. Webcam Fun

- 2021 02 25
- 웹캠 활용하기

![19](../image/19.gif)

gif 봐도봐도 역겹쓰ㅎㅎ; 근데 저는 이런게 좋아요ㅎㅎ;ㅎ



## 학습 또는 코드리뷰

웹캠을 canvas에 뿌려주고 캡쳐 또는 특수효과 만들기!



### 웹캠 카메라 사용하기

```javascript
function getVideo(){
  navigator.mediaDevices.getUserMedia({video:true, audio:false})
    .then(localMediaStream=>{
      // console.log(localMediaStream)
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err=>{
      console.error('OH NO!!!!',err);
    });
};
```

웹캡를 활용하기 위해선 `navigator.mediaDevices.getUserMedia()` 메서드를 통해 간편하게 사용할 수 있다 !! 이후 미리 만들어 놓은 `video 돔 객체의 src 경로`에 스트리밍되는 캠의 데이터를 넣고 `play()`를 시켜주면 된다 !!



### 캔버스에 비디오를 넣기

```javascript
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}

video.addEventListener("canplay", paintToCanvas);
```

화면이 깨지지 않도록 비디오의 길이와 높이를 맞춰줍니다. 그리고 `setInterval()`를 사용해줍시다! 16ms마다 video의 이미지를 canvas에 뿌려주는 줌으로써 스트리밍되는 것처럼 보이는 것입니다!!

따라서 추가적으로 필터를 먹이려면 setInterval안에서 이미지를 건들여야겠죠.

이후 `video.addEventListener("canplay", paintToCanvas);`를 통해 video가 동작할때마다 캔버스에 스트리밍을 하면 됩니다.

`canplay`라는 이벤트속성을 알게되었습니다!!



### 사진찍기

```javascript
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
```

`createElement` 와 `innterHTML`를 사용해서 찍은 사진을 미리보기처럼 아래 보여주게 할 수 있습니다.



### 필터적용하기

뭐 이건 필요할 때 찾아보면 될 거 같아요..

