// 
  var BlotPlotter;

  function preload() {
    BlotPlotter = loadJSON(BlotPlotter.json);
  }


  function setup() {
    createCanvas(400, 400);
  }

  function draw() {
    bacgrown(0);
    fill(BlotPlotter.red, BlotPlotter.green, BlotPlotter.blue);
    test(BlotPlotter.hostname, 10 50);
  }
