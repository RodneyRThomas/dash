Crafty.init(500,350, document.getElementById('play-game'));

var player = Crafty.e('2D, DOM, Color, Twoway, Gravity').attr({x: 0, y: 0, w: 50, h: 50 }).color('green').gravity('Floor').twoway(200);
var floor = Crafty.e('2D, Color, Floor').attr({x: 0, y: 500, w: 1000, h: 10 }).color('black');
