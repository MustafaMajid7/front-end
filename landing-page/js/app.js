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
 * Define Global Variables
 * 
 */

const sections = document.querySelectorAll("section");
const main_sect = document.querySelector("main");
const nav_menu = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

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

for (let i = 1; i <= sections.length + 1; i++) {
    const new_li = document.createElement("li");
    new_li.innerHTML = `<a href="#section${i}">Section ${i}</a>`;
    nav_menu.appendChild(new_li);
}



// Scroll to section on link click

// Set sections as active