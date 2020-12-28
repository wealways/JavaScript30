# 5. Flex Panel Gallery

- 2020 12 28
- 학습 : flex 화면 애니메이션!



## 배운것

### flex 균등하게 분배하기

- 복습

```css
/* 가운데 정렬 */
{
    display: flex;
	justify-content: center;
	align-items: center;
}

```

- 균등하게 flex box 크기 나누기

```javascript
{
    flex:1;
}
```

### transform : translateY

```css
.panels {
    overflow:hidden; /* 넘치는 컨텐츠는 현재 화면에서 안보이게 만들기!*/
}
.panel {
    transform:translateY(-100%); /* 화면 위로 보내버리기*/
}
.panel.active {
    transform:TranslateY)(0); /* 원래자리로 올아오게하기*/
}
```

### transitionend 복습

- propertyName.inculdes('변하는 css') : 이렇게 해줌으로써 내가 원하는게 변하면 그다음 것도 변하게 만들어 줄 수 있다,

```javascript
const panels = document.querySelectorAll('.panel');
function activeToggle(e){
    if(e.propertyName.includes('flex')){
        e.classList.toggle('active')
    }
}
panels.forEach(panel => panel.addEventListener('transitionend',activeToggle))
```

