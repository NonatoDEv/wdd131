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
/*calculating the windchill*/
const temp = 18;;// °C
const wind = 10;// km/h
function calculateWindChill(t,s){
    return 13.12 + 0.6215 * t-11.37 * Math.pow(s,0.16) + 0.3965 * t * Math.pow(s,0.16);
}
function displayWindChill() {
  const chillElement = document.querySelector('#windChill');
  if (temp <= 21 && wind > 4.8) {
    chillElement.textContent = `${calculateWindChill(temp, wind).toFixed(1)} °C`;
  } else {
    chillElement.textContent = "N/A";
  }
}
/* get date and last modification and putting into Html*/
document.querySelector('#currentYear').textContent =`© ${new Date().getFullYear() } Powered by nonatoDev - All rights reserved`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

displayWindChill();