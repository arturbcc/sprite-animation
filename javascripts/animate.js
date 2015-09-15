var $ = window.jQuery;

var CaptainAmerica = function(root, options) {
  this.root = $(root);

  this.settings = $.extend({
    fps: 10,
    columns: 4,
    width: 210,
    height: 200,
    animations: {
      walkRight: [0, 1, 2, 3, 2, 1],
      walkLeft: [15, 14, 13, 12, 11, 10, 9, 8]
    },
    loop: true,
    complete: function() {
      console.log('animation End');
    }
  }, options);

  return this;
};

var fn = CaptainAmerica.prototype;

fn.start = function() {
  $(this.root).animateSprite(this.settings);
  return this;
}

$(document).ready(function() {
  var captainAmerica1 = new CaptainAmerica('.captain-america-2').start();

  var captainAmerica2 = new CaptainAmerica('.captain-america-3').start();
  // $('.captain-america-2').animateSprite({
  //   fps: 10,
  //   columns: 4,
  //   width: 210,
  //   height: 200,
  //   animations: {
  //       walkRight: [0, 1, 2, 3, 2, 1],
  //       walkLeft: [15, 14, 13, 12, 11, 10, 9, 8]
  //   },
  //   loop: true,
  //   complete: function() {
  //       // use complete only when you set animations with 'loop: false'
  //       console.log('animation End');
  //   }
  // });

  // $('.captain-america-3').animateSprite({
  //   fps: 10,
  //   columns: 4,
  //   width: 210,
  //   height: 200,
  //   animations: {
  //       walkRight: [0, 1, 2, 3, 2, 1],
  //       walkLeft: [15, 14, 13, 12, 11, 10, 9, 8]
  //   },
  //   loop: true,
  //   complete: function() {
  //       // use complete only when you set animations with 'loop: false'
  //       console.log('animation End');
  //   }
  // });
});