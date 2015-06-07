//The Boot state loads preloader assets in the preload hook method and sets up Phaser game settings like scaling and input pointers via the create method.

function playState(afterWorldBootCamp) {};
 
playState.prototype = {

  preload: function() {
  	//A method called when a state starts. It is used for loading assets before anything else.   
  },
  create: function() {
    // A method called after preload, used for creating game objects.
  },
  update: function() {
    // A method called for every frame, which is used for user polling and collision detection.
  },
  shutdown: function() {
    //  A method called when a state is shutdown, which is used for cleaning up game objects.
  }
};