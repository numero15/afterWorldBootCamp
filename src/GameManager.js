
var afterWorldBootCamp = new Phaser.Game(1000,200, Phaser.AUTO, 'gameDiv',null,false,false);

afterWorldBootCamp.state.add('Boot', boot);
afterWorldBootCamp.state.add('Loader', loader);

afterWorldBootCamp.state.start('Boot');
//console.log("Manager started");



