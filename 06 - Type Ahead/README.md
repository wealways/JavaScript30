# 6. Type Ahead

- 2020 12 30
- 학습 : 검색어 바로 보여주는 기능

![](..\image\06-1.gif)

## 배운점

### [fetch()](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95)

> 보통 requests, axios, jQuery 등과 같은 라이브러리를 활용하여 원격 API를 호출했어요. -> 브라우저에 내정된 `fetch()` 를 이용할 수 있기 때문에 오히려 더 좋을 수 있어요.

- 간단한 사용법

```javascript
fetch(url,options)
  .then((response) => console.log("response:",response)) //성공시
  .catch((error) => console.log('error:',error))  //실패시
```

- [추가공부활용](https://www.daleseo.com/js-window-fetch/)

### 정규표현식 사용한 filter

- \* g : 발생할 모든 pattern에 대한 전역 검색 / \* i : 대/소문자 구분 안함

```javascript
function findMatches(wordToMatch,cities) {
  return cities.filter(city => {
    // 2-1 정규 표현식으로 데이터 필터링하기
    const regex = new RegExp(wordToMatch,'gi');
    return city.city.match(regex) || city.state.match(regex)
  })
}
```

### 숫자 세자리마다 컴마 찍기

```javascript
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
```

### `...` 기능 : 비구조화 할당 문법

> 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식 
>
> -> 배열 혹은 객체 안의 값을 편하게 꺼내 쓴다!

- 배열

```javascript
[a1, a2, ...rest_a] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a1); // 1
console.log(a2); // 2
console.log(rest_a); // [3, 4, 5, 6, 7, 8, 9]
[a1, a2, ...rest_a, a3] = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // error
[a1, a2, ...rest_a] = {a1 : 10, a2: 20}; // error
```

- 객체

```javascript
var { a1, a2, ...rest_a } = { a1 : 10, a2 : 20, a3 : 30, a4 : 40 };
console.log(a1); // 10
console.log(a2); // 20
console.log(rest_a); // { a3: 30, a4: 40 }
```



- 비구조화 할당 문법

