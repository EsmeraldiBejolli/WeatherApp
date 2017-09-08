
export class RandomCities {
    cities = [
        {
            "country": "DE",
            "name": "Leipzig",
            "lat": "51.33962",
            "lng": "12.37129"
        },
        {
            "country": "DE",
            "name": "Ulmen",
            "lat": "50.20943",
            "lng": "6.97941"
        },
        {
            "country": "DE",
            "name": "Udenhausen",
            "lat": "51.46385",
            "lng": "9.46335"
        },
        {
            "country": "GB",
            "name": "London",
            "lat": "51.50853",
            "lng": "-0.12574"
        },
        {
            "country": "DE",
            "name": "Dortmund",
            "lat": "51.51494",
            "lng": "7.466"
        },
        {
            "country": "DE",
            "name": "Bremen",
            "lat": "53.07516",
            "lng": "8.80777"
        },
        {
            "country": "DE",
            "name": "Frankfurt am Main",
            "lat": "50.11552",
            "lng": "8.68417"
        },
        {
            "country": "DE",
            "name": "Hamburg",
            "lat": "53.57532",
            "lng": "10.01534"
        },
        {
            "country": "DE",
            "name": "Berlin",
            "lat": "52.52437",
            "lng": "13.41053"
        }]
    constructor() {
    }

    private getRandomIndex() {
        let i = Math.floor(Math.random() * (7 - 0)) + 0;
        return i;
    }

    getRandomCity() {
        let index = this.getRandomIndex();
       return {
            lat: parseInt(this.cities[index].lat),
            lag: parseInt(this.cities[index].lng)
        }
    }

}