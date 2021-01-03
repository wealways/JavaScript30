## 8. Fun with HTML5 Canvas

- 2021 01 03
- 학습 : 캔버스 활용법

![](..\image\08.gif)

## 배운점

### canvas 활용 1

> canvas 필수 태그 [MDN 공식문서](https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial/Basic_usage)

```html
<!--html-->
<canvas id="draw" width="800" height="800"></canvas>
```

1. 렌더링 컨텍스트 필수!

```javascript
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
```

2. 색상

`fillStyle = color` : 도형을 채우는 색을 설정

`strokeStyle = color` : 도형의 윤곽선 색을 설정

3. 선 모양

`lineWidth = value` : 선의 두께

`lineCap = type` : 선의 끝 모양

`lineJoin = type` : 선들이 만나는 모서리 모양

```javascript
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
```

### canvas 활용 2

> 펜으로 그림 그리기 위한 메서드 [MDN공식문서](https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial/Drawing_shapes)

- 경로 그리기

1. `.beginPath()` : 경로생성
2. `moveTo(x,y)` : x,y 좌표로 펜을 이동시키기
3. `stroke()` : 윤곽선 따라 도형 그리기

```javascript
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
    if(!isDrawing) return ; //마우스 클릭을 떼너가 마우스포인트가 밖으로 나갔을 때는 그림을 멈춰라
    console.log(e)
    ctx.strokeStyle = `hsl(${hue},100%,50%)`
    // ctx.lineWidth = hue;
    ctx.beginPath();
    // 시작
    ctx.moveTo(lastX,lastY);
    // go to
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke();
    [lastX,lastY] = [e.offsetX,e.offsetY];
    hue++
    if(hue>360){
      hue=0;
    }
    
  }
```

### 이벤트 리스터 설정

`mousedown` : 마우스 오른쪽 버튼 클릭

`mousemove` : 마우스 포인트 움직임

`mouseup` : 버튼 떼기

`mouseout` : 지정범위(캔버스)를 포인트가 넘어감

```javascript
canvas.addEventListener('mousedown', (e) => {
    isDrawing= true;
    [lastX,lastY] = [e.offsetX,e.offsetY];
  });

canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mouseup', () => isDrawing= false);
canvas.addEventListener('mouseout', () => isDrawing= false);
```

