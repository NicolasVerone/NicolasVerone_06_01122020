class Ajax {
    url;
    constructor(url) {
        this.url = url
    }
    async getData() {
        try {const reponse = await fetch(this.url)
        return await reponse.json();}
        catch (err) {
            console.log('l\'erreur suivante est survenue :', err);
    }

}
}

