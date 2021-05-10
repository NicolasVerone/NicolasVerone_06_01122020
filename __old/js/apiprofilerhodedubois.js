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

    name[0].innerHTML = data.photographers[4].name;
    name[1].innerHTML = data.photographers[4].name;
    location.innerHTML = data.photographers[4].city + ", " + data.photographers[4].country;
    tagline.innerHTML = data.photographers[4].tagline;
    profilPic.src = data.photographers[4].portrait;


// Section Gallerie


    image[0].src = data.media[10].image;
    image[1].src = data.media[11].image;
    image[2].src = data.media[12].image;
    image[3].src = data.media[13].image;
    image[4].src = data.media[14].image;
    image[5].src = data.media[15].image;
    image[6].src = data.media[16].image;
    image[7].src = data.media[17].image;
    image[8].src = data.media[18].image;


    imageName[0].innerHTML = data.media[10].title;
    imageName[1].innerHTML = data.media[11].title;
    imageName[2].innerHTML = data.media[12].title;
    imageName[3].innerHTML = data.media[13].title;
    imageName[4].innerHTML = data.media[14].title;
    imageName[5].innerHTML = data.media[15].title;
    imageName[6].innerHTML = data.media[16].title;
    imageName[7].innerHTML = data.media[17].title;
    imageName[8].innerHTML = data.media[18].title;


    likes[0].innerHTML = data.media[10].likes;
    likes[1].innerHTML = data.media[11].likes;
    likes[2].innerHTML = data.media[12].likes;
    likes[3].innerHTML = data.media[13].likes;
    likes[4].innerHTML = data.media[14].likes;
    likes[5].innerHTML = data.media[15].likes;
    likes[6].innerHTML = data.media[16].likes;
    likes[7].innerHTML = data.media[17].likes;
    likes[8].innerHTML = data.media[18].likes;


  })






.catch ((error) => {
  console.log(error)
});