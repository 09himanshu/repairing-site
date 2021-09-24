/* ===================== Get all the elements with their id's ===================== */

// Navigation Menu Links elements

let logo = document.querySelector("#logo");
let home = document.querySelector("#links1");
let about = document.querySelector("#links2");
let contact = document.querySelector("#links3");
let service = document.querySelector("#links4");
let gallery = document.querySelector("#links5");

// Main body elements

const bgImg = document.querySelector("#main-container");
let mainBodyHead = document.querySelector("#heading");
let mainBodyPara = document.querySelector("#para");
 
// Service sub body elements

let serviceHead = document.querySelector("#serviceHeading");
let serviceContent = document.querySelector("#content1");
let servicePara = document.querySelector("#contentpara");
let servicePdrpara = document.querySelectorAll(".pdrPara");

// About us section

const aboutImg = document.querySelector("#about");
let aboutHead = document.querySelector("#aboutHead");
let aboutPara = document.querySelector("#aboutPara");

// Gallery Section

let gallerySec = document.querySelector("#galleryHeading");

// Reviews section
let review = document.querySelector(".reviewHead");

// Contact section

let contactHead = document.querySelector(".contactHead");
let addBtn = document.querySelector("#addBtn");
let callBtn = document.querySelector("#cllBtn")


/* ========== JSON file url ============ */
const address = "/js/fixman.json";



/* ============== *********** ================ */

// Button where all data flow dynamically

let btn = document.querySelector("#btn");
// Function where all the functionality held
addEventListener("load", click);

// ================= Function ================
function click() {
    fetch(address).then( (res) =>{
        return res.json();
    }) .then( (data) =>{
        const obj = data;

        // Navigation menu data dynamic data

        logo.innerHTML = obj.logo;
        home.innerHTML = obj.homeLink;
        about.innerHTML = obj.aboutLink;
        contact.innerHTML = obj.contactLink;
        service.innerHTML = obj.serviceLink;
        gallery.innerHTML = obj.galleryLink;

        // Main body dynamic data

        // bgImg.src = obj.url;
        mainBodyHead.innerHTML = obj.mainBodyHead;
        mainBodyPara.innerHTML = obj.mainBodyPara;
        btn.innerHTML = obj.bodyBtn;

        // Service sub body dynamic

        serviceHead.innerHTML = obj.serviceHead;
        serviceContent.innerHTML = obj.serviceContent1;
        servicePara.innerHTML = obj.servicePara;
            // servicePdr

        for(let i = 0; i < servicePdrpara.length; i++){
            servicePdrpara[i].innerHTML = obj.servicePdrPara;
        }

        // About Section

        // aboutImg.src = obj.url;
        aboutHead.innerHTML = obj.aboutHead;
        aboutPara.innerHTML = obj.aboutPara;

        // Gallery 
        gallerySec.innerHTML = obj.gallery;
        document.querySelector("#Img1").src = obj.galImg1;
        document.querySelector("#Img2").src = obj.galImg2;
        document.querySelector("#Img3").src = obj.galImg3;
        document.querySelector("#Img4").src = obj.galImg4;
        document.querySelector("#Img5").src = obj.galImg5;
        document.querySelector("#Img6").src = obj.galImg6;
        document.querySelector("#Img7").src = obj.galImg7;
        document.querySelector("#Img8").src = obj.galImg8;
        document.querySelector("#Img9").src = obj.galImg9;

        // Reviews section
        review.innerHTML = obj.review;
        document.querySelector("#person-img").src = obj.personImg1;
        document.querySelector("#person-img1").src = obj.personImg2;
        document.querySelector("#person-img2").src = obj.personImg3;
        document.querySelector("#author").innerHTML = obj.name1;
        document.querySelector("#author1").innerHTML = obj.name2;
        document.querySelector("#author2").innerHTML = obj.name3;
        document.querySelector("#info").innerHTML = obj.reviewPara;
        document.querySelector("#info1").innerHTML = obj.reviewPara1;
        document.querySelector("#info2").innerHTML = obj.reviewPara2;

        // contact
        contactHead.innerHTML = obj.contact;
    });

    document.querySelector("#navbar").style.backgroundColor = "#061700";
    document.body.style.background = "linear-gradient(to left , #000000 , #485461)";
    document.querySelector(".getStarted").style.backgroundColor = "#380036";
    serviceContent.style.color = "white";
    btn.style.backgroundColor = "#380036";
    callBtn.style.backgroundColor = "#380036";
    addBtn.style.backgroundColor = "#380036";

    // Main body background image

    bgImg.style.background = "url('../bgimg.jpg')";

    // About section background image

    // aboutImg.style.background = "url('https://images.unsplash.com/photo-1631815522355-7b69208f9b2b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60')";
}

mapboxgl.accessToken = 'pk.eyJ1IjoiMDloaW1hbnNodSIsImEiOiJja3R2cDAweHgwbjB1Mm9tcG5uc245Y2JqIn0.EaXsx-DDajL6_RfVHqz8Vg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});

