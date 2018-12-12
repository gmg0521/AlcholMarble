var Punishment = new (function () {
  var _this = this;

  this.punishmentList = {
  pun2 : "소주 1잔",
  pun3 : "소주 1병",
  pun4 : "황금열쇠",
  pun5 : "정해찬 한대 때리기 ㅎㅎ",
  pun6 : "맥주 한잔 원샷",
  pun7 : "맥주 1잔 원샷",
  pun8 : "일어나서 노래부르기",
  pun9 : "황금열쇠",
  pun10 : "플레이어 2,3 소주 1잔 원샷",
  pun11 : "플레이어 4 혼자 소주 1잔 원샷",
  pun12 : "플레이어 3 혼자 맥주 1잔 원샷",
  pun13 : "황금열쇠",
  pun14 : "플레이어2 소주 1잔 원샷",
  pun15 : "플레이어1 맥주 1잔 원샷",
  pun16 : "나 빼고 다 맥주 1잔 원샷",
  pun17 : "나 빼고 다 소주 1병 원샷",
  pun18 : "황금열쇠",
  pun19 : "맥주 3잔 원샷",
  pun20 : "나 빼고 다 소주 1잔 원샷" };

  this.showCurPunish = function (i, curPlayer) {
    var punishment = this.punishmentList["pun"+i];
    console.log(punishment);
    curPlayer.punishmentList.push(punishment)
  }
});
