let initialize = function () {
let Canvas = {
    init(canvasId, color) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
        this.color = color;
        this.prep();
    },
    prep() {
        this.context.fillStyle = this.color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    getContext() {
        return this.context;
    },
    getHeight() {
        return this.canvas.height;
    },
    getWidth() {
        return this.canvas.width;
    }
};

let Shape = {
    init(cv, x, y, width, height, color) {
        this.ctx = cv.context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    },

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.cursorStyle = "pointer";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};


let Circle = {
  init(cv, x, y, r, endarc, color) {
    this.ctx = cv.context;
    this.x = x;
    this.y = y;
    this.r = r;
    this.endarc = endarc;
    this.color = color;
  },

  draw() {
    this.ctx.beginPath();                // begin new path
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * this.endarc, false);
                                            // describe arc
    this.ctx.strokeStyle = 'transparent';   // stroke color
    this.ctx.fillStyle = this.color;        // set fill color
    this.ctx.closePath();
    this.ctx.fill();                     // fill the path
    this.ctx.stroke();
  }
}

let c = Object.create(Canvas);
  c.init('canvas', '#fff');
  c.canvas.addEventListener('click', hold);

  let shape1 = Object.create(Shape);
  shape1.init(c, 5, 60, 50, 50, '#00864B');
  let shape2 = Object.create(Shape);
  shape2.init(c, 5, 5, 100, 50, '#00888a');
  let shape3 = Object.create(Shape);
  shape3.init(c, 110, 5, 200, 105, '#1C81D2');
  let shape4 = Object.create(Shape);
  shape4.init(c, 5, 115, 305, 105, '#820F71');
  let shape5 = Object.create(Circle);
  shape5.init(c, 380, 5, 50, 1, '#ba131a');
  shapes.push(shape1);
  shapes.push(shape2);
  shapes.push(shape3);
  shapes.push(shape4);
  shapes.push(shape5);
  repeater(c, shapes);

};

let redraw = function (cv, arr) {
    cv.clear();
    cv.prep();
    // loop through array and draw
    for (let shape of arr) {
        shape.draw();
    }
}

let repeater = function (cv, arr) {
    // if this is an animation build a setInterval loop here
    // if not, just draw
    redraw(cv, arr);
}

let wh = function () {
  let Room = {
      init(canvasId, color, w, h) {
          this.canvas = document.getElementById(canvasId);
          this.context = this.canvas.getContext("2d");
          this.color = color;
          this.canvas.height = h;
          this.canvas.width = w;
          this.prep();
      },
      prep() {
          this.context.fillStyle = this.color;
          this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      },
      clear() {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      },
      getContext() {
          return this.context;
      },
      getHeight() {
          return this.canvas.height;
      },
      getWidth() {
          return this.canvas.width;
      }
  };
    let w = document.getElementById('inputwidth').value;
    let h = document.getElementById('inputheight').value;
    let room = Object.create(Room);
      room.init('room', '#eee', w, h);
 };


 document.getElementById('whSubmit').addEventListener('click', wh);

 let Canvase = {
     init(canvasId, color) {
         this.canvas = document.getElementById(canvasId);
         this.context = this.canvas.getContext("2d");
         this.color = color;
         this.prep();
     },
     prep() {
         this.context.fillStyle = this.color;
         this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
     },
     clear() {
         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
     },
     getContext() {
         return this.context;
     },
     getHeight() {
         return this.canvas.height;
     },
     getWidth() {
         return this.canvas.width;
     }
 };

 let Shapee = {
     init(cv, x, y, width, height, color) {
         this.ctx = cv.context;
         this.x = x;
         this.y = y;
         this.width = width;
         this.height = height;
         this.color = color;
     },

     draw() {
         this.ctx.fillStyle = this.color;
         this.ctx.cursorStyle = "pointer";
         this.ctx.fillRect(this.x, this.y, this.width, this.height);
     }
 };

let hold = function (ev) {
  for(shape of shapes) {
    let cx = shape.ctx;
        cx.beginPath();
        cx.rect(shape.x, shape.y, shape.width, shape.height);
        cx.arc(shape.x, shape.y, shape.r, 0, Math.PI * 1);
        cx.closePath();
        console.log("hi")
    let bb = this.getBoundingClientRect();
    let x = (ev.clientX - bb.left) * (this.width / bb.width);
    let y = (ev.clientY - bb.top) * (this.height / bb.height);

    let cv1 = Object.create(Canvase);
        cv1.init("room", "#eee");

    if (cx.isPointInPath(x, y)) {
      let shaper = Object.create(Shapee);
      shaper.init(cv1, 5, 60, 50, 50, '#00864B');
        } else {
            //window.alert("nohit: "+x+","+y);
        }
         console.log(shape);
  }

}

let shapes = [];

window.addEventListener('load', initialize);
