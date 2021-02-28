# 24. Sticky Nav

- 2021 02 28
- 고정 Nav 만들기

![](../image/24.gif)



## 배운점

css에 sticky 가 있지만 잘 동작하지 않습니다.. 그래도 저는 사용하고 싶다구요! 할 때 쓰면 됩니다. 그리고 실제 여러 포트폴리오나 커뮤니티에서 이를 적극적으로 활용하고 있으니까..! 

```html
<body>

  <header>
    <h1>A story about getting lost.</h1>
  </header>

  <nav id="main">
    <ul>
      <li class="logo"><a href="#">LOST.</a></li>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Images</a></li>
      <li><a href="#">Locations</a></li>
      <li><a href="#">Maps</a></li>
    </ul>
  </nav>

  <div class="site-wrap">
    <p>...</p>
     <p>...</p>
     <p>...</p>
  </div>


</body>
```

### 고정 NAV 만들기

> javascript는 비교적 쉽습니다.

```javascript
const nav = document.querySelector('#main')
const topOffNav = nav.offsetTop;

function fixNav(){
    if(window.scrollY >= topOffNav){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav')
    }else{
        document.body.classList.remove('fixed-nav')
        document.body.style.paddingTop = 0;
    }
}

```

`nav` 의 실제 위치를 `offsetTop`를 통해 구하자. 그리고나서 `scrollY`를 통해 유저가 스크롤한 높이를 구한 후, 두 개의 길이가 같으면 이제 고정시켜주자!!

이때,

`offsetHeight` 을 통해 구한 nav 의 높이를  body의 `paddingTop`에 집어넣고 있다. 이렇게 하는 이유는, 위의 조건에 따라 nav를 고정시키게 되면 nav의 높이가 사라지게 되면서 `div.site-wrap`이 위로 올라가게 된다. ➡ 부드럽지않고 뚝 끊기는 현상이 발생한다... 이부분을 해결해준다.



### 안보이던 로고 생기게 하기

```css
li.logo {
  max-width: 0;
  overflow: hidden;
  background: white;
  transition: all .5s;
  font-weight: 600;
  font-size: 30px;
}

.fixed-nav li.logo{
  max-width: 500px;
  /* width: auto; */
}
```

`max-width` 가 0이라 보이지 않던 것을 nav가 고정되면 보일 수 있게 `max-width`를 변화시키면 된다!





