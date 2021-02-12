class Form{
    constructor(){

    }
    display(){
        var title=createElement("h2")
        title.position(150,0)
        title.html("car racing")
        var input=createInput("name")
        input.position(150,150)
        var button=createButton("play")
        button.position(150,180)
        var greeting=createElement("h4")
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("welcome ",+name)
            greeting.position(150,150)
        })
    }

}