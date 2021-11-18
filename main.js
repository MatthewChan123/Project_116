function preload() {

}
function setup() {
    canvas = create.Canvas(300, 300);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 300, 300)
}
function save() {
    save('your_image.png');
}
function modelLoaded() {
    console.log("PoseNet is initialized");
}
function gotPoses(results) {
     if (results.length > 0) {
         console.log(results);
         console.log("pose x = " + results[0].pose.nose.x);
         console.log("pose y = " + results[0].pose.nose.y);
     }
}