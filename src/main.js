// the userInterface Logic file

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// importing my  CryptoService class
// import { CryptoService, SearchFeature } from "./agency-service.js";


    // // for the buttons responsiveness
    // const navbar = document.querySelector(".navbar");
    // const menuButton = document.querySelector(".menu");

    // menuButton.addEventListener("click", ()=>{
    //     navbar.classList.toggle("show");
    //     menuButton.classList.add("fa-solid fa-x");
    // });
    
    
        // using vanilla and jQuery to make an awesome navigation
    
    
        document.onscroll = () => {
            if (window.scrollY > 0) {
                $(".header").addClass("active");
                // document.querySelector(".header").classList.add("active");
            }
            else {
                // document.querySelector(".header").classList.remove("active");
                $(".header").removeClass("active");
            }
        }
    
        document.onload = () => {
            if (window.scrollY > 0) {
                $(".header").addClass("active");
                // document.querySelector(".header").classList.add("active");
            }
            else {
                // document.querySelector(".header").classList.remove("active");
                $(".header").removeClass("active");
            }
        }




// import Swiper bundle with all modules installed -- I didn't use it here but I might be using it later on for other pages in the website
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

// importing the all.css and all.js to enable me to use social media icons
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";

// importing font-awesome into my 
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faInfinity } from "@fortawesome/free-solid-svg-icons/faInfinity";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons/faStarHalfAlt";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons/faUserSecret";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faHeadset } from "@fortawesome/free-solid-svg-icons/faHeadset";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons/faQuoteRight";


library.add(faCheck);
library.add(faBars);
library.add(faInfinity);
library.add(faSearch);
library.add(faHeart);
library.add(faUser);
library.add(faTimes);
library.add(faStar);
library.add(faStarHalfAlt);
library.add(faEye);
library.add(faUserSecret);
library.add(faDollarSign);
library.add(faHeadset);
library.add(faQuoteRight);

dom.watch();
// Note: without dom.watch(), automatic replacement of your Font Awesome icons won’t work in the rendered page!

// importing all images I used in application 


import mineCrypto from "./assets/images/cryptoMine.jpg";

import btcImage from "./assets/images/btcImage.png";
import myOfferImg from "./assets/images/cryptoOffer.png";
import stockOffer from "./assets/images/stockOffers.png";
import teslaStock from "./assets/images/tslaStock.png";
import teslaImage from "./assets/images/ttt.png";
import microsoftStock from "./assets/images/msft3.svg";


// using all images below
import companyStock from "./assets/images/msftStock.jpg";
import msftImage from "./assets/images/msft2.png";


import eth from "./assets/images/eth.svg";
import bnc from "./assets/images/bnc.png";

// using all images above

import secureCrypto from "./assets/images/secure.png";
import agencyLogo from "./assets/images/agencyLogo2.png";
import agencyLogo2 from "./assets/images/agencyLogo1.png";
import excImage from "./assets/images/exchange.png";
import stkExchange from "./assets/images/stExchange.svg";
import bot from "./assets/images/bot2.svg";
import pcOne from "./assets/images/pic-1.png";
import pcTwo from "./assets/images/pic-2.png";
import pcThree from "./assets/images/pic-3.png";
import pcFour from "./assets/images/pic-4.png";
import tethImg from "./assets/images/teth.png";


import feedNaijaImg from "./assets/images/FeedNaija.png";
import MworthImg from "./assets/images/Mworth.png";
import InfluenceImg from "./assets/images/Influence.png";
import cryptoImg from "./assets/images/Crypto.png";
import JshoesImg from "./assets/images/Jshoes.png";
import ChurchImg from "./assets/images/Church.png";


import jsBadgeImg from "./assets/images/js-badge.svg";




// a function to clear the fields when user searches for crypto
function clearSearchFields() {
    $("#cryp").val("");
    $(".content-name").text("");
    $(".content-id").text("");
    $(".content-marketcapRank").text("");
    $(".content-symbol").text("");
    $(".error").text("");
}






$(document).ready(function () {


    // the .no-nav class was created in css file for making the navbar invisible
    // working with sites responsiveness


    // the .no-nav class was created in css file for making the navbar invisible

    $(".navbar").addClass("no-nav");

    // for opening and closing the navbar in small screen sizes
    $("#menu-bars").click(() => {
        $(".navbar").toggleClass("no-nav");
    });



    // let myBtcImage = $(".imgBTC");
    // myBtcImage.attr("src", btcImage);

    // let myStockOffer = $(".imgStock");
    // myStockOffer.attr("src", stockOffer);

    // let myTeslaStock = $(".tsla");
    // myTeslaStock.attr("src", teslaStock);

    // using images below
    let myAgency = $(".agencyAbout");
    // change image and image import name
    myAgency.attr("src", agencyLogo);


    let service1 = $(".service1");
    service1.attr("src", MworthImg);


    let service2 = $(".service2");
    service2.attr("src", JshoesImg);

    let service3 = $(".service3");
    service3.attr("src", ChurchImg);

    
    let service4 = $(".service4");
    service4.attr("src", feedNaijaImg);
    
    let service5 = $(".service5");
    service5.attr("src", InfluenceImg);
    
    let service6 = $(".service6");
    service6.attr("src", cryptoImg);


    // let tslaImg = $(".dgCoin");
    // // change image to doge
    // tslaImg.attr("src", teslaImage);

    // using images above



    // let mineImg = $(".mine");
    // mineImg.attr("src", mineCrypto);

    // let exchangeImg = $(".exc");
    // exchangeImg.attr("src", excImage);

    // let stkExchangeImg = $(".stex");
    // stkExchangeImg.attr("src", stkExchange);

    // let courseImg = $(".cour");
    // courseImg.attr("src", course);


    // let walletImg = $(".wallet");
    // walletImg.attr("src", wallet);

    // let companyImg = $(".cs");
    // companyImg.attr("src", companyStock);

    // let picOneImg = $(".pc1");
    // picOneImg.attr("src", pcOne);

    // let picTwoImg = $(".pc2");
    // picTwoImg.attr("src", pcTwo);

    // let picThreeImg = $(".pc3");
    // picThreeImg.attr("src", pcThree);

    // let picFourImg = $(".pc4");
    // picFourImg.attr("src", pcFour);

    // let tetherImg = $(".tethCoin");
    // tetherImg.attr("src", tethImg);

    // let rippImg = $(".rippCoin");
    // rippImg.attr("src", ripple);

    // let dogeImg = $(".dgCoin");
    // dogeImg.attr("src", doge);

    // for the top image in app
    let topImg = $(".appImg");
    topImg.attr("href", agencyLogo2);




    // working with sites responsiveness


    // the .no-nav class was created in css file for making the navbar invisible

    // $(".navbar").addClass("no-nav");

    // // for opening and closing the navbar in small screen sizes
    // $("#menu-bars").click(() => {
    //     $(".navbar").toggleClass("no-nav");
    // });





    // for the home slider swiper
    // I might want to try out using my swiper later on 

    var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
    });

    // for the review slider swiper

    var swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },

        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },

        },
    });

    // working with api calls now



});