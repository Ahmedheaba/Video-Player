var vid = document.getElementById("myVideo")
var fillBar = document.getElementById("fill")
var currentTime = document.getElementById("currentTime")
var volumSlider = document.getElementById("volume")
var barProgress = document.getElementById("bar")
var videoSpeed = document.getElementById("videoSpeed")

function playOrPause(){
    if(vid.paused){
        vid.play();
        $("#playButton").attr("src","pause.png");
    }else{
        vid.pause()
        $("#playButton").attr("src","play.png");

    }
}
function stop(){
    vid.pause()
    vid.currentTime = 0;
}
function forwardMove(){
    vid.currentTime += 2
}
function backWord(){
    vid.currentTime -= 2
}
vid.addEventListener("timeupdate", function(){
    var position = vid.currentTime / vid.duration;
    fillBar.style.width = position * 100 + '%';
    convertTime(Math.round(vid.currentTime));
    if(vid.ended){
        $("#playButton").attr("src","play.png")
    }
});
//Function If The User Click On Video Pause Or Play
function toggle(){
    if(vid.paused){
        vid.play();
    } else{
        vid.pause();
    }
}
function videoSpeedChanged(){
    vid.playbackRate = Number(videoSpeed.value);
}

barProgress.addEventListener("click", function(e){
    let maxWidth = fillBar.clientWidth;
    let barValue = e.offsetX;
    let barValueParent = barValue/maxWidth;
    let timeProg = vid.duration * barValueParent;
    vid.currentTime =  timeProg;
});
function fullScreen(){
    if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
    ) {
        if (document.exitFullscreen) {
        document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
        }
    } else {
        element = myVideo.parentElement;
        console.log(myVideo.parentElement);
        if (element.requestFullscreen) {
        element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        console.log(Element);
        } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
        }}
}


function convertTime(seconds){
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec;
    totalTime(Math.round(vid.duration))
}

function totalTime(seconds){
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent += " / " + min + ":" + sec;
}
function changeValue(){
    vid.volume = volumSlider.value;
    if(volumSlider.value == 0){
        $("#speaker").attr("src","Mute.png")
    }else{
        $("#speaker").attr("src","Speaker.png")
    }
}
