# 27. Click and Drag

- 2021 03 06
- slider 만들기

![27](C:\Users\multicampus\Desktop\SJ\JavaScript30\image\27.gif)



## 배운것

슬라이더를 통해 위의 움짤 처럼 만들기. 그런데 보면 굉장히 빈약하다. 기초 동작 원리를 알고 나서 추가적으로 확장시켜야 써먹을 수 있을 것 같다.

### slide 스크롤 만들기 CSS

```css
.items {
  height: 800px;
  padding: 100px;
  width: 100%;
  border: 1px solid white;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  transform: scale(0.98);
  will-change: transform;
  position: relative;
  background: rgba(255,255,255,0.1);
  font-size: 0;
  perspective: 500px;
}
```

`white-space:nowrap` : 요소가 공백 문자를 처리하는 방법입니다 - 칸 넘어도 흘러가게 만들기

`overflow` : 넘칠 떄 어떻게 처리할 것인가

`user-select` : 드래글 할 때 그 요소를 어떻게 할 것인가? -> 여기선 `none`으로 드래그 자체가 안되게 만들었다.

### slide 스크롤 만들기 JS

```javascript
const slider = document.querySelector('.items');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown',(e) =>{
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft
  });
  slider.addEventListener('mouseleave',()=>{
    isDown = false;
    slider.classList.remove('active');
    
  });
  slider.addEventListener('mouseup',()=>{
    isDown = false;
    slider.classList.remove('active');
    
  });
  slider.addEventListener('mousemove',(e)=>{
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
    
  });
```

`e.pageX` : 현재 내가 찍은 포인트 위치

`isDown`이라는 플래그를 만들어 놓고, 이를 활용해서 이동한거리를 계산하고 있음!

