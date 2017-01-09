
//2D array initialized with sample values. To get a blank board initialize all the values to zero
var board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var UP_ARROW = '38';
var DOWN_ARROW = '40';
var LEFT_ARROW = '37';
var RIGHT_ARROW = '39';
var emptySpaces = false;
var combinations = false;
var score = 0;
var newScore = 0;
var winScore = 2048;
var win = false;

function printBoard(){
	document.getElementById("scoreboard").innerHTML = "Score: " + score + "";
	document.getElementById("scoreboard").style.color = "#A7998C";
    document.getElementById("winScore").style.color = "#A7998C";
    document.getElementById("winScore").innerHTML = "Goal: " + winScore + "";

	for(var i = 0; i < board.length; i++){
		for(var j = 0; j < board.length; j++){
			var boardID = "r"+i+"c"+j;
			//if the tile is not zero, put it on the board 
				document.getElementById(boardID).innerHTML = board[i][j];
			//Change the different number tiles to different colors
			switch(board[i][j]){
				case 0:
					document.getElementById(boardID).style.color = "#CDC1B5";
					document.getElementById(boardID).style.background = "#CDC1B5";
					break;
				case 2:
					document.getElementById(boardID).style.color = "#ffffff";
					document.getElementById(boardID).style.background = "#f0e5da";
					break;//similar to an else if. Makes sure none of the other cases executes if this one does
				case 4:
				document.getElementById(boardID).style.color = "#ffffff";
					document.getElementById(boardID).style.background = "#ede2c8";
					break;
				case 8:
					document.getElementById(boardID).style.color = "#ffffff";
					document.getElementById(boardID).style.background = "#feb578";
					break;
				case 16:
					document.getElementById(boardID).style.color = "#ffffff";
					document.getElementById(boardID).style.background = "#ff9962";
					break;
				case 32:
					document.getElementById(boardID).style.color = "#ffffff";
					document.getElementById(boardID).style.background = "#ff8060";
					break;
				case 64:
					document.getElementById(boardID).style.color = "#ffffff";
					document.getElementById(boardID).style.background = "#ff613c";
					break;
				case 128:
					document.getElementById(boardID).style.color = "#ffffff";
					document.getElementById(boardID).style.background = "#efd26d";
					break;
				case 256:
					document.getElementById(boardID).style.color = "#ffffff";
					document.getElementById(boardID).style.background = "#efd15c";
					break;
				case 512:
					document.getElementById(boardID).style.color = "#ffffff";
					document.getElementById(boardID).style.background = "#efcd4a";
					break;
				case 1024:
					document.getElementById(boardID).style.color = "#ffffff";
					document.getElementById(boardID).style.background = "#f0ca36";
					break;
				case 2048:
					document.getElementById(boardID).style.color = "#ffffff";
					document.getElementById(boardID).style.background = "#ccc0b3";
					break;
                case 4096:
                    document.getElementById(boardID).style.color = "#ffffff";
                    document.getElementById(boardID).style.background = "#5AF7EE";
                    break;
                case 8192:
                    document.getElementById(boardID).style.color = "#ffffff";
                    document.getElementById(boardID).style.background = "#79FD69";
                    break;
                case 16384:
                    document.getElementById(boardID).style.color = "#ffffff";
                    document.getElementById(boardID).style.fontSize = 24;
                    document.getElementById(boardID).style.background = "#000000";
                    break;
                case 32768:
                    document.getElementById(boardID).style.color = "#ffffff";
                    document.getElementById(boardID).style.fontSize = 24;
                    document.getElementById(boardID).style.background = "#FAF616";
                    break;
				default:
					//similar to the else statement. If none of the other cases execute, this statement will execute
			}
		}
	}
}

//As soon as webpage loads run these two functions
$(document).ready(function(){
	addTile();
	printBoard();
});


//show students an ascii conversion tool. 
document.onkeydown = function(e){

	if (e.keyCode == UP_ARROW) {
        // up arrow
        moveTilesUp();
        combineTilesUp();
        moveTilesUp(); // moves over any other tiles to fill spaces that might've been opened up from combining tiles
    }
    //double equals sign will convert it for us 
    else if (e.keyCode == DOWN_ARROW) {
        // down arrow
        moveTilesDown();
         combineTilesDown();
         moveTilesDown();
    }
    else if (e.keyCode == LEFT_ARROW) {
       // left arrow
       moveTilesLeft();
       combineTilesLeft();
       moveTilesLeft();
    }
    else if (e.keyCode == RIGHT_ARROW) {
       // right arrow
       moveTilesRight();
       combineTilesRight();
       moveTilesRight();
    } 
    check4thewin();
    if(win == true){
        window.alert("Congratulations! Your next goal is " + winScore);
        win = false;
    }
    emptySpaceLeft();
    checkAllTheCombinations();
    if(combinations == false && emptySpaces == false){      
        window.alert("U lost man");
        for(var r=board.length-1; r >= 0; r--) {
            for(var c=0; c<board[r].length; c++){
                 board[r][c] = 0;
             }
        emptySpaces = true;
        }
    }   
    printBoard();
    if(emptySpaces == true){
    	addTile();
	}
    printBoard();
   

}


function updateScore(newScore){
	score+=newScore;
}
function check4thewin(){
checkwinUp();
    if(win == false){
        checkwinDown();
        if(win == false){
            checkwinRight();
            if(win == false){
                checkwinLeft();
            }
        }
    } 
}
function checkwinUp(){

    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(r!=0 && board[r][c] != 0 && board[r][c] == winScore)
            {
                win = true;
                winScore+=winScore;
            }
        }
        
    }
};

function checkwinDown(){   

    for(var r=board.length-1; r >= 0; r--)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(r != board.length-1 && board[r][c] != 0 && board[r][c] == winScore)
            {
                win = true;

            }

        }
        
    }
};   

function checkwinRight(){
    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c < board[r].length-1; c++)
        {
            if(c != board[r].length-1 && board[r][c] != 0 && board[r][c] == winScore)
            {
                win = true;
            } 

        }
        
    }  
};
     
function checkwinLeft(){
    for(var r=0; r < board.length; r++)
    {
        for(var c=board[r].length-1; c >= 0; c--)
        {
            if(c != 0 && board[r][c] != 0 && board[r][c] == winScore)
            {
                win = true;
            }

        }
            
    }   
};

function emptySpaceLeft(){
	for(var r=board.length-1; r >= 0; r--)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(board[r][c] == 0){
            	emptySpaces = true;
            	break;
            } else {
            	emptySpaces = false;
            }


        }
        
    }   
};

function checkAllTheCombinations(){
	combinations = false;
	combinationsUp();
	if(combinations == false){
		combinationsDown();
		if(combinations == false){
			combinationsRight();
			if(combinations == false){
				combinationsLeft();
			}
		}
	} 
};
function combinationsUp(){

    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(r!=0 && board[r][c] != 0 && board[r][c] == board[r-1][c])
            {
                combinations = true;
            }
        }
        
    }
};

function combinationsDown(){   

    for(var r=board.length-1; r >= 0; r--)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(r != board.length-1 && board[r][c] != 0 && board[r][c] == board[r+1][c])
            {
                combinations = true;

            }

        }
        
    }
};   

function combinationsRight(){
	for(var r=0; r < board.length; r++)
    {
        for(var c=0; c < board[r].length-1; c++)
        {
            if(c != board[r].length-1 && board[r][c] != 0 && board[r][c] == board[r][c+1])
            {
                combinations = true;
            } 

        }
        
    }  
};
     
function combinationsLeft(){
	for(var r=0; r < board.length; r++)
	{
        for(var c=board[r].length-1; c >= 0; c--)
        {
            if(c != 0 && board[r][c] != 0 && board[r][c] == board[r][c-1])
            {
                combinations = true;
            }

        }
	        
	}   
};


function addTile() {
    var x = Math.round(Math.random()*3);
    var y = Math.round(Math.random()*3);
    var numbers = [2,4];
    var tile = numbers[Math.floor(Math.random() * numbers.length)];
    if(Math.random()<0.8){
        tile = 2;
    } else {
        tile = 4;
    }
    if(emptySpaces == true){
	    while(board[x][y] != 0){
	        x = Math.round(Math.random()*3);
	        y = Math.round(Math.random()*3);
	    }
	}
    board[x][y] = tile;

};

function combineTilesUp(){
    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(r!=0 && board[r][c] != 0 && board[r][c] == board[r-1][c])
            {
                board[r-1][c] = board[r][c]+board[r-1][c];
                updateScore(board[r-1][c]);
                board[r][c] = 0;
            }

        }
        
    }   

};

function combineTilesDown(){
    for(var r=board.length-1; r >= 0; r--)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(r != board.length-1 && board[r][c] != 0 && board[r][c] == board[r+1][c])
            {
                board[r+1][c] = board[r][c]+board[r+1][c];
                updateScore(board[r+1][c]);
                board[r][c] = 0;

            }

        }
        
    }   

};

function combineTilesLeft(){
    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c < board[r].length-1; c++)
        {
            if(c != board[r].length-1 && board[r][c] != 0 && board[r][c] == board[r][c+1])
            {
                board[r][c] = board[r][c]+board[r][c+1];
                updateScore(board[r][c]);
                board[r][c+1] = 0;
            }

        }
        
    }   

};

function combineTilesRight(){
    for(var r=0; r < board.length; r++)
    {
        for(var c=board[r].length-1; c >= 0; c--)
        {
            if(c != 0 && board[r][c] != 0 && board[r][c] == board[r][c-1])
            {
                board[r][c] = board[r][c]+board[r][c-1];
                updateScore(board[r][c]);
                board[r][c-1] = 0;
            }

        }
        
    }   

};
function moveTilesDown()
{
    
    for(var r = board.length-1; r >= 0; r--)
    {
        for(var c=0; c<board[r].length; c++)
        {
            while(r != board.length-1  && board[r][c] != 0 && board[r+1][c] == 0)
            {
                board[r+1][c] = board[r][c];
                board[r][c] = 0;
                r++;
            }
            
        }
        
    }   
    
};
function moveTilesUp()
{
    
    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
            while(r != 0  && board[r][c] != 0 && board[r-1][c] == 0)
            {
                board[r-1][c] = board[r][c];
                board[r][c] = 0;
                r--;
            }

        }
        
    }   
    
};

function moveTilesLeft()
{
    
    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
            while(c != 0  && board[r][c] != 0 && board[r][c-1] == 0)
            {
                board[r][c-1] = board[r][c];
                board[r][c] = 0;
                c--;
            }
            
        }
        
    }   
    
};
function moveTilesRight()
{
    
    for(var r=0; r < board.length; r++)
    {
        for(var c=board[r].length; c>=0; c--)
        {
            while(c != board[r].length-1  && board[r][c] != 0 && board[r][c+1] == 0)
            {
                board[r][c+1] = board[r][c];
                board[r][c] = 0;
                //console.log(board[r][c]);
                c++;
            }

            
        }
        
    }   
    
}


