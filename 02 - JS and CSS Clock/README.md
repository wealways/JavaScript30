# 2 JS and CSS Clock

- 2020 12 21

- 학습 : JS와 css 활용해서 시계 만들기



## 배운것

### [Date](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date) 객체

> 시간을 나타내는 객체입니다.

```javascript
const now = new Date();
```

- 여러 메서드 존재

```javascript
now.getHours();
now.getMinutes();
...
```

### transform & transition

- `transform : rotated()`  -> 회전시키기 
- `transform-origin: %` -> 회전의 중심축을 x축으로 이동시키기!
- `transition-timing-function : ease-in-out` -> 변화하는 속도를 내가 조정할 수 있음!

### setInterval(함수,시간)

```javascript
// 1초에 한번씩 setDate 실행
setInterval(setDate,1000)
```

