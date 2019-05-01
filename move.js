let knightsBoards = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
];

var cx = [ 1, 1, 2, 2, -1, -1, -2, -2];
var cy = [ 2,-2, 1,-1,  2, -2,  1, -1]; 

//creates the grid sizes 
var grid_x_space = 85;
var grid_y_space = 85;
var grid_x = 10;
var grid_N = 10;
var grid_y = 10;
//console.log(grid_x_space, grid_y_space, grid_x, grid_y);

var maxFlow = 100000;

//creats a list of nodes which store the random value with their x and y position in the grid
var nodelist = [];
for (var x = 0; x < 800; x += grid_x_space) {
    for (var y = 0; y < 800; y += grid_y_space) {
        // flow_val ensure the flow_value number is generated to equal or less
        var flow_val = 2 * Math.floor((Math.random() * 15) + 1);
        nodelist.push({ x_pos: x, y_pos: y, max_value: flow_val, flow_value: Math.floor((Math.random() * flow_val) + 1) });
    }
}

//creates random start and stop positions for the knight
var source = nodelist[Math.floor((Math.random() * 99) + 1)]
console.log(source.x_pos / 85);
console.log(source.y_pos / 85);
var sink = nodelist[Math.floor((Math.random() * 99) + 1)]
console.log(sink.x_pos / 85);
console.log(sink.y_pos / 85);

//===============================================================================================================================
function knightsMove() {
   
}
//var solveKTUtil( x,  y, movei, sol,xMove, yMove);

/* A utility function to check if i,j are valid indexes 
   for N*N chessboard */
function isSafe( x,  y, sol)
{
    return (x >= 0 && x < grid_N && y >= 0 &&
        y < grid_N && sol[x][y] == -1);
}

/* A utility function to print solution matrix sol[N][N] */
function printSolution(pstx)
{
    var nowX;
    var nowY;
    var nextX;
    var nextY;
    var sol = knightsBoards;
    //tells sqare nmber and path debugging purpose
    for (var y = 0; y < grid_N; y++) {
        for (var x = 0; x < grid_N; x++) {
            console.log(sol[x][y]);
            var z = x + (y * 10);
            console.log("square " + z); 
        }
    }
    // look for path
    for (var i = 0; i < 100; ++i) {

        for (var y = 0; y < grid_N; y++) {
            for (var x = 0; x < grid_N; x++) {
                if (sol[x][y] == i) {
                    nowX = x;
                    nowY = y;
                }
            }
        }
        for (var y = 0; y < grid_N; y++) {
            for (var x = 0; x < grid_N; x++) {
                //console.log(sol[x][y])
                if (sol[x][y] == (i + 1)) {
                    nextX = x;
                    nextY = y;
                }
            }
        }
        // draw lines
        pstx.beginPath();
        pstx.moveTo(nowX * 85 + 43, nowY * 85 + 43);
        pstx.lineTo(nextX * 85 + 43, nextY * 85 + 43);
        pstx.stroke();
    }
    console.log(maxFlow);
}

/* This function solves the Knight Tour problem using 
   Backtracking.  This function mainly uses solveKTUtil() 
   to solve the problem. It returns false if no complete 
   tour is possible, otherwise return true and prints the 
   tour. 
   Please note that there may be more than one solutions, 
   this function prints one of the feasible solutions.  */
function solveKT()
{
    var sol = knightsBoards;

    /* xMove[] and yMove[] define next move of Knight. 
       xMove[] is for next value of x coordinate 
       yMove[] is for next value of y coordinate */
    var xMove = cx;
    var yMove = cy;
    var sourceX = source.x_pos / 85;
    var sourceY = source.y_pos / 85;
    var sinkLocation = (sink.x_pos / 85) + (sink.y_pos / 85 *10);
// Since the Knight is initially at the first block 
    sol[sourceX][sourceY] = 0;

/* Start from 0,0 and explore all tours using 
   solveKTUtil() */
    if (solveKTUtil(sourceX, sourceY, 1, sol, xMove, yMove) == false) {
        console.log(sinkLocation);
        console.log("Solution does not exist");
        return false;
    }
    else {}
    //printSolution(sol);

return true; 
}

