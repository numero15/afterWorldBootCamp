
var afterWorldBootCamp = new Phaser.Game(1000,200, Phaser.CANVAS, 'gameDiv', null, false, false);

afterWorldBootCamp.state.add('Boot', Boot);
afterWorldBootCamp.state.add('Loader', Loader);
afterWorldBootCamp.state.add('TitleScreen', TitleScreen);
afterWorldBootCamp.state.add('PlayState', PlayState);

afterWorldBootCamp.state.start('Boot');
//console.log("Manager started");



