function Cell() {
    this.isMine = false;
    this.isRevealed = false;
    this.flag = false;
    this.adjacentMines = 0;
}

//Cell()을 이용해 rows cols 만큼의 2차원배열 생성 후 리턴
function createMinefield(rows, cols) {
    let array = new Array(rows);
    for (let i = 0; i < rows; i++) {
        array[i] = new Array(cols);
        for (let j = 0; j < cols; j++) {
            array[i][j] = new Cell();
        }
    }
    return array;
}

//cell의 수 만
function randomChooser(num, minenum) {
    let numbers = Array.from({length: num}, (_, index) => index);

    // Fisher-Yates 알고리즘을 사용하여 배열 셔플링
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];  // 요소 교환
    }

    // 셔플된 배열에서 첫 4개의 숫자 선택
    let randomNumbers = numbers.slice(0,minenum ).sort((a,b)=>a-b);

    console.log(randomNumbers);
    return randomNumbers;
}

//randomChooser 함수로 골라진 지뢰 위치에 지뢰를 매설하는 함수
function fillMine(arr, minenum = 4){
    let arr_row=arr.length;
    let arr_col = arr[0].length;
    let cell_num =  arr_col*arr_row;
    let rand_arr=randomChooser(cell_num, minenum);
    for (let i = 0; i<minenum; i++){
        //console.log("i:"+i+'row'+Math.floor(rand_arr[i]/arr_row)+":"+rand_arr[i]%arr_row);
        arr[Math.floor(rand_arr[i]/arr_row)][rand_arr[i]%arr_row].isMine = true;
    }
    console.log(arr);
}
const a = createMinefield(10,10);
fillMine(a, 30);
function handleCellClick(event) {
    const cell = event.target;
    const row = cell.getAttribute('data-row');
    const col = cell.getAttribute('data-col');
    console.log(`Clicked cell at row ${row}, col ${col}`);
    
    if(a[row][col].isMine){//지뢰면 끝
        //끝코드 r
    }
    else{//지뢰가 아닐경우
        cell.textContent = a[row][col].adjacentMines;
    }
}
adjacentMines(a,10,10);
function adjacentMines(mines,numRows=4,numCols=4){
    for(let i = 0;i < numRows;i++){
        for(let j = 0;j < numCols;j++){
            if (!mines[i][j].isMine){
                countMine(i,j,mines,numRows,numCols);
                console.log("adjacentMines: "+mines[i][j].adjacentMines);
            }
            else{
                mines[i][j].adjacentMines = -1;
                continue;
            }
        }
    }
}
function countMine(row,col,mines,numRows,numCols){
    const dxy = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    dxy.forEach(([dx, dy]) => {
        const newRow = row + dx;
        const newCol = col + dy;
        // Check if the new position is within the bounds of the board
        if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols){
            if (mines[newRow][newCol].isMine){
                mines[row][col].adjacentMines += 1;
            }
        }
    });
}

function left_Click(){

}

function right_Click(cell){



}