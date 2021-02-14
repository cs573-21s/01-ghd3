//https://www.color-hex.com/
//global variables
let WIDTH = 500;
let HEIGHT = 500;
let P1_COLOR = "#20b2aa";
let P2_COLOR = "#ff7373";
let P1_KING_COLOR = "#136a66";
let P2_KING_COLOR = "#b25050";
let LINE_COLOR = "#f0aa08";
let SHADOW_COLOR1 = "#ff0000"
let SHADOW_COLOR2 = "#407294"
let SHADOW_COLOR3 = "#407294"
var SELECTED_PIECE;
var TURN = "p1";
var P1_SCORE = 0;
var P2_SCORE = 0;

//display
var svg = d3.select("#svgcontainer")
    .append("svg")
    .attr("width", WIDTH)
    .attr("height", HEIGHT)
    .attr("fill","white");

//display scoreboard
var score_board = d3.select("body").append("p")
    .text('0 : 0')

//make checkerboard visual
for (x = 0; x < 8; x++) {
    for (y = 0; y < 8; y++) {
        if ((x+y)% 2 == 0) {
            c = "#c0c5ce"
        } else {
            c = "#7a7799"
        }
        var rect = svg.append("rect")
            .attr("x", WIDTH*x/8)
            .attr("y", HEIGHT*y/8)
            .attr("width", WIDTH/8)
            .attr("height",HEIGHT/8)
            .attr("fill", c);
    }
}

//light effect
var shadow1 = svg.append("polygon")
    .attr("points","0,0, 0,250 500,0")
    .style("fill",SHADOW_COLOR1)
    .style("opacity","0.25")
var shadow2 = svg.append("polygon")
    .attr("points","500,500, 250,0 0,500")
    .style("fill",SHADOW_COLOR2)
    .style("opacity","0.15")
var shadow3 = svg.append("polygon")
    .attr("points","0,500, 500,250 500,500")
    .style("fill",SHADOW_COLOR3)
    .style("opacity","0.55")

//place pieces
var board = new Array(8).fill(null).map(()=>new Array(8).fill(null));
for (x = 0; x < 8; x++) {
    for (y = 0; y < 8; y++) {
        if ((x+y) % 2 == 0) { 
            if (y >= 3 && y <= 4) { continue }
            board[x][y] = svg.append("circle")
                .attr("px",x) //store position as integer 0-7
                .attr("py",y)
                .attr("cx", x*WIDTH/8 + WIDTH/16)
                .attr("cy", y*HEIGHT/8 + HEIGHT/16)
                .attr("r", 25)
                .attr("king",0);
            if (y < 3) {
                board[x][y] 
                .attr("player", "p1")
                .style("fill", P1_COLOR);
            } else if (y > 4) {
                board[x][y] 
                .attr("player", "p2")
                .style("fill", P2_COLOR);
            }
        }
    }
}
update_animations()

//enable fade animation on mouse hover
    //piece: the piece to add the animation
function enable_fade_animation(piece) {
    if (piece.attr("player") == "p1") {
        if (Number(piece.attr("king")) == 0) {
            var c = P1_COLOR;
        } else {
            var c = P1_KING_COLOR;
        }
    }
    else {
        if (Number(piece.attr("king")) == 0) {
            var c = P2_COLOR;
        } else {
            var c = P2_KING_COLOR;
        }
    }
    piece
        .on('mouseover',function() {
            d3.select(this)
                .transition()
                .duration(250)
                .style("fill","white")
        })
        .on('mouseout',function () {
            d3.select(this)
                .transition()
                .duration(200)
                .style("fill",c)
        });
    return piece
}

//disable fade animation on mouse hover
    //piece: the piece to remove the animation from
function disable_fade_animation(piece) {
    piece
    .on('mouseover',function() {
        return null;
    })
    return piece
}


//only turn on animations for the player that can move
function update_animations() {
    for (x=0; x<8; x++) {
        for (y=0;y<8;y++) {
            var piece = board[x][y];
            
            if (piece != null) {
                var is_p1 = piece.attr("player") == "p1";
                var is_p2 = piece.attr("player") == "p2";
                if (is_p1 && TURN == "p1" || is_p2 && TURN == "p2") {  
                    board[x][y] = enable_fade_animation(piece);
                } else {
                    board[x][y] = disable_fade_animation(piece);
                }
            }
            board[x][y] = piece;
        }
    }
}

//Checks if regular move can occur
    //x: new x position
    //y: new y position
function regular_move(x,y) {
    var px = SELECTED_PIECE.attr("px")
    var py = SELECTED_PIECE.attr("py")
    var player = SELECTED_PIECE.attr("player")
    if (SELECTED_PIECE.attr("king") == 1) { // check king
        if (Math.abs(x-px) == 1 && Math.abs(y-py) == 1) {
            return true;
        }
    } 
    
    if (player == "p1") {
        if (Math.abs(x-px) == 1 && y-py == 1) {
            return true;
        } else {
            return false;
        }

    } else if (player == "p2") {
        if (Math.abs(x-px) == 1 && y-py == -1) {
            return true;
        } else {
            return false;
        }
    }
}

