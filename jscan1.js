let poly = function () {
    let canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();        // new path
        ctx.moveTo(50, 200);    // goto coordinate in canvas
        ctx.lineTo(150, 50);    // line to coordinate
        ctx.lineTo(180, 150);   // another line to coord
        ctx.fillStyle = 'silver';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 10;
        ctx.closePath();
        ctx.fill();             // fills poly
        ctx.stroke();           // draws lines
    }
}

window.addEventListener('load', poly);
