class Question{

    constructor(){
    this.title = createElement('h1')
    this.input = createInput("Enter Your Name Here....");
                   
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
                  
                 
                
            }

    Hide(){}

    Display(){
    this.title.html("My Quiz Game");
    this.title.position(713,0);

    this.question.html("Question - What phone is better - Samsung or iPhone?");
    this.question.Position(550,150);
    this.option1.html("1: Samsung ");
    this.option1.position(550, 100);
    this.option2.html("2:Iphone");
    this.option2.position(550, 90)

    this.input.position(150, 230);
    }
}