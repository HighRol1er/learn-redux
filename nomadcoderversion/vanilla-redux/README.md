# Vanilla Redux 

1. createStore : 저장소 

2. Reducer : data를 modify하는 순수 함수
함부로 state를 변경하는게 아닌 Action을 통해서만 가능하다.

reducer를 통해서 return되는 것은 무엇이든지 state가 된다.
```
const reducer = (currentState, action) => {

}
```
parameter로는 `state`, `action`을 받음

3. Action : data를 직접적으로 변경 시킬 수 있는 object(객체) 
`{ type : "something"}`으로 작성된다. 
`type`필드를 통해서 어떤 일이 일어날지 설명한다.

reducer에게 action을 보내는 방법은 dispatch를 통해서 보낸다.

4. TIP 
action의 `type: "something"` value 값을 상수로 선언해주면 에러 발견시 디버깅 쉽다. 
```
const SOMETHING = "something"

{type: SOMETHING}