var $ = window.jQuery;

var CaptainAmerica = function(root, options) {
  this.root = $(root);
  this.currentMotion = null;

  this.settings = $.extend({
    fps: 12,
    columns: 4,
    width: 210,
    height: 200,
    loop: false,
    autoplay: false
  }, options);

  this.settings.complete = this.completeAnimation.bind(this);

  $(this.root).animateSprite(this.settings);

  return this;
};

var fn = CaptainAmerica.prototype;

fn.completeAnimation = function() {
  this.currentMotion = null;
};

fn.call = function(motion) {
  if (this.currentMotion != motion) {
    this.currentMotion = motion;
    $(this.root).animateSprite('restart').animateSprite('play', motion);
  }

  return this;
};

fn.punch = function() {
  return this.call('punch');
};

var leftChar;
var rightChar;

$(document).ready(function() {
  leftChar = new CaptainAmerica('.captain-america-2', {
    animations: {
      punch: [0, 1, 2, 3, 2, 1, 0]
    }
  });

  rightChar = new CaptainAmerica('.captain-america-3', {
    animations: {
      punch: [3, 2, 1, 0, 1, 2, 3]
    }
  });

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
        case 85: rightChar.punch(); break; //u
        case 69: leftChar.punch(); break; //e
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
