/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * @description  some global variables
 */

const sections = document.querySelectorAll("section");
const main_sect = document.querySelector("main");
const nav_list = document.querySelector("#navbar__list");
const nav_bar = document.querySelector(".navbar__menu")

/**
 * @description  making nav_bar active
 */

nav_bar.addEventListener('click', function() {
    nav_bar.classList.add("nav_bar_active");
    setTimeout(function() {
        nav_bar.classList.remove("nav_bar_active")
    }, 2000)
})

/**
 * @description  determine which section is active
 */

function makeActive() {
    let updated_sections = document.querySelectorAll("section");

    for (let i = 1; i < updated_sections.length + 1; i++) {

        let sect = document.querySelector(`#section${i}`);
        let y = Math.floor(sect.getBoundingClientRect().y);

        if (y < 300 && y > -300) {
            sect.classList.add("your-active-class");
        } else if (sect.classList.contains("your-active-class")) {
            sect.classList.remove("your-active-class");
        }
    }

}

/**
 * @description  these 3 functions are responsible for displaying and hiding nav bar
 */

function bodyScroll() {
    scrollStart();
    window.setTimeout("scrollFinished()", 500);
}

function scrollStart() {
    document.querySelector(".page__header").style.cssText = "top:0px; transition: all .8s ;";
}

function scrollFinished() {
    document.querySelector(".page__header").style.cssText = "top:-40px; transition: all .8s ease .5s ;";
}

/**
 * @description  hovering on nav bar to display it
 */

window.addEventListener('mousemove', function(event) {
    if (event.offsetY <= 40) {
        document.querySelector(".page__header").style.cssText = "top:0; transition: all .8s ;";
    } else {
        document.querySelector(".page__header").style.cssText = "top:-40px; transition: all .8s;";
    }
})

/**
 * @description  checking for displaying up button on the page
 */

function scrollFunction() {

    if (document.body.scrollTop > 50) {
        document.querySelector("#up").style.display = "block";
    } else {
        document.querySelector("#up").style.display = "none";
    }
}

/**
* @description  Add event listener to scroll for activaing faced section, hide nav bar during stop of scrolling 
                and control of up button 
*/

document.addEventListener("scroll", function() {
    makeActive();
    bodyScroll();
    scrollFunction();
});

/**
 * @description  checking to get at least 4 sections on the page
 */

if (sections.length < 4) {
    const fragment = document.createDocumentFragment();

    for (let i = sections.length + 1; i < 5; i++) {
        const new_section = document.createElement("section");

        new_section.setAttribute("id", `section${i}`);
        new_section.setAttribute("data-nav", `Section ${i}`);

        new_section.innerHTML = `<div class="landing__container">
        <h2>Section ${i}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci
            eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam
            in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet
            porttitor tortor, eget elementum tortor mollis non.</p>
    </div>`;

        fragment.appendChild(new_section);
    }
    main_sect.appendChild(fragment);
}

/**
 * @description Add internal links to landing page in the nav bar 
 *              and adding event instead of default event of scrolling of link
 */

for (let i = 1; i <= sections.length + 1; i++) {
    const new_li = document.createElement("li");
    new_li.innerHTML = `<a href="#section${i}">Section ${i}</a>`;
    new_li.addEventListener('click', function(event) {
        const link = document.querySelector(`#section${i}`);
        event.preventDefault();
        link.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    })
    nav_list.appendChild(new_li);
}
