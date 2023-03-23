function knightsTravails(){
    let gameBoard = []
    for (let i = 0; i < 8; i++){
        gameBoard[i] = []
       for (let j = 0; j < 8; j++) {
           gameBoard[i][j] = [i,j]
       }
    }
    let knight = [0,0]

    console.log(gameBoard[0][0], knight)

}
knightsTravails()
