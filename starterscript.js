var grid = [];
var UP_ARROW = '38';
var DOWN_ARROW = '40';
var LEFT_ARROW = '37';
var RIGHT_ARROW = '39';
var emptySpacesLeft = 15;


//As soon as webpage loads run these two functions
$(document).ready(function(){
    setUpBoard();
    printBoard();
    console.log("Loaded webpage"); //how you do print statements in javascript
});

function setUpBoard(){

    // initialize board to have no values
    for(var i=0; i<4; i++){
        var innergrid = [];
        for(var j=0; j<4; j++){
            innergrid.push("x");
        }
        grid.push(innergrid);
    }

    addTile();
    
}

function addTile() {
    //place a 2 on a random spot in the board   
    var x = Math.round(Math.random()*3);
    var y = Math.round(Math.random()*3);
    var numbers = ["2","4"];
    var tile = numbers[Math.floor(Math.random() * numbers.length)];
    if(Math.random()<0.8){
        tile = "2";
        var value = 2;
    } else {
        tile = "4";
        var value = 4;
    }
    if(emptySpacesLeft > 0){
    while(grid[x][y] !== "x"){
        x = Math.round(Math.random()*3);
        y = Math.round(Math.random()*3);
    }
} else {
    console.log("You lose!");
}

    grid[x][y] = tile;
    emptySpacesLeft--;

}
    

function printBoard(){
    var board = '<br/>' + "----------------" + '<br/>';
    for(var i=0; i<grid.length; i++){
        board += "|   ";
        for(var j=0; j<grid[i].length; j++){
            board += grid[i][j] + "   |   ";
        }
        board += '<br/>';
        board += "----------------";
        board += '<br/>';
    }
    
    //console.log(board);
    document.getElementById("container").innerHTML = board;
}


//function gets called anytime  a key is pressed 
//e is a special variable
// that references the event obeject that reads if the user is interacting with 
//the window 
document.onkeydown = function(e) {
     
    //makes it work in internet explorer which uses window.event and not e 
    e = e || window.event;

    //keyCode is actually a character value which we convert to a String
    //to use triple equals sign 
    if (e.keyCode == UP_ARROW) {
        // up arrow
        combineTilesUp();
        moveTilesUp();
    }
    //double equals sign will convert it for us 
    else if (e.keyCode == DOWN_ARROW) {
        // down arrow
        console.log(emptySpacesLeft);
        combineTilesDown();
        moveTilesDown();
    }
    else if (e.keyCode == LEFT_ARROW) {
       // left arrow
       console.log(emptySpacesLeft);
       combineTilesLeft();
       moveTilesLeft();
    }
    else if (e.keyCode == RIGHT_ARROW) {
       // right arrow
       console.log(emptySpacesLeft);
       combineTilesRight();
       moveTilesRight();
    } 
    
    addTile();
    printBoard(); //have to recall print board to get the board to update
};
function combineTilesDown(){
    for(var r=0; r < grid.length; r++)
    {
        for(var c=0; c<grid[r].length; c++)
        {
            if(r!==0 && grid[r][c] !== "x" && grid[r][c] == grid[r-1][c])
            {
                var tileNumber = parseInt(grid[r][c]) + parseInt(grid[r-1][c]);
                grid[r-1][c] = tileNumber + "";
                grid[r][c] = "x";
                emptySpacesLeft++;
            }

        }
        
    }   

}

function combineTilesUp(){
    for(var r=grid.length-1; r >= 0; r--)
    {
        for(var c=0; c<grid[r].length; c++)
        {
            if(r !== grid.length-1 && grid[r][c] !== "x" && grid[r][c] == grid[r+1][c])
            {
                var tileNumber = parseInt(grid[r][c]) + parseInt(grid[r+1][c]);
                grid[r+1][c] = tileNumber + "";
                grid[r][c] = "x";
                emptySpacesLeft++;
            }

        }
        
    }   

}

function combineTilesLeft(){
    for(var r=0; r < grid.length; r++)
    {
        for(var c=0; c < grid[r].length-1; c++)
        {
            if(c !== grid[r].length-1 && grid[r][c] !== "x" && grid[r][c] == grid[r][c+1])
            {
                var tileNumber = parseInt(grid[r][c]) + parseInt(grid[r][c+1]);
                grid[r][c] = tileNumber + "";
                grid[r][c+1] = "x";
                emptySpacesLeft++;
            }

        }
        
    }   

}

function combineTilesRight(){
    for(var r=0; r < grid.length; r++)
    {
        for(var c=grid[r].length-1; c >= 0; c--)
        {
            if(c !== 0 && grid[r][c] !== "x" && grid[r][c] == grid[r][c-1])
            {
                var tileNumber = parseInt(grid[r][c]) + parseInt(grid[r][c-1]);
                grid[r][c] = tileNumber + "";
                grid[r][c-1] = "x";
                emptySpacesLeft++;
            }

        }
        
    }   

}


function moveTilesUp()
{
    
    for(var r=0; r < grid.length; r++)
    {
        for(var c=0; c<grid[r].length; c++)
        {
            if(r !== 0  && grid[r][c] !== "x" && grid[r-1][c] == "x")
            {
                grid[r-1][c] = grid[r][c];
                grid[r][c] = "x";
            }

        }
        
    }   
    
}

function moveTilesDown()
{
    
    for(var r = grid.length-1; r >= 0; r--)
    {
        for(var c=0; c<grid[r].length; c++)
        {
            if(r !== grid.length-1  && grid[r][c] !== "x" && grid[r+1][c] == "x")
            {
                grid[r+1][c] = grid[r][c];
                grid[r][c] = "x";
            }
            
        }
        
    }   
    
}


function moveTilesLeft()
{
    
    for(var r=0; r < grid.length; r++)
    {
        for(var c=0; c<grid[r].length; c++)
        {
            if(c !== 0  && grid[r][c] !== "x" && grid[r][c-1] === "x")
            {
                grid[r][c-1] = grid[r][c];
                grid[r][c] = "x";
            }
            
        }
        
    }   
    
}
function moveTilesRight()
{
    
    for(var r=0; r < grid.length; r++)
    {
        for(var c=grid[r].length; c>=0; c--)
        {
            if(c !== grid[r].length-1  && grid[r][c] !== "x" && grid[r][c+1] === "x")
            {
                grid[r][c+1] = grid[r][c];
                grid[r][c] = "x";
            }

            
        }
        
    }   
    
}