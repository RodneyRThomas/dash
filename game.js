Crafty.init(500,350, document.getElementById('play-game'));

// All Main Entities
var player = Crafty.e('2D, DOM, Color, Twoway, Gravity').attr({x: 0, y: 0, w: 50, h: 50 }).color('green').gravity('Floor').twoway(200);
var f1 = Crafty.e('2D, Color, Floor').attr({x: 0, y: 500, w: 1000, h: 10 }).color('black');






// Camera Functions
Crafty.viewport.clampToEntities = false;
Crafty.viewport.scale(1);
Crafty.one("CameraAnimationDone", function() {
    Crafty.viewport.follow(player, 0, 0);
});
Crafty.viewport.centerOn(player, 1);
