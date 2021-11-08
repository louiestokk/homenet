"use strict";
import { links } from "./data.js";
const navbtn = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const mellan = document.querySelector(".mellan");
const bannerNoll = document.querySelector(".banner-0");
const filterContainer = document.querySelector(".filter-container");

navbtn.addEventListener("click", (e) => {
  navbar.classList.toggle("hidden");
});
document.querySelector(".top").addEventListener("click", (e) => {
  location.href = "./index.html";
});
const renderLinks = (linksarray, element) => {
  navbar.innerHTML = "";
  linksarray.map((el) => {
    const { icon, url, text } = el;

    let html = `
    <div class="link-div">
    ${icon}
     
        <a href="${url}" rel="external nofollow" id="testar"
          >${text}
        </a>
      </div>
    `;
    element.insertAdjacentHTML("afterbegin", html);
  });
};
renderLinks(links, mellan);
renderLinks(links, navbar);

const renderAdBanner = () => {
  let html = `
      <h2>
        Do you want your <span>business</span> to be <span>visible</span> here ?
      </h2>
      <div class="divider"></div>
      <h4>Communicate and reach your customers.</h4>
      <button class="explore-btn start-sell-btn adddd">get started</button>
`;
  bannerNoll.insertAdjacentHTML("afterbegin", html);
  let html2 = `
   <h2>
        Do you want <span class="bannernolltext">new</span>  customers?
      </h2>
      <div class="divider"></div>
      <p class="adbanner2-text">Do you have a construction company? or perhaps selling materials for the construction of houses. </p>
      <button class="explore-btn start-sell-btn adddd">get started</button>
  `;
  setTimeout(() => {
    bannerNoll.innerHTML = "";
    bannerNoll.style.background =
      "linear-gradient(rgba(0.5,0.5,0.5,0.5),rgba(0.5,0.5,0.5,0.5)),url(./images/buildhousezanzibar.jpg)";
    bannerNoll.insertAdjacentHTML("afterbegin", html2);
    document.querySelectorAll(".adddd").forEach((el) => {
      el.addEventListener("click", (e) => {
        location.href = "./advertisezanzibar.html";
      });
    });
  }, 7000);
  document.querySelectorAll(".adddd").forEach((el) => {
    el.addEventListener("click", (e) => {
      location.href = "./advertisezanzibar.html";
    });
  });
};
renderAdBanner();
