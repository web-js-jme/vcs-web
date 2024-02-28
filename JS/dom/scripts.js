document.getElementById('box');
document.querySelector('#box');

document.getElementsByClassName('box-div');
document.querySelector('.box-div');

document.getElementsByClassName('box-div')[0];

let container = document.querySelector('.container');
console.log(container);
console.log(document.querySelectorAll('span-div'));
console.log(container.querySelectorAll('span-div'));

let box = container.querySelector('#box');
box.nextElementSibling;
box.previousElementSibling;
box.parentElement;
container.querySelector('.span-class');
container.querySelector('span-div');



// document.querySelector('.container .span-div').innerHTML = '<b>Naujas tekstas</b>';
document.querySelector('.container .span-div').innerHTML = 'paprastas tekstas';
document.querySelector('.container .span-div').textContent = 'paprastas tekstas';

console.log(document.querySelector('.btn').textContent);



container.style.display = "block";
container.style.background = '#c3c3c3';

document.querySelectorAll('.span div').forEach(span => {
    span.style.fontWeight = "800";
});

document.querySelectorAll('.box div').forEach(div => {
    div.style.color = "#0000FF";
})


document.querySelector('.span-class').style.cssText = "background-color: #666666";

let button = document.querySelector('button');
button.addEventListener("click", (el) => {
    button.textContent = 'As buvau paspaustas';
    // button.classList.remove('btn-primary');
    // button.classList.add('btn-secondary');
    //paliekam arba 2i eilutes virsuje, arba sita 50oj el.
    // button.classList.replace('btn-primary', 'btn-secondary');
    button
});

let menu_items = document.querySelectorAll('.nav-item');
menu_items.forEach(item => {
    item.querySelector('.nav-link').addEventListener("click", (e) => {
        menu_items.forEach(item1 => {
            if (item1.classList.contains('active'))
            item1.classList.remove('active');
        });
        item.classList.add('active');
    });
});

function removeClassFromItemList(items, class_name) {
    items.forEach(item => {
        if(item.classList.contains(class_name));
        item.classList.remove(class_name);
    })
}