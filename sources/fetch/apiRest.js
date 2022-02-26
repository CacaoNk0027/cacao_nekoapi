let { default: axios } = require('axios')
const { nekoError, nekoAPIError } = require('../utils/nekoError')
const Messages = require('../utils/messages.js')

class RestApiv1 extends Messages {
    constructor() {}
    /**
     * nombre del gif que quieres obtener en api/action/{name}
     * @param {string} name 
     */
    static async action(name) {
        let jsonDat = await axios.get(`https://nekoapi.vanillank2006.repl.co/api/action/${name.toLowerCase()}`).then(response => response).catch(error => {
            new nekoError(super.msg1().className, error)
        })
        if(!jsonDat.data.statusCode) {
            return jsonDat.data
        } else if(jsonDat.data.statusCode == "404") {
            throw new nekoAPIError(super.msg1().className, super.msg1().error404, jsonDat)
        }
    }
    /**
     * nombre del gif que quieres obtener en api/reaction/{name}
     * @param {string} name 
     */
    static async reaction(name) {
        let jsonDat = await axios.get(`https://nekoapi.vanillank2006.repl.co/api/reaction/${name.toLowerCase()}`).then(response => response).catch(error => {
            new nekoError(super.msg1().className, error)
        })
        if(!jsonDat.data.statusCode) {
            return jsonDat.data
        } else if(jsonDat.data.statusCode == "404") {
            throw new nekoAPIError(super.msg1().className, super.msg1().error404, jsonDat)
        }
    }
    /**
     * nombre del gif que quieres obtener en api/anime/{name}
     * @param {string} name 
     */
    static async anime(name) {
        let jsonDat = await axios.get(`https://nekoapi.vanillank2006.repl.co/api/anime/${name.toLowerCase()}`).then(response => response).catch(error => {
            new nekoError(super.msg1().className, error)
        })
        if(!jsonDat.data.statusCode) {
            return jsonDat.data
        } else if(jsonDat.data.statusCode == "404") {
            throw new nekoAPIError(super.msg1().className, super.msg1().error404, jsonDat)
        }
    }
    /**
     * nombre del gif que quieres obtener en api/nsfw/{name}
     * @param {string} name 
     */
    static async nsfw(name) {
        let jsonDat = await axios.get(`https://nekoapi.vanillank2006.repl.co/api/nsfw/${name.toLowerCase()}`).then(response => response).catch(error => {
            new nekoError(super.msg1().className, error)
        })
        if(!jsonDat.data.statusCode) {
            return jsonDat.data
        } else if(jsonDat.data.statusCode == "404") {
            throw new nekoAPIError(super.msg1().className, super.msg1().error404, jsonDat)
        }
    }
    /**
     * nombre del gif que quieres obtener en api/rolplay-nsfw/{name}
     * @param {string} name 
     */
    static async rolplay_nsfw(name) {
        let jsonDat = await axios.get(`https://nekoapi.vanillank2006.repl.co/api/rolplay-nsfw/${name.toLowerCase()}`).then(response => response).catch(error => {
            new nekoError(super.msg1().className, error)
        })
        if(!jsonDat.data.statusCode) {
            return jsonDat.data
        } else if(jsonDat.data.statusCode == "404") {
            throw new nekoAPIError(super.msg1().className, super.msg1().error404, jsonDat)
        }
    }
}

