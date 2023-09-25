function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}

console.log(makeLine(5));

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += (makeLine(size) + '\n');
    }
    return square.slice(0, -1);
}

console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
}

console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i + 1) + '\n');
    }
    return stairs.slice(0, -1);
}

console.log(makeDownwardStairs(5));


function makeSpaceLine(numSpace, numChars) {
    let spaceLine = '___';
    for (let i = 0; i < (numSpace, numChars); i++); {
        spaceLine += (makeLine(numSpace, numChars) + '\n');
    }
    return spaceLine.slice((-1, 0),(12));
}

console.log(makeSpaceLine(3, 5));


function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }

console.log(makeIsoscelesTriangle(5));

function makeDiamond(height){
  let diamond = '';
  for (let i = 0; i <= height; i++); {
      diamond += (makeDiamond(height - i - 1, 2*i + 1) + '\n');
  }
  return diamond.slice(0, -1);
  }
console.log(makeDiamond(5));




/*function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += 'A';
    }
    return line;
}

console.log(makeLine(5));

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += (makeLine(size) + '\n');
    }
    return square.slice(0, -1);
}

console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
}

console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i + 1) + '\n');
    }
    return stairs.slice(0, -1);
}

console.log(makeDownwardStairs(5));*/