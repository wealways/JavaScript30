# 3 CSS Variables

- 2020 12 22
- 학습 : CSS의 변수를 활용해서 css 업데이트하기

## 배운 것

### [:root](https://developer.mozilla.org/ko/docs/Web/CSS/:root)

> 문서의 최상위 요소, 가상의 클래스,  css에서 전역변수를 만드는 데 사용할 수 있다.[사용자 지정 속성](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties)

```html
<label for="spacing">Spacing:</label>
<input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">
<img src="..">
```

```css
:root {
      --spacing:10px;
    }

img {
    padding: var(--spacing);
}
```

많은 값을 반복적으로 사용할 때, 필연적으로 대규모로 바꿀 경우 불편한 점을 야기할 수 있다. 이 때 편하게 하려면 전역변수를 만들어놓고 이것만 바꾸면 해결가능! 그래서 다음과 같은 방법을 사용하는 것이다~__~

### [dataset](https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%86%8D%EC%84%B1_%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)

> `data-*` 속성은 표준이 아닌 속성이나 추가적인 DOM 속성을 조작하지 않고도 의미론적 표준 HTML 요소에 추가 정보를 저장할 수 있게 해줍니다!!

```html
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
...
</article>
```

 ```javascript
var article = document.getElementById('electriccars');

article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"
 ```

### || & setProperty()

> || 은 열 결합자, setProperty()는 css값 재할당해주는 것!

```javascript
const suffix = this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
```

- this.dataset.sizing이 없으면 '' 빈칸을 할당하자
- `documentElement` 는document의 루트 요소인 Element를 리턴 한다 즉 \<html\> , :root를 셀릭팅한다.
- `setProperty()` 는 CSS속성 재할당한다.

### change, mousemove 이벤트

`change` : 마우스의 움직임이 끝나는 순간에 이벤트 발생

`mousemove` : 마우스가 움직이는 순간순간 이벤트 발생

