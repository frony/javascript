'use strict';

/*

Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

1   2   4
 \ /   / \
  3   5   8
   \ / \   \
    6   7   10

Write a function that takes this data as input and returns two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.

Sample input/output (pseudodata):

parentChildPairs = [
    (1, 3), (2, 3), (3, 6), (5, 6),
    (5, 7), (4, 5), (4, 8), (8, 10)
]

findNodesWithZeroAndOneParents(parentChildPairs) => [
  [1, 2, 4],    // Individuals with zero parents
  [5, 7, 8, 10] // Individuals with exactly one parent
]

*/

let parentChildPairs = [
  [1, 3], [2, 3], [3, 6], [5, 6],
  [5, 7], [4, 5], [4, 8], [8, 10]
];




function findNodesWithZeroAndOneParents(parentChildPairs) {
  console.log(parentChildPairs);
  let parents = [];
  let children = [];
  let noParents = [];
  let oneParent = [];
  const length = parentChildPairs.length;

  for (let i = 0; i < length; i++) {
    console.log(parentChildPairs[i]);
    parents.push(parentChildPairs[i][0]);
    children.push(parentChildPairs[i][1]);
  }

  const uniqueParents = [...new Set(parents)];
  console.log(uniqueParents);

  const uniqueChildren = new Set(children);
  console.log(uniqueChildren);

  // children with no parents
  // they are parents that don't show up
  // in children's array, they are nobody's children
  for (let x of uniqueParents) {
    console.log(x);
    console.log(uniqueChildren.has(x));
    if (!uniqueChildren.has(x)) {
      noParents.push(x);
    }
  }

  console.log(noParents);

  // Individuals with exactly one parent
  var counts = {};
  children.forEach((x) => {
    counts[x] = (counts[x] || 0)+1;
    console.log(counts);
  });

/*  const temp = Object.entries(counts).filter(x => x[1] === 1);
  console.log(temp);
  temp.forEach((x) => {
    console.log(x);
    oneParent.push(x[0]);
  });*/

  console.log('test');
  const test = Object.entries(counts).filter(x => x[1] === 1).forEach((x) => {
    console.log(x);
    oneParent.push(x[0]);
  });
  console.log(test);

  return {
    noParents,
    oneParent,
  };
}


/*
function findNodesWithZeroAndOneParents(parentChildPairs) {
  let map = new Map(parentChildPairs);
  console.log(map);

  let keys = map.keys();
  console.log(keys);

  let values = map.values();
  console.log(values);


  for (let i = 0, len = keys.length; i < len; i++) {
    // if (values.has(key[i]))
    console.log(key[i]);
  }

  // for (let [key, value] of map.entries()) {
  //   console.log(value);
  //   let hasParent = map.has(value);
  //   console.log(hasParent);
  //   // console.log(`hasParent [value]: ${value}`);
  // }
}

*/


const result = findNodesWithZeroAndOneParents(parentChildPairs);
console.log(result);