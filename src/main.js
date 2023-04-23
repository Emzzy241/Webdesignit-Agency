// the userInterface Logic file

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// importing my  CryptoService class
// import { CryptoService, SearchFeature } from "./agency-service.js";


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



// using all images above

import pcOne from "./assets/images/pic-1.png";
import pcTwo from "./assets/images/pic-2.png";
import pcThree from "./assets/images/pic-3.png";
import pcFour from "./assets/images/pic-4.png";


import agencyLogo from "./assets/images/agencyLogo1.png";
import agencyLogo2 from "./assets/images/agencyLogo2.png";


import feedNaijaImg from "./assets/images/FeedNaija.png";
import MworthImg from "./assets/images/Mworth.png";
import InfluenceImg from "./assets/images/Influence.png";
import cryptoImg from "./assets/images/Crypto.png";
import JshoesImg from "./assets/images/Jshoes.png";
import ChurchImg from "./assets/images/Church.png";
import businessMarketImg from "./assets/images/businessMarketing.png"
import businessDevelopImg from "./assets/images/businessShop.png"
import businessBrandImg from "./assets/images/businessRise.png"
import businessDesignImg from "./assets/images/businessDesign.png"
import businessSupportImg from "./assets/images/cSupport2.png"
import businessPhotoImg from "./assets/images/helpBusiness.png"
import heroImg from "./assets/images/Responsive-Design2.jpg"

import jsBadgeImg from "./assets/images/js-badge.svg";


$(document).ready(function () {


    // the .no-nav class was created in css file for making the navbar invisible
    // working with sites responsiveness


    // the .no-nav class was created in css file for making the navbar invisible

    $(".navbar").addClass("no-nav");

    // for opening and closing the navbar in small screen sizes
    $("#menu-bars").click(() => {
        $(".navbar").toggleClass("no-nav");
    });



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
    service5.attr("src", InfluenceImg);
    
    let develop = $(".develop");
    develop.attr("src", businessDevelopImg);
    
    let marketing = $(".marketing");
    marketing.attr("src", businessMarketImg);
    
    let branding = $(".branding");
    branding.attr("src", businessBrandImg);
    
    let design = $(".design");
    design.attr("src", businessDesignImg);
    
    let support = $(".support");
    support.attr("src", businessSupportImg);
    
    let photography = $(".photography");
    photography.attr("src", businessPhotoImg);
    
    let myHeroImg = $(".hero");
    myHeroImg.attr("src", heroImg);


   

    // for the top image in app
    let topImg = $(".appImg");
    topImg.attr("href", agencyLogo);




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