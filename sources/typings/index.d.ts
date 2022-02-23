declare module "cacao_nekoapi" {
    import { AxiosResponse } from "axios"

    
    /**
     * Version del npm
     */
    export const version: string

    /**
     * Clase para obtener mensajes de error u otros
     * ```js
     * msg1() // errores para la api rest 1
     * msg2() // errores para la api rest 2
     * ```
     */
    export class Messages {
        static msg1(): MessagesData // errores json de la api rest version 1
        static msg2(): MessagesData // errores json de la api rest version 2
    }

    /**
     * Clase para fetchear la api rest version 1
     */
    export class RestApiv1 extends Messages {
        /**
         * Nombre del gif que quieres obtener
         * @param name
         */
        static anime(name: string): Promise<Rest1.UrlResult> // recibe una promesa con el link de la imagen que solicitaste
        /**
         * Nombre del gif que quieres obtener
         * @param name
         */
        static reaction(name: string): Promise<Rest1.UrlResult> // recibe una promesa con el link de la imagen que solicitaste
        /**
         * Nombre del gif que quieres obtener
         * @param name
         */
        static anime(name: string): Promise<Rest1.UrlResult> // recibe una promesa con el link de la imagen que solicitaste
        /**
         * Nombre del gif que quieres obtener
         * @param name
         */
        static nsfw(name: string): Promise<Rest1.UrlResult> // recibe una promesa con el link de la imagen que solicitaste
        /**
         * Nombre del gif que quieres obtener
         * @param name
         */
        static rolplay_nsfw(name: string): Promise<Rest1.UrlResult> // recibe una promesa con el link de la imagen que solicitaste
    }

    /**
     * Clase para fetchear la api rest version 2
     */
    export class RestApiv2 extends Messages {
        /**
         * Funcion para obtener gifs de la api rest version 2
         * @param category nombre de la categoria a la que quieres acceder
         * @param name nombre del gif que quieres obtener
         * @param number id del gif en especifico
         */
        static async exec(category: categoryType, name: string, number?: number): Promise<Rest2.UrlResult>
    }

    export type MessagesDatav1 = {
        className: string; // nombre de la clase en la que se da el error
        error404: string; // mensaje del error
    }
    export type MessagesDatav2 = {
        className: string; // nombre de la clase en la que se da el error
        error404: string; // mensaje del error
        errorNoClass: string; // mensaje si no hay clase
        noName: string; // mensaje si no hay nombre
    }
    /**
     * Clase donde se encuentran todos los metodos de gifs sfw
     */
    export class SFW {
        /**
         * categoria anime de la api rest 1
         */
        static anime_1 = {
            foxgirl(): Promise<Rest1.UrlResult> {},
            kemonomimi(): Promise<Rest1.UrlResult> {},
            girl(): Promise<Rest1.UrlResult> {},
            maple(): Promise<Rest1.UrlResult> {},
            mbwallpaper(): Promise<Rest1.UrlResult> {},
            neko(): Promise<Rest1.UrlResult> {},
            waifu(): Promise<Rest1.UrlResult> {},
            wallpaper(): Promise<Rest1.UrlResult> {}
        }
        /**
         * categoria accion de la api rest 1
         */
        static action_1 = {
            camp(): Promise<Rest1.UrlResult> {}, cook(): Promise<Rest1.UrlResult> {},
            cuddle(): Promise<Rest1.UrlResult> {}, cure(): Promise<Rest1.UrlResult> {},
            draw(): Promise<Rest1.UrlResult> {}, drive(): Promise<Rest1.UrlResult> {},
            eat(): Promise<Rest1.UrlResult> {}, feed(): Promise<Rest1.UrlResult> {},
            hug(): Promise<Rest1.UrlResult> {}, kickbut(): Promise<Rest1.UrlResult> {},
            kill(): Promise<Rest1.UrlResult> {}, kiss(): Promise<Rest1.UrlResult> {},
            pat(): Promise<Rest1.UrlResult> {}, peek(): Promise<Rest1.UrlResult> {},
            playing(): Promise<Rest1.UrlResult> {}, poke(): Promise<Rest1.UrlResult> {},
            punch(): Promise<Rest1.UrlResult> {}, run(): Promise<Rest1.UrlResult> {},
            sape(): Promise<Rest1.UrlResult> {}, shot(): Promise<Rest1.UrlResult> {},
            shot(): Promise<Rest1.UrlResult> {}, sip(): Promise<Rest1.UrlResult> {},
            slap(): Promise<Rest1.UrlResult> {}, sleep(): Promise<Rest1.UrlResult> {},
            spank(): Promise<Rest1.UrlResult> {}, stare(): Promise<Rest1.UrlResult> {},
            tickle(): Promise<Rest1.UrlResult> {}, travel(): Promise<Rest1.UrlResult> {},
            work() : Promise<Rest1.UrlResult> {}
        }
        /**
         * categoria reaccopm de la api rest 1
         */
        static reaction_1 = {
            angry(): Promise<Rest1.UrlResult> {}, baka(): Promise<Rest1.UrlResult> {},
            blush(): Promise<Rest1.UrlResult> {}, bored(): Promise<Rest1.UrlResult> {},
            cry(): Promise<Rest1.UrlResult> {}, dance(): Promise<Rest1.UrlResult> {},
            laught(): Promise<Rest1.UrlResult> {}, like(): Promise<Rest1.UrlResult> {},
            nervous(): Promise<Rest1.UrlResult> {}, pout(): Promise<Rest1.UrlResult> {},
            sad(): Promise<Rest1.UrlResult> {}, screen(): Promise<Rest1.UrlResult> {},
            smug(): Promise<Rest1.UrlResult> {}, teehee(): Promise<Rest1.UrlResult> {},
            think(): Promise<Rest1.UrlResult> {}, vomit(): Promise<Rest1.UrlResult> {},
            wink(): Promise<Rest1.UrlResult> {}, yandere(): Promise<Rest1.UrlResult> {}
        }
        /**
         * categoria animals de la api rest 2
         */
        static animals = {
            /**
             * Metodo cat para imagenes de gatos
             * @param id id de la imagen
             */
            cat(id?: number): Promise<animalsSeach.UrlResult> {},
            /**
             * Metodo bear para imagenes de osos
             * @param id id de la imagen
             */
            bear(id?: number): Promise<animalsSeach.UrlResult> {}
        }
        /**
         * categorira accion de la api rest 2
         */
        static action_2 = {
            /**
             * Metodo pat para gifs de caricias
             * @param id id del gif
             */
            pat(id?: number): Promise<rolplaySeach.UrlResult> {},
            /**
             * Metodo lick para gifs de lamer
             * @param id id del gif
             */
            lick(id?: number): Promise<rolplaySeach.UrlResult> {},
            /**
             * Metodo read para gifs de leer
             * @param id id del gif
             */
            read(id?: number): Promise<rolplaySeach.UrlResult> {},
            /**
             * Metodo write para gifs de escribir
             * @param id id del gif
             */
            write(id?: number): Promise<rolplaySeach.UrlResult> {},
        }
        /**
         * categorira reaccion de la api rest 2
         */
        static reaction_2 = {
            /**
             * Metodo sing para gifs de cantar
             * @param id id del gif
             */
            sing(id?: number): Promise<rolplaySeach.UrlResult> {}
        }
        /**
         * categorira anime de la api rest 2
         */
        static anime_2 = {
            /**
             * Metodo girl para imagenes de chicas de anime
             * @param id id del gif 
             */
            girl(id?: number): Promise<animeSeach.UrlResult> {}
        }
    }
    /**
     * Clase donde se encuentran todos los metodos de gifs nsfw
     */
    export class NSFW {
        static nsfw = {
            ahegao(): Promise<Rest1.UrlResult> {},
            boobs(): Promise<Rest1.UrlResult> {},
            hentai(): Promise<Rest1.UrlResult> {},
            lwmaple(): Promise<Rest1.UrlResult> {},
            lwneko(): Promise<Rest1.UrlResult> {},
            pussy(): Promise<Rest1.UrlResult> {},
            trap(): Promise<Rest1.UrlResult> {},
            uniform(): Promise<Rest1.UrlResult> {},
            yuri(): Promise<Rest1.UrlResult> {}
        }
        static rolplayNsfw = {
            anal(): Promise<Rest1.UrlResult> {},
            boobjob(): Promise<Rest1.UrlResult> {},
            cum(): Promise<Rest1.UrlResult> {},
            fap(): Promise<Rest1.UrlResult> {},
            feetjob(): Promise<Rest1.UrlResult> {},
            fuck(): Promise<Rest1.UrlResult> {},
            happyend(): Promise<Rest1.UrlResult> {},
            kuni(): Promise<Rest1.UrlResult> {},
            spank(): Promise<Rest1.UrlResult> {},
            suck(): Promise<Rest1.UrlResult> {},
        }
    }

    /**
     * Clase para soltar un error de fetcheo
     */
    export class nekoAPIError {
        /**
         * Clase para mostrar un error de cualquiera de las api
         * @param className nombre de la clase donde se dara el error
         * @param error mensaje de error
         * @param response respuesta del servidor
         */
        constructor(className: string, error: string, response: AxiosResponse)
    }

    /**
     * Clase para soltar un error del paquete
     */
    export class nekoError {
        /**
         * Clase para mostrar un error en consola
         * @param className nombre de la clase donde se dara el error
         * @param error mensaje de error
         */
        constructor(className: string, error: string)
    }

    declare namespace Rest1 {
        export interface UrlResult {
            url: string;
        }
    }
    
    declare namespace Rest2 {
        export interface UrlResult {
            url: string;
            id: string;
            anime?: string;
            raza?: string;
        }
    }

    declare namespace animalsSeach {
        export interface UrlResult {
            url: string;
            raza: string;
            id: string
        }
    }

    declare namespace rolplaySeach {
        export interface UrlResult {
            url: string;
            anime: string;
            id: string;
        }
    }

    declare namespace animeSeach {
        export interface UrlResult {
            url: string;
            name?: string;
            id: string;
        }
    }
    
    declare type categoryType = "animals"|"anime"|"action"|"reaction"
}