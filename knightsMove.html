let knightsBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];
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

var moveList = [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [-2, 1], [2, -1], [-2, -1]];
var moves = [];

var cx = [[ 1, 1, 2, 2, -1, -1, -2, -2]];
var cy = [[ 2,-2, 1,-1,  2, -2,  1, -1]]; 

//creates the grid sizes 
var grid_x_space = 85;
var grid_y_space = 85;
var grid_x = 10;
var grid_N = 10;
var grid_y = 10;
//console.log(grid_x_space, grid_y_space, grid_x, grid_y);

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
var sink = nodelist[Math.floor((Math.random() * 99) + 1)]
//===============================================================================================================================
function knightsMove() {
   
}
int solveKTUtil(int x, int y, int movei, int sol[N][N],
    int xMove[], int yMove[]);

/* A utility function to check if i,j are valid indexes 
   for N*N chessboard */
bool isSafe(int x, int y, int sol[N][N])
{
    return (x >= 0 && x < N && y >= 0 &&
        y < N && sol[x][y] == -1);
}

/* A utility function to print solution matrix sol[N][N] */
void printSolution(int sol[N][N])
{
    for (int x = 0; x < N; x++)
    {
        for (int y = 0; y < N; y++)
        printf(" %2d ", sol[x][y]);
        printf("\n");
    }
}

/* This function solves the Knight Tour problem using 
   Backtracking.  This function mainly uses solveKTUtil() 
   to solve the problem. It returns false if no complete 
   tour is possible, otherwise return true and prints the 
   tour. 
   Please note that there may be more than one solutions, 
   this function prints one of the feasible solutions.  */
bool solveKT()
{
    int sol[N][N];

    /* Initialization of solution matrix */
    for (int x = 0; x < N; x++)
    for (int y = 0; y < N; y++)
    sol[x][y] = -1;

    /* xMove[] and yMove[] define next move of Knight. 
       xMove[] is for next value of x coordinate 
       yMove[] is for next value of y coordinate */
    int xMove[8] = { 2, 1, - 1, -2, -2, -1, 1, 2
};
int yMove[8] = { 1, 2, 2, 1, - 1, -2, -2, -1 };

// Since the Knight is initially at the first block 
sol[0][0] = 0;

/* Start from 0,0 and explore all tours using 
   solveKTUtil() */
if (solveKTUtil(0, 0, 1, sol, xMove, yMove) == false) {
    printf("Solution does not exist");
    return false;
}
else
    printSolution(sol);

return true; 
}

/* A recursive utility function to solve Knight Tour 
   problem */
int solveKTUtil(int x, int y, int movei, int sol[N][N],
    int xMove[N], int yMove[N])
{
    int k, next_x, next_y;
    if (movei == N * N)
        return true;

    /* Try all next moves from the current coordinate x, y */
    for (k = 0; k < 8; k++) {
        next_x = x + xMove[k];
        next_y = y + yMove[k];
        if (isSafe(next_x, next_y, sol)) {
            sol[next_x][next_y] = movei;
            if (solveKTUtil(next_x, next_y, movei + 1, sol,
                xMove, yMove) == true)
                return true;
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
    console.log(source.x_pos)
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
