const navMenu = document.getElementById('nav-menu'), navToggle = document.getElementById('nav-toggle'), navClose = document.getElementById('nav-close')

// Validating if constant exists:
if(navToggle) {
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose) {
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction)) 

const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
    }  else {
        sectionsClass.classList.remove('active-link')
    }
    })
}
window.addEventListener('scroll', scrollActive)

// Showing scrollUp
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

//Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card,.pricing__card`,{interval: 100})
sr.reveal(`.choose__img, .calculate__content`,{origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`,{origin: 'right'})

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message'),
    contactUser = document.getElementById('contact-user')

const sendEmail = (e) =>{
    e.preventDefault()

    if(contactUser.value === ''){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'You must enter your E-mail !!'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    } else {
        emailjs.sendForm('service_2bqik6e','template_3zcwtp5','#contact-form','-QNUVBIdsfa26imqm').then(()=>{
            contactMessage.classList.add('color-green')
            contactMessage.textContent = 'You Registered Successfully !!'
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 3000)
        },(error) =>{
            alert('Oops! Something went wrong...', error)
        })
        //Clearing the input field
        contactUser.value = ''
    }
}
contactForm.addEventListener('submit',sendEmail)