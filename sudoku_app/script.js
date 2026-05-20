const board = document.getElementById("board");
const timerElement = document.getElementById("timer");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");
const puzzle = [
  [5,3,"","",7,"","","",""],
  [6,"","",1,9,5,"","",""],
  ["",9,8,"","","","",6,""],
  [8,"","","",6,"","","",3],
  [4,"","",8,"",3,"","",1],
  [7,"","","",2,"","","",6],
  ["",6,"","","","",2,8,""],
  ["","","",4,1,9,"","",5],
  ["","","","",8,"","",7,9]
];
const originalPuzzle = JSON.parse(JSON.stringify(puzzle));
console.log(originalPuzzle);
let seconds = 0;
let timer;
function startTimer(){
    timer = setInterval(() => {
        seconds++;
        let mins = Math.floor(seconds / 60);
        let secs = seconds % 60;
        mins = mins < 10 ? "0" + mins : mins;
        secs = secs < 10 ? "0" + secs : secs;
        timerElement.innerText = `${mins}:${secs}`;
    },1000);
}
function createBoard(){
    board.innerHTML = "";
    for(let row = 0; row < 9; row++){
        for(let col = 0; col < 9; col++){
            const input = document.createElement("input");
            input.type = "text";
            input.maxLength = 1;
            input.classList.add("cell");
            if(puzzle[row][col] !== ""){
                input.value = puzzle[row][col];
                input.disabled = true;
                input.classList.add("fixed");
            }
            input.addEventListener("input", () => {
                validateInput(input, row, col);
            });
            board.appendChild(input);
        }
    }
}
function validateInput(input, row, col){
     nb

    const value = input.value;

    input.classList.remove("invalid");

    if(value < 1 || value > 9){

        input.classList.add("invalid");
        return;
    }

    if(isDuplicate(value, row, col)){

        input.classList.add("invalid");

    }

    checkWin();
}

/* ================= DUPLICATE CHECK ================= */

function isDuplicate(value, row, col){

    const cells = document.querySelectorAll(".cell");

    // Row Check
    for(let c = 0; c < 9; c++){

        if(c !== col){

            const index = row * 9 + c;

            if(cells[index].value == value){

                return true;
            }
        }
    }

    // Column Check
    for(let r = 0; r < 9; r++){

        if(r !== row){

            const index = r * 9 + col;

            if(cells[index].value == value){

                return true;
            }
        }
    }

    return false;
}
function checkWin(){
    const cells = document.querySelectorAll(".cell");
    for(let cell of cells){
        if(cell.value === "" || cell.classList.contains("invalid")){
            return;
        }
    }
    clearInterval(timer);
    message.innerText = "🎉 You Solved the Sudoku!";
}

resetBtn.addEventListener("click", () => {

    clearInterval(timer);

    seconds = 0;

    timerElement.innerText = "00:00";

    message.innerText = "";

    for(let i=0;i<9;i++){

        for(let j=0;j<9;j++){

            puzzle[i][j] = originalPuzzle[i][j];

        }
    }

    createBoard();

    startTimer();
});

/* ================= START ================= */

createBoard();
startTimer();