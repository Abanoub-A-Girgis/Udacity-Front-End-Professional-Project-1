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
function sectionInViewPort (elem) {
    let sectionPos = elem.getBoundingClientRect();
    return (sectionPos.top >= 0);
}

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



// Add class 'active' to section when near top of viewport

function toggleActiveClass(){
    sections.forEach(section =>
    {
        if (sectionInViewPort(section)){
            if (!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }
        }
        else {
            section.classList.remove('your-active-class');
        }
    })
}

// Scroll to anchor ID using scrollIntoView event

document.onclick = function (e) {
    var element = e.target;
  
    if (element.tagName == 'A') {
      var sscroll = document.querySelector(element.hash);
      sscroll.scrollIntoView();
      return false; 
    }
  };

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

navBarItems();

// Set sections as active

document.addEventListener('scroll', toggleActiveClass);