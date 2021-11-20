whenSetup(function () {
       makeAnonymousDanceSprite(".square", {x: 200, y: 200});
     });
     
     atTimestamp(4, ".square", function () {
       changeMoveEachLR("FROG", MOVES.Floss, -1);
     });
     