/* A recursive utility function to solve Knight Tour 
   problem */
function solveKTUtil(x, y,  movei,  sol,xMove, yMove)
{
    var k;
    var next_x;
    var next_y;
    var x_y_loc = x + (y * 10);
    console.log(x_y_loc);

    var sinkLocation = (sink.x_pos / 85) + (sink.y_pos / 85 *10);
    console.log(sinkLocation);
    if (x_y_loc == sinkLocation)
        return true;

    /* Try all next moves from the current coordinate x, y */
    for (k = 0; k < 8; k++) {
        next_x = x + xMove[k];
        next_y = y + yMove[k];
        if (isSafe(next_x, next_y, sol)) {
            sol[next_x][next_y] = movei;
            if (solveKTUtil(next_x, next_y, movei + 1, sol,
                xMove, yMove) == true) {
                return true;
            }
            else
                sol[next_x][next_y] = -1;// backtracking 
        }
    }

    return false;
} 

//======================================================================================================================================
// =====================================================  draw_grid ====
function draw_grid(rctx, rminor, rmajor, rstroke, rfill) {
    rctx.save();
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = grid_x_space * grid_x; //rctx.canvas.width - (rctx.canvas.width % grid_x);
    let height = grid_y_space * grid_y; //rctx.canvas.height - (rctx.canvas.height % grid_y);
    for (var ix = 0; ix <= width; ix += rminor) {
        rctx.beginPath();
        rctx.moveTo(ix, 0);
        rctx.lineTo(ix, height);
        rctx.lineWidth = .5; //( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke();
        //if ( ix % rminor == 0 ) { rctx.fillText( ix, ix, 10 ); }
    }
    for (var iy = 0; iy <= height; iy += rmajor) {
        rctx.beginPath();
        rctx.moveTo(0, iy);
        rctx.lineTo(width, iy);
        rctx.lineWidth = .5; //( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke();
        //if ( iy % rminor == 0 ) {rctx.fillText( iy, 0, iy + 10 );}
    }
    draw_box(rctx);
    rctx.restore();
}

//draws the values on the grid
function assign_value_to_grid(gctx, nodel) {
    for (var w = 0; w < nodel.length; w++) {
        var dis_text = "<" + String(nodel[w].max_value) + " , " + String(nodel[w].flow_value) + ">";
        gctx.fillText(dis_text, nodel[w].x_pos + 20, nodel[w].y_pos + 43);
    }
}
//draw source and sink
function draw_source_and_sink(gctx) {
    //console.log(source.x_pos)
    gctx.fillText("Source", source.x_pos + 20, source.y_pos + 53);
    gctx.fillText("Sink", sink.x_pos + 20, sink.y_pos + 53);
}

//====================================================== draw box
function draw_line(lctx, x_pos, y_pos) //, stroke, fill )
{
    stroke = 'black';
    fill = 'black';
    lctx.save();
    lctx.strokeStyle = stroke;
    lctx.fillStyle = fill;
    lctx.lineWidth = 2;
    lctx.beginPath();
    lctx.moveTo(0, 0);
    lctx.lineTo(x_pos, y_pos);
    lctx.stroke();
    lctx.fill();
    lctx.restore();
}

//====================================================== draw box
function draw_box(ctx) //, stroke, fill )
{
    for (var i = 0; i < 850; i += 85) {
        var j = 0;
        if ((i / 85) % 2 == 0) {
            j = 85;
        }
        for (; j < 850; j += 170) {
            stroke = 'gray';
            fill = 'gray';
            ctx.save();
            ctx.strokeStyle = stroke;
            ctx.fillStyle = fill;
            ctx.lineWidth = 5;
            //ctx.rect(194, 54, 3, 3);
            ctx.rect(j + 3, i + 3, 79, 79)
            ctx.stroke();
            ctx.fill();
            ctx.restore();
        }
    }
}
