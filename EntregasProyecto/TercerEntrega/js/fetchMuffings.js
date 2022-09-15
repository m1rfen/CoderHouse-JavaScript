// Fermín Martínez | CoderHouse | Proyecto Final JS
const box = document.querySelector(".newProducts");

let urlMuffings = "http://localhost:3000/muffings";

fetch(urlMuffings)
  .then((Response) => {
    return Response.json();
  })
  .then((json) => {
    let cakes = json;

    cakes.forEach((cake) => {
      const { title, price, img } = cake;

      box.innerHTML += `<div class="product">
                            <a href="#">
                            <img src="${img}" alt="${title}"/>
                            </a>
                            <p>${title}</p>
                            <p class="price">$${price} c/u</p>
                        </div>`;
    });
  });