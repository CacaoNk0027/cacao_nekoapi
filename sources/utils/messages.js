class Messages {
    static msg1() {
        return {
            className: "RestApiv1",
            error404: "La ruta que haz buscado ha resultado inexistente!"
        }
    }
    static msg2() {
        return {
            className: "RestApiv2",
            error404: "La ruta que haz buscado ha resultado inexistente!",
            errorNoClass: "la caregoria que haz puesto no se ha encontrado o es inexistente!",
            noName: "debes de poner el nombre de algun comando!"
        }
    }
}

module.exports = Messages