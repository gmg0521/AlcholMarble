var PlayerInfo = function(playerId, pOrder, location) {
  var _this =  this;

  // 플레이어 ID
  this.playerID = playerID;

  this.pOrder = pOrder;

  this.location = location;

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
