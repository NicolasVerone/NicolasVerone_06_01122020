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

    name[0].innerHTML = data.photographers[1].name;
    name[1].innerHTML = data.photographers[1].name;
    location.innerHTML = data.photographers[1].city + ", " + data.photographers[1].country;
    tagline.innerHTML = data.photographers[1].tagline;
    profilPic.src = data.photographers[1].portrait;


// Section Gallerie


    image[0].src = data.media[48].image;
    image[1].src = data.media[49].image;
    image[2].src = data.media[50].image;
    image[3].src = data.media[51].image;
    image[4].src = data.media[52].image;
    image[5].src = data.media[53].image;
    image[6].src = data.media[54].image;
    image[7].src = data.media[55].image;
    image[8].src = data.media[56].image;
    image[9].src = data.media[57].image;
   

    imageName[0].innerHTML = data.media[48].title;
    imageName[1].innerHTML = data.media[49].title;
    imageName[2].innerHTML = data.media[50].title;
    imageName[3].innerHTML = data.media[51].title;
    imageName[4].innerHTML = data.media[52].title;
    imageName[5].innerHTML = data.media[53].title;
    imageName[6].innerHTML = data.media[54].title;
    imageName[7].innerHTML = data.media[55].title;
    imageName[8].innerHTML = data.media[56].title;
    imageName[9].innerHTML = data.media[57].title;
 

    likes[0].innerHTML = data.media[48].likes;
    likes[1].innerHTML = data.media[49].likes;
    likes[2].innerHTML = data.media[50].likes;
    likes[3].innerHTML = data.media[51].likes;
    likes[4].innerHTML = data.media[52].likes;
    likes[5].innerHTML = data.media[53].likes;
    likes[6].innerHTML = data.media[54].likes;
    likes[7].innerHTML = data.media[55].likes;
    likes[8].innerHTML = data.media[56].likes;
    likes[9].innerHTML = data.media[57].likes;
  

  })






.catch ((error) => {
  console.log(error)
});