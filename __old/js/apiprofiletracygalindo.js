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

    name[0].innerHTML = data.photographers[2].name;
    name[1].innerHTML = data.photographers[2].name;
    location.innerHTML = data.photographers[2].city + ", " + data.photographers[2].country;
    tagline.innerHTML = data.photographers[2].tagline;
    profilPic.src = data.photographers[2].portrait;


// Section Gallerie


    image[0].src = data.media[0].image;
    image[1].src = data.media[1].image;
    image[2].src = data.media[2].image;
    image[3].src = data.media[3].image;
    image[4].src = data.media[4].image;
    image[5].src = data.media[5].image;
    image[6].src = data.media[6].image;
    image[7].src = data.media[7].image;
    image[8].src = data.media[8].image;
    image[9].src = data.media[9].image;



    imageName[0].innerHTML = data.media[0].title;
    imageName[1].innerHTML = data.media[1].title;
    imageName[2].innerHTML = data.media[2].title;
    imageName[3].innerHTML = data.media[3].title;
    imageName[4].innerHTML = data.media[4].title;
    imageName[5].innerHTML = data.media[5].title;
    imageName[6].innerHTML = data.media[6].title;
    imageName[7].innerHTML = data.media[7].title;
    imageName[8].innerHTML = data.media[8].title;
    imageName[9].innerHTML = data.media[9].title;


    likes[0].innerHTML = data.media[0].likes;
    likes[1].innerHTML = data.media[1].likes;
    likes[2].innerHTML = data.media[2].likes;
    likes[3].innerHTML = data.media[3].likes;
    likes[4].innerHTML = data.media[4].likes;
    likes[5].innerHTML = data.media[5].likes;
    likes[6].innerHTML = data.media[6].likes;
    likes[7].innerHTML = data.media[7].likes;
    likes[8].innerHTML = data.media[8].likes;
    likes[9].innerHTML = data.media[9].likes;


  })






.catch ((error) => {
  console.log(error)
});