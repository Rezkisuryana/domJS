//DOM selection
//document.getElementId()
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#acc';
// judul.innerHTML = 'Rezki Suryana';

// document.getElementsByTagName()
// -> HTMLCollections
// const p = document.getElementsByTagName('p');
// for(let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElemntsByClassName()
// -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'diubah dari javascript';

// document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color      = 'green';
p4.style.fontSize   = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

//document.querySelectorAll()
const p = document.querySelectorAll('p');
for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue'
}

//cara mengguakan InnerHTML
const judul = document.getElementById('judul');
judul.innerHTML = '<em>Suryana REzki</em>'

constsectionA = document.querySelector('section#a');
sectionA.innerHTML = '<div><p>Paragraph1</p></div>';
