import axios from 'axios'

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
    image_type: "photo",
    orientation: "horizontal",
    per_page: 12
}

class Pixabay {
    API_KEY = '31530032-bcbc50fc25a9a5255ae59ed3d'

    getImages(searchQuery, page) {
        return axios.get('?', {
            params: {
                q: searchQuery,
                page: page,
                key: this.API_KEY,
            }
        })
            .then(({ data }) => {
                if (data.totalHits === 0) {
                    throw new Error("404")
                }
                return data
            })
    }
}

export const apiPixabay = new Pixabay()