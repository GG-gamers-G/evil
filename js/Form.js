class Form {
  constructor() {
    
    this.input = createInput("").attribute("placeHolder","Enter Your Bank Account Details (Name)")
    this.playButton = createButton("Press for pain")
    this.titleImg = createImg("assets/title.png")
    this.greeting = createElement("H2")
  }
setElementsPosition(){
  this.titleImg.position(120, 100);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);

}
hide(){
  this.greeting.hide()
  this.playbutton.hide()
  this.input.hide()
}
handleMP(){
  this.playButton.mousePressed(() => {
    this.input.hide();
    this.playButton.hide();
    var message = `
    I am sad because of ${this.input.value()}
    </br>wait for another potato eater to join...`;
    this.greeting.html(message);
    player.name = this.input.value();
    player.index = 1;
    //player.addPlayer();
  });

}
display(){
this.setElementsPosition()
this.handleMP()
}
}
