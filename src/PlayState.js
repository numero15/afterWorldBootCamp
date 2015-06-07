//The Boot state loads preloader assets in the preload hook method and sets up Phaser game settings like scaling and input pointers via the create method.

function PlayState(afterWorldBootCamp) {
   var BG;

};
 
PlayState.prototype = {

  preload: function() {
  	//A method called when a state starts. It is used for loading assets before anything else.   
  },
  create: function() {
    // A method called after preload, used for creating game objects.
    //BG = this.add.sprite(0, 0, 'BG');
     BG = this.add.group();
     BG.create(0, 0,'BG');
     BG.create(1000, 0,'BG');
    //BG.scale.setTo(4.5,4.5);
    // BG.y=-500;
    var van = this.add.sprite(68, 32, 'van');
    van.animations.add('rolling', [0, 1], 5, true);
    van.animations.play('rolling');
    van.x= (afterWorldBootCamp.width-van.width)/2;
    van.y=135;
    console.log(afterWorldBootCamp.width/2);
  },
  update: function() {
    // A method called for every frame, which is used for user polling and collision detection.
    BG.x-=2;
    if(BG.x<-1000)BG.x=0;
  },
  shutdown: function() {
    //  A method called when a state is shutdown, which is used for cleaning up game objects.
  }
};