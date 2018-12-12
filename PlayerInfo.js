var PlayerInfo = function(pOrder, playerId, location, alcohol) {
  var _this =  this;

  // 플레이어 ID
  this.playerId = playerId;

  this.pOrder = pOrder;

  this.location = location;

  this.alcohol = alcohol;

  this.getPlayerId = function ()
  {
    return this.playerId;
  }

  this.getpOrder = function () {
    return this.pOrder;
  }

  this.setLocation = function (curLocation) {
    this.location = curLocation;
  }

  this.getLocation = function () {
    return this.location;
  }

  this.movePlayer = function (diceNum) {
    this.setLocation(this.getLocation()+diceNum)
    Punishment.showCurPunish(this.getLocation);
    this.Player.nextPlayer();
  }
}
