let resturantMenu = [
    { name: "Zinger Burger", price: 300+'$', description:"Crispy chicken fillet, fresh lettuce aur special house sauce wala juicy zinger.", imgUrl:"imgagess/images.jfif", category:"lunch"},
    { name: "Club Sandwich", price: 450+'$', description:"Layered bread with chicken, egg, mayo aur fries ke sath perfect crispy sandwich.", imgUrl:"imgagess/image3.jpg", category:"lunch"},
    { name: "Shawarma", price: 300+'$', description:"Soft pita bread, juicy chicken filling aur garlic sauce ke sath Arabic style shawarma.", imgUrl:"imgagess/image5.jpg", category:"lunch"},
    { name: "Halwa Puri", price: 200+'$', description:"Traditional Sunday nashta — garam puriyan, meetha halwa aur spicy cholay.", imgUrl:"imgagess/halwa.jpg", category:"breakfast"},
    { name: "Chai", price: 50+'$', description:"Doodh-patti chai with strong aroma — bilkul dhaba style fresh garma garam chai.", imgUrl:"imgagess/image4.webp", category:"breakfast"},
    { name: "Filipino Fruit Salad", price: 150+'$', description:"Mixed tropical fruits, jelly cubes aur condensed milk ka creamy combo.", imgUrl:"imgagess/image2.jpg", category:"deserts"},
    { name: "Cold Coffee", price: 150+'$', description:"Chilled creamy coffee with ice cubes and chocolate touch — perfect refreshing drink.",imgUrl:"imgagess/Australian_iced_coffee.jpg", category:"beverages" },
];

let cardBig = document.getElementById("cardBig");
let searchInput = document.getElementById("searchInput");
function showMenu(category) {
    cardBig.innerHTML = "";

    let filtered = resturantMenu.filter(item => {
        if (category) return item.category === category;
        return true;
    });

    if (filtered.length === 0) {
        cardBig.innerHTML = "<h1>No Items Found</h1>";
        return;
    }

    filtered.forEach(item => {
        cardBig.innerHTML += `
        <div class="card">
            <img src="${item.imgUrl}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <b>Rs: ${item.price}</b>
        </div>`;
    });
}

showMenu(); 
function searchItem() {
    let text = searchInput.value.toLowerCase();

    let results = resturantMenu.filter(item =>
        item.name.toLowerCase().includes(text)
    );

    cardBig.innerHTML = "";

    if (results.length === 0) {
        cardBig.innerHTML = "<h1>Search Not Found</h1>";
        return;
    }

    results.forEach(item => {
        cardBig.innerHTML += `
        <div class="card">
            <img src="${item.imgUrl}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <b>Rs ${item.price}</b>
        </div>`;
    });
}