class RestApiv2 extends Messages {
    /**
     * Busca un gif en especifico o obten de manera randoms los gifs
     * @param {"animals"|"anime"|"action"|"reaction"} category 
     * @param {string} name 
     * @param {number} number 
     */
    static async exec(category, name, number) {
        if(!category) {
            throw new nekoError(super.msg2().className, super.msg2().errorNoClass)
        } else if(category == "animals") {
            if(!name) {
                throw new nekoError(super.msg2().className, super.msg2().noName)
            } else {
                if(!number) {
                    let jsonDat = await axios.get(`https://restnekoapi.herokuapp.com/api/animals?gif=${name}`).then(response => response).catch(error => {
                        new nekoError(super.msg2().className, error)
                    })
                    if(jsonDat.data.statusCode == 200) {
                        return jsonDat.data
                    } else if(jsonDat.data.statusCode == 404) {
                        throw new nekoAPIError(super.msg2().className, super.msg2().error404, jsonDat)
                    }
                } else {
                    let numberString = number.toString()
                    numberString.length == 1 ? `00${number}` : ( numberString.length == 2 ? `0${number}`: numberString)
                    let jsonDat = await axios.get(`https://restnekoapi.herokuapp.com/api/animals?gif=${name}&number=${numberString}`).then(response => response).catch(error => {
                        new nekoError(super.msg2().className, error)
                    })
                    if(jsonDat.data.statusCode == 200) {
                        return jsonDat.data
                    } else if(jsonDat.data.statusCode == 404) {
                        throw new nekoAPIError(super.msg2().className, super.msg2().error404, jsonDat)
                    }
                }
            }
        } else if(category == "anime") {
            if(!name) {
                throw new nekoError(super.msg2().className, super.msg2().noName)
            } else {
                if(!number) {
                    let jsonDat = await axios.get(`https://restnekoapi.herokuapp.com/api/anime?gif=${name.toLowerCase()}`).then(response => response).catch(error => {
                        new nekoError(super.msg2().className, error)
                    })
                    if(jsonDat.data.statusCode == 200) {
                        return jsonDat.data
                    } else if(jsonDat.data.statusCode == 404) {
                        throw new nekoAPIError(super.msg2().className, super.msg2().error404, jsonDat)
                    }
                } else {
                    let numberString = number.toString()
                    numberString.length == 1 ? `00${number}` : ( numberString.length == 2 ? `0${number}`: numberString)
                    let jsonDat = await axios.get(`https://restnekoapi.herokuapp.com/api/anime?gif=${name}&number=${numberString}`).then(response => response).catch(error => {
                        new nekoError(super.msg2().className, error)
                    })
                    if(jsonDat.data.statusCode == 200) {
                        return jsonDat.data
                    } else if(jsonDat.data.statusCode == 404) {
                        throw new nekoAPIError(super.msg2().className, super.msg2().error404, jsonDat)
                    }
                }
            }
        } else if(category == "action") {
            if(!name) {
                throw new nekoError(super.msg2().className, super.msg2().noName)
            } else {
                if(!number) {
                    let jsonDat = await axios.get(`https://restnekoapi.herokuapp.com/api/rolplay/action?gif=${name}`).then(response => response).catch(error => {
                        new nekoError(super.msg2().className, error)
                    })
                    if(!jsonDat.data.statusCode) {
                        return jsonDat.data
                    } else if(jsonDat.data.statusCode == 404) {
                        throw new nekoAPIError(super.msg2().className, super.msg2().error404, jsonDat)
                    }
                } else {
                    let numberString = number.toString()
                    numberString.length == 1 ? numberString = `00${number.toString()}` : ( numberString.length == 2 ? numberString = `0${number.toString()}`: numberString)
                    let jsonDat = await axios.get(`https://restnekoapi.herokuapp.com/api/rolplay/action?gif=${name}&number=${numberString}`).then(response => response).catch(error => {
                        new nekoError(super.msg2().className, error)
                    })
                    if(!jsonDat.data.statusCode) {
                        return jsonDat.data
                    } else if(jsonDat.data.statusCode == 404) {
                        throw new nekoAPIError(super.msg2().className, super.msg2().error404, jsonDat)
                    }
                }
            }
        } else if(category == "reaction") {
            if(!name) {
                throw new nekoError(super.msg2().className, super.msg2().noName)
            } else {
                if(!number) {
                    let jsonDat = await axios.get(`https://restnekoapi.herokuapp.com/api/rolplay/reaction?gif=${name}`).then(response => response).catch(error => {
                        new nekoError(super.msg2().className, error)
                    })
                    if(!jsonDat.data.statusCode) {
                        return jsonDat.data
                    } else if(jsonDat.data.statusCode == 404) {
                        throw new nekoAPIError(super.msg2().className, super.msg2().error404, jsonDat)
                    }
                } else {
                    let numberString = number.toString()
                    numberString.length == 1 ? `00${number}` : ( numberString.length == 2 ? `0${number}`: numberString)
                    let jsonDat = await axios.get(`https://restnekoapi.herokuapp.com/api/rolplay/reaction?gif=${name}&number=${numberString}`).then(response => response).catch(error => {
                        new nekoError(super.msg2().className, error)
                    })
                    if(!jsonDat.data.statusCode) {
                        return jsonDat.data
                    } else if(jsonDat.data.statusCode == 404) {
                        throw new nekoAPIError(super.msg2().className, super.msg2().error404, jsonDat)
                    }
                }
            }
        } else {
            throw new nekoError(super.msg2().className, super.msg2().errorNoClass)
        }
    }
}

module.exports = {
    RestApiv1,
    RestApiv2
}