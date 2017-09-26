"use strict";

var tick = document.getElementById("audio_tick");
var tock = document.getElementById("audio_tock");

var period = 500;
var beats  = 4;

var timer = null;

function play(c)
{
    // timer is null iff not running
    if(timer) {
        if(!c) tick.play(); else tock.play();
        timer = setTimeout(play, period, (c+1)%beats);
    }
}

function toggle()
{
    var bpm = parseInt(document.getElementById("bpm").value);
    if(bpm < 1 || 360 < bpm) {
        alert("BPM out of range!")
        return false;
    }
    period = 60000 / bpm;

    beats = parseInt(document.getElementById("beats").value);
    if(beats < 1 || 36 < beats) {
        alert("Beats out of range!")
        return false;
    }

    if(timer) {
        // timer exists, currently running
        clearTimeout(timer); timer = null;
        document.getElementById("play").innerHTML = "Play!";
    }
    else {
        // timer not exist, start toggling after 100 ms
        timer = setTimeout(play, 100, 0);
        document.getElementById("play").innerHTML = "Stop!";
    }
}
