// 나온 주사위 값을 받아서 그 칸 만큼 움직이는 메소드 setPlayPosition 실행
var PlayerMove = new(function() {
  var _this = this;

  this.playerMove = function(diceNumber, curPlayer) {
    var curPlayer = Player.playerObjList[Player.curPlayerIndex];
    var curPosition = curPlayer.location;

    console.log(curPlayer.getPlayerId() + "플레이어는");
    console.log("현재 " + curPosition + "칸에 있습니다!");
    console.log("이제 " + diceNumber + "칸 만큼 움직입니다!");

    var toMovePosition = curPosition + diceNumber;
    if (toMovePosition > 20) {
      toMovePosition -= 20;
    }

    curPlayer.setLocation(toMovePosition);

    console.log(toMovePosition + "칸에 왔습니다!");

  }

  // 플레이어가 칸에 도착했을 때 이벤트를 처리하는 메소드.
  this.playerArrived = function(curPlayer, toMovePosition) {

    var cellType = Punishment.getCell(toMovePosition);

    switch (cellType.type) { // 칸 정보에서 type을 받아와 case문으로 처리한다.
      case "default":
        // 기본 칸일경우
        if (curPlayer.hasGoldKey()) {
          if (confirm("황금카드를 사용하시겠습니까? 남은 카드 : " + curPlayer.hasGoldKey + "개")) {
            console.log("황금카드를 사용했습니다!");
            return;
          }
          this.putAlcohol(curPlayer;)
        }
        break;

      case "key":
        // 황금카드일경우
        this.getGoldKey(curPlayer); //여기 짜야돼 골드 키 얻었을 때
        console.log("황금카드를 얻었습니다!");
        break;

      case "warp":
        // 워프일경우
        curPlayer.setLocation(12);
        console.log("워프를 했습니다!");
        break;

      default:
        console.log(cellType.title + "!");
    }
  }

  this.getGoldKey = function(curPlayer) {
    curPlayer.goldKey += 1;
  }

  this.putAlcohol = function(curPlayer) {
    curPlayer.punishmentAlcohol += cellType.alcohol;
    Punishment.getBloodAlcohol(curPlayer.punishmentAlcohol);
    console.log(cellType.title);
    console.log("현재까지 총 소주 " + curPlayer.punishmentAlcohol + " 잔");
    console.log("혈중 알코올농도 : " + Punishment.getBloodAlcohol(curPlayer.punishmentAlcohol));
  }

  this.endGame = function(curPlayer) {
    console.log("게임 끝!! 승자는 플레이어 " + curPlayer.getPlayerId);
  }

});
