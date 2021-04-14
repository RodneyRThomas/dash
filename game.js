Crafty.init(500,350, document.getElementById('play-game'));

// All Main Entities
var player = Crafty.e('2D, DOM, Color, Fourway, Gravity').attr({x: 0, y: 0, w: 20, h: 20 }).color('green').fourway(200);
var test = Crafty.e('2D, DOM, Color').attr({x: 50, y: 50, w: 50, h: 50 )}.color('black')





// Camera Functions
Crafty.viewport.clampToEntities = false;
Crafty.viewport.scale(1);
Crafty.one("CameraAnimationDone", function() {
    Crafty.viewport.follow(player, 0, 0);
});
Crafty.viewport.centerOn(player, 1);
