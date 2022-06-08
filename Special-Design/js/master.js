//Check If There's Local Storage Color Option 
let mainColors = localStorage.getItem("color_option");

if(mainColors !== null) {

    document.documentElement.style.setProperty('--main-color', mainColors);

    //Remove Active Class From All colors List Items
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

        //Add Active Class On Element With Data-Color === Local Storage Item
        if (element.dataset.color === mainColors) {
            element.classList.add("active");
        }
    });
}



//Random Background Option 
let backgroundOption = true;

//Variable To Controle The Background Interval 
let backgroundInterval;

//Check If There's Local Storage Random Background Item 
let backgroundLocalItem = localStorage.getItem("background_option");

//Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {

    //Remove Active Class From All Spans
    document.querySelectorAll(".random-backgrounds span").forEach(element => {
        element.classList.remove('active');
    });

    if (backgroundLocalItem === 'true') {

        backgroundOption = true;
        document.querySelector(".random-backgrounds .yes").classList.add("active");

    } else {

        backgroundOption = false;
        document.querySelector(".random-backgrounds .no").classList.add("active");

    }
}




//Togle Spin Class On Icon
document.querySelector('.toggle-setting i').onclick = function () {

    //Toggle Class Fa-spin For Rotation on Self
    this.classList.toggle("fa-spin");

    //Toggle Class Open On Main Setting Box
    document.querySelector('.setting-box').classList.toggle("open");

    if (document.querySelector('.setting-box').classList.contains("open")) {

        document.querySelector(".setting-box").style.zIndex = 1001;
    } else {
        document.querySelector(".setting-box").style.zIndex = 1000;
    }
};




//Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li => {
    li.addEventListener('click', (e) => {

        //Set Color On Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        //Set Color On Local Storage 
        localStorage.setItem("color_option", e.target.dataset.color);

        handleActive(e);
    });
});



//Switch Random  Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");
randomBackEl.forEach(span => {
    span.addEventListener('click', (e) => {

        handleActive(e);

        if (e.target.dataset.background === 'yes') {
            backgroundOption = true;
            randomizeImgs();
            localStorage.setItem("background_option", true);
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option", false);
        }
    });
});




//Select Landing Page Element
let landingPage = document.querySelector('.landing-page');

//Get Array Of Images
let imgsArr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

//Function To Randomize Imgs
function randomizeImgs () {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {

            //Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArr.length);
            
            //Change Background Image URL 
            landingPage.style.backgroundImage = 'url("../images/landing-page/'+imgsArr[randomNumber]+'")'
            }, 1000);
    }
}
//randomizeImgs();




//Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
    //Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    //Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    //Window Height
    let windowHeight = this.innerHeight;
    
    //Window Scroll Top
    let windowScrollTop = this.pageYOffset;
    
    if ( windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight) ) {   //el mo3adla de ma7foza batb2ha 3ala ay section 3awz a2ol lama awsol 3and el section da nafzle el 7agat el folanya

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(span => {
            span.style.width = span.dataset.progress;
        })
    }
}




//Create Popup With Image
let ourGallery = document.querySelectorAll(".gallery img ");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {
        
        //Create Overlay Element
        let overlay = document.createElement("div");

        // Add Class To Overlay 
        overlay.className = 'popup-overlay';

        //Appen Overlay To The Body
        document.body.appendChild(overlay);

        //Create The Popup Box
        let popupBox = document.createElement("div");

        //Add Class To The Popup Box 
        popupBox.className = 'popup-box';

        if (img.alt !== null) {
            //Create Heading 
            let imgHeading = document.createElement("h3");

            //Create Text For Heading 
            let imgText = document.createTextNode(img.alt);

            //Append The Text To The Heading
            imgHeading.appendChild(imgText);

            //Append The Heading To The Popup Box
            popupBox.appendChild(imgHeading);
        }

        //Create The Image
        let popupImage = document.createElement("img");

        //Set Image Source equal To The Clicked Image
        popupImage.src = img.src;

        //Add Image To Popup Box
        popupBox.appendChild(popupImage);

        //Append The Popup Box To Body
        document.body.appendChild(popupBox);

        //Create The Close Span
        let closeButton = document.createElement("span");

        //Create The Close Button Text
        let closeButtonText = document.createTextNode("x");

        //Append Text To The Close Button
        closeButton.appendChild(closeButtonText);

        //Add Class To The Close Button 
        closeButton.className = 'close-button';

        //Add Close Button To the Popup Box
        popupBox.appendChild(closeButton);
    });
});
//Close Popup
document.addEventListener("click", function(e) {

    if (e.target.className === 'close-button') {

        //Remove The Current Popup
        e.target.parentNode.remove();

        //Remove Overlay 
        document.querySelector(".popup-overlay").remove();

    }
});




