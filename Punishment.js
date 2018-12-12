var Punishment = new function () {
  var _this = this;

  this.punishmentList = {
    pun1 : "술 1잔",
    pun2 : "술 2잔",
    pun3 : "술 1병"
  };

  this.showCurPunish = function (i) {
    console.log(this.punishmentList["pun"+i]);
  }
}
