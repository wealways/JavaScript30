

# 1 JavaScript Drum Kit

- 완료 : 2020 12 19

![image-20201219200650196](C:\Users\USER\AppData\Roaming\Typora\typora-user-images\image-20201219200650196.png)



## 배운 것

```html
<body>


  <div class="keys">
    <div data-key="65" class="key">
      <kbd>A</kbd>
      <span class="sound">clap</span>
    </div>
    <div data-key="83" class="key">
      <kbd>S</kbd>
      <span class="sound">hihat</span>
    </div>
    <!--생략-->

  </div>

  <audio data-key="65" src="sounds/clap.wav"></audio>
  <audio data-key="83" src="sounds/hihat.wav"></audio>
  <!--생략-->

</body>
```

### `태그[속성="${}"]` or `.class[속성="${}"]`활용방법

```javascript
const audio = document.querySelecter(`audio[data-key="${e.keycode}"`)
```

->  `audio` 태그의 data-key 값을 활용해서 찍먹해오기

### `transform` , `transition`  등 CSS속성 사용법

- `transform` 

  ```css
  .playing {
    transform: scale(1.1);
    border-color: #ffc600;
    box-shadow: 0 0 1rem #ffc600;
  }
  ```

  -> 태그의 스케일을 1.1배 크게 만들어주기!

- `transition`

  ```css
  .key {
    ...
    transition: all .07s ease;
    ...
  }
  ```

  -> 변화가 0.07s 후에 발생!

### `transitionend` 이벤트

css의 속성이 변하면 `transitionend` 이벤트 발생한다. 본 예제에선, 키보드의 크기를 키웠다가 원 상태로 만드는 데 이것을 활용했다.