//Creating Array From Sections Which I will Create Bullets To Them
let allSections = document.querySelectorAll('section');

//Create and Append nav-bullets Div To The Body
let navBullets = document.createElement("div");
navBullets.className = "nav-bullets";
document.body.appendChild(navBullets);

//Generating Bullets
for (let i=0; i<allSections.length; i++) {

    //Create The Bullet Div
    let bullet = document.createElement("div");

    //Create Class For Bullet Div
    bullet.className = 'bullet'

    //Create Custom Attribute For Bullet Div
    bullet.dataset.section = "." + allSections[i].className;

    //Create toolTip Div
    let toolTip = document.createElement("div");

    //Create Class For toolTip Div
    toolTip.className = 'tooltip';

    //Create Text For The toolTip Div
    let toolTipText = document.createTextNode(allSections[i].dataset.title);

    //Put The Text on The toolTip Div
    toolTip.appendChild(toolTipText);

    //Put The toolTip Div In The Bullet Div
    bullet.appendChild(toolTip);

    //Put The Bullets In The nav-bullets Div
    document.querySelector(".nav-bullets").appendChild(bullet);
}







//Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

//Select All Links
const allLinks = document.querySelectorAll(".links a");

//Create Scroll To Some Where Function
function scrollToSomeWhere (elements) {

    elements.forEach(element => {

        element.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'
            });
        });
    });
};
scrollToSomeWhere(allBullets);
scrollToSomeWhere(allLinks);



//Create Function To Handle Active State
function handleActive(event) {

    //Remove Active Class From All Childrens
    event.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });

    //Add Active Class On Self
    event.target.classList.add("active");
}



//
let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

    bulletsSpan.forEach(span => {

        span.classList.remove("active");
    });

    if (bulletLocalItem === 'block') {

        bulletsContainer.style.display = 'block';
        document.querySelector(".bullets-option .yes").classList.add("active");

    } else {

        bulletsContainer.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active");

    }
}

bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === "show") {

            bulletsContainer.style.display = 'block';
            localStorage.setItem("bullets_option", 'block');

        } else {

            bulletsContainer.style.display = 'none';
            localStorage.setItem("bullets_option", 'none')

        }

        handleActive(e);
        });
});



//Reset Button
document.querySelector(".reset-options").onclick = function () {
    
    localStorage.removeItem("background_option");
    localStorage.removeItem("color_option");
    localStorage.removeItem("bullets_option");

    //Reload Window
    window.location.reload();
}




//Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    //Stop Propagation
    e.stopPropagation();

    //Toggle Class "menu-active" On Button
    this.classList.toggle("menu-active");

    //Toggle Class "open" On Links
    tLinks.classList.toggle("open");
}

//Stop Propagation On Menu's LIs
tLinks.onclick = function (e) {
    e.stopPropagation();
}

//Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== tLinks) {

        if (tLinks.classList.contains("open")) {
            
            //Toggle Class "menu-active" On Button
            toggleBtn.classList.toggle("menu-active");

            //Toggle Class "open" On Links
            tLinks.classList.toggle("open");
        }
    }
});