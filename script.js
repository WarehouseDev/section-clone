const section = document.querySelector('section');
const lis = document.querySelectorAll('.links ul li');
const hover = document.querySelector('.hover');

const urls = [
    './img/park.jpg',
    './img/gym.jpg',
    './img/pool.jpg',
    './img/activity.jpg'
];

lis.forEach( (li, index, array) => {
    li.addEventListener('mouseenter', () =>{
        section.style.backgroundImage = `url(${urls[index]})`;
        lis.forEach(li => li.classList.remove('active'));
        array[index].classList.add('active');
        hover.style.translate = `-0.5rem ${5.75 * index}rem`;
    })
})

