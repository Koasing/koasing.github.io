"use strict";

var tick = document.getElementById("audio_tick");
var tock = document.getElementById("audio_tock");

var bpm    = 120;
var period = 500;
var beats  = 4;

var timer = null;

function play(c)
{
    // timer exists if and only if loop is running.
    if(timer) {
        if(!c) tick.play(); else tock.play();
        timer = setTimeout(play, period, (c+1)%beats);
    }
}

function toggle()
{
    bpm = parseInt(document.getElementById("bpm").value);
    if(bpm < 1 || 360 < bpm) {
        alert("BPM out of range!")
        return false;
    }

    beats = parseInt(document.getElementById("beats").value);
    if(beats < 1 || 36 < beats) {
        alert("Beats out of range!")
        return false;
    }

    // 1 minute = 60 seconds =  60 * 1000 ms
    period = 60000 / bpm;
    
    if(timer) {
        // timer exists; stop loop.
        clearTimeout(timer); timer = null;
        document.getElementById("play").innerHTML = "Play!";
    }
    else {
        // timer not exist; start loop after 100 ms
        timer = setTimeout(play, 100, 0);
        document.getElementById("play").innerHTML = "Stop!";
    }
}
