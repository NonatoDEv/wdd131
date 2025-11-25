/*footer format date*/ 
document.querySelector('#currentYear').textContent =`© ${new Date().getFullYear() } Powered by nonatoDev - All rights reserved`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;
/* toggle button*/
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
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Cochabamba Bolivia",
    location: "Cochabamba, Bolivia",
    dedicated: "2000, April, 30",
    area: 35500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13638.jpg"
  },
  {
    templeName: "Arequipa Peru",
    location: "Arequipa, Peru",
    dedicated: "2019, December, 15",
    area: 26969,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7290.jpg"
  },
  {
    templeName: "Nauvoo Illinois",
    location: "Nauvoo, Illinois",
    dedicated: "2002, june, 30",
    area: 54000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576.jpg"
  },
  {
    templeName: "Los Olivos-Lima Peru",
    location: "Los Olivos, Lima, Peru",
    dedicated: "2024, January, 14",
    area: 47413,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-los-olivos-temple/lima-peru-los-olivos-temple-42502.jpg"
  },
  {
    templeName: "Trujillo Peru",
    location: "Trujillo, Peru",
    dedicated: "2019, December, 15",
    area: 28200,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/trujillo-peru-temple/trujillo-peru-temple-3712.jpg"
  }
];

const homeFilterBtn = document.querySelector("#home");
const oldFilterBtn = document.querySelector("#old");
const newFilterBtn = document.querySelector("#new");
const smallFilterBtn = document.querySelector("#small");
const largeFilterBtn = document.querySelector("#large");

createTempleCard(temples);

const classifyByDedication = (temples) => {
  return temples.reduce((acc, temple) =>{
    const dedicationString = temple.dedicated;
    const yearString = dedicationString.split(',')[0].trim();
    const year = parseInt(yearString, 10);
    if (year <= 1900) {
      acc.oldTemples.push(temple);
    } else if (year >= 2000){
      acc.newTemples.push(temple);
    }
    return acc;
  }, {oldTemples: [], newTemples: []});
};

const classifyByArea = (temples) => {
    return temples.reduce((acc, temple) => {
        const area = temple.area; 
        if (area <= 10000) {
            acc.smallTemples.push(temple);
        } else if (area >= 90000) {
            acc.largeTemples.push(temple);
        }
        return acc;
    }, { smallTemples: [], largeTemples: [] });
};

if(oldFilterBtn){
  oldFilterBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    const {oldTemples} = classifyByDedication(temples);
    createTempleCard(oldTemples);
  })
}

if(newFilterBtn){
  newFilterBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    const {newTemples} = classifyByDedication(temples);
    createTempleCard(newTemples);
  })
}

if(smallFilterBtn){
  smallFilterBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    const {smallTemples} = classifyByArea(temples);
    createTempleCard(smallTemples);
  })
}

if(largeFilterBtn){
  largeFilterBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    const {largeTemples} = classifyByArea(temples);
    createTempleCard(largeTemples);
  })
}

if(homeFilterBtn) {
    homeFilterBtn.addEventListener("click", (e) => {
        e.preventDefault();
        createTempleCard(temples);
    });
}

function createTempleCard(filteredTemples) {
  document.querySelector(".grid-layout").innerHTML ="";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "300")

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".grid-layout").appendChild(card);
  });
}

