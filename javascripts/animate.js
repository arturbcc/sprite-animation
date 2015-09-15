var $ = window.jQuery;

var CaptainAmerica = function(root, options) {
  this.root = $(root);

  this.settings = $.extend({
    fps: 12,
    columns: 4,
    width: 210,
    height: 200,
    animations: {
      //punch: [0, 1, 2, 3, 2, 1, 0]
    },
    loop: false,
    autoplay: false,
    //currentFrame: 0,
    complete: function() {
      //console.log('animation End');
      this.root.animateSprite('restart');
    }
  }, options);

  return this;
};

var fn = CaptainAmerica.prototype;

fn.start = function() {
  $(this.root).animateSprite(this.settings);
  return this;
};

fn.punch = function() {
  $(this.root).animateSprite('play', 'punch');
  return this;
};

var captainAmerica2;
var captainAmerica3;
$(document).ready(function() {
  captainAmerica2 = new CaptainAmerica('.captain-america-2', {
    animations: {
      punch: [0, 1, 2, 3, 2, 1, 0]
    }
  }).start();

  captainAmerica3 = new CaptainAmerica('.captain-america-3', {
    animations: {
      punch: [3, 2, 1, 0, 1, 2, 3]
    }
  }).start();

  var currentKey;          //records the current key pressed
  var TimerWalk;          //timer handle
  //var charStep = 2;       //1=1st foot, 2=stand, 3=2nd foot, 4=stand
  //var charSpeed = 400; //how fast the character will move

  $(document).keydown(function(e) {
    if (!currentKey) {
      //set the currentKey to the key that is down
      currentKey = e.keyCode;

      //execute character movement function charWalk('direction')
      console.log(e.keyCode);
      switch(e.keyCode) {
        case 85: captainAmerica2.punch(); break; //u
        case 69: captainAmerica3.punch(); break; //e
      //   case 38: charWalk('up');    break;
      //   case 39: charWalk('right'); break;
      //   case 40: charWalk('down');  break;
      //   case 37: charWalk('left');  break;
      }
    }
  });

  $(document).keyup(function(e) {
    //don't stop the walk if the player is pushing other buttons
    //only stop the walk if the key that started the walk is released
    if (e.keyCode == currentKey) {
      //set the currentKey to false, this will enable a new key to be pressed
      currentKey = false;

      //clear the walk timer
      clearInterval(TimerWalk);

      //finish the character's movement
      //$('#character').stop(true, true);
    }
  });
});
