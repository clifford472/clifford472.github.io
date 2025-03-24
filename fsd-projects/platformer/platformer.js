$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200,610,200,20);
    createPlatform(550,550,200,20);
    createPlatform(850,500,200,20);
    createPlatform(1000,400,200,20);
    createPlatform(910,280,200,20);
    createPlatform(700,300,200,20);
    createPlatform(400,250,200,20);



    // TODO 3 - Create Collectables
    createCollectable("steve", 300, 600);
    createCollectable("diamond", 990, 450);
    createCollectable("max", 800, 250);
    createCollectable("grace",500 ,200 );
    createCollectable("diamond", 200, 550);
    createCollectable("kennedi", 1100, 200);



    
    // TODO 4 - Create Cannons
    createCannon("bottom", 440, 1000);
    createCannon("top", 750, 2000);
    createCannon("left", 300, 3000);
    createCannon("right", 600, 3000);
    createCannon("bottom", 1000, 2500);
   


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
