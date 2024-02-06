
const htmlElement = document.querySelector('html');
const bodyElement = document.querySelector('body');
const ulElement = document.querySelector('ul.menu');
const thirdParagraph = document.querySelectorAll('p')[2];
const googleListItem = document.querySelector('.google-list-item');
const menuItems = document.querySelectorAll('.menu > li');
const googleLink = document.querySelector('a[href="https://google.com"]');
const lastScript = document.querySelector('script:last-of-type');
const secondToLastP = document.querySelector('p:nth-last-of-type(2)');
const spanInNextParagraph = document.querySelector('p + h2 + p span');
htmlElement.style.backgroundColor = 'lightblue';
bodyElement.style.backgroundColor = 'lightgreen';
ulElement.style.backgroundColor = 'lightyellow';
thirdParagraph.style.backgroundColor = 'lightcoral';
googleListItem.classList.add('highlighted');
menuItems.forEach(item => {
    item.style.backgroundColor = 'lightgrey';
});
if (googleLink) {
    googleLink.style.color = 'blue';
}
lastScript.style.border = '2px solid red';
secondToLastP.style.fontWeight = 'bold';
console.log('HTML element:', htmlElement);
console.log('Body element:', bodyElement);
console.log('Menu element:', ulElement);
console.log('Third paragraph:', thirdParagraph);
console.log('Google list item:', googleListItem);
console.log('Menu items:', menuItems);
console.log('Google link:', googleLink);
console.log('Last script:', lastScript);
console.log('Second to last paragraph:', secondToLastP);
console.log('Span in next paragraph:', spanInNextParagraph);
 function logAllNodes(node) {
   console.log(node);
   node.childNodes.forEach(childNode => {
     logAllNodes(childNode);
   });
 }
 logAllNodes(document);