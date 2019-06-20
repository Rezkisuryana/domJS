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
// const p4 = document.querySelector('#b p');
// p4.style.color      = 'green';
// p4.style.fontSize   = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

//document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for(let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue'
// }

//cara mengguakan InnerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Suryana REzki</em>'

// constsectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>Paragraph1</p></div>';

//DOM Manipulation
//buat element baru
const pBaru     = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraph baru');
//simpan tulisan ke dalam paragraph
pBaru.appendChild(teksPBaru);

//simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

//membuat li baru
const liBaru    = document.createElement('li');
const teksLiBaru = document.createTextNode('item baru');

liBaru.appendChild(teksLiBaru);

const ul  = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

//menghapus tag a
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

//replace judul
//tangkap parentnya dulu
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// //buat element baru
// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('Judul Baru');
// // masukan teks kedalam h2
// h2Baru.appendChild(teksH2Baru);
// //habis itu baru me replace
// sectionB.replaceChild(h2Baru, p4);

//tanda component baru
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
// h2Baru.style.backgroundColor = 'lightgreen';

//event Handler onClick
// const p3 = document.querySelector('.p3');
// function ubahWarnaP2(){
//     p2.style.backgroundColor = 'lightblue';
// }
// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'red';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

//event Listener
const p4Listener = document.querySelector('section#b p');
p4Listener.addEventListener('click', function() {
    //ambil parent yaitu ul
    const ul = document.querySelector('section#b ul');
    //buat element baru
    const liBaru = document.createElement('li');
    //bikin teks didalam li
    const teksLiBaru = document.createTextNode('item baru');
    //lalu masukan
    liBaru.appendChild(teksLiBaru);
    //disimpan kedalam ul
    ul.appendChild(liBaru);
});


//perbedaan Event Handler dengan Listener
const p3 = document.querySelector('.p3');
//pake Event Handler
// p3.onclick = function(){
//     p3.style.backgroundColor = 'black';
// }
// p3.onclick = function(){
//     p3.style.color = 'yellow';
// }

//pake Event Listener
p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'black';
});
p3.addEventListener('mouseleave', function() {
    p3.style.color = 'yellow';
});