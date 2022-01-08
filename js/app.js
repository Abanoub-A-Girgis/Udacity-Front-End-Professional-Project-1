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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBarLi = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const sectionArray = Array.from(sections);
const sectionsParent = document.querySelector('section').parentElement;

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
const navBarItems = () => {
    const fragment = document.createDocumentFragment();

    sections.forEach(section => {
        const newLi = document.createElement('li');
        newLi.classList.add("nav-bar-item");
        const newA = document.createElement('a');
        newA.href = `#${section.id}`;
        newA.innerText = section.dataset.nav;
        newLi.appendChild(newA);
        fragment.appendChild(newLi);
    })
    navBarLi.appendChild(fragment);
}

navBarItems();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

