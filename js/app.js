const menu = document.querySelector('#menu')
const toggleMenu = document.getElementById('toggleMenu')
const nav = document.querySelector('nav')
const navLinks = Array.from(document.querySelectorAll('nav li a'))
const navLinksSubMenu = Array.from(document.querySelectorAll('.menu-sm li a'))
const allNavs = Array.from(document.querySelectorAll('.links li a'))
const footerNavs = document.querySelectorAll('footer li a')
const windowBody = document.querySelector('window')
const galleryBtns = Array.from(document.querySelectorAll('#gallery .ctas button'))
const galleryCardsContainer = document.querySelector('#gallery .cards')
const galleryCards = Array.from(document.querySelectorAll('#gallery .cards .card'))

// body sections
const home = document.getElementById('home')
const about = document.getElementById('about')
const services = document.getElementById('services')
const gallery = document.getElementById('gallery')
const reviews = document.getElementById('reviews')
const team = document.getElementById('team')
const discover = document.getElementById('discover')

menu.onclick = (e) => {
    const targetBtn = e.target
    targetBtn.classList.contains('open') ? 
    openNav(targetBtn) : closeNav(targetBtn)
    console.log(targetBtn)
}
const addClass = (el,cl) => {
    el.classList.add(cl)
}
const removeClass = (el,cl) => {
    el.classList.remove(cl)
}
const openNav = (target) => {

    removeClass(target, 'open')
    target.innerHTML = `<i class="fa-solid fa-bars pointer-events-none"></i>`
    removeClass(toggleMenu, 'toggleMenu')
    addClass(nav, 'shadow-default')

}
const closeNav = (target) => {
    
    addClass(target, 'open')
    target.innerHTML = `<i class="fa-solid fa-xmark pointer-events-none"></i>`
    addClass(toggleMenu, 'toggleMenu')
    removeClass(nav, 'shadow-default')
}
galleryBtns.forEach(btn => {
    btn.onclick = (e) => {
        removeCurrentActive(galleryBtns, e.target)
        e.target.classList.add('active')

        let target = e.target.id
        
        switch (target) {
            // townhomes
            case 'townhomes' : 
                showGalleryByCategory(galleryCards, 'townhomes')
                break
            // apartments
            case 'multi-family' : 
                showGalleryByCategory(galleryCards, 'multi-family')
                break
            // apartments
            case 'apartments' : 
                showGalleryByCategory(galleryCards, 'apartments')
                break
            // all as default
            default :
                // set container as empty
                galleryCardsContainer.innerHTML = ''

                // display cards by category
                galleryCards.forEach(card => {
                    galleryCardsContainer.innerHTML += card.outerHTML
                })
        }
    }
})
navLinks.forEach(btn => {
    btn.onclick = (e) => {
        console.log(e.target)
        removeCurrentActive(navLinks, e.target)
        e.target.classList.add('active')
        
        let currentSelection = e.target.innerText
        const menuSm = Array.from(document.querySelectorAll('.menu-sm li a'))

        setActiveLinksMain(currentSelection, menuSm)

        // smooth scroll
        var scroll = new SmoothScroll('a[href*="#"]', {
            speed : 900,
            speedAsDuration : true,
            easing: 'easeInOutCubic',
            customEasing: function (time) {
            // return <your formulate with time as a multiplier>
            return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
        }
        })
    }
})
navLinksSubMenu.forEach(btn => {
    btn.onclick = (e) => {
        removeCurrentActive(navLinksSubMenu, e.target)
        e.target.classList.add('active')

        let currentSelection = e.target.innerText
        setActiveLinksMain(currentSelection, navLinks)
    }
})
footerNavs.forEach(btn => {
    btn.onclick = (e) => {
        
        let currentSelection = e.target.innerText
        const menuSm = Array.from(document.querySelectorAll('.menu-sm li a'))
        // nav menus
        setActiveLinksMain(currentSelection, navLinks)
        // submenus
        setActiveLinksMain(currentSelection, menuSm)
    }
})
const removeCurrentActive = (el, target) => {
    el.filter(btn => {
        if(btn.classList.contains('active'))
        btn.classList.remove('active')
        else
        target.classList.add('active')

    })
}
const allMenu = (links,menuText) => {

    let x = links.filter(menu => {
        menu.classList.remove('active')
        return menu.innerText == menuText
    })
    return x[0]
}
const setActiveLinksMain = (e, array) => {

    let currentSelection = e
    const targetEl = allMenu(array,currentSelection)
    targetEl.classList.add('active')
}
// add link style when scroll
window.onscroll = (scroll) => {

    // page heights
    let homeHeight = home.clientHeight - 100
    let servicesHeight = (home.clientHeight - 100) + (about.clientHeight - 100)
    let aboutTeamHeight = (home.clientHeight - 100) + (about.clientHeight - 100) + (services.clientHeight - 100)
    let galleryHeight = (home.clientHeight - 100) + (about.clientHeight - 100) + (services.clientHeight - 100) + (about.clientHeight - 100) 
    let reviewsHeight = (home.clientHeight - 100) + (about.clientHeight - 100) + (services.clientHeight - 100) + (about.clientHeight - 100) + (gallery.clientHeight - 100) 
    let discover = (home.clientHeight - 100) + (about.clientHeight - 100) + (services.clientHeight - 100) + (about.clientHeight - 100) + (gallery.clientHeight - 100) + (reviews.clientHeight - 100)

    // home
    setScrollActiveLink(homeHeight,servicesHeight,aboutTeamHeight,galleryHeight,reviewsHeight,discover,allNavs)
    
}
// scroll active links
const setScrollActiveLink = (home,services,team,gallery,reviews,discover,array) => {

    const documentBody = document.body
    const documentElement = document.documentElement
    // home
    if(documentBody.scrollTop < home || documentElement.scrollTop < home){
        // do your thing
        removeAllActiveLink(array)

        // filter target
        let x = activeLinksforScroll(array, 'Home')

        // add needed class
        addActiveClickedLink(x)
    } 
    // about
    if(documentBody.scrollTop > home || documentElement.scrollTop > home){
        // do your thing
        removeAllActiveLink(array)

        // filter target
        let x = activeLinksforScroll(array, 'About')

        // add needed class
        addActiveClickedLink(x)
    } 
    // services 
    if(documentBody.scrollTop > services || documentElement.scrollTop > services){
        // do your thing
        removeAllActiveLink(array)

        // filter target
        let x = activeLinksforScroll(array, 'Services')

        // add needed class
        addActiveClickedLink(x)
    }     
    // team 
    if(documentBody.scrollTop > team || documentElement.scrollTop > team){
        // do your thing
        removeAllActiveLink(array)
    }    
    // gallery
    if(documentBody.scrollTop > gallery || documentElement.scrollTop > gallery){
        // do your thing
        removeAllActiveLink(array)

        // filter target
        let x = activeLinksforScroll(array, 'Gallery')

        // add needed class
        addActiveClickedLink(x)
    }  
    // reviews
    if(documentBody.scrollTop > reviews || documentElement.scrollTop > reviews){
        // do your thing
        removeAllActiveLink(array)

        // filter target
        let x = activeLinksforScroll(array, 'Reviews')

        // add needed class
        addActiveClickedLink(x)
    }  
    // discover
    if(documentBody.scrollTop > discover || documentElement.scrollTop > discover){
        // do your thing
        removeAllActiveLink(array)
    }  
   
    
}
// filter active for scroll
const activeLinksforScroll = (array, text) => {
    let target = array.filter(nav => {
        return nav.innerText == text
    })
    return target
}
// remove links active class
const removeAllActiveLink = (array) => {
    array.forEach(nav => {
        nav.classList.remove('active')
    })
}
const addActiveClickedLink = (array) => {
    array.forEach(nav => {
        nav.classList.add('active')
    })
}
// show gallery based on category
const showGalleryByCategory = (array, category) => {
    let cards = array.filter(array => {
        return array.getAttribute('category') == category
    })
    // set container as blank
    galleryCardsContainer.innerHTML = ''

    // display cards by category
    cards.forEach(card => {
        galleryCardsContainer.innerHTML += card.outerHTML
    })
}