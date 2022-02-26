const { nekoError } = require('../utils/nekoError')

let RestApi1 = require('../fetch/apiRest.js').RestApiv1
let RestApi2 = require('../fetch/apiRest').RestApiv2

let animalsData = { className: 'SFW.animals', errorMsg: "la id debe de ser un numero no otra cosa" },
    actionData = { className: 'SFW.action_2', errorMsg: "la id debe de ser un numero no otra cosa" },
    reactionData = { className: 'SFW.reaction_2', errorMsg: "la id debe de ser un numero no otra cosa" },
    animeData = { className: 'SFW.anime_2', errorMsg: "la id debe de ser un numero no otra cosa" }

class SFW {
    static anime_1 = {
        foxgirl() { return RestApi1.anime(this.foxgirl.name) },
        kemonomimi() { return RestApi1.anime(this.kemonomimi.name) },
        girl() { return RestApi1.anime(this.girl.name) },
        maple() { return RestApi1.anime(this.maple.name) },
        mbwallpaper() { return RestApi1.anime(this.mbwallpaper.name) },
        neko() { return RestApi1.anime(this.neko.name) },
        waifu() { return RestApi1.anime(this.waifu.name) },
        wallpaper() { return RestApi1.anime(this.wallpaper.name) },
    }
    static action_1 = {
        camp() { return RestApi1.action(this.camp.name) }, cook() { return RestApi1.action(this.cook.name) },
        cuddle() { return RestApi1.action(this.cuddle.name) }, cure() { return RestApi1.action(this.cure.name) },
        draw() { return RestApi1.action(this.draw.name) }, drive() { return RestApi1.action(this.drive.name) },
        eat() { return RestApi1.action(this.eat.name) }, feed() { return RestApi1.action(this.feed.name) },
        hug() { return RestApi1.action(this.hug.name) }, kickbut() { return RestApi1.action(this.kickbut.name) },
        kill() { return RestApi1.action(this.kill.name) }, kiss() { return RestApi1.action(this.kiss.name) },
        pat() { return RestApi1.action(this.pat.name) }, peek() { return RestApi1.action(this.peek.name) },
        playing() { return RestApi1.action(this.playing.name) }, poke() { return RestApi1.action(this.poke.name) },
        punch() { return RestApi1.action(this.punch.name) }, run() { return RestApi1.action(this.run.name) },
        sape() { return RestApi1.action(this.sape.name) }, shot() { return RestApi1.action(this.shot.name) },
        shot() { return RestApi1.action(this.shot.name) }, sip() { return RestApi1.action(this.sip.name) },
        slap() { return RestApi1.action(this.slap.name) }, sleep() { return RestApi1.action(this.sleep.name) },
        spank() { return RestApi1.action(this.spank.name) }, stare() { return RestApi1.action(this.stare.name) },
        tickle() { return RestApi1.action(this.tickle.name) }, travel() { return RestApi1.action(this.travel.name) },
        work() { return RestApi1.action(this.work.name) }
    }
    static reaction_1 = {
        angry() { return RestApi1.reaction(this.angry.name) }, baka() { return RestApi1.reaction(this.baka.name) },
        blush() { return RestApi1.reaction(this.blush.name) }, bored() { return RestApi1.reaction(this.bored.name) },
        cry() { return RestApi1.reaction(this.cry.name) }, dance() { return RestApi1.reaction(this.dance.name) },
        laught() { return RestApi1.reaction(this.laught.name) }, like() { return RestApi1.reaction(this.like.name) },
        nervous() { return RestApi1.reaction(this.nervous.name) }, pout() { return RestApi1.reaction(this.pout.name) },
        sad() { return RestApi1.reaction(this.sad.name) }, screen() { return RestApi1.reaction(this.screen.name) },
        smug() { return RestApi1.reaction(this.smug.name) }, teehee() { return RestApi1.reaction(this.teehee.name) },
        think() { return RestApi1.reaction(this.think.name) }, vomit() { return RestApi1.reaction(this.vomit.name) },
        wink() { return RestApi1.reaction(this.wink.name) }, yandere() { return RestApi1.reaction(this.yandere.name) }
    }
    static animals = {
        /**
         * @param {number} id 
         */
        cat(id) {
            if(id) {
                if(typeof(id) !== "number") throw new nekoError(animalsData.className, animalsData.errorMsg)
                return RestApi2.exec('animals', "cat", id)
            } else {
                return RestApi2.exec('animals', "cat")
            }
        },
        /**
         * @param {number} id  
         */
        bear(id) {
            if(id) {
                if(typeof(id) !== "number") throw new nekoError(animalsData.className, animalsData.errorMsg)
                return RestApi2.exec('animals', "bear", id)
            } else {
                return RestApi2.exec('animals', "bear")
            }
        }
    }
    /**
     * categorira accion de la api rest 2
     */
    static action_2 = {
        /**
         * @param {number} id  
         */
        pat(id) {
            if(id) {
                if(typeof(id) !== "number") throw new nekoError(actionData.className, actionData.errorMsg)
                return RestApi2.exec('action', "pat", id)
            } else {
                return RestApi2.exec('action', "pat")
            }
        },
        /**
         * @param {number} id  
         */
        lick(id) {
            if(id) {
                if(typeof(id) !== "number") throw new nekoError(actionData.className, actionData.errorMsg)
                return RestApi2.exec('action', "lick", id)
            } else {
                return RestApi2.exec('action', "lick")
            }
        },
        /**
         * @param {number} id  
         */
        read(id) {
            if(id) {
                if(typeof(id) !== "number") throw new nekoError(actionData.className, actionData.errorMsg)
                return RestApi2.exec('action', "read", id)
            } else {
                return RestApi2.exec('action', "read")
            }
        },
        /**
         * @param {number} id  
         */
        write(id) {
            if(id) {
                if(typeof(id) !== "number") throw new nekoError(actionData.className, actionData.errorMsg)
                return RestApi2.exec('action', "write", id)
            } else {
                return RestApi2.exec('action', "write")
            }
        }
    }
    /**
     * categorira reaccion de la api rest 2
     */
    static reaction_2 = {
        /**
         * @param {number} id  
         */
        sing(id) {
            if(id) {
                if(typeof(id) !== "number") throw new nekoError(reactionData.className, reactionData.errorMsg)
                return RestApi2.exec('reaction', "sing", id)
            } else {
                return RestApi2.exec('reaction', "sing")
            }
        }
    }
    /**
     * categorira anime de la api rest 2
     */
    static anime_2 = {
        /**
         * @param {number} id  
         */
        girl(id) {
            if(id) {
                if(typeof(id) !== "number") throw new nekoError(animeData.className, animeData.errorMsg)
                return RestApi2.exec('anime', "girl", id)
            } else {
                return RestApi2.exec('anime', "girl")
            }
        }
    }
}

module.exports = SFW