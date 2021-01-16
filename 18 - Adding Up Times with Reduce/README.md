# 18. Adding Up times with Reduce

- 2021 01 16
- 학습: 전체 비디오 시간을 합산하여, 시분초로 표시 !

## 배운점

### Array.from()

배열로 만들어주죠. 

다큐먼트에서 찍먹해오는 건 nodelist입니다. 그래서 `map`메서드를 사용할 수 없죠. 그러니까 배열로 바꾸고 map을 써야해요.

### parseFloat(str)

스트링 숫자를 진짜 숫자로 바꿔줍니다.

```javascript
timecode.split(':').map(parseFloat)
```

위처럼 써도 되요!

### array.reduce()

```javascript
.reduce((total,vidSeconds) => total+vidSeconds)
```

### Math.floor()

버림...

```javascript
console.log(Math.floor(7/3)) //2
console.log(7%3) //1
```

