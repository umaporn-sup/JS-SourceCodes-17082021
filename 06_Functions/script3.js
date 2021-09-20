let getScoringPass = function (scores) {
  //bind and store "scores" argument to use in the nested "cuttingPoint" function
  function cuttingPoint(cuttingScore) {
    return scores.filter((score) => score >= cuttingScore);
  }
  return cuttingPoint;
};
//fn_cuttingPoint1 and fn_cuttingPoint2 are instance closure functions
//that bind to each their outer parameter "scores"
let fn_cuttingPoint1 = getScoringPass([50, 15, 32, 80, 100]);
console.log(fn_cuttingPoint1(50));
let fn_cuttingPoint2 = getScoringPass([-10, -15, -53, -97, -32]);
console.log(fn_cuttingPoint2(-30));
