// 나온 주사위 값을 받아서 그 칸 만큼 움직이는 메소드 setPlayPosition 실행
var PlayerMove = new (function ()
{
  var _this = this;

  this.playerMove = function (diceNumber) {
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

    this.playerArrived(curPlayer, toMovePosition);

    //Punishment.showCurPunish(toMovePosition, curPlayer);
  }

  this.playerArrived = function (curPlayer, toMovePosition) {

    var cellType = Punishment.getCell(toMovePosition);

    switch (cellType.type) {
      case "default":
        // 기본 칸일경우
        curPlayer.punishmentAlcohol += cellType.alcohol;
        Punishment.getBloodAlcohol(curPlayer.punishmentAlcohol);
        console.log(cellType.title);
        console.log("현재까지 총 소주 "+curPlayer.punishmentAlcohol+" 잔");
        console.log("혈중 알코올농도 : " + Punishment.getBloodAlcohol(curPlayer.punishmentAlcohol));
        break;

      case "key":
        // 황금카드일경우
        console.log("황금카드를 뽑았습니다");
        break;

      case "warp":
        // 워프일경우
        console.log("워프를 했습니다.");
        break;

      default:
    }
  }

});
