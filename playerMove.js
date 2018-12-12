// 나온 주사위 값을 받아서 그 칸 만큼 움직이는 메소드 setPlayPosition 실행
var PlayerMove = new (function ()
{
  var _this = this;

  this.playerMove = function (diceNumber, curPlayer) {
    var curPlayer = Player.playerObjList[Player.curPlayerIndex];
    var curPosition = curPlayer.location;

    console.log(curPlayer.getPlayerId()+"플레이어는");
    console.log("현재 "+curPosition+"칸에 있습니다!");
    console.log("이제 "+diceNumber+"칸 만큼 움직입니다!");

    var toMovePosition = curPosition + diceNumber;
    if (toMovePosition > 20) {
      toMovePosition -= 20;
    }

    curPlayer.setLocation(toMovePosition);

    console.log(toMovePosition+"칸에 왔습니다!");

    Punishment.showCurPunish(toMovePosition, curPlayer);
  }

});
