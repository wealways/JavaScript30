# 4 Array Cardio

- 2020 12 24
- 학습 : JS에서 Array 관련 메서드!

## 배운 것

```javascript
const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }
    ]
```



### .filter()

> 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환

```javascript
//1 1500년대 생을 필터링합시다
const fifteen = inventors.filter(function(inventor){
    if(inventor.year>=1500 && inventor.year<1600){
        return true;
    }    
});

// 애로우 펑션쓰기
const fifteen = inventors.filter(inventor => {
    if(inventor.year>=1500 && inventro.year<1600){
        return true;
    }
})
// 더 줄여봐요
const fifteen = inventors.filter(inventor => (inventor.year>=1500 && inventor.year<1600));

```

### .map()

> 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

```javascript
// 위에 사람들의 성과 이름을 붙여서 나에게 주세요
const fullNms = inventors.map(inventor => `${inventor.first} ${invento.last}`)
```

### .sort()

>  배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환. (기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.)

- 기본

```javascript
// 오름차순
const ordered = inventors.sort(function(a,b) {
    if(a.year>b.year){
        return 1;
    }else if(a.year<b.year){
        return -1;
    }else{
        return 0;
    }
});

// 줄여보자
const ordered = inventors.sort((a,b) => a.year>b.year ? 1: a.year<b.year ? -1:0)
```

1, -1, 이거 순서가 이해가 안된다.. 그냥 외워야하나 오름차순하고 싶으면 a>b 일경우 1 이렇게...?

- 응용

```javascript
// 나이 기준으로 내림차순
const oldest = inventors.sort((a,b)=>{
    const A = a.passed - a.year;
    const B = b.passed - b.year;
    return A>B ? -1: A<B ? 1 : 0;
})
```

### .reduce()

> 배열의 각 요소에 대해 주어진 **리듀서**(reducer) 함수를 실행하고, 하나의 결과값을 반환!

`배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);`

- 기본

```javascript
// 위에 있는 사람들 모두 몇년을 살았을까요?
const totalYears = inventors.reduce((total,inventor)=>{
    return total + (inventor.passed - inventor.year);
},0)
```

- 응용

```javascript
// data count
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const transportation = data.reduce((obj,item) =>{
    if(!obj[item]){
        obj[item]=0
    }
    obj[item]++;
    return obj;
},{})
```

