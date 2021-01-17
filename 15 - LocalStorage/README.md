# 15. LocalStorage

- 2021 01 17
- 학습 : 투두리스트 만들기 + localstorage 사용하기

![15](../image/15.gif)

## 배운점

### JSON 사용하기

`JSON.stringfy(array)` : 오브젝트를 json 스트링으로 만들어줌

`JSON.parse(json)` : json 스트링을 JS에서 사용하는 오브젝트로 파싱해줌

### localStorage

 로컬 스토리지의 데이터는 사용자가 지우지 않는 이상 계속 브라우저에 남아 있음.

`localStorage.setItem('items',JSON.stringify(items));`

`JSON.parse(localStorage.getItem('items'));`

### e.preventDefault

html에서 `e`태그나 `submit` 태그는 고유의 동작이 있는데 이걸 막아주는 기능임.

### formObject.reset()

`form` 태그 내에 입려된 데이터를 초기화 합니다.

