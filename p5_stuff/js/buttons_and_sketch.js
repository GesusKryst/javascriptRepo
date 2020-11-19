function setup()
{
    createCanvas(600, 400).parent("canvas");
    background(200);
    circleBtn = document.getElementById("makeCircle");
    setupDone = false;


}

function draw()
{
    function doOnce()
    {
        console.log("Done once");
        circleBtn.addEventListener("click", createEllipse);
        setupDone = true;
    }


    function createEllipse()
    {
        fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);
        ellipse(20, 20, 20 ,20);
    }
    if(!setupDone)
    {
        doOnce();
    }
}