const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-containts')

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.target.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
}

const sidemenu = document.getElementById('sidemenu');
 function openmenu(){
    sidemenu.style.right = '0'
 }
 function closemenu(){
    sidemenu.style.right = '-200px'
 }
