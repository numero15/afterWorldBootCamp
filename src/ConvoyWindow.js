//extends phaser.group

var ConvoyWindow = function (afterWorldBootCamp) {
   Phaser.Group.call(this, afterWorldBootCamp); //extends phaser.group
   var BG;
   var tween;
   var van0;
   var van1;
   var van2;
};
 
ConvoyWindow.prototype = Object.create(Phaser.Group.prototype); //extends phaser.group
ConvoyWindow.prototype.constructor = ConvoyWindow; //extends phaser.group


 ConvoyWindow.prototype.init = function()
 {
    BG = afterWorldBootCamp.add.sprite(0, 0, null);
    BG01 = afterWorldBootCamp.add.sprite(0, 0, 'BG');
    BG.addChild(BG01);
    BG02 = afterWorldBootCamp.add.sprite(1000, 0, 'BG');
    BG.addChild(BG02);
    this.add(BG);
    van0 = this.create(68, 32, 'van');
    van0.animations.add('rolling', [0, 1], 5, true);
    van0.animations.play('rolling');
    van0.x= (afterWorldBootCamp.width-van0.width)/2;
    van0.y=135;
    van0.inputEnabled = true;
    van0.events.onInputDown.add(onDown, this);

    van1 = this.create(68, 32, 'van');
    van1.animations.add('rolling', [0, 1], 5, true);
    van1.animations.play('rolling');
    van1.x= van0.x+van0.width+10;
    van1.y=135;
    van1.inputEnabled = true;
    van1.events.onInputDown.add(onDown, this);

    van2 = this.create(68, 32, 'van');
    van2.animations.add('rolling', [0, 1], 5, true);
    van2.animations.play('rolling');
    van2.x=  van1.x+van1.width+10;
    van2.y=135;
    van2.inputEnabled = true;
    van2.events.onInputDown.add(onDown, this);
  }

 ConvoyWindow.prototype.update = function() {
    // A method called for every frame, which is used for user polling and collision detection.
   BG.x-=2;
    if(BG.x<-1000)BG.x=0;
  }

  onDown = function(s, pointer) {
    var target =s;
    if(this.scale.x==1)
    {
      afterWorldBootCamp.add.tween(this.scale).to({x: 4, y: 4}, 3000, Phaser.Easing.Quartic.Out, true);
      afterWorldBootCamp.add.tween(this).to({x: -target.x*4+500-target.width*4/2, y:-target.y*4+100-target.height*4/2}, 3000, Phaser.Easing.Quartic.Out, true);
    }

    if(this.scale.x==4)
    {
      afterWorldBootCamp.add.tween(this.scale).to({x: 1, y: 1}, 3000, Phaser.Easing.Quartic.Out, true);
      afterWorldBootCamp.add.tween(this).to({x:0, y:0}, 3000, Phaser.Easing.Quartic.Out, true);
    }
   
  }
 