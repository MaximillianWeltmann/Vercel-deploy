const canvas = document.getElementById('fireCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const amount = 50; // Number of sparks
const sizeRate = 0.998; // Rate at which sparks shrink
const speedRate = 1; // Speed of sparks
const windSpeed = 0.1; // Wind speed

const sparks = [];

class Spark {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2;
        this.speedX = (Math.random() - 0.5) * speedRate;
        this.speedY = Math.random() * -speedRate;
        this.opacity = 1;
    }

    update() {
        this.x += this.speedX + (Math.random() - 0.5) * windSpeed;
        this.y += this.speedY;
        this.size *= sizeRate;
        this.opacity *= sizeRate;

        // Randomly change direction
        if (Math.random() < 0.05) {
            this.speedX = (Math.random() - 0.5) * speedRate;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(0, 255, 81, ${this.opacity})`; // Green color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < amount; i++) {
        const x = Math.random() * canvas.width;
        const y = canvas.height;
        sparks.push(new Spark(x, y));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sparks.forEach((spark, index) => {
        spark.update();
        spark.draw();
        if (spark.size < 0.5 || spark.opacity < 0.1) {
            sparks.splice(index, 1);
            const x = Math.random() * canvas.width;
            const y = canvas.height;
            sparks.push(new Spark(x, y));
        }
    });
    requestAnimationFrame(animate);
}

init();
animate();
