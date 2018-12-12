var Dice = new (function ()
{
  var _this = this;


  this.rollDice = function () {

    var randomNumber =Math.floor(Math.random()*6)+1;

    return randomNumber;
  }

});
