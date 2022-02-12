var Cycles = [
  {
    img: "https://rukminim1.flixcart.com/image/612/612/kx7vc7k0/cycle/z/h/h/-original-imag9ps8f8qmga5h.jpeg?q=70",
    name: "Vector 91 Beast 29 T Mountain Cycle",
    rating: 4.1,
    price: 13919,
    brand: "Beast",
  },
  {
    img: "https://rukminim1.flixcart.com/image/612/612/ku2zjww0/cycle/v/6/9/xplore-900-27-5-17-adrenex-by-flipkart-21-gear-99-5-original-imag7amdfj2ymjuz.jpeg?q=70",
    name: "Adrenex by Flipkart Xplore 900 27.5 T",
    rating: 4.6,
    price: 12499,
    brand: "Adrenex",
  },
  {
    img: "https://rukminim1.flixcart.com/image/612/612/kdyus280/cycle/7/c/z/storm-2-0-17-hercules-single-speed-original-imafurfyppqu2yzr.jpeg?q=70",
    name: "Hercules Storm 2.0",
    rating: 4,
    price: 6299,
    brand: "Hercules",
  },
  {
    img: "https://rukminim1.flixcart.com/image/612/612/knunf680/cycle/p/m/y/ut3001a26-alloy-mtb-with-21-shimano-gear-and-installation-original-imag2fmhgansgyzm.jpeg?q=70",
    name: "Urban Terrain UT3001A26",
    rating: 4.2,
    price: 13999,
    brand: "Urban",
  },
  {
    img: "https://rukminim1.flixcart.com/image/612/612/krqoknk0/cycle/8/6/c/beast-26t-hybrid-cycle-for-city-ride-with-front-suspension-and-original-imag5gm9t6euh5je.jpeg?q=70",
    name: "Leader Beast 26T Hybrid cycle",
    rating: 4.4,
    price: 8150,
    brand: "Leader",
  },
  //   Row 2
  {
    img: "https://rukminim1.flixcart.com/image/612/612/kx7vc7k0/cycle/z/h/h/-original-imag9ps8f8qmga5h.jpeg?q=70",
    name: "Vector 91 Beast 29 T Mountain Cycle",
    rating: 3.1,
    price: 5600,
    brand: "Vector",
  },
  {
    img: "https://rukminim1.flixcart.com/image/612/612/ku2zjww0/cycle/v/6/9/xplore-900-27-5-17-adrenex-by-flipkart-21-gear-99-5-original-imag7amdfj2ymjuz.jpeg?q=70",
    name: "Adrenex by Flipkart Xplore 900 27.5 T",
    rating: 2.6,
    price: 7899,
    brand: "Adrenex",
  },
  {
    img: "https://rukminim1.flixcart.com/image/612/612/kdyus280/cycle/7/c/z/storm-2-0-17-hercules-single-speed-original-imafurfyppqu2yzr.jpeg?q=70",
    name: "Hercules Storm 4.0",
    rating: 4.7,
    price: 6299,
    brand: "Hercules",
  },
  {
    img: "https://rukminim1.flixcart.com/image/612/612/knunf680/cycle/p/m/y/ut3001a26-alloy-mtb-with-21-shimano-gear-and-installation-original-imag2fmhgansgyzm.jpeg?q=70",
    name: "Urban Terrain UT3001A26",
    rating: 4.2,
    price: 25666,
    brand: "Urban",
  },
  {
    img: "https://rukminim1.flixcart.com/image/612/612/krqoknk0/cycle/8/6/c/beast-26t-hybrid-cycle-for-city-ride-with-front-suspension-and-original-imag5gm9t6euh5je.jpeg?q=70",
    name: "Leader Beast 26T Normal cycle",
    rating: 3.8,
    price: 3400,
    brand: "Leader",
  },
];


window.onload = function () {

  Cycles.map((cycle) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let cardImg = document.createElement("div");
    cardImg.classList.add("cardImg");
    let img = document.createElement("img");
    img.src = cycle.img;
    let cardBody = document.createElement("div");
    let name = document.createElement("p");
    name.classList.add('name')
    name.classList.add('my')
    name.innerHTML = cycle.name;


    let rating = document.createElement("p");
    rating.classList.add('rating')
    rating.classList.add('my')
    rating.innerHTML = cycle.rating + "⭐";

    let price = document.createElement("p");
    price.innerHTML = cycle.price + ' &#8377;';
    price.classList.add('price');
    price.classList.add('my');

    let brand = document.createElement("p");
    brand.innerHTML = cycle.brand;
    brand.classList.add('brand');

    cardImg.append(img);
    cardBody.append(name);
    cardBody.append(rating);
    cardBody.append(price);
    cardBody.append(brand);

    card.append(cardImg);
    card.append(cardBody);


    let rightCards = document.querySelector('.rightCards');
    rightCards.append(card);
  });
};
