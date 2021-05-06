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

    name[0].innerHTML = data.photographers[3].name;
    name[1].innerHTML = data.photographers[3].name;
    location.innerHTML = data.photographers[3].city + ", " + data.photographers[3].country;
    tagline.innerHTML = data.photographers[3].tagline;
    profilPic.src = data.photographers[3].portrait;


// Section Gallerie


    image[0].src = data.media[19].image;
    image[1].src = data.media[20].image;
    image[2].src = data.media[21].image;
    image[3].src = data.media[22].image;
    image[4].src = data.media[23].image;
    image[5].src = data.media[24].image;
    image[6].src = data.media[25].image;
    image[7].src = data.media[26].image;
    image[8].src = data.media[27].image;


    imageName[0].innerHTML = data.media[19].title;
    imageName[1].innerHTML = data.media[20].title;
    imageName[2].innerHTML = data.media[21].title;
    imageName[3].innerHTML = data.media[22].title;
    imageName[4].innerHTML = data.media[23].title;
    imageName[5].innerHTML = data.media[24].title;
    imageName[6].innerHTML = data.media[25].title;
    imageName[7].innerHTML = data.media[26].title;
    imageName[8].innerHTML = data.media[27].title;


    likes[0].innerHTML = data.media[19].likes;
    likes[1].innerHTML = data.media[20].likes;
    likes[2].innerHTML = data.media[21].likes;
    likes[3].innerHTML = data.media[22].likes;
    likes[4].innerHTML = data.media[23].likes;
    likes[5].innerHTML = data.media[24].likes;
    likes[6].innerHTML = data.media[25].likes;
    likes[7].innerHTML = data.media[26].likes;
    likes[8].innerHTML = data.media[27].likes;


  })






.catch ((error) => {
  console.log(error)
});