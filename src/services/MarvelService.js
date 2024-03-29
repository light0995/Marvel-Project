

class MarvelService {
    _apiBase = `https://gateway.marvel.com:443/v1/public/`;
    _apiKey = `apikey=b2e33643d53718da3c5300b24675496d`;

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }

    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default MarvelService;



















// class MarvelService {

    // _apiBase = `https://gateway.marvel.com:443/v1/public/`;
    // _apiKey = `apikey=b2e33643d53718da3c5300b24675496d`;

//     getResource = async (url) => {
//         const res = await fetch (url);
//         if (!res.ok) {
//             throw new Error (`Could not fetch ${url}, status: ${res.status}`);
//         };
        
//         return await res.json();
//     };

//     getAllCharacters = async () => {
//         const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
//         return res.data.results.map(this._transformCharacter)
//     };

//     getCharacter = async (id) => {
//         const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
//         return this._transformCharacter(res.data.results[0]);
//     };

//     _transformCharacter = (character) => {
//         return {
//             name: character.name,
//             description: character.description === '' ? 'Описание не найдено' : character.description,
//             thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
//             homepage: character.urls[0].url,
//             wiki: character.urls[1].url,
//         };
//     };
// };


// export default MarvelService;