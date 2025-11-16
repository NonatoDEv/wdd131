/*putting information from javascript*/
const updateCountryData = (country) =>{
    document.getElementById('area').textContent = country.area;
    document.getElementById('population').textContent = country.population;
    document.getElementById('capital').textContent = country.capital;
    document.getElementById('language').textContent = country.language;
    document.getElementById('currency').textContent = country.curency;
    document.getElementById('time-zone').textContent = country.timezone;
    document.getElementById('calling-code').textContent = country.callingcode;
    document.getElementById('tld').textContent = country.tld;
};
updateCountryData({
    area: ' 295.6 km²',
    population: ' 89,456',
    capital: ' Ilo City(San Geronimo de Ilo)',
    language: ' Spanish',
    curency: ' Soles(S/.)',
    timezone: ' UTC-5',
    callingcode: ' +51',
    tld: ' .pe',
});
/* get date and last modification and putting into Html*/
const currentYearSpan = document.getElementById("currentYear");
const today = new Date()
const year = today.getFullYear(); 
const footer = "©" + year + " Powered by nonatoDev - All rights reserved ";
currentYearSpan.innerHTML = footer;
const lastModifiedP = document.getElementById("lastModified")
const lastModifiedDate = document.lastModified
const lastModifiedText = "Last modification: " + lastModifiedDate;
lastModifiedP.innerHTML = lastModifiedText;