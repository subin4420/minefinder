// timer
let timerID;
let time = 0;
const stopwatch = document.getElementById("stopwatch"); // 여기에 stopwatch ID 설정해서 넣으면 될 듯
let hour, min, sec;

function printTime(){
    time ++ ;
    stopwatch.innerText = getTimeFormatString();
}

function startClock(){
    printTime();
    stopClock();
    timerID = setTimeout(startClock,1000);
}

function stopClock(){
    if(timerID != null){
        clearTimeout(timerID);
    }
}

function resetClock(){
    stopClock();
    stopwatch.innerText = "00:00:00";
    time = 0;
}

function getTimeFormatString(){
    hour = parseInt(String(time/(60*60)));
    min = parseInt(String((time - (hour*60*60))/60));
    sec = time % 60;

    return String(hour).padStart(2,'0') + ":" + String(min).padStart(2,'0') + ":" + String(sec).padStart(2,'0');
}

// 주변 지뢰 카운팅(8방향)


let mines = [[0,0,0,0],["bomb",0,0,0],[0,"bomb",0,0],[0,0,0,0]];

function create2DArray(rows, columns) {
    var arr = new Array(rows);
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
    }
    return arr;
}

let numRows = 4;
let numCols = 4;
let board = Array.from(Array(numRows), ()=> Array(numCols).fill(0));
 
console.log(board);

for(let i = 0;i < numRows;i++){
    for(let j = 0;j < numCols;j++){
        if (mines[i][j] == "bomb"){
            countMine(i,j);
        }
        else{
            continue;
        }
    }    
}
console.log(board);

function countMine(row,col){
    const dxy = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    dxy.forEach(([dx, dy]) => {
        const newRow = row + dx;
        const newCol = col + dy;
        
        // Check if the new position is within the bounds of the board
        if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols){
            if (mines[newRow][newCol] != 'bomb'){
                board[newRow][newCol] += 1;
            }
            else if(mines[newRow][newCol] == 'bomb'){
                board[newRow][newCol] = 'bomb';
            }
            
        }
        
    });
    return board
}


// reset(랜덤으로 지뢰 설정하는 것)



