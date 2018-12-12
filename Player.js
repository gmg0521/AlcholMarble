var Player = new (function()
{

    var _this = this;

    // 현재 참여하는 플레이어의 수
    this.playerNum = 0;

    // 플레이어의 객체
    this.playerObjList = {};

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
      console.log("참여 플레이어의 수를 입력하시려면 setPlayerNum(2~4)를 입력하세요.");
    }

    this.setPlayer = function (playerNum)
    {
      console.log("플레이어의 수를 " + playerNum + "으로 설정합니다.");
      this.playerNum = playerNum;
      console.log("플레이어들의 컨트롤 객체를 추가합니다.");
      for (var i = 1; i <= this.playerNum; i++) {
        this.playerList.push(i);
      }
      console.log("플레이어 배열 :");
      console.log(this.playerList);

      console.log("플레이어의 객체를 초기화 합니다");
      for (var pOrder = 1; i < this.playerNum; pOrder++) {
        this.addPlayer(pOrder, this.playerList[pOrder-1]);
        }
    }

    this.addPlayer = function(pOrder, playerId) {
      // 플레이어 객체 생성 (플레이어 ID, 플레이어 순서(정수형 배열), 현재 위치)
      var playerObj = new PlayerInfo(playerId, pOrder, stageCell[0]);
    }

    this.nextPlayer = function () {
      if(this.curPlayerIndex == 3)
        this.curPlayerIndex = 0;
      else
        this.curPlayerIndex++;

      this.startGame();
    }

    this.startGame = new function () {

    }
});
