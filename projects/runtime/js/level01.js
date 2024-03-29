var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = [
            {
                name: "Robot Romp",
                number: 1, 
                speed: -3,
                gameItems: [
                    { "type": "sawblade", "x": 400, "y": groundY },
                    { "type": "sawblade", "x": 600, "y": groundY },
                    { "type": "sawblade", "x": 900, "y": groundY },
                ],
            },
            {
                name: "Robot Rampage",
                number: 2,
                speed: -3,
                gameItems: [
                    {type: "enemy", x: 400, y: groundY - 50},
                    {type: "enemy", x: 600, y: groundY - 100},
                    {type: "reward", x: 900, y: groundY - 200},
                    {type: "reward", x: 1700, y: groundY - 60},
                ],
            },
            {
                name: "Level Awesome",
                number: 3,
                speed: -2, 
                gameItems: [
                    {type: "sawblade", x: 400, y: groundY},
                    {type: "enemy", x: 600, y: groundY},
                    {type: "enemy", x: 900, y: groundY},
                ],
            },
        ];
        
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle)
        
        sawBladeHitZone.x = 600;
        sawBladeHitZone.y = 400;
        game.addGameItem(sawBladeHitZone);
        
        var obstacleImage = draw.bitmap("img/sawblade.png");
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        sawBladeHitZone.addChild(obstacleImage);

        function createSawBlade(x, y) {

        }

       function createWeen(x, y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle)
        
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        game.addGameItem(weenBladeHitZone);
        
        var obstacleImage = draw.bitmap("img/FW110-Pickles.jpeg");
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        weenBladeHitZone.addChild(obstacleImage);
       };

       function createEnemy(x, y) {
        var enemy = game.createGameItem("enemy", 50);
        var redSquare = draw.bitmap("img/ProductsPg_Square_SML.png");
        redSquare.x = -50;
        redSquare.y = -50;
        enemy.addchild(redSquare);

        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = -3

        enemy.onPlayerCollision = function() {
            game.changeIntegrity(-20);
        };
        enemy.onProjectileCollision = function() {
            game.increaseScore(100);
            enemy.shrink();
        };
       }

       function createReward(x, y) {
        var enemy = game.createGameItem("enemy", 50);
        var redSquare = draw.bitmap("img/ChickFilASandwich.jpg");
        redSquare.x = -50;
        redSquare.y = -50;
        enemy.addChild(redSquare);

        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = -2;

        enemy.onPlayerCollision = function() {
            game.changeIntegrity(20);
        };
        enemy.onProjectileCollision = function() {
            game.increaseScore(100);
            enemy.shrink();
        };
       };

       function createMarker(x, y) {
        var enemy = game.createGameItem("enemy", 50);
        var redSquare = draw.bitmap("img/PurpleMarker (1).jpg");
        redSquare.x = -50;
        redSquare.y = -50;
        enemy.addChild(redSquare);

        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = -3;

        enemy.onPlayerCollision = function () {
            game.startLevel();
        };
        enemy.onProjectileCollision = function() {
            game.startLevel();
            enemy.shrink();
        };
       };

       createMarker(2750, 350);

       for (var i = 0; i < levelData.length; i++) {
        var level = levelData[i];
        var gameItems = level.gameItems;
        for (var j = 0; j < gameItems.length; j++) {
            var item = gameItems[j];
            var x = item.x;
            var y = item.y;
            var type = item.type;
            if (type === "sawblade") {
                createSawBlade(x, y);
            } else if (type === "ween") {
                createWeen(x, y);
            } else if (type === "enemy") {
                createEnemy(x, y);
            } else if (type === "reward") {
                createReward(x, y);
            } else if (type === "marker") {
                createMarker(x, y)
            ;}
        }
       }

        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
