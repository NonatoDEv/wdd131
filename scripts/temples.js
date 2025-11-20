const currentYearSpan = document.getElementById("currentYear");
const today = new Date()
const year = today.getFullYear(); 
const footer = "©" + year + " Powered by nonatoDev - All rights reserved ";
currentYearSpan.innerHTML = footer;
const lastModifiedP = document.getElementById("lastModified");
const lastModifiedDate = document.lastModified;
const lastModifiedText = "Last modification: " + lastModifiedDate;
lastModifiedP.innerHTML = lastModifiedText;
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
if(hamButton && navigation){
	hamButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	hamButton.setAttribute(
      'aria-label', 
      isOpen ? 'Open Navigation Menu' : 'Close Navigation Mennu'
    );
    hamButton.setAttribute('aria-expanded', isOpen);
  });
}
