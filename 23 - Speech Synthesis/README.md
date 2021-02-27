# 23. Speech Synthesis

- 2021 02 27
- 자바스크립트의 TTS 기능 활용하기!

![tts](C:\Users\multicampus\Desktop\SJ\JavaScript30\image\23.png)

## 배운점

>  day20에서는 STT를 배웠는데, 이번엔 TTS를 배웠습니다. JS 강력하눼요.

### `SpeechSynthesisUtterance` API

```javascript
const msg = new SpeechSynthesisUtterance();

function populateVoices(){
   voices = this.getVoices();
   voicesDropdown.innerHTML = voices
   	  // .filter((voice) => voice.lang.includes("en"))
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');

}

 speechSynthesis.addEventListener('voiceschanged',populateVoices)
```

`speechSynthesis` 객체에서 `voicechanged` 이벤트가 발생하면, TTS할 수 있는 보이스 리스트를 가져온다



### `toggle()` 함수 사용하기

```javascript
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));
```

`true` 일 경우, 진행중이던 것을 멈추고 다시 시작한다. 그러나 `false`일 경우 진행중이던 것을 멈춘다.

> 개인적으로 이런 방법 깔끔한 거 같다. 나도 toggle을 쓸 일이 있을 때 간단하게 이렇게 만들어서 써봐야겠다.



### `map`, `find` , `forEach` 메서드 복습 또 복습!

- map() 메서드 : 배열의 모든 요소에 함수를 적용해서 새로운 배열을 반환한다

  ```javascript
  function populateVoices(){
      voices = this.getVoices();
      voicesDropdown.innerHTML = voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
    }
  ```

  

- find() 메서드 : 주어진 판별 함수를 만족하는 **첫번째요소의 값**을 반환. 만약 없다면 `undefined` 반환

  ```javascript
  function setVoice(){
      msg.voice = voices.find(voice => voice.name ===this.value);
      toggle();
    }
  ```

  

- forEach() 메서드 : 배열의 모든 요소에 함수를 적용한다.

  ```javascript
  options.forEach(option => option.addEventListener('change',setOption))  
  ```

  

💥 map은 return 값이 있지만, forEach는 없다. 그리고 forEach가 더 빠르다.



