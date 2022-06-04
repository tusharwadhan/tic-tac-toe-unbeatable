

var save = [0,1,2,3,4,5,6,7,8,9]
var score = [0,0]
var turn = 1;
var position = 1;
var first = 0;
var approach = 0;
var approach2 = 0;

function change(i){
    if(save[i]!= i ) return;

    if(first==0){
        switch (i) {
            case 1:first = 1;
                break;
            default:
                break;
        }
    }
    switch (first) {
        case 1:case_1(i);
            break;
    
        default:
            break;
    }
}

function case_1(i){
    changeBtn(i);
    winner();
    if(position == 2){
        computer(5)
        return;
    }

    //selecting which approach has to be executed
    if(approach==0){
        switch (i) {
            case 2:approach=1;
                break;
            case 3:approach=2;
                break;
            case 4:approach=3;
                break;
            case 6:approach=4;
                break;
            case 7:approach=5;
                break;
            case 8:approach=6;
                break;
            case 9:approach=7;
                break;
            default:
                break;
        }
    }

    //approach 1
    if(approach==1){
        switch (position) {
            case 4:computer(3)
                break;
            case 6:if(i!=7){computer(7);break;}
                computer(4)
                break;
            case 8:if(i!=6){computer(6);break;}
            computer(9)
                break;
            default:
                break;
        }
    }

    //approach 2
    else if(approach==2){
        switch (position) {
            case 4:computer(2)
                break;
            case 6:if(i!=8){computer(8);break;}
                computer(6)
                break;
            case 8:if(i!=4){computer(4);break;}
                computer(7)
                break;
            default:
                break;
        }
    }

    //approach 3
    else if(approach==3){
        switch (position) {
            case 4:computer(7)
                break;
            case 6:if(i!=3){computer(3);break;}
            computer(2)
                break;
            case 8:if(i!=8){computer(8);break;}
            computer(6)
                break;
            default:
                break;
        }
    }

    //approach 4
    else if(approach==4){
        if(position==4)computer(9);

        //finding which method has to be executed
        if(approach2==0){
            if(i==4)approach2 = 1;
            if(i==2)approach2 = 2;
            if(i==3)approach2 = 3;
            if(i==7)approach2 = 4;
            if(i==8)approach2 = 5;
        }

        //method 1
        if(approach2 == 1){
            switch (position) {
                case 6:computer(7);
                    break;
                case 8:if(i==3){computer(8);break;}
                    computer(3);
                    break; 
                default:
                    break;
            }
        }

        //method 2
        else if(approach2 == 2){
            switch (position) {
                case 6:computer(3);
                    break;
                case 8:if(i!=7){computer(7);break;}
                    computer(4);
                    break;
                default:
                    break;
            }
        }

        //method 3
        else if(approach2 == 3){
            switch (position) {
                case 6:computer(2);
                    break;
                case 8:if(i!=8){computer(8);break;}
                    computer(4);
                    break;
                default:
                    break;
            }
        }

        //method 4
        else if(approach2 == 4){
            switch (position) {
                case 6:computer(4);
                    break;
                case 8:if(i==2){computer(3);break;}
                    if(i==3){computer(2);break;}
                    computer(2);
                    break;
                default:
                    break;
            }
        }

        //method 5
        else if(approach2 == 5){
            switch (position) {
                case 6:computer(7);
                    break;
                case 8:if(i!=3){computer(3);break;}
                    computer(2);
                    break;
                default:
                    break;
            }
        }
    }

    //approach 5
    else if(approach==5){
        switch (position) {
            case 4:computer(4);
                break;
            case 6:if(i!=6){computer(6);break;}
                computer(2);
                break;
            case 8:if(i!=8){computer(8);break;}
                computer(9);
                break;
            default:
                break;
        }
    }

    //approach 6
    else if(approach==6){
        switch (position) {
            case 4:computer(6);
                break;
            case 6:if(i!=4){computer(4);break;}
                computer(7);
                break;
            case 8:if(i!=3){computer(3);break;}
                computer(2);
                break;
            default:
                break;
        }
    }

    //approach 7
    else if(approach==7){
        switch (position) {
            case 4:computer(2);
                break;
            case 6:if(i!=8){computer(8);break;}
                computer(7);
                break;
            case 8:if(i!=3){computer(3);break;}
                computer(6);
                break;
            default:
                break;
        }
    }

}

function winner(){
    if(save[1]==save[2] && save[2]==save[3] || save[4]==save[5] && save[5]==save[6] ||
       save[7]==save[8] && save[8]==save[9] || save[1]==save[4] && save[4]==save[7] ||
       save[2]==save[5] && save[5]==save[8] || save[3]==save[6] && save[6]==save[9] ||
       save[1]==save[5] && save[5]==save[9] || save[3]==save[5] && save[5]==save[7]){

        if(turn==1)document.getElementById('display').innerHTML = 'You win';
        document.getElementById('display').innerHTML = 'Computer Win';
        Disable(0);
        return;
    }
    if(save[1]!=1 && save[2]!=2 && save[3]!=3 && save[4]!=4 && save[5]!=5 && save[6]!=6
        && save[7]!=7 && save[8]!=8 && save[9]!=9){

        document.getElementById('display').innerHTML = '! DRAW !';
        Disable(1);
        return;
    }
    playerTurn();
    return;
}

function playerTurn(){
    if(turn == 1){
        turn = 2;
        document.getElementById('display').innerHTML = 'Computer Turn';
        return;
    }
    turn=1
    document.getElementById('display').innerHTML = 'Player 1 Turn';
    return;
}

function changeBtn(i){
    document.getElementById(i).innerHTML = 'X';
    save[i]='X';
    position++;
    return;
}

function computer(button){
    setTimeout(() => {
        document.getElementById(button).innerHTML = 'O';
        save[button]='O';
        position++;
        winner();
    }, 700);
}

function Disable(choice){
    for(let i=1;i<10;i++){
        document.getElementById(i).disabled = true;
    }

    document.getElementById('next').disabled = false;
    document.getElementById('next').style.backgroundColor = 'red';

    if(choice==0){
        if(turn == 1) return document.getElementById('score').innerHTML = 'Player1<'+ ++score[0] +'> Player2<'+ score[1] +'>';
        return document.getElementById('score').innerHTML = 'Player1<'+ score[0] +'> Player2<'+ ++score[1] +'>';
    }
}

function reset(choice){
    for(let i=9;i!=0;i--){
        document.getElementById(i).disabled = false;
        document.getElementById(i).innerHTML = '.';
        save[i]=i;
    }

    if(choice==0){
        document.getElementById('next').disabled = true;
        document.getElementById('next').style.backgroundColor = 'white';
        turn = 2;
        position = 1;
        approach = 0;
        approach2 = 0;
        first = 0;
        return playerTurn(turn);
    }

    if(choice == 1){
        document.getElementById('score').innerHTML = 'Player1<0> Player2<0>';
        score = [0,0];
        turn = 2;
        position = 1;
        approach = 0;
        approach2 = 0;
        first = 0;
        playerTurn(turn);
        document.getElementById('next').disabled = true;
        return document.getElementById('next').style.backgroundColor = 'white';
    }
}