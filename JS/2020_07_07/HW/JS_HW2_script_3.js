// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// -- робить шириниу елементу ul 400 пікселів
// -- робить шириниу всіх елементів з класом linkList шириною 50%
// -- отримує текст який зберігається в елементі з класом listElement2-???
// -- отримує всі елементи li та змінює ім колір фону на сірий 
// -- отримує всі елементи 'a' та додає їм клас anchor -??
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення - ???

let idElement =document.getElementById('main_header');
console.log(idElement);
idElement.style.color='red';
let ulElement = document.getElementsByTagName('ul');
console.log(ulElement);
ulElement[0].style.width='400px';


 let liElement = document.getElementsByTagName('li');
 console.log(liElement)
 for (let i = 0; i < liElement.length; i++) {
   liElement[i].style.width='50%';
   liElement[i].style.backgroundColor='gray';
    
 }

//  let subHeader =document.getElementById('sub-header'); ?????
//  let colorSub =  prompt('Введіть колір');
//  subHeader.style.color=colorSub();

let pElement = document.createElement('p');

pElement.style.padding='40px'; //Не знаю де воно поміняло.???

 

