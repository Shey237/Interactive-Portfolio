document.getElementById('sayHelloBtn').addEventListener('click', function() {
    alert('Hello!');
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    alert('CV downloaded');
});




document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;
    const budget = document.getElementById('budget').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    const errorMessages = [];
    
    if (name === '') {
        errorMessages.push('Name is required');
    }
    
    if (email === '') {
        errorMessages.push('Email is required');
    }
    
    if (location === '') {
        errorMessages.push('Location is required');
    }
    
    if (budget === '') {
        errorMessages.push('Budget is required');
    }
    
    if (subject === '') {
        errorMessages.push('Subject is required');
    }
    
    if (message === '') {
        errorMessages.push('Message is required');
    }
    
    if (errorMessages.length > 0) {
        document.getElementById('errorMessages').innerHTML = errorMessages.join('<br>');
    } else {
        // Form submission logic here
        // You can submit the form data to a server or perform other actions
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
        document.getElementById('errorMessages').innerHTML = '';
    }
});




const moreProjectsBtn = document.getElementById('moreProjectsBtn');
const hiddenProjectCards = document.querySelectorAll('.card2.hidden');

moreProjectsBtn.addEventListener('click', function() {
    hiddenProjectCards.forEach(card => {
        card.classList.remove('hidden');
    });
});

const caseStudyBtn = document.getElementById('caseStudyBtn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

caseStudyBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

const caseStudyBtn1 = document.getElementById('caseStudyBtn1');
const modal1 = document.getElementById('modal');
const closeBtn1 = document.querySelector('.close');

caseStudyBtn1.addEventListener('click', function() {
    modal1.style.display = 'block';
});

closeBtn1.addEventListener('click', function() {
    modal1.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal1) {
        modal1.style.display = 'none';
    }
});

const caseStudyBtn2 = document.getElementById('caseStudyBtn2');
const modal2 = document.getElementById('modal');
const closeBtn2 = document.querySelector('.close');

caseStudyBtn2.addEventListener('click', function() {
    modal2.style.display = 'block';
});

closeBtn2.addEventListener('click', function() {
    modal2.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal2) {
        modal2.style.display = 'none';
    }
});

const caseStudyBtn3 = document.getElementById('caseStudyBtn3');
const modal3 = document.getElementById('modal');
const closeBtn3 = document.querySelector('.close');

caseStudyBtn3.addEventListener('click', function() {
    modal3.style.display = 'block';
});

closeBtn3.addEventListener('click', function() {
    modal3.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal3) {
        modal3.style.display = 'none';
    }
});

const caseStudyBtn4 = document.getElementById('caseStudyBtn4');
const modal4 = document.getElementById('modal');
const closeBtn4 = document.querySelector('.close');

caseStudyBtn4.addEventListener('click', function() {
    modal4.style.display = 'block';
});

closeBtn4.addEventListener('click', function() {
    modal4.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal4) {
        modal4.style.display = 'none';
    }
});

const caseStudyBtn5 = document.getElementById('caseStudyBtn5');
const modal5 = document.getElementById('modal');
const closeBtn5 = document.querySelector('.close');

caseStudyBtn5.addEventListener('click', function() {
    modal5.style.display = 'block';
});

closeBtn5.addEventListener('click', function() {
    modal5.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal5) {
        modal5.style.display = 'none';
    }
});

