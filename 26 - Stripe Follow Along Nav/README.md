# 26. Stripe Follow Along Nav

- 2021 03 02
- nav에서 dropdown 만들기!!

![](C:\Users\multicampus\Desktop\SJ\JavaScript30\image\26.gif)

## 배운것

여러 웹 페이지에서 흔히 볼 수 있는 nav bar에 있는 dropdown  바닐라JS와 css로만 만들어보기!

### `getBoundingClientRect` 복습

```javascript
function handleEnter(){
    
    this.classList.add('trigger-enter')
    setTimeout(() => {
        if(this.classList.contains('trigger-enter')){
            this.classList.add('trigger-enter-active')
        }
    },150)
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height:dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left:dropdownCoords.left - navCoords.left,

    };

    background.style.setProperty('width',`${coords.width}px`)
    background.style.setProperty('height',`${coords.height}px`)
    background.style.setProperty('transform',`translate(${coords.left}px,${coords.top}px)`)

}
```

`getBoundingClientRect()` 쓰면 해당 요소의 위치 크기등을 알 수 있습니다! 

navCoords의 위치만큼은 빼야 dropdown을 온전히 쓸 수 있습니다.



### 익명함수 특징

익명함수를 써야 부모요소의 this를 상속받을 수 있습니다!



### CSS 특징1

`opacity`특징

 요소의 불투명도를 설정합니다. 불투명도는 요소 뒤쪽 콘텐츠가 숨겨지는 정도로, 투명도의 반대입니다.



### CSS 특징2

```javascript
function handleLeave(){
    // console.log('leave!')
    this.classList.remove('trigger-enter','trigger-enter-active');
    background.classList.remove('open')

}

triggers.forEach(trigger => trigger.addEventListener('mouseenter',handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave',handleLeave));
```

toggle 할 class를 붙였다 때는 식으로 만들었습니다.

그런데 `hover` 될 때 애니메이션을 주려면, `trigger-enter` 와 `trigger-enter-active` 클래스에 각각

```css
  .trigger-enter .dropdown {
    display: block;
  }

  .trigger-enter-active .dropdown {
    opacity: 1;
  }
```

이렇게 만들어줘야합니다. 하나에 때려밖으면 제대로 동작하지 않아요.

