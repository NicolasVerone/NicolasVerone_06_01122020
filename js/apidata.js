const datas = fetch("datajson.json");
datas.then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})