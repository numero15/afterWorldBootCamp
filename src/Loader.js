//The Boot state loads preloader assets in the preload hook method and sets up Phaser game settings like scaling and input pointers via the create method.

function Loader(afterWorldBootCamp) {};
 
Loader.prototype = {

  preload: function() {
  	//A method called when a state starts. It is used for loading assets before anything else.
    // load game assets
    var title = this.add.text(80,150,'loading',{font: '30px', fill: '#ff00ff'});
    this.load.image('BG', 'assets/img/BG.png');
    this.load.spritesheet('van', 'assets/img/van_sprite.png', 68, 32, 2);
  },
  create: function() {
    // A method called after preload, used for creating game objects.
    afterWorldBootCamp.state.start('TitleScreen');
  },
  update: function() {
    // A method called for every frame, which is used for user polling and collision detection.
  },
  shutdown: function() {
    //  A method called when a state is shutdown, which is used for cleaning up game objects.
  }
};