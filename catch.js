// 假設你有一個表示該<div>的變數，例如：
var targetDiv = document.getElementsByClassName("bJzME")[1]

// 建立一個空陣列來存放<h3>標題文字
var h3Titles = [];

// 遞迴函數，用於遍歷<div>的子元素
function extractH3Titles(element) {
  // 檢查當前元素是否是<h3>元素，如果是，則將其文字內容加入陣列
  if (element.tagName === 'H3') {
    h3Titles.push(element.textContent);
  }

  // 遍歷當前元素的子元素
  for (var i = 0; i < element.children.length; i++) {
    // 遞迴調用自身，處理子元素
    extractH3Titles(element.children[i]);
  }
}

// 調用遞迴函數，傳入目標<div>元素
extractH3Titles(targetDiv);

// 此時h3Titles陣列中包含了所有<h3>標題的文字內容
console.log(h3Titles);