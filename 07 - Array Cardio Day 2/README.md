# 7. Array Cardio 2

- 2021 01 02
- 학습 : 배열 처리 메서드

<br>

## 배운점

### `array.prototype.some()` , `array.prototype.every()`

> 임의의 규칙에 배열이 일부 해당하는 지 또는 전부 해당하는 지 파악할 때 사용함

ex) 사람들 배열에서 어른이 있냐?

```javascript
const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
	];

const isAdult = people.some(person => (new Date()).getFullYear() - person.year >= 19)
const isEveryAdult = people.every(person => (new Date()).getFullYear() - person.year >= 19)
```

### `array.prototype.find()`, `array.prototype.findIndex()`

> filter와 비슷할 수 있는데 이건 오로지 하나만 return합니다!!

ex) find the comment with the ID of 823423

```javascript
const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

const comment = comments.find(comment => comment.id === 823423);
const idx = comments.findIndex(comment => comment.id === 823423);
```

### 배열에서 데이터 삭제하는 법

```javascript
const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

const idx = comments.findIndex(comment => comment.id === 823423)
```

- splice

```javascript
comments.splice(idx,1)
console.table(comments)
```

- new Array

```javascript
const newComments = [
    ...comments.slice(0,idx),
    ...comments.slice(idx+1)
]
console.log(newComments)
```

