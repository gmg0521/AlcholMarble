// 나온 주사위 값을 받아서 그 칸 만큼 움직이는 메소드 setPlayPosition 실행
function playerMove(diceNumber, PlayerInfo.getPlayerId) {

  var curPlayer = PlayerInfo.getPlayerId;
  var curPosition = Player.curPlayerIndex();

  console.log(curPlayer+"플레이어는");
  console.log("현재 "+curPosition+"칸에 있습니다!");
  console.log("이제 "+diceNumber+"칸 만큼 움직입니다!");

  var toMovePosition = currentPosition + diceNumber;
  if (toMovePosition >= 10) {
    toMovePosition -= 10;
  }

  PlayerInfo.setLocation(toMovePosition);

  console.log(toMovePosition+"칸에 왔습니다!");
}
