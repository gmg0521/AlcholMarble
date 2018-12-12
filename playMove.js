// 기본 값 세팅(주사위 값, 게임판, 플레이어 위치)
var diceNumber = 1;
var board = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var playerPosition = 0;
var sulList = [];

// 나온 주사위 값을 받아서 그 칸 만큼 움직이는 메소드 setPlayPosition 실행
function playerMove(diceNumber) {
  console.log(diceNumber+"칸 만큼 움직입니다!");

  var currentPosition = getPlayPosition();
  var toMovePosition = currentPosition+diceNumber;
  if (toMovePosition >= 10) {
    toMovePosition -= 10;
  }
  setPlayPosition(toMovePosition);
}

// 현재 플래이어 위치를 가져오는 메소드
function getPlayPosition() {
  return playerPosition;
}

// 플레이어 이동 메소드. 위치한 칸의 메시지를 띄우는 getMessage 메소드 실행
function setPlayPosition(newPosition) {
  playerPosition = newPosition;
  console.log(newPosition+"번 칸에 왔습니다!");
  getMessage(newPosition);
}

// 플레이어가 위치한 칸의 메시지를 띄우는 메소드
function getMessage(position) {
  switch (position) {
    case 1:
      console.log("1번 칸 : 소주 한잔");
      sulList.push("소주 한잔");
      break;
    case 2:
      console.log("2번 칸 : 소주 한잔");
      sulList.push("소주 한잔");
      break;
    case 3:
      console.log("3번 칸 : 소주 한잔");
      sulList.push("소주 한잔");
      break;
    case 4:
      console.log("4번 칸 : 소주 한잔");
      sulList.push("소주 한잔");
      break;
    case 5:
      console.log("5번 칸 : 소주 한잔");
      sulList.push("소주 한잔");
      break;
    case 6:
      console.log("6번 칸 : 소주 한잔");
      sulList.push("소주 한잔");
      break;
    case 7:
      console.log("7번 칸 : 소주 한잔");
      sulList.push("소주 한잔");
      break;
    case 8:
      console.log("8번 칸 : 소주 한잔");
      sulList.push("소주 한잔");
      break;
    case 9:
      console.log("9번 칸 : 소주 한잔");
      sulList.push("소주 한잔");
      break;
    default:
      console.log("0번 칸 : 한 번 쉬기  ");
      break;
  }
}

// 벌칙 내용을 출력하는 메소드
function textList() {
  for (var i = 0; i < sulList.length; i++) {
    console.log(sulList[i]+"\n");
  }
}
