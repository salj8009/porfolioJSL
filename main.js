
/*btnHome.addEventListener('click' , () =>{
    location.hash = 'home';
});

btnAbout.addEventListener('click' , () => {
    location.hash = 'about';
});

btnProyects.addEventListener('click' , () => {
    location.hash = 'proyects';
});*/

window.addEventListener('DOMContentLoaded', navigation, false);
window.addEventListener('hashchange', navigation, false);


function navigation(){
    if(location.hash.startsWith('#about')){
        aboutPage();
    }else if(location.hash.startsWith('#projects')){
        projectsPage();
    }else if(location.hash.startsWith('#contact')){
        contactPage();
    }
    else{
        homePage();
    }
};

function homePage(){
    console.log('HOME');

    contentHome.classList.remove('hiden');
    contentAbout.classList.add('hiden');
    contentProjects.classList.add('hiden');
    contentContact.classList.add('hiden');

    
};

function aboutPage(){
    console.log('ABOUT');

    contentHome.classList.add('hiden');
    contentAbout.classList.remove('hiden');
    contentProjects.classList.add('hiden');
    contentContact.classList.add('hiden');
    
   
};

function projectsPage(){
    console.log('PROJETS');
    
    contentHome.classList.add('hiden');
    contentAbout.classList.add('hiden');
    contentProjects.classList.remove('hiden');
    contentContact.classList.add('hiden');
   
    
}



function contactPage(){
    console.log('CONTACT');

    contentHome.classList.add('hiden');
    contentAbout.classList.add('hiden');
    contentProjects.classList.add('hiden');
    contentContact.classList.remove('hiden');

    

}


const fragment = document.createDocumentFragment();

function createMenu() {
    const divContenBtns = document.createElement('DIV');
    divContenBtns.classList.add('content-btns');

    const btnHome = document.createElement('BTN');
    btnHome.classList.add('btns');
    btnHome.textContent = 'HOME';

    btnHome.addEventListener('click' , () =>{
        location.hash = 'home';
    });

    const btnAbout = document.createElement('BTN');
    btnAbout.classList.add('btns');
    btnAbout.textContent = 'ABOUT';

    btnAbout.addEventListener('click' , () => {
        location.hash = 'about';
    });

    const btnProjects = document.createElement('BTN');
    btnProjects.classList.add('btns');
    btnProjects.textContent = 'PROJECTS';

    btnProjects.addEventListener('click' , () => {
        location.hash = 'projects';
    });

   

    const btnContact = document.createElement('BTN');
    btnContact.classList.add('btns');
    btnContact.textContent = 'CONTACT';

    btnContact.addEventListener('click' , () => {
        location.hash = 'contact';
    });
    
    divContenBtns.appendChild(btnHome);
    divContenBtns.appendChild(btnAbout);
    divContenBtns.appendChild(btnProjects);
    divContenBtns.appendChild(btnContact);

    fragment.appendChild(divContenBtns);
   
    headerNav.appendChild(fragment);
} 
createMenu();
btnChange.addEventListener('click' , () => {
    contentHome.classList.toggle('content-home-dark');
});

/*
//email 
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('k9wjVEVX5IBn19iqW');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        //this.contact_number.value = 'service_4qjjjvg';
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}


const API = 'https://api.github.com/users/salj8009/repos';

async function  fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    console.log(data)
    return data;

};


fetchData(API)
const dataFunction = async (urlApi) => {
    try {
        console.log(`${urlApi}`);
    } catch (error) {
        console.log(error)
    }
};

dataFunction(API);*/