
//2D array initialized with sample values. To get a blank board initialize all the values to zero
var board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var UP_ARROW = '38';
var DOWN_ARROW = '40';
var LEFT_ARROW = '37';
var RIGHT_ARROW = '39';

function printBoard(){

	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
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
	console.log("Loaded webpage"); //how you do print statements in javascript
});


//show students an ascii conversion tool. 
document.onkeydown = function(e){
	console.log(e.keyCode);

	if (e.keyCode == UP_ARROW) {
        // up arrow
        combineTilesUp();
        moveTilesUp();
    }
    //double equals sign will convert it for us 
    else if (e.keyCode == DOWN_ARROW) {
        // down arrow
         combineTilesDown();
         moveTilesDown();
    }
    else if (e.keyCode == LEFT_ARROW) {
       // left arrow
       combineTilesLeft();
       moveTilesLeft();
    }
    else if (e.keyCode == RIGHT_ARROW) {
       // right arrow
       combineTilesRight();
       moveTilesRight();
    } 
    addTile();
    printBoard();
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
    while(board[x][y] != 0){
        x = Math.round(Math.random()*3);
        y = Math.round(Math.random()*3);
    }

    board[x][y] = tile;

};

function combineTilesDown(){
    for(var r=0; r < board.length; r++)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(r!=0 && board[r][c] != 0 && board[r][c] == board[r-1][c])
            {
                board[r-1][c] = board[r][c]+board[r-1][c];
                board[r][c] = 0;
            }

        }
        
    }   

};

function combineTilesUp(){
    for(var r=board.length-1; r >= 0; r--)
    {
        for(var c=0; c<board[r].length; c++)
        {
            if(r != board.length-1 && board[r][c] != 0 && board[r][c] == board[r+1][c])
            {
                board[r+1][c] = board[r][c]+board[r+1][c];
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
            if(r != board.length-1  && board[r][c] != 0 && board[r+1][c] == 0)
            {
                board[r+1][c] = board[r][c];
                board[r][c] = 0;

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
            if(r != 0  && board[r][c] != 0 && board[r-1][c] == 0)
            {
                board[r-1][c] = board[r][c];
                board[r][c] = 0;
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
            if(c != 0  && board[r][c] != 0 && board[r][c-1] == 0)
            {
                board[r][c-1] = board[r][c];
                board[r][c] = 0;
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
            if(c != board[r].length-1  && board[r][c] != 0 && board[r][c+1] == 0)
            {
                board[r][c+1] = board[r][c];
                board[r][c] = 0;
                console.log(board[r][c]);
            }

            
        }
        
    }   
    
}


