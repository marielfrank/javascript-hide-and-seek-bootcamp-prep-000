function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  var ranked = document.getElementsByClassName('ranked-list');
  for (let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = parseInt(ranked[i]) + 1
  }
}

function deepestChild() {
  var currentNode = document.getElementById('grand-node');
  var innerDiv = currentNode.querySelectorAll('div')

  return innerDiv[innerDiv.length - 1]
}
