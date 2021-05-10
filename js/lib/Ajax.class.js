class Ajax {
    url;

    constructor(url) {
        this.url = url
    }
    async getData() {
        const reponse = await fetch(this.url)
        return await reponse.json()

    }

}
