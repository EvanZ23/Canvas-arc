my_paint = document.getElementById("myCanvas");

ctx = my_paint.getContext('2d');

color = "Black";
width_line = 6;

var last_pos_x, last_pos_y;

var mouse_Event = "";

my_paint.addEventListener("mouseup", my_mouse_up);

function my_mouse_up(e){

    mouse_Event = "MouseUp";

}

my_paint.addEventListener("mouseleave", my_mouse_leave);

function my_mouse_leave(e){

    mouse_Event = "MouseLeave";

}

my_paint.addEventListener("mousedown", my_mouse_down);

function my_mouse_down(e){

    mouse_Event = "MouseDown";

    last_pos_x = e.clientX - my_paint.offsetLeft;
    last_pos_y = e.clientY - my_paint.offsetTop;

    color = document.getElementById("new_color").value;

    width_line = document.getElementById("new_width").value;
    
}
my_paint.addEventListener("mousemove", my_mouse_move);

function my_mouse_move(e){

    current_pos_x = e.clientX - my_paint.offsetLeft;
    current_pos_y = e.clientY - my_paint.offsetTop;

    if(mouse_Event  == "MouseDown"){

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;
        ctx.arc(last_pos_x, last_pos_y, 50,0,2*Math.PI);
        ctx.stroke();

        last_pos_x = current_pos_x;
        last_pos_y = current_pos_y;
    }    

}

function clearPaint(){

    ctx.clearRect(0,0, my_paint.width, my_paint.height);
}







