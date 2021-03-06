//The Boot state loads preloader assets in the preload hook method and sets up Phaser game settings like scaling and input pointers via the create method.

//constructor
function Boot(afterWorldBootCamp) {};
 
 //prototypes
Boot.prototype = {

  preload: function() {
  	//A method called when a state starts. It is used for loading assets before anything else.
    // load preloader assets
    var title = this.add.text(80,150,'booting',{font: '30px', fill: '#ff00ff'});
  },
  create: function() {
  	//method called after preload, used for creating game objects
    // setup game environment : scale, input etc..
    //this.input.maxPointers = 1;
    //make the div responsive (not what we want so far)
    //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //this.scale.pageAlignHorizontally = true;
    //this.scale.pageAlignVertically = true;
    //this.scale.setScreenSize(true);
    //this.stage.smoothed = false;
   
    
    //afterWorldBootCamp.stage.scale.setShowAll();
   // afterWorldBootCamp.stage.scale.startFullScreen(true);
   // afterWorldBootCamp.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL; //resize your window to see the stage resize too
   // afterWorldBootCamp.stage.scale.refresh();
  afterWorldBootCamp.stage.smoothed = false;



    afterWorldBootCamp.state.start('Loader');
  }
}