/*const datas = fetch("js/datajson.json");
datas.then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})*/

const datas = fetch("js/datajson.json")
.then(response => response.json())
.then(json => console.log(json))



    let populateImage = () => {
        const profileImage = document.getElementById('profile_image');
        profileImage.src = datas['photographers']
    
    };


    populateImage();

