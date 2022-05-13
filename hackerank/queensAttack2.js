
// function queensAttack(boardSize, numOfObsticles, row, col, obstacles) {





// }
// console.log(queensAttack(5,3,4,3,[[5, 5], [4, 2], [2, 3]]))//10
// console.log(queensAttack(4,0,4,4))//9
// console.log(queensAttack(8,0,5,4)) //27
// console.log(queensAttack(100000,0,4187,5068,[])) //308369
// console.log(queensAttack(100000,0,4187,5068,[])) //308369














function queensAttack(n, k, r_q, c_q, obstacles) {
    let count = 0

    function minusObsticles(horizontal, verticle, obstacles){
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i][0] === horizontal && obstacles[i][1] === verticle){
            return true ;
            }
        }
    }

    function DiagnolUpRight(k, horizontal, verticle, boardSize, obstacles){

        while(horizontal < boardSize +1 && verticle < boardSize +1 ){
            if(k > 0){
                if(minusObsticles(horizontal, verticle, obstacles) === true){
                    break;
                }
                count++
                horizontal++
                verticle++
            }else{
                count++
                horizontal++
                verticle++
            }
        }
    }
    DiagnolUpRight(k, r_q, c_q, n, obstacles)

    function DiagnoldownRight(k, horizontal, verticle, boardSize, obstacles){

        while(horizontal < boardSize +1 && verticle > 0){
            if(k > 0){
                if(minusObsticles(horizontal, verticle, obstacles) === true){
                    break;
                }
                count++
                horizontal++
                verticle--
    
            }else{
                count++
                horizontal++
                verticle--
            }
        }
    }
    DiagnoldownRight(k, r_q, c_q, n,obstacles)

    function DiagnolUpLeft(k, horizontal, verticle, boardSize, obstacles){

        while(horizontal > 0 && verticle < boardSize +1 ){
            if(k > 0){
                if(minusObsticles(horizontal, verticle, obstacles) === true){
                    break;
                }
                count++
                horizontal--
                verticle++
            }else{
                count++
                horizontal--
                verticle++
    
            }
        }
    }
    DiagnolUpLeft(k, r_q, c_q, n, obstacles)

    function DiagnolDownLeft(k, horizontal, verticle, obstacles){

        while(horizontal > 0 && verticle > 0){
            if(k > 0){
                if(minusObsticles(horizontal, verticle, obstacles) === true){
                    break;
                }
                count++
                horizontal--
                verticle--
            }else{
                count++
                horizontal--
                verticle--
    
            }
        }
    }
    DiagnolDownLeft(k, r_q, c_q, obstacles)

    function VerticleUp(k, horizontal, verticle, boardSize, obstacles){
        while(verticle < boardSize+1){
            if(k > 0){
                if(minusObsticles(horizontal, verticle, obstacles) === true){
                    break;
                }
                count++
                verticle++
            }else{
                count++
                verticle++
            }
        }
    }
    VerticleUp(k, r_q, c_q, n, obstacles )

    function VerticleDown(k, horizontal, verticle, obstacles){

        while(verticle > 0){
            if(k > 0){
                if(minusObsticles(horizontal, verticle, obstacles) === true){
                    break;
                }
                count++
                verticle--
    
            }else{
                count++
                verticle--
            }
        }

    }
    VerticleDown(k, r_q, c_q, obstacles)

    function horizontalLeft(k, horizontal,verticle, obstacles){

        while(horizontal > 0){
            if(k > 0){
                if(minusObsticles(horizontal, verticle, obstacles) === true){
                    break;
                }
                count++
                horizontal--
            }else{
                count++
                horizontal--
    
            }
        }
    }
    horizontalLeft(k, r_q,c_q, obstacles)

    function horizontalRight(k, horizontal,verticle, boardSize,obstacles){

        while(horizontal < boardSize+1){
            if(k > 0){
                if(minusObsticles(horizontal, verticle, obstacles) === true){
                    break;
                }
                horizontal++
                count++
    
            } else{
                horizontal++
                count++
    
            }
        }

    }
    horizontalRight(k, r_q,c_q, n, obstacles)

    return count - 8
}
// console.log(queensAttack(5,3,4,3,[[5, 5], [4, 2], [2, 3]]))//10
// console.log(queensAttack(4,0,4,4))//9
// console.log(queensAttack(8,0,5,4)) //27
// console.log(queensAttack(100000,0,4187,5068,[])) //308369
// console.log(queensAttack(100000,0,4187,5068,[])) //308369
