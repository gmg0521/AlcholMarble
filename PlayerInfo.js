// 플레이어의 정보를 다루는 PlayerInfo객체
var PlayerInfo = function(pOrder, playerId) {
  var _this =  this;

  // 플레이어 ID
  this.playerId = playerId;

  this.pOrder = pOrder;

  this.location = 1;

  this.alcohol = 0 + "%";

  this.punishmentList = [];

  this.getPlayerId = function ()
  {
    return this.playerId;
  }

  this.getpOrder = function () {
    return this.pOrder;
  }

  this.setLocation = function setLocation(curLocation) {
    this.location = curLocation;
  }

  this.getLocation = function () {
    return this.location;
  }

  this.infoRefresh = function () {
    ctx.beginPath();
    ctx.rect(10, 10, 200, 100);
    ctx.rect(canvas.width-210, 10, 200, 100);
    ctx.rect(10, canvas.height-110, 200, 100);
    ctx.rect(canvas.width-210, canvas.height-110, 200, 100);
    ctx.strokeType = "#FFF000";
    ctx.fillStyle = "#FFFFFF";
    ctx.lineWidth = 3;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
};
