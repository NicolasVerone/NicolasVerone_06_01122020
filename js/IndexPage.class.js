const request = new Ajax("data/datajson.json");
const datasRequest = request.getData();
datasRequest.then(datas => {
    datas.photographers.forEach(photographer => {

        const displayInfo = () => {
            const main = document.getElementById('content');
            const container = document.createElement('section');
            container.classList.add('section_container');
            main.appendChild(container);
            container.innerHTML = `
            <a href="">
            <div class="section_profilpic_container">
              <img aria-label="photo du photographe" class="section_profilpic_image"
                src="/media/Photographers ID Photos/${photographer.portrait}" alt="${photographer.name}, Photographe freelance" />
            </div>
            <div class="section_description">
              <h2 aria-label="Nom du photographe">${photographer.name}</h2>
              <p aria-label="Lieu d'habitation du photographe" class="section_location">${photographer.city}, ${photographer.country}</p>
              <p aria-label="Tagline du photographe" class="section_tagline">${photographer.tagline}</p>
              <p aria-label="Tarif du photographe" class="${photographer.price}€/jour"></p>
            </div>
            <div class="section_buttons">
              <button aria-label="spécialité du photographe : art" class="button" type="button" value="Art">#Art</button>
              <button aria-label="spécialité du photographe : mode" class="button" type="button"
                value="Fashion">#Fashion</button>
              <button aria-label="spécialité du photographe : faune" class="button" type="button"
                value="Animals">#Animals</button>
            </div>
          </a>          
            `
        }
        displayInfo();

    })
    const createTags = () => {
        const tagList = [];
        datas.photographers.tags.forEach(tag => {
            const addTags = tagList.push(tag);
            const button = document.createElement('button');
        })
    }


    const displayTags = () => {
        const tagList = [
            {
                "type": "#Portrait"
            },
            {
                "type": "#Art"
            },
            {
                "type": "#Fashion"
            },
            {
                "type": "#Architecture"
            },
            {
                "type": "#Travel"
            },
            {
                "type": "#Sport"
            },
            {
                "type": "#Animals"
            },
            {
                "type": "#Events"
            },
        ]

        tagList.forEach(tag => {
            nav = document.getElementById("nav");
            const tagElement = document.createElement("button");
            tagElement.classList.add('button');
            tagElement.innerHTML = tag.type;
            nav.appendChild(tagElement);
        })
    }
    displayTags();
})

