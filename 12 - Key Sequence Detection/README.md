# 12. Key Sequence Detection

- 2021 01 11
- 학습: key sequence를 추적하는 법을 배워봐요!



## 배운점

### [.splice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

```javascript
const pressed = [];
const secretCode = 'wealways'
pressed.splice(-secretCode.length -1,pressed.length - secretCode.length)
```

->  음... 조금 더 고민을 해서 정리할게요...

-9, -7  /-9, -6 / -9, -5 / -9, -4 / -9, -3 / -9, -2 / -9, -1 / -9, 0  -> 이 이후부터는 -9 즉 첫번째 자리에서 첫번째 짜리 (0) 은 삭제해버리기!

-9, -0 /-9, -0/ ...

