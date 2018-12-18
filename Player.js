
var canvas = document.getElementById("marbleCanvas");
var ctx = canvas.getContext("2d");
var cFramePosX = canvas.width/2;
var cFramePosY = canvas.height/2;
ctx.font ="40px Arial";
ctx.textAlign = 'center';

var timer = 30;

var avatarFlag = false;

var Player =
{
    // 스테이지의 발판 생성. 현재 무쓸모??
    /* stageCell = new function () {
      var cell = [];
      for (var i = 0; i < 10; i++) {
        cell[i] = i+1;
      }
      return cell;
    }; */

    playerNum : 0,

    // 플레이어의 객체
    playerObjList : [],

    // 플레이어의 게임 순서
    playerList : [],

    // 현재 플레이어의 인덱스
    curPlayerIndex : 0,

    // 게임 초기화
    init : function()
    {
      ctx.fillText("플레이어의 정보를 셋팅합니다.", cFramePosX, cFramePosY);
      console.log("플레이어의 정보를 셋팅 합니다.");
      setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText("참여 플레이어 수 : 4명.", cFramePosX, cFramePosY);
        console.log("참여 플레이어의 수는 4명");
      }, timer);
      Player.setPlayer(4);  // 플레이어 수 설정
    },

    setPlayer : function (cPlayerNum)
    {
      setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText("플레이어의 수를 " + cPlayerNum + "으로 설정합니다.", cFramePosX, cFramePosY);
        console.log("플레이어의 수를 " + cPlayerNum + "으로 설정합니다.")
      }, timer*2);
      Player.playerNum = cPlayerNum;     // 플레이어 수 설정

      setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText("플레이어의 순서를 정하는 중입니다.", cFramePosX, cFramePosY);
        console.log("플레이어의 순서를 정합니다.");
        console.log("플레이어 배열 :");
        console.log(Player.playerList);   // 플레이어 순서 배열 출력
      }, timer*3);
      for (var i = 1; i <= Player.playerNum; i++) {
        Player.playerList.push(i);   //플레이어 순서 정하고 플레이어 순서대로 리스트에 삽입
      }

      setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText("플레이어의 객체를 초기화중입니다.", cFramePosX, cFramePosY);
        console.log("플레이어의 객체를 초기화 합니다");
      }, timer*4);
      for (var pOrder = 1; pOrder < Player.playerNum+1; pOrder++) { // 플레이어 수만큼 객체 초기화. pOrder는 플레이어의 순서
        Player.addPlayer(pOrder, Player.playerList[pOrder-1]);  // playerList[pOrder-1]는 플레이어의 아이디가 됌(숫자 e.g.1)
      }

      setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText("게임을 시작합니다!.", cFramePosX, cFramePosY);
        console.log("게임을 시작합니다!");
      }, timer*4+30);
      setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText("3", cFramePosX, cFramePosY);
        console.log("3");
      }, timer*4+60);
      setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText("2", cFramePosX, cFramePosY);
        console.log("2");
      }, timer*5+30);
      setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText("1", cFramePosX, cFramePosY);
        console.log("1");
      }, timer*5+60);
      setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        Player.startGame();
      }, timer*5+600);

    },

    // 플레이어 객체 추가
    addPlayer : function(pOrder, playerId) {
      // 플레이어 객체 생성 (플레이어 ID, 플레이어 순서(정수형 배열), 현재 위치)
        Player.playerObjList[pOrder-1] = new PlayerInfo(pOrder, playerId);
    },

    // 다음 플레이어로
    nextPlayer : function () {

      if(Player.curPlayerIndex == 3)  // 방금 플레이한 플레이어의 인덱스가 3일 경우
        Player.curPlayerIndex = 0;  // 처음 플레이어로
      else
        Player.curPlayerIndex++;  // 아니면 인덱스 1 증가

    },

    startGame : function () {
      var curPlayer = Player.playerObjList[Player.curPlayerIndex]; // 현재 플레이어 객체 임시 저장
      // 프레임 초기화
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // 플레이어 정보 초기화
      curPlayer.infoRefresh();
      //판
      var imageObj = new Image();
      imageObj.onload = function() {
        ctx.drawImage(imageObj, 81, 133, 1086, 466);
      };
      imageObj.src = 'img/marble.png';
      // 아바타 초기 생성이면 init, 아니면 refresh
      (avatarFlag == false ? Avatar.init() : Avatar.refresh())

      console.log("현재 플레이어 : " + curPlayer.getPlayerId());
      console.log("주사위를 굴립니다.");
      var diceNumber = Dice.rollDice(); // 주사위 굴리기
      console.log("나온 수 :" + diceNumber);
      console.log("플레이어를 이동합니다");
      PlayerMove.playerMove(diceNumber); // 플레이어 이동
      this.nextPlayer();  // 다음 플레이어로
    }

};
