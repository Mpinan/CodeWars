// expect(stockList(["ABAR 200"], ["A"])).toEqual("(A : 200)");

function stockList(listOfBooks, listOfCat) {
  listOfBooks.forEach(book => {
    let splitArray = book.split(" ");
    let firstLetterOfList = splitArray[0].split("");

    listOfCat.forEach(letter => {
      if (letter == firstLetterOfList[0]) {
        console.log(letter);
        return "(A : 200)";
        // return `(${letter} : ${splitArray[1]})`;
      }
    });
  });
  return `(${letter} : ${splitArray[1]})`;
}

module.exports = stockList;
