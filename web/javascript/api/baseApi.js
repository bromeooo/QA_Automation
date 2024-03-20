class BaseApi {
    constructor(baseUrl){
        this.baseUrl = baseUrl;

    }

    // makes a node-fetch get request
    async getRequest(endpoint, options = {}){
        const response = await fetch(`${this.baseUrl}${endpoint}`, options);
        if (!response.ok){
            throw new Error(`API request failed with status ${response.status}`)
        }
        return response.json();
    }
}

module.exports = BaseApi
