window.onload = () => {
  //this data must be accessed in an aynchronous way
  let title = 'ajax - get method';
  let content = '$.get(www.naver.com)';
  let boxDate = '이틀 전';

  let box1 = new Box(title, content, boxDate);
  box1.draw('parent');
};

let divStr = 'div';

function Box(boxTitle, boxContent, boxDate) {
  this.boxTitle = boxTitle;
  this.boxContent = boxContent;
  this.boxDate = boxDate;

  this.draw = function (parentId) {
    let boxElement = document.createElement(divStr);
    let boxTitleElement = createElementWithText(divStr, this.boxTitle);
    let boxContentElement = createElementWithText(divStr, this.boxContent);
    let boxDateElement = createElementWithText(divStr, this.boxDate);
    boxElement.append(boxTitleElement, boxContentElement, boxDateElement); //append multiple child nodes to a parent node
    document.getElementById(parentId).appendChild(boxElement);
  };
}

//text를 tagName 사이에 넣어 생성된 element 반환
function createElementWithText(tagName, text) {
  let divElement = document.createElement(tagName);
  let textNode = document.createTextNode(text);
  divElement.appendChild(textNode);
  return divElement;
}
