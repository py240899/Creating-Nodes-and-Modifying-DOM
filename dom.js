// //TRAVERSING THE DOM//

// var itemList = document.querySelector('#items');

// //parentNode
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = '#f4f4f4';
// // console.log(itemList.parentNode.parentNode.parentNode);

// //parentElement
// //console.log(itemList.parentElement);
// //itemList.parentElement.style.backgroundColor = '#f4f4f4';
// //console.log(itemList.parentElement.parentElement.parentElement);

// // childNode
// //console.log(itemList.childNodes);

// // console.log(itemList.children);
// // console.log(itemList.children[1]);
// // itemList.children[1].style.backgroundColor = "yellow";

// // FirstChild
// //console.log(itemList.firstChild);

// // FirstChildElement
// //console.log(itemList.firstElementChild);
// //itemList.firstElementChild.textContent = "Hello 1";

// //LastChild
// //console.log(itemList.lastChild);

// //LastChildElement
// //console.log(itemList.lastElementChild);
// //itemList.lastElementChild.textContent = "Hello Last";

// //nextSibling
// //console.log(itemList.nextSibling);

// //nextElementSibling
// //console.log(itemList.nextElementSibling);

// //previousSibling
// //console.log(itemList.previousSibling);

// //previousElementSibling
// // console.log(itemList.previousElementSibling);
// // itemList.previousElementSibling.style.color = "green";

// //createElement

// //create a div 
// var newDiv = document.createElement('div');


// //Add a class
// newDiv.className = 'hello';

// //Add a id
// newDiv.id = 'hello 1';

// //Add attr
// newDiv.setAttribute('title','Hello Div');

// //Create text Node
// var newDivText = document.createTextNode('Hello World');

// //Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv,h1);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit',addItem);

//Delete event
itemList.addEventListener('click',removeItem);

//Add Item
function addItem(){
    e.preventDefault();

    //Get Input Value
    var newItem = document.getElementById('item').value;

    // Create a new li element
    var li = document.createElement('li');

    //Add class
    li.className = 'list-group-item';
    console.log(li);

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button element
    var deleteBtn = document.createElement('button');

    //Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append Text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append deletebtn to li 
    li.appendChild(deleteBtn)

    //Append li to list
    itemList.appendChild(li);
}

//Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}