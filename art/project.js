/*
Abstract Blot Art!
Devansh Goyal
Abstract Art
*/

const width = 125;
const height = 125;

setDocDimensions(width, height);

const finalLines = [];

// Function to draw the top ellipse of the cylinder
function drawEllipse(finalLines, x, y, rx, ry, segments = 30) {
  const ellipse = [];
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * 2 * Math.PI;
    const px = x + rx * Math.cos(theta);
    const py = y + ry * Math.sin(theta);
    ellipse.push([px, py]);
  }
  ellipse.push(ellipse[0]); // Close the ellipse
  finalLines.push(ellipse);
}

// Function to draw the side lines of the cylinder
function drawCylinderSides(finalLines, x, y, rx, ry, height) {
  const top = [
    [x - rx, y],
    [x - rx, y + height]
  ];
  const bottom = [
    [x + rx, y],
    [x + rx, y + height]
  ];
  finalLines.push(top, bottom);
}

// Function to draw a car
function drawCar(finalLines, x, y, width, height) {
  const carBody = [
    [x - width / 2, y],
    [x + width / 2, y],
    [x + width / 2, y - height],
    [x - width / 2, y - height],
    [x - width / 2, y]
  ];
  const leftWheel = [
    [x - width / 3, y],
    [x - width / 3, y + 5]
  ];
  const rightWheel = [
    [x + width / 3, y],
    [x + width / 3, y + 5]
  ];
  finalLines.push(carBody, leftWheel, rightWheel);
}

// Function to draw a human figure
function drawHuman(finalLines, x, y, size) {
  drawEllipse(finalLines, x, y, size / 4, size / 4); // Head
  finalLines.push(
    [[x, y + size / 4], [x, y + size]], // Body
    [[x, y + size / 2], [x - size / 2, y + size / 2]], // Left Arm
    [[x, y + size / 2], [x + size / 2, y + size / 2]], // Right Arm
    [[x, y + size], [x - size / 4, y + size * 1.5]], // Left Leg
    [[x, y + size], [x + size / 4, y + size * 1.5]] // Right Leg
  );
}

// Function to draw random abstract shapes
function drawRandomShapes(finalLines, count, maxX, maxY) {
  for (let i = 0; i < count; i++) {
    const startX = Math.random() * maxX;
    const startY = Math.random() * maxY;
    const endX = Math.random() * maxX;
    const endY = Math.random() * maxY;
    finalLines.push([[startX, startY], [endX, endY]]);
  }
}

// Function to draw mountains
function drawMountains(finalLines, count, maxX, maxHeight) {
  for (let i = 0; i < count; i++) {
    const baseX = Math.random() * maxX;
    const baseY = Math.random() * maxHeight + maxHeight;
    const peakX = baseX + Math.random() * 40 - 20; // Randomized peak offset
    const peakY = baseY - Math.random() * 40 - 20; // Randomized peak height
    const baseWidth = Math.random() * 30 + 10; // Randomized width
    const mountain = [
      [baseX, baseY],
      [peakX, peakY],
      [baseX + baseWidth, baseY],
      [baseX, baseY]
    ];
    finalLines.push(mountain);
  }
}

// Abstract Scene Composition
const cylinderPositions = [
  [60, 40],
  [30, 60],
  [90, 20]
];
const carPositions = [
  [60, 10],
  [30, 10],
  [90, 10],
  [15, 70],
  [105, 70]
];
const humanPositions = [
  [10, 80],
  [110, 80],
  [55, 90]
];

// Draw cylinders
cylinderPositions.forEach(([x, y]) => {
  drawEllipse(finalLines, x, y, 20, 10); // Top
  drawCylinderSides(finalLines, x, y, 20, 10, 30); // Sides
  drawEllipse(finalLines, x, y + 30, 20, 10); // Bottom
});

// Draw cars
carPositions.forEach(([x, y]) => drawCar(finalLines, x, y, 20, 10));

// Draw humans
humanPositions.forEach(([x, y]) => drawHuman(finalLines, x, y, 15));

// Add mountains
drawMountains(finalLines, 5, width, 50);

// Add random abstract shapes
drawRandomShapes(finalLines, 15, width, height);

// Add water droplets for extra detail
drawRandomShapes(finalLines, 10, width, height);

// Draw all lines
drawLines(finalLines);
