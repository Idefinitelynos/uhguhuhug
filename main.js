function setup() {
    canvas=createCanvas(500, 500)
    canvas.position(560, 150)
    video=createCapture(VIDEO)
    video.size(500, 550)

    poseNet=ml5.poseNet(video, modelloaded)
    poseNet.on("pose", gotposes)
}
function modelloaded() {
    console.log("*We got the model* 🤓")
}
function gotposes(results) {
    if (results.length > 0)
    {
        console.log(results)
    }
}
function draw() {
    background("#a0cf42")
}
