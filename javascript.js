const scriptURL = 'https://script.google.com/macros/s/AKfycbxtrYxTgs8L5E-pDyyMCazrv749k7HVbTzY3QmSMY5MXDzrxrYv1lO0Xao6t9n64M5C/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
            
            
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
})
