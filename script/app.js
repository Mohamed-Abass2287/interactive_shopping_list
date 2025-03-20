const shoppingList = ['Managu', 'Mrenda', 'Matumbo'];
 //  Utility functions for DOM manipulation
 function createAnElement(element) {
    return document.createElement(element);
}
function addText(element, text) {
    return (element.innerText = text);
}
function appendChild(parentElement, childElement) {
    return parentElement.appendChild(childElement);
}
function select(selector) {
    return document.querySelector(selector);
}
function listen(element, event, callback) {
    return element.addEventListener(event, callback);
}
function addAttribute(element, attribute, content) {
    return element.setAttribute(attribute, content);
}
listen(document, 'DOMContentLoaded', displayItems);
const ol = select('ol');

function displayItems() {
    shoppingList.forEach((item) => {
        const li = createAnElement('li');
        addText(li, item);
        appendChild(ol, li);

     //li.addEventListener("click",()=> togglechecked(li))
     listen(li, "click",()=> toggleChecked(li));

     function toggleChecked(){
        li.classlist.toggle("checked");
    }
     
    });
}
//const form=diocument.querySelector("form")
const form =select("form");

form.addEventListener("submit",additem)
listen(form,"submit", additem)

function additem(event){
    event.preventDefault();

    console.dir(event.target)
}