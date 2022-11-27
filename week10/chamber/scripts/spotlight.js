const requestURL = 'json/data.json'
const spotlightItems = document.querySelectorAll(".spotlights")

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const companies = jsonObject['business'];
        const filteredCompanies = companies.filter((company) => {
            return company.membership == "Silver Membership" || company.membership == "Gold Membership";
        });
        spotlightItems.forEach((spotlight,index) => {
            const i = Math.floor(Math.random()*filteredCompanies.length);
            const company = filteredCompanies[i];

            //img
            let image = document.createElement('img');
            image.src = company.image;
            image.setAttribute('alt', company.name);
            spotlight.appendChild(image);

            //p phone
            let p2 = document.createElement('p');
            p2.textContent = `Phone: ${(company.phone ==null) ? 'Not Available': company.phone}`;
            spotlight.appendChild(p2);

            //p website
            let a = document.createElement('a');
            a.setAttribute("href", company.website);
            a.setAttribute('target', '_blank');
            a.textContent = company.website;
            spotlight.appendChild(a);


            filteredCompanies.splice(i,1);
        });
    });