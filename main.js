// Created by Mayank



"use strict";

//constants

const π = Math.PI;

//variables

var x,y,r,θ;

//functions

function setup()

{

    //canvas --> full screen

    createCanvas(windowWidth,windowHeight);

    createButton("&#9432;").id("Info").mouseClicked(info);

    

    stroke(255,50,50);

    strokeWeight(2);

    //set cardioid radius

    r = width/32;

}

function draw()

{

    //clear canvas & lower alpha before updating animation

    background(50,5);

    //move cardioid center to center of canvas

    translate(width/2,height/2);

    //rotate cardioid so it's displayed properly

    rotate(π);

    //calculate angle

    θ = frameCount/180;

    //calculate coordinates of cardioid

    x = r*16*pow(sin(θ),3);

    y = r*(13*cos(θ)-5*cos(2*θ)-2*cos(3*θ)-cos(4*θ));

    /*

        old equation

        (you'll have to readjust r & rotation values):

        x = r*(1-cosθ)*cosθ;

        y = r*(1-cosθ)*sinθ;

    */

    //draw lines from center to cardioid current point

    line(0,0,x,y);

}

//utility functions

function info()

{

    alert("World HEART day!\n\nA mathematically created ❤️’“.\n\nBy Mayank Rajput");

}
