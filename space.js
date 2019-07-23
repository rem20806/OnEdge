function Space(canvasCtx){
    // Singleton
    if(Space.instance_){
        return Space.instance_;
    }
    this.canvasCtx = canvasCtx
    this.meteors = [];

    this.instance_ = this;
    this.init()
}

Space.prototype = {
    init: function(){
        this.time = 0;
        this.update()
    },
    update: function(frameCount){
        if(frameCount % 20 == 0) {
            this.spawnMeteor();
        }

        this.meteors.forEach(function(meteor){
            meteor.update();
        })
    },
    spawnMeteor: function(){
        this.meteors.push(new Meteor(this.canvasCtx))
    }
}