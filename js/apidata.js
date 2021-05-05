/*const datas = fetch("js/datajson.json")
.then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})*/



const datas = fetch('js/datajson.json')
  .then((response) => { return response.json() })
  .then((data) => {
    console.log(data);

    const name = document.getElementsByTagName("h2");
    const location = document.getElementsByClassName("section_location");
    const tagline = document.getElementsByClassName("section_tagline");
    const price = document.getElementsByClassName("section__fees");
    const profilPic = document.getElementsByClassName("section_profilpic_image");
    const tagList = document.getElementsByClassName("section_buttons");
    const tag = document.createElement("button").classList.add("button");
;

    // Photographer 1
    name[0].innerHTML = data.photographers[0].name;
    location[0].innerHTML = data.photographers[0].city + ", " + data.photographers[0].country;
    tagline[0].innerHTML = data.photographers[0].tagline;
    price[0].innerHTML = data.photographers[0].price + "€/jour";
    profilPic[0].src = data.photographers[0].portrait;
    tagList[0].appendChild(tag)
    
    
    // Photographer 2
    name[1].innerHTML = data.photographers[1].name;
    location[1].innerHTML = data.photographers[1].city + ", " + data.photographers[1].country;
    tagline[1].innerHTML = data.photographers[1].tagline;
    price[1].innerHTML = data.photographers[1].price + "€/jour";
    profilPic[1].src = data.photographers[1].portrait;
    
    
    // Photographer 3
    name[2].innerHTML = data.photographers[2].name;
    location[2].innerHTML = data.photographers[2].city + ", " + data.photographers[2].country;
    tagline[2].innerHTML = data.photographers[2].tagline;
    price[2].innerHTML = data.photographers[2].price + "€/jour";
    profilPic[2].src = data.photographers[2].portrait;
   
    
    // Photographer 4
    name[3].innerHTML = data.photographers[3].name;
    location[3].innerHTML = data.photographers[3].city + ", " + data.photographers[3].country;
    tagline[3].innerHTML = data.photographers[3].tagline;
    price[3].innerHTML = data.photographers[3].price + "€/jour";
    profilPic[3].src = data.photographers[3].portrait;
    
    
    // Photographer 5
    name[4].innerHTML = data.photographers[4].name;
    location[4].innerHTML = data.photographers[4].city + ", " + data.photographers[4].country;
    tagline[4].innerHTML = data.photographers[4].tagline;
    price[4].innerHTML = data.photographers[4].price + "€/jour";
    profilPic[4].src = data.photographers[4].portrait;
    
    
    // Photographer 6
    name[5].innerHTML = data.photographers[5].name;
    location[5].innerHTML = data.photographers[5].city + ", " + data.photographers[5].country;
    tagline[5].innerHTML = data.photographers[5].tagline;
    price[5].innerHTML = data.photographers[5].price + "€/jour";
    profilPic[5].src = data.photographers[5].portrait;
  })
  .catch((error) => {
    console.log(error)
  });






