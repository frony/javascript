Local, 2 player, chess client
No AI,
  No networking
Don’t worry about performance, worry about readability
Don’t worry about the UI, another engineer pairing on this UI

Click on a piece, it will show all the legal moves it can make

// make a map of 8 x 8
  [
  [(1,1), (1,2), … (1,8)],
...
[(8,1), (8,2), … (8,8)],
]


// nodes
Let rook1 = {
  type: rook,
  Color: white

  Move: {
    Up: true,
    Down: true,
    Left: true,
    Right: true,
  }
  numberOfSquares: {
    Single: false,
  }

  Position: (8, 1);
}

Let rook2 = {
  type: rook,
  Color: white,

  Move: {
    Up: true,
    Down: true,
    Left: true,
    Right: true,
  }
  numberOfSquares: {
    Single: false,
  }

  Position: (8, 8);
}







Let knight1 = {
  type: rook,
  Color: white

  Move: {
    Up: true,
    Down: true,
    Left: true,
    Right: true,
  },

  Direction:
  maxMoves: 3,
  initMove: (8, 3)
endMove: (8, 2)
maxNumberOfSquares: {
  Single: false,
}

Position: (8, 2);
}

Move: (howManyLateral, howManyVertical) => {
  (7, 4)
},


  Input: [(1,1), (1,2), (2, 2)...]
Apply distance [1.111... , 1.3…, 2.22…]


K: int = 2
Top k elements closest to (0,0)

// figures out the distance to the origin for you
distance(pt1, pt2) => float

Out: [(1, 1), (1, 2)]
O(nlogn)


LowestPointTree

priorityQueue (key, value) -> order in ascending value of key
Insertion: logn
Removal: logn


