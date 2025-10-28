/* obtain the current year and put into the HTML*/ 
const currentYearSpan = document.getElementById("currentYear");/*looking for ID*/ 
const today = new Date()/*create a variable*/
const year = today.getFullYear(); /* obtain the year*/ 
const footer = "©" + year + " Powered by nonatoDev - All rights reserved ";/* mixing strings with variable and get a text*/
currentYearSpan.innerHTML = footer;/*putting into the HTML */
/* obtain the last date and put into the HTML*/
const lastModifiedP = document.getElementById("lastModified");
const lastModifiedDate = document.lastModified;
const lastModifiedText = "Last modification: " + lastModifiedDate;
lastModifiedP.innerHTML = lastModifiedText;