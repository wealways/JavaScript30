# 13. Slide in on Scroll

- 2021 01 12
- 학습: 스크롤 내리는 걸 감지는 마법!

![13](../image/13.gif)



## 배운점

### debounce 함수

> 일정한 wait마다 함수를 불러오기 (함수 빈도 조절하기)

이걸 쓴 이유는 스크롤을 탐지할때마다 function을 불러오려니까, 엄청 많은 함수가 발생.. Y축이 바뀔때마다 불러내서.. 그래서 Y축이 계속 바껴도 일정 시간마다 함수를 불러오기 위해 debounce함수를 사용

```javascript
function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
```



근데 앞서 배운 Throttle이랑 비슷한 기능인거 같다. 그 차이가 뭘까?? 따로 정리를 해야겠다!!



### 스크롤 내릴때마다 이미지 나오게 하기

```javascript
function checkSlide(e) {
      // console.count(e)
      // 두개의 차이가 뭘까요 첫번째는 전체Y값에서 내 화면이 어느정도 인 지 알려주는 것
      // 두개의 차이가 뭘까요 두번째는 고정된 내 그냥 화면 높이를 알려주는 것!
      // console.log(window.scrollY)
      // console.log(window.innerHeight)
      sliderImages.forEach(sildeImage => {
        const slideInAt = (window.scrollY+window.innerHeight) - sildeImage.height/2;
        // offsetTop 이 뭘까요? 전체높이에서 내 이미지가 얼마나 떨어져 있는 지 알려주는 것!
        const imageBottom = sildeImage.offsetTop + sildeImage.height;
        const isHalfShown = slideInAt > sildeImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast) {
          sildeImage.classList.add('active');
        }else{
          sildeImage.classList.remove('active');
        }
      })
    }
```

`window.scrollY` : 전체 Y값에서 내 화면이 어느 위치에 있는 지 알려주는 것

`windowinnerHeight` : 내 브라우저의 높이를 알려주는 것

`offsetTop` : 제일 위에서 내 이미지가 얼마나 떨어져 있는 지

그래서

`slideInAt` 은 이미지의 절반위치에 해당하면 이미지가 나오게 하기 위한 변수

`imageBottom` 은 내 이미지의 가장 아래부분까지의 Y값 

### CSS / box-sizing : inherit 

> 박스의 크기를 어떤 것을 기준으로 계산할지를 정하는 속성

- content-box : 콘텐트 영역을 기준으로 크기를 정합니다.
- border-box : 테두리를 기준으로 크기를 정합니다.
- initial : 기본값으로 설정합니다.
- inherit : 부모 요소의 속성값을 상속받습니다.

