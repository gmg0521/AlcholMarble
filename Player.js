var Player = new (function()
{

    var _this = this;

    // 현재 참여하는 플레이어의 수
    this.playerNum = 0;

    // 플레이어의 객체
    this.playerObjList = [];

    // 플레이어의 게임 순서
    this.playerList = [];

    // 현재 플레이어의 인덱스
    this.curPlayerIndex = 0;

    // 스테이지의 발판 생성
    this.stageCell = new function () {
      var cell = [];
      for (var i = 0; i < 10; i++) {
        cell[i] = i+1;
      }
      return cell;
    };

    // 게임 초기화
    this.init = function()
    {
      console.log("플레이어의 정보를 셋팅 합니다.");
      console.log("참여 플레이어의 수는 4명");
      this.setPlayer(4);  // 플레이어 수 설정
    }

    this.setPlayer = function (playerNum)
    {
      console.log("플레이어의 수를 " + playerNum + "으로 설정합니다.");
      this.playerNum = playerNum;     // 플레이어 수 설정
      console.log("플레이어의 순서를 정합니다.");
      for (var i = 1; i <= this.playerNum; i++) {
        this.playerList.push(i);   //플레이어 순서 정하고 플레이어 순서대로 리스트에 삽입
      }
      console.log("플레이어 배열 :");
      console.log(this.playerList);   // 플레이어 순서 배열 출력

      console.log("플레이어의 객체를 초기화 합니다");
      for (var pOrder = 1; pOrder < this.playerNum+1; pOrder++) { // 플레이어 수만큼 객체 초기화. pOrder는 플레이어의 순서
        this.addPlayer(pOrder, this.playerList[pOrder-1]);  // this.playerList[pOrder-1]는 플레이어의 아이디가 됌(숫자 e.g.1)
        }
        console.log("게임을 시작합니다!");
        this.startGame();
    }

    // 플레이어 객체 추가
    this.addPlayer = function(pOrder, playerId) {
      // 플레이어 객체 생성 (플레이어 ID, 플레이어 순서(정수형 배열), 현재 위치)
        this.playerObjList[pOrder-1] = new PlayerInfo(pOrder, playerId);
    }

    // 다음 플레이어로
    this.nextPlayer = function () {

      if(this.curPlayerIndex == 3)  // 방금 플레이한 플레이어의 인덱스가 3일 경우
        this.curPlayerIndex = 0;  // 처음 플레이어로
      else
        this.curPlayerIndex++;  // 아니면 인덱스 1 증가

    }

    this.startGame = function () {
      this.curPlayer = this.playerObjList[this.curPlayerIndex]; // 현재 플레이어 객체 임시 저장
      console.log("현재 플레이어 : " + this.curPlayer.getPlayerId());
      console.log("주사위를 굴립니다.");
      var diceNumber = Dice.rollDice(); // 주사위 굴리기
      console.log("나온 수 :" + diceNumber);
      console.log("플레이어를 이동합니다");
      playerMove(diceNumber); // 플레이어 이동
      console.log(curPlayer.punishmentList);  // 벌칙 기록 보여주기
      this.nextPlayer();  // 다음 플레이어로
    }

});
