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

    this.init = function()
    {
      console.log("플레이어의 정보를 셋팅 합니다.");
      console.log("참여 플레이어의 수는 4명");
      this.setPlayer(4);
    }

    this.setPlayer = function (playerNum)
    {
      console.log("플레이어의 수를 " + playerNum + "으로 설정합니다.");
      this.playerNum = playerNum;
      console.log("플레이어의 순서를 정합니다.");
      for (var i = 1; i <= this.playerNum; i++) {
        this.playerList.push(i);
      }
      console.log("플레이어 배열 :");
      console.log(this.playerList);

      console.log("플레이어의 객체를 초기화 합니다");
      for (var pOrder = 1; pOrder < this.playerNum+1; pOrder++) {
        this.addPlayer(pOrder, this.playerList[pOrder-1]);
        }
        console.log("게임을 시작합니다!");
        this.startGame();
    }

    this.addPlayer = function(pOrder, playerId) {
      // 플레이어 객체 생성 (플레이어 ID, 플레이어 순서(정수형 배열), 현재 위치)
        this.playerObjList[pOrder-1] = new PlayerInfo(pOrder, playerId, this.stageCell[0], 0);
    }

    this.nextPlayer = function () {
      if(this.curPlayerIndex == 3)
        this.curPlayerIndex = 0;
      else
        this.curPlayerIndex++;

      this.startGame();
    }

    this.startGame = function () {
      console.log("현재 플레이어 : " + this.playerObjList[this.curPlayerIndex].getPlayerId());
      console.log("주사위를 굴립니다.");
      console.log("나온 수 :" + Dice.rollDice());
    }

});
