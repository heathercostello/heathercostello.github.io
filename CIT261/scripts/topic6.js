function myFunction() {
    var para = document.createElement("P");
    para.innerText = "This is a paragraph.";
    document.body.appendChild(para);
}

function myFunctionTwo() {
    var node = document.getElementById("myList2").lastChild;
    document.getElementById("myList1").appendChild(node);
}

function myFunctionThree() {
    var newItem = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    newItem.appendChild(textnode);

    var list = document.getElementById("myList");
    list.insertBefore(newItem, list.childNodes[0]);
}

function myFunctionFour() {
    var list = document.getElementById("myFood");
    list.removeChild(list.childNodes[0]);
}