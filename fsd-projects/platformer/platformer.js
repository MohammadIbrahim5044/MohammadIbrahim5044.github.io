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
    createPlatform(0, 300, 100, 5, 'red');
    createPlatform(100, 180, 5, 10, 'purple');
    createPlatform(200, 250, 3, 50, 'blue');
    createPlatform(350, 320, 2, 50, 'orange');
    createPlatform(420, 450, 1, 100, 'green'); 
    createPlatform(630, 500, 2, 100, 'blue');
    createPlatform(750, 450, 2, 100, 'red');
    createPlatform(870, 400, 2, 100, 'orange');
    createPlatform(980, 375, 4, 100, 'purple');
    createPlatform(1066, 330, 2, 50, 'green');
    createPlatform(1250, 289, 1, 100, 'dark green');
    createPlatform(1350, 240, 100, 10, 'blue');





    // TODO 3 - Create Collectables
    createCollectable("moon", 300, 100);
    createCollectable('moon', 550, 330);
    createCollectable('moon', 1120, 150);
    createCollectable('moon', 1330, 100, 1, 1);


    
    // TODO 4 - Create Cannons
    createCannon('right', 800, 50);
    createCannon('bottom', 230, 1000);
    createCannon('bottom', 520, 1000);
    createCannon('bottom', 755, 1000);
    createCannon('bottom', 1125, 1000);
    createCannon('right', 450, 4500);
    createCannon('left', 255, 4500
    );



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
