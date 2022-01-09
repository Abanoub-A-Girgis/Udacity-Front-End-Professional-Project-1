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

// The NavBar items/list
const navBarList = document.querySelector('#navbar__list');
// Defining a nodelist for the sections using query selector to find every single section
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Helper function that checks if the top of a section is in screen
function sectionInViewPort (elem) {
    let sectionPos = elem.getBoundingClientRect();
    return (sectionPos.top >= 0);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Function to build the navBar dynamically
const navBarItems = () => {
    // Using document fragment for performance
    const fragment = document.createDocumentFragment();
    // Loops over all the sections and creating a link item for each
    sections.forEach(section => {
        const newListItem = document.createElement('a');
        // Adding the class nav-bar-item to the newly created link
        newListItem.classList.add("nav-bar-item");
        // Adding the referenece and text to each item in question
        newListItem.href = `#${section.id}`
        newListItem.innerText = section.dataset.nav
        // Finally appending the new list item to the document fragment
        fragment.appendChild(newListItem);
    })
    // Appending the document fragment to the navBarList defined in the global functions
    navBarList.appendChild(fragment);
}



// Add class 'active' to section when near top of viewport
// Function that toggle the active class bases on the helper function defined above
function toggleActiveClass(){
    // Boolean variable that determines where the function stops adding the active class
    var found = false;
    sections.forEach(section =>
    {
        // if the section's top is in the viewport or below and the first active section wasn't found make that the active section
        if (sectionInViewPort(section) && !found){
            section.classList.add('your-active-class');
            // The active section is found and thus we weill remove the active class from the rest of the sections
            found = true;
        }
        // Removing the active class from all other sections
        else {
            section.classList.remove('your-active-class');
        }
    })
}

// Scroll to anchor ID using scrollIntoView event

// Function that changes the effect of clicking on a link in the navBarList
navBarList.onclick = function (e) {
    var element = e.target;
    // Checks if the element is a link and uses scrollIntoView to scrolls to the element
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
// Uses an event listener on scrolling to toggle the active class
document.addEventListener('scroll', toggleActiveClass);