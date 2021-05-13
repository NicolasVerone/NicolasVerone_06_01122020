const request = new Ajax("data/datajson.json");
const datasRequest = request.getData();
datasRequest.then(datas => {
    datas.photographers.forEach(photographer => {

        const displayInfo = () => {
            // Création des éléments
            const main = document.getElementById('content');
            const container = document.createElement('section');
            const imageContainer = document.createElement('div');
            const image = document.createElement('img');
            const descriptionContainer = document.createElement('div');
            const name = document.createElement('h2');
            const location = document.createElement('p');
            const tagline = document.createElement('p');
            const fees = document.createElement('p');
            const button = document.createElement('button');
            // Mise en place des éléments
            main.appendChild(container);
            container.appendChild(imageContainer);
            container.appendChild(descriptionContainer);
            imageContainer.appendChild(image);
            descriptionContainer.appendChild(name);
            descriptionContainer.appendChild(tagline);
            descriptionContainer.appendChild(location);
            descriptionContainer.appendChild(fees);
            descriptionContainer.appendChild(button);
            // Définition des classes des éléments
            container.classList.add('section_container');
            imageContainer.classList.add('section_profilpic_container');
            image.classList.add('section_profilpic_image');
            descriptionContainer.classList.add('section_description');
            name.classList.add('photographer_name');
            location.classList.add('section_location');
            tagline.classList.add('section_tagline');
            fees.classList.add('section__fees');
            button.classList.add('button');
            // Sources des éléments
            image.src = "media/Photographers ID Photos/" + photographer.portrait;
            name.innerHTML = photographer.name;
            location.innerHTML = photographer.city + ", " + photographer.country;
            tagline.innerHTML = photographer.tagline;
            fees.innerHTML = photographer.price + "€/jour";
        }   
           
        displayInfo();
    })

    const displayTags = () => {
        const tags = [
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

        tags.forEach(tag => {
            nav = document.getElementById("nav");
            const tagElement = document.createElement("button");
            tagElement.classList.add('button');
            tagElement.innerHTML = tag.type;
            nav.appendChild(tagElement);
        })
    }
    displayTags();
})

