var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle)
        sawBladeHitZone.x = 600;
        sawBladeHitZone.y = 300;
        game.addGameItem(sawBladeHitZone);
        
        var obstacleImage = draw.bitmap("img/sawblade.png");
        sawBladeHitZone.addChild(obstacleImage);

        function createSawBlade(x, y) {

        }

        // step 9a below here
        var enemy = game.createGameItem("enemy", 25);
        var redSquare = draw.rect(50, 50, "blue");
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);

        enemy.x = 400;
        enemy.y = groundY - 50;

        game.addGameItem(enemy);

        enemy.velocityX = -2;
        enemy.rotationalVelocity = 12;

        enemy.onPlayerCollision = function () {
            game.changeIntegrity(-10);
        };
        
        enemy.onProjectileCollision = function () {
            game.increaseScore(100);
            enemy.fadeOut();
        };

        function createEnemy(x, y) {
            enemy.velocityX = -2;
            enemy.rotationalVelocity = 12;

            enemy.onPlayerCollision = function () {
            game.changeIntegrity(-10);
            };
        
            enemy.onProjectileCollision = function () {
            game.increaseScore(100);
            enemy.fadeOut();
            };
        };

        createEnemy(400, groundY - 10);
        createEnemy(800, groundY - 100);
        createEnemy(1200, groundY - 50);

        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
