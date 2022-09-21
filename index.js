// code your solution here
function saturdayFun(haveFun = "roller-skate") {
    return `This Saturday, I want to ${haveFun}!`
};
  
//saturdayFun();

const mondayWork = function (work = "go to the office") {
    return `This Monday, I will ${work}.`
};

function wrapAdjective (flair = '*') {
    return function inner (parameter = "special"){
        return `You are ${flair}${parameter}${flair}!`
    };
};