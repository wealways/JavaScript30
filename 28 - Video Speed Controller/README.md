# 28. video Speed Controller

- 2021 03 07
- 비디오 속도 조절기능

![](C:\Users\multicampus\Desktop\SJ\JavaScript30\image\28.gif)

## 배운점

### 속도조절기능만들기

```javascript
function handleMove(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%'
    const playbackRate = percent * (max-min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
  }
```

0.4x ~ 4x 사이로 동영상 속도 조절시키기

### toFixed() 메서드

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

숫자를 고정 소수점 표기법으로 반환