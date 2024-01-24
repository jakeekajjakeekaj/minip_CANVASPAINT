// CANVAS EJEMPLO

const canvas = document.getElementById("canvas");
const dif = canvas.getBoundingClientRect(); //Esto permite conocer ciertas propiedades como por ejemplo conocer la distancia que hay entre la izquierda y el top del elemento
const ctx = canvas.getContext("2d");

let painting, color, linewidth, difX, difY;

canvas.addEventListener("mousedown", e=> { //mousedown indica la acción de 'cuando el mouse es apretado'
    console.log("apretado");
    difX = e.clientX - dif.left;    // e.clientX indica en qué parte de X se encuentra el mouse
    difY = e.clientY - dif.top; // e.clientY idncia en qué parte de Y se encuentra el mouse
    ctx.beginPath();
    painting = true;
    color = document.getElementById("color").value;
    linewidth = document.getElementById("lw").value;
})

canvas.addEventListener("mouseup", ()=> {
    ctx.closePath();
    painting = false;
    console.log("soltado");
})

canvas.addEventListener("mousemove", e=> {
    if(painting) {
        dibujar(difX, difY, e.clientX - dif.left, e.clientY - dif.top);
        difX = e.clientX - difX.left;
        difY = e.clientY - difY.top;
    }
});

const dibujar = (x1, y1, x2, y2)=> {
    ctx.strokeStyle = color;
    ctx.lineWidth = linewidth;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}