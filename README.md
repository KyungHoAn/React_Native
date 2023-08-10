# React_Native
React Native

## SafeAreaView
=> 장치의 안전 영역 경계 내에서 콘텐츠를 렌더링

## KeyboardAvoidingView
=> keybord 를 피서 뷰 올라감 / 가상 키보드에서 벗어나야 하는 뷰의 일반적인 문제를 해결하기 위한 구성 요소

padding 은 키보드가 열렸을 때 뷰의 하단에 패딩을 설정
height 는 뷰의 높이 자체를 변경
position 은 뷰의 위치를 설정

## Pressable

## hitSlop
버튼 주변을 눌러도 버튼이 눌려진다.
button > hitRect > pressRect > pressRetentionOffset > hitSlop

## react-native-svg-transformer

## onSubmitEditing
버튼 클릭 이외에 엔터키로 Todo 생성하기 위해

## FlatList
- data :리스트들을 위한 데이터를 제공해줍니다(배열로 넣는다)

## Redux
- 자바스크립트 애플리케이션을 위한 상태관리 라이브러리
ㅇ Props
- properties의 줄임말
- Props는 구성 요소가 서로 통신하는 방법
- props는 상위 구성 요소에서 아래쪽으로 흐른다
- 해당 값을 변경하려면 자식 관점에서 Props를 변경 가능하며 부모는 내부 상태를 변경해야한다,.
ㅇ State
- parent component에서 child component로 data를 보내는게 아닌 그 component안에서 데이터를 전달하려면 State로

## Reducer
- 리듀서는 애플리케이션 상태의 변경 사항을 결정하고 업데이트된 상태를 반환하는 함수, 인수로 조취를 취하고 store내부의 상태를 업데이트 한다.

