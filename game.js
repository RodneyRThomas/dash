Crafty.init(500,350, document.getElementById('play-game'));

// All Main Entities
var f1 = Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 0, y: 250, w: 1000, h: 10})
  .color('black');

var player = Crafty.e('2D, Canvas, Color, Twoway, Gravity')
  .attr({x: 0, y: 0, w: 50, h: 50})
  .color('green')
  .twoway(200)
  .gravity('Floor');



// Camera Functions
Crafty.viewport.clampToEntities = false;
Crafty.viewport.scale(1);
Crafty.one("CameraAnimationDone", function() {
    Crafty.viewport.follow(player, 0, 0);
});
Crafty.viewport.centerOn(player, 1);
