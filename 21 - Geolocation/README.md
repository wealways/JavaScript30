# 21. Speech Detection

- 2021 02 25
- 자바스크립트 geolocation 활용하기

![](C:\Users\multicampus\Desktop\SJ\JavaScript30\image\21.png)

## 배운점

위도경도속도 파악하기!! 

그런데 mac에서만 테스트해볼 수 있어서 사용하는 방법에서 만족..

### `navigator.geolocation` 사용법

```javascript
navigator.geolocation.watchPosition((data)=>{
      console.log(data);
      speed.text = data.coords.speed;
      arrow.style.transform = `rotate(${data.coords.heading})`
    },
    (err)=>{
      console.error(err);
      console.log('HEY!!')
    });
```

`navigator.geolocation.watchPosition` : 현재 위치 속도 등의 값을 알려주는 듯!

`coords` 안에 다들어있다!!