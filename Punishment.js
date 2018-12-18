var Punishment = new (function () {
  var _this = this;

  var MAP_DATA = [
  { type : "default", title : "출발", alcohol : 0},
  { type : "default", title : "소주 1 잔", alcohol : 1},
  { type : "default", title : "소주 1 병", alcohol : 7.5},
  { type : "key", title : "소주 1 잔", alcohol : 1},
  { type : "warp", title : "워프", alcohol : 0},
  { type : "default", title : "맥주 1 잔", alcohol : 1.1},
  { type : "default", title : "소주 1 잔", alcohol : 1},
  { type : "default", title : "맥주 1 잔", alcohol : 1.1},
  { type : "default", title : "소주 1 잔", alcohol : 1},
  { type : "default", title : "맥주 1 잔", alcohol : 1.1},
  { type : "default", title : "한 번 쉬기", alcohol : 0},
  { type : "default", title : "맥주 1 잔", alcohol : 1.1},
  { type : "default", title : "소주 1 잔", alcohol : 1},
  { type : "default", title : "맥주 1 잔", alcohol : 1.1},
  { type : "default", title : "소주 1 잔", alcohol : 1},
  { type : "default", title : "맥주 1 잔", alcohol : 1.1},
  { type : "default", title : "소주 1 잔", alcohol : 1},
  { type : "default", title : "맥주 1 잔", alcohol : 1.1},
  { type : "default", title : "소주 1 잔", alcohol : 1},
  { type : "warp", title : "워프", alcohol : 0}
  ];

// 콘솔에서 벌칙과 내역 출력 메소드. 플레이어 무브에서 케이스를 쓴다면 지워도 될듯.
  this.showCurPunish = function (i, curPlayer) {
    var punishment = this.punishmentList["pun"+i];
    console.log(punishment);
    curPlayer.punishmentList.push(punishment)
  }

  this.getCell = function (index) {
    return MAP_DATA[index];
  }

  this.getBloodAlcohol = function (alcohol) {
    var cal = (alcohol*48*0.017*0.7894)/(70*0.6);
    return cal.toFixed(2);
  }

});
