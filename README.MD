# MINEFINDER
프로젝트명: 지뢰찾기

저희 팀은 지뢰찾기를 구현해보기로 했습니다.

## 역할 분담..
이은재 : JavaScript - Timer, reset, 남은 지뢰 count 함수 구현
박수빈 : JavaScript - 지뢰판 만들기, 클릭이벤트함수
서석현 : Html + CSS

## 어려웠던 점
익숙하지 않아 그렇겠지만 PR의 base를 잘못 설정하면서 꼬이기 시작했습니다.
많이 써보고 겪어 봐야겠습니다.

# 함수
```

function Cell() //지뢰칸 생성 및 초기화

function createMinefield(rows, cols) //Cell()을 이용해 rows cols 만큼의 2차원배열 생성 후 리턴

function randomChooser(num, minenum) //num = 지뢰보드의 칸수, minenum= 지뢰의 개수
//지뢰의 개수의 따라 랜덤하게 배열에 담아 리턴해준다.

function fillMine(arr, minenum = 4)//입력: 보드판, 지뢰개수 randomChooser 함수로 골라진 지뢰 위치에 지뢰를 매설하는 함수

function handleCellClick(event) //클릭이벤트 발생 시 해당 cell의 row와 Col을 통해 칸의 이벤트 처리

function adjacentMines(mines,numRows=4,numCols=4) //인접 지뢰의 개수를 cell의 속성에 저장

function countMine(row,col,mines,numRows,numCols) //adjacentMines를 위해 해당 셀의 주변을 순회할 수 있는 함수




```
