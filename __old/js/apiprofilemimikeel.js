const datas = fetch('js/datajson.json')
  .then((response) => { return response.json() })
  .then((data) => {
    console.log(data);
    const name = document.getElementsByClassName("name");
    const location = document.getElementById("section_location");
    const tagline = document.getElementById("section_tagline");
    const profilPic = document.getElementById("section_profilpic_image");
    const image = document.getElementsByClassName("portfolio_image");
    const imageName = document.getElementsByTagName('h3');
    const likes = document.getElementsByClassName("portfolio_legend");


// Section Container

    name[0].innerHTML = data.photographers[0].name + " | " + "Fisheye"
    name[1].innerHTML = data.photographers[0].name;
    name[2].innerHTML = data.photographers[0].name;
    location.innerHTML = data.photographers[0].city + ", " + data.photographers[0].country;
    tagline.innerHTML = data.photographers[0].tagline;
    profilPic.src = data.photographers[0].portrait;


// Section Gallerie


    image[0].src = data.media[28].image;
    image[1].src = data.media[29].image;
    image[2].src = data.media[30].image;
    image[3].src = data.media[31].image;
    image[4].src = data.media[32].image;
    image[5].src = data.media[33].image;
    image[6].src = data.media[34].image;
    image[7].src = data.media[35].image;
    image[8].src = data.media[36].image;
    image[9].src = data.media[37].image;

    imageName[0].innerHTML = data.media[28].title;
    imageName[1].innerHTML = data.media[29].title;
    imageName[2].innerHTML = data.media[30].title;
    imageName[3].innerHTML = data.media[31].title;
    imageName[4].innerHTML = data.media[32].title;
    imageName[5].innerHTML = data.media[33].title;
    imageName[6].innerHTML = data.media[34].title;
    imageName[7].innerHTML = data.media[35].title;
    imageName[8].innerHTML = data.media[36].title;
    imageName[9].innerHTML = data.media[37].title;

    likes[0].innerHTML = data.media[28].likes;
    likes[1].innerHTML = data.media[29].likes;
    likes[2].innerHTML = data.media[30].likes;
    likes[3].innerHTML = data.media[31].likes;
    likes[4].innerHTML = data.media[32].likes;
    likes[5].innerHTML = data.media[33].likes;
    likes[6].innerHTML = data.media[34].likes;
    likes[7].innerHTML = data.media[35].likes;
    likes[8].innerHTML = data.media[36].likes;
    likes[9].innerHTML = data.media[37].likes;


  })






.catch ((error) => {
  console.log(error)
});