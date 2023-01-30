console.log("FUZZ SEARCH FILE");

function fuzzSearch(filename, pattern) {
  const patternsData = [...pattern];
  const filenameData = [...filename];

  const indexes = [];
  let count = 0;

  patternsData.map((letter) => {
    const indexFound = filenameData.indexOf(letter, count);

    count = indexFound + 1;

    indexes.push(indexFound);
  });

  return !indexes.includes(-1);
}

const filename = "autocomplete.component.ts";

console.log(fuzzSearch(filename, "t.t") === true);
console.log(fuzzSearch(filename, "auto.ts") === true);
console.log(fuzzSearch(filename, "atuo.ts") === false);
console.log(fuzzSearch(filename, "tttt") === true);
console.log(fuzzSearch(filename, "ttttt") === false);
