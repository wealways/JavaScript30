# 20. Speech Detection

- 2021 01 18
- 학습 : speech detection 사용하기

![20](../image/20.gif)

## 배운점

### SpeechRecognition 객체

```bash
$npm i
$npm start
```

- 최상단에 불러오기

```javascript
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
```

- 대화끝나는거 파악하기 + 한글 제공

```javascript
const recognition = new SpeechRecognition();

recognition.interimResults = true;
recognition.lang = "ko-KR";
```

- p 태그 만들고 div 안에 붙여주기

- 시작하기

```javascript
recognition.start();
```

- 말이 끝나고나서 다음 말을 들어야 하니까 새로운 이벤트 만들어주자

```javascript
recognition.addEventListener('end', recognition.start);
```
