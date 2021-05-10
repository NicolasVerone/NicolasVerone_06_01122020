const datas = fetch('js/datajson.json')
  .then((response) => { return response.json() })
  .then((data) => {
    console.log(data);
    JSON.stringify(data.media[28].likes);
    const name = document.getElementsByClassName("name");
    const location = document.getElementById("section_location");
    const tagline = document.getElementById("section_tagline");
    const profilPic = document.getElementById("section_profilpic_image");
    const image = document.getElementsByClassName("portfolio_image");
    const imageName = document.getElementsByTagName('h3');
    const likes = document.getElementsByClassName("portfolio_legend");


// Section Container

    name[0].innerHTML = data.photographers[5].name;
    name[1].innerHTML = data.photographers[5].name;
    location.innerHTML = data.photographers[5].city + ", " + data.photographers[5].country;
    tagline.innerHTML = data.photographers[5].tagline;
    profilPic.src = data.photographers[5].portrait;


// Section Gallerie


    image[0].src = data.media[38].image;
    image[1].src = data.media[39].image;
    image[2].src = data.media[40].image;
    image[3].src = data.media[41].image;
    image[4].src = data.media[42].image;
    image[5].src = data.media[43].image;
    image[6].src = data.media[44].image;
    image[7].src = data.media[45].image;
    image[8].src = data.media[46].image;
    image[9].src = data.media[47].image;



    imageName[0].innerHTML = data.media[38].title;
    imageName[1].innerHTML = data.media[39].title;
    imageName[2].innerHTML = data.media[40].title;
    imageName[3].innerHTML = data.media[41].title;
    imageName[4].innerHTML = data.media[42].title;
    imageName[5].innerHTML = data.media[43].title;
    imageName[6].innerHTML = data.media[44].title;
    imageName[7].innerHTML = data.media[45].title;
    imageName[8].innerHTML = data.media[46].title;
    imageName[9].innerHTML = data.media[47].title;


    likes[0].innerHTML = data.media[38].likes;
    likes[1].innerHTML = data.media[39].likes;
    likes[2].innerHTML = data.media[40].likes;
    likes[3].innerHTML = data.media[41].likes;
    likes[4].innerHTML = data.media[42].likes;
    likes[5].innerHTML = data.media[43].likes;
    likes[6].innerHTML = data.media[44].likes;
    likes[7].innerHTML = data.media[45].likes;
    likes[8].innerHTML = data.media[46].likes;
    likes[9].innerHTML = data.media[47].likes;


  })






.catch ((error) => {
  console.log(error)
});