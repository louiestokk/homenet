export const renderobjects = (array, element) => {
  console.log("test");
  array.map((el) => {
    const { url, location, price, size, type, to, desc } = el;
    let html = `
           <div class="object-div">
                <img src="${url[0]}" alt="property in Zanzibar" />
                <div>
                  <h2 class="object-banner-text">${desc}</h2>
                   <h4>${location}</h4>
                <p>${to} ${type}</p>
                <span class="typeob">${
                  type === "House" ? '<i class="fas fa-home"></i> ' : ""
                }</span>
                <p>${size}sqm</p>
                <span class="price">${
                  to === "Rent" ? `$${price}/month` : `Price ${price}$`
                }</span>
                <button class="explore-button objects-btn">read more</button>
                </div>


              </div>
          `;

    element.insertAdjacentHTML("afterbegin", html);
  });
};
