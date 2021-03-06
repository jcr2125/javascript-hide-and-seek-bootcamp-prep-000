function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild(){
  var deepestNode = document.getElementById("grand-node").querySelectorAll("div");
  return deepestNode[deepestNode.length - 1];
}