//checks if a capture can occur (only one piece)
function does_capture(x,y,b) {
    var px = Number(SELECTED_PIECE.attr("px"));
    var py = Number(SELECTED_PIECE.attr("py"));
    var player = SELECTED_PIECE.attr("player");
    var intercept_piece = b[Math.floor((px+x)/2)][Math.floor((py+y)/2)];

    //return false on bad conditions
    if (intercept_piece == null) {return false;} //if not hopping over enemy
    if (intercept_piece.attr("player") == player) {return false;} //if hopping over ally
    if (b[x][y] != null) {return false;} //if new spot has a piece
    if (!(Math.abs(x-px) == 2 && Math.abs(y-py) == 2)) { return false;}
    
    //if not a king
    if (SELECTED_PIECE.attr("king") != 1) { //if not a king
        if (y < py && player == "p1") { return false;}
        if (y > py && player == "p2") { return false;}
    }
    return true;
}

//remove captured piece from board
function update_capture(x,y,b) {
    var px = Number(SELECTED_PIECE.attr("px"));
    var py = Number(SELECTED_PIECE.attr("py"));
    b[(x+px)/2][(y+py)/2]
    .attr("cx",10000);
    b[(x+px)/2][(y+py)/2] = null;
    return b;
}

//update scoreboard
function update_score() {
    score_board
    .text(String(P1_SCORE) + " : " + String(P2_SCORE))
    if (P1_SCORE == 12) {
        score_board
        .text("P1 Wins!!!!")
    } else if (P2_SCORE == 12) {
        score_board
        .text("P2 Wins!!!!")

    }
}

//checks if board position (x,y) is playable for given piece
function is_playable(x,y,b) {
    if (b[x][y] == null && (x+y) % 2 == 0) { //if space is empty and on the correct 32 squares
        //Condition 1: Regular move
        if (regular_move(x,y)) {
            return true;
        //Condition 2: Is a valid capture (only one hop allowed)
        } else if (does_capture(x,y,b)) {
            board = update_capture(x,y,b);
            if (SELECTED_PIECE.attr("player") == "p1") {
                P1_SCORE++;
            } else {
                P2_SCORE++;
            }
            return true;
        } 
    } 
    return false;
}


var LINE = svg.append("line")
.attr("stroke",LINE_COLOR);
window.addEventListener("mousemove", function(e) {
    if (SELECTED_PIECE != null) {
        SELECTED_PIECE         
            .attr("cx", e.pageX)
            .attr("cy", e.pageY)
            .style("opacity","0.5");
        LINE
            .attr("x1", SELECTED_PIECE.attr("px")*WIDTH/8 + WIDTH/16)
            .attr("y1", SELECTED_PIECE.attr("py")*HEIGHT/8 + HEIGHT/16)
            .attr("x2", e.pageX)
            .attr("y2", e.pageY)
            .style("stroke-width","3");
    }
});

//Handles mouse click event
window.addEventListener("mousedown", function(e) {
    var px = Math.floor(8*(e.pageX/WIDTH))
    var py = Math.floor(8*(e.pageY/HEIGHT))
    
    //Attach piece to mouse
    if (SELECTED_PIECE == null) {
        if (board[px][py] != null) {
            var player = board[px][py].attr("player")
            if ((TURN == "p1" && player == "p1") || (TURN ==  "p2" && player == "p2")) {
                SELECTED_PIECE = board[px][py]
                board[px][py] = null
            }
        }

    //Handle piece placed
    } else {
        var place_in_same_position = (px == SELECTED_PIECE.attr("px") && py == SELECTED_PIECE.attr("py"))
        if (place_in_same_position ||
            (board[px][py] == null && is_playable(px,py,board))) {
            

            //Center piece at new square
            SELECTED_PIECE
                .attr("cx", px*WIDTH/8 + WIDTH/16)
                .attr("cy", py*HEIGHT/8 + HEIGHT/16)
                .attr("px",px)
                .attr("py",py)
                .style("opacity","1");
            
            //Show last move as line segment
            LINE
                .attr("x2", SELECTED_PIECE.attr("px")*WIDTH/8 + WIDTH/16)
                .attr("y2", SELECTED_PIECE.attr("py")*HEIGHT/8 + HEIGHT/16)

            //Handle king promotions
            if (py == 7 && SELECTED_PIECE.attr("player") == "p1" ||
            py == 0 && SELECTED_PIECE.attr("player") == "p2") {

                SELECTED_PIECE
                    .attr("king",1)

                if (SELECTED_PIECE.attr("player") == "p1"){
                    SELECTED_PIECE.style("fill",P1_KING_COLOR);
                } else {
                    SELECTED_PIECE.style("fill",P2_KING_COLOR);
                }
            }   

            board[px][py] = SELECTED_PIECE;
            
            //Remove piece from mouse hover
            SELECTED_PIECE = null;
            //update score board
            update_score()
            
            //Change turns if piece moved to a different square
            if (!place_in_same_position) {
                if (TURN == "p1") {
                    TURN = "p2";
                } else {
                    TURN = "p1"
                }
                update_animations()
            } 
        }
    }
});

