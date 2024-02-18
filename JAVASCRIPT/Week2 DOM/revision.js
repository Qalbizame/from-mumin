let body = document.querySelector('body');
let heading1  = document.createElement('h1');
let paragraph = document.createElement('p');
let image  = document.createElement('img');

heading1.innerText = 'Kusoo dhawoow DOM.';
paragraph.innerText = "Waan dhawahay"
image.src = 'https://s3.ap-south-1.amazonaws.com/stage.radixweb.com/Vue_JS_Practices_for_Web_Development_Project_60ce3ef3d6.jpg'

body.appendChild(heading1);
body.appendChild(paragraph);
body.appendChild(image);
let stylingParagraph = `
color: dodgerblue;
background-color: white;
text-align: center;
font-size: 44px;
margin: 40px;
padding: 20px;
border-radius: 20px;
`
paragraph.style.cssText = stylingParagraph;
heading1.style.color = 'white';
image.style.width = '300px';