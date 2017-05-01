"use strict"
// TODO: IF the user add more instructions than needed, the user wins anyways
// let path = [ "20", "21", "31", "32", "33", "23", "24" ];
// let moves = [ "arrow-right", "arrow-down", "arrow-right", "arrow-right", "arrow-up", "arrow-right" ];
let path = [ "00", "01", "02", "03", "04" ];
let moves = [ "arrow-right", "arrow-right", "arrow-right", "arrow-right" ]
let validMoves = {
     "arrow-right": 1,
     "arrow-left": -1,
     "arrow-up": -10,
     "arrow-down": 10
};
function testCode(path, moves) {
    debugger;
    if (path.length > 1 && moves.length > 0) {
        let start = path[0];
        let next = path[1];
        let move = moves[0];
        let difference = next - start; // TODO: String???
        if (validMoves[move] === difference) {
            console.log("good move");
            let newPath = path.splice(1);
            let newMoves = moves.splice(1);
            testCode(newPath, newMoves);
        } else {
            console.log("bad move");
            console.log("you lost");
            return;
        }
    } else {
        console.log("You own");
        return;
    }
}
testCode(path, moves);
