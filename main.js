var vid = document.getElementById("myVideo")
var fillBar = document.getElementById("fill")
var currentTime = document.getElementById("currentTime")
var volumSlider = document.getElementById("volume")

function playOrPause(){
    if(vid.paused){
        vid.play();
        $("#playButton").attr("src","pause.png");
    }else{
        vid.pause()
        $("#playButton").attr("src","play.png");

    }
}
vid.addEventListener("timeupdate", function(){
    var position = vid.currentTime / vid.duration;
    fillBar.style.width = position * 100 + '%';
    convertTime(Math.round(vid.currentTime));
    if(vid.ended){
        $("#playButton").attr("src","play.png")
    }
})
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
