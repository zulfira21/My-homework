const circle_a  = document.querySelector('.circle3');
console.log(circle_a);

circle_a.onclick = () => {
    const menu_cart2 = document.querySelector('.menu_cart2');
    console.log(menu_cart2);
    menu_cart2.classList.toggle("circle_db");
}