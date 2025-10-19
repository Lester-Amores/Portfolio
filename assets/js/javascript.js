const scriptURL = 'https://script.google.com/macros/s/AKfycbxtrYxTgs8L5E-pDyyMCazrv749k7HVbTzY3QmSMY5MXDzrxrYv1lO0Xao6t9n64M5C/exec'

// Initialize form handling after includes are loaded
function initializeFormHandling() {
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");
    
    if (form && msg) {
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML= "Message sent succesfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                }, 5000)
                form.reset();
            })
            .catch(error => console.error('Error!', error.message))
        });
    }
}
            
            
// Legacy tab system for backwards compatibility
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Initialize all tab systems and form handling
window.initializeAllFeatures = function() {
    console.log('Initializing all features...');
    
    // Modern tab system
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-contents');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active-tab-btn'));
            tabContents.forEach(content => content.classList.remove('active-tab'));
            
            // Add active class to clicked button and target content
            this.classList.add('active-tab-btn');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active-tab');
            }
        });
    });
    
    // Portfolio tab system
    const portfolioTabButtons = document.querySelectorAll('.portfolio-tab-button');
    const portfolioTabContents = document.querySelectorAll('.portfolio-tab-contents');
    
    console.log('Found portfolio tab buttons:', portfolioTabButtons.length);
    console.log('Found portfolio tab contents:', portfolioTabContents.length);
    
    portfolioTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-portfolio-tab');
            console.log('Portfolio tab clicked:', targetTab);
            
            // Remove active class from all buttons and contents
            portfolioTabButtons.forEach(btn => btn.classList.remove('active-portfolio-tab'));
            portfolioTabContents.forEach(content => content.classList.remove('active-portfolio-tab'));
            
            // Add active class to clicked button and target content
            this.classList.add('active-portfolio-tab');
            const targetContent = document.getElementById(targetTab + '-projects');
            if (targetContent) {
                targetContent.classList.add('active-portfolio-tab');
                console.log('Activated tab:', targetTab + '-projects');
            } else {
                console.log('Target content not found:', targetTab + '-projects');
            }
        });
    });
    
    // Initialize form handling
    initializeFormHandling();
};

// Wait for includes to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // The initialization will be called after includes are loaded in index.html
    console.log('DOM loaded, waiting for includes...');
});

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.classList.add("active");
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.classList.remove("active");
    sidemenu.style.right = "-300px";
}

// Close menu when clicking on nav links (mobile)
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sidemenu = document.getElementById("sidemenu");
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closemenu();
            }
        });
    });
    
    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            const nav = document.querySelector('.modern-nav');
            const menu = document.getElementById('sidemenu');
            
            if (!nav.contains(e.target) && menu.classList.contains('active')) {
                closemenu();
            }
        }
    });
});



