import { objects } from "./data.js";
const nyhetsForm = document.querySelector("#nyhets-form");
const divEtt = document.querySelector(".targeted-object");
const rangeAmount = document.querySelector(".amount");
const homeBtn = document.querySelector(".top");
const exploreBtn = document.querySelector(".explore-btn");
const selectFilter = document.querySelectorAll(".select-filter");
const filterBtn = document.querySelector(".filter-submit-btn");
exploreBtn.addEventListener("click", (e) => {
  document
    .querySelector(".objects-container")
    .scrollIntoView({ behavior: "smooth" });
});
const addBanner = document.querySelector(".ad-banner");
homeBtn.addEventListener("click", (e) => {
  location.href = "./index.html";
});

const gotoSell = document.querySelector(".start-sell-btn");
gotoSell.addEventListener("click", (e) => {
  location.href = "./sellpropertyzanzibar.html";
});

document.querySelector(".selll").addEventListener("click", (e) => {
  location.href = "./sellpropertyzanzibar.html";
});
const objectsContainer = document.querySelector(".objects");
const renderobjects = (array) => {
  array.map((el) => {
    const { url, location, price, size, type, to, desc, id } = el;

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
            to === "Rent" ? `$${price}/week` : `Price ${price}.000$`
          }</span>
          <button class="explore-button objects-btn" id=${id}>read more</button>
          </div>
       
    
        </div>
    `;
    objectsContainer.insertAdjacentHTML("afterbegin", html);
  });
  document.querySelectorAll(".objects-btn").forEach((btns) => {
    btns.addEventListener("click", (e) => {
      const target = +e.target.id;
      targetObject(objects, target);
    });
  });
};

renderobjects(objects);

const targetObject = (data, number) => {
  divEtt.innerHTML = "";
  let count = 0;
  document.querySelector(".targeted-object").classList.remove("hidden");
  document
    .querySelector(".targeted-object")
    .scrollIntoView({ behavior: "smooth" });
  const filtered = data.filter((el) => el.id === number);
  filtered.map((el, index) => {
    const { url, location, price, size, type, to, desc, id, info } = el;
    let html = `
    <div class="jajjemen">
        <i class="fas fa-arrow-circle-left"></i>
       <img src="${url[0]}" alt="" class="target-image"/>
       <i class="fas fa-arrow-circle-right"></i>
       
    </div>
    <h3>${to} ${type} in ${location}</h3>
    <h4><span>Size</span> ${size}sqm</h4>
    <h5><span>Price</span>  ${
      to === "Rent" ? `$${price}/month` : `Price ${price}.000$`
    }</h5>
    <p>${info}</p>
    <div>
    <a href="tel:+255779912498" class="contact-now-btn">contact now</a>
    <button class="lead-btn interest-btn" id=${id}>send interest</button>
    </div>
    <h6 class="close" data-id=${number}><i class="far fa-window-close"></i>close</h6>
  
    `;

    divEtt.insertAdjacentHTML("afterbegin", html);

    document.querySelector(".interest-btn").addEventListener("click", (e) => {
      let objectId = e.target.id;
      divEtt.innerHTML = "";
      let html = `
        <form action="https://formspree.io/f/mayaoryk" method="POST" id="interest-form">
    <h4>Send Interest</h4>

    <div class="divider"></div>
    <input type="text"  name="object-numbers" value="object-id: ${objectId}" style="opacity: 0;"/>
    <input
      type="text"
      name="nameinterest"
      id="interestInputName"
      placeholder="Name"
      required
    />
    <input
      type="text"
      name="teleinterest"
      id="interestInputtele"
      placeholder="Phone Number"
      required
    />
    <input
      type="email"
      name="emailinterest"
      id="interestInputemail"
      placeholder="Email"
    />
     <input
      type="text"
      name="bud"
      id="bud"
      placeholder="Place a bid $"
    />
    <textarea name="questions" id="questions" cols="30" rows="5" placeholder="questions?"></textarea>
      <div>
      <button class="send-interest-btn">send</button>
      <button class="send-interest-btn close-close">close</button>
      
      </div>
  </form>
      
      `;
      divEtt.insertAdjacentHTML("afterbegin", html);

      document.querySelector(".close-close").addEventListener("click", (e) => {
        divEtt.classList.add("hidden");
      });
    });

    document
      .querySelector(".fa-arrow-circle-left")
      .addEventListener("click", (e) => {
        count--;
        if (count < 0) {
          count = 0;
        }
        document
          .querySelector(".target-image")
          .setAttribute("src", `${url[count]}`);
      });
    document
      .querySelector(".fa-arrow-circle-right")
      .addEventListener("click", (e) => {
        count++;

        if (count > url.length - 1) {
          count = 0;
        }
        document
          .querySelector(".target-image")
          .setAttribute("src", `${url[count]}`);
      });
  });
  document.querySelector(".close").addEventListener("click", (e) => {
    document.querySelector(".targeted-object").classList.add("hidden");
    console.log(e.target.parentElement.dataset.id);
  });
};

const renderFilterOptions = (data, element) => {
  const uniq = data.map((el) => el.location);
  const onlyOne = new Set(uniq);
  const nuka = [...onlyOne];
  nuka.map((el) => {
    let html = `
      <option value="${el}" ${el === "Paje" && "selected"}>
      ${el}
      </option>
    `;
    element.insertAdjacentHTML("afterbegin", html);
  });
};

renderFilterOptions(objects, document.querySelector("#locationfilter"));
document.querySelector("#filter-btn-ob").addEventListener("click", (e) => {
  if (e.target.textContent.includes("Filter")) {
    e.target.textContent = "close";
  } else {
    e.target.innerHTML = ` <i class="fas fa-filter"></i> Filter`;
  }
  toggleFunction();
  document.querySelector(".dd1").scrollIntoView({ behavior: "smooth" });
});

const filterResult = () => {
  const array = [];
  const filtered = selectFilter.forEach((el) => {
    array.push(el.value);
  });

  getFilteredObjects(array);
};

filterBtn.addEventListener("click", (e) => {
  filterResult();
});

const getFilteredObjects = (data) => {
  objectsContainer.innerHTML = "";
  const theOne = objects.filter(
    (el) => el.location === data[0] && el.to === data[1] && el.type === data[2]
  );

  toggleFunction();
  renderobjects(theOne);
  document.querySelector(
    "#filter-btn-ob"
  ).innerHTML = ` <i class="fas fa-filter"></i> Filter`;
};

const toggleFunction = () => {
  document
    .querySelector(".filter-options-container")
    .classList.toggle("hidden");

  document.querySelector(".filter-options-container").classList.toggle("show");
  document.querySelector(".main-top").classList.toggle("darker");
  document
    .querySelectorAll(".banner")
    .forEach((el) => el.classList.toggle("darker"));
};
