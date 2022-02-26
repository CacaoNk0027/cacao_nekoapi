let RestApi1 = require('../fetch/apiRest').RestApiv1

class NSFW {
    static nsfw = {
        ahegao() { return RestApi1.nsfw(this.ahegao.name) },
        boobs() { return RestApi1.nsfw(this.boobs.name) },
        hentai() { return RestApi1.nsfw(this.hentai.name) },
        lwmaple() { return RestApi1.nsfw(this.lwmaple.name) },
        lwneko() { return RestApi1.nsfw(this.lwneko.name) },
        pussy() { return RestApi1.nsfw(this.pussy.name) },
        trap() { return RestApi1.nsfw(this.trap.name) },
        uniform() { return RestApi1.nsfw(this.uniform.name) },
        yuri() { return RestApi1.nsfw(this.yuri.name) }
    }
    static rolplayNsfw = {
        anal() { return RestApi1.rolplay_nsfw(this.anal.name) },
        boobjob() { return RestApi1.rolplay_nsfw(this.boobjob.name) },
        cum() { return RestApi1.rolplay_nsfw(this.cum.name) },
        fap() { return RestApi1.rolplay_nsfw(this.fap.name) },
        feetjob() { return RestApi1.rolplay_nsfw(this.feetjob.name) },
        fuck() { return RestApi1.rolplay_nsfw(this.fuck.name) },
        happyend() { return RestApi1.rolplay_nsfw(this.happyend.name) },
        kuni() { return RestApi1.rolplay_nsfw(this.kuni.name) },
        spank() { return RestApi1.rolplay_nsfw(this.spank.name) },
        suck() { return RestApi1.rolplay_nsfw(this.suck.name) }
    }
}

module.exports = NSFW