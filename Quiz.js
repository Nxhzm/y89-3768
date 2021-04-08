class Quiz{
    constructor(){}

    getstate(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val();
    })
    }

    Update(gameState){
        database.ref('/').update({
            gameState: gameState
        });
    }

    async start(){
    if(gameState === 0){
       contestant = new Contestant();
       var contestantCountRef = await database.ref('ConstestantCount').once("value");
       if(contestantCountRef.exists()){
          constestantCount = contestantCountRef.val();
          contestant.getCount();
       }
       question = new Question();
       question.display();
    }
    }
}