const nameList = [
    'Aaron',
    'Andy',
    'Batman',
    'Betsy',
    'Boba',
    'Bonnie',
    'Clarence',
    'Daisy',
    'Elektra',
    'Flash'
];
const phoneBook = require('./phoneBook.json')

// array
const binarySearchArr = (array, searchValue) => {
  let middleValue = Math.floor((array.length) / 2);
  if (array[middleValue] == searchValue) {
    return true;
  } else if (middleValue == 0) {
    return false;
  } else if (array[middleValue] < searchValue) {
    let newArray = array.slice(middleValue)
    return binarySearchArr(newArray, searchValue);
  } else {
    let newArray = array.slice(0, middleValue)
    return binarySearchArr(newArray, searchValue);
  }
}
console.log(binarySearchArr(nameList, 'Flash'));

// search by id recursion
const binarySearchIdRecur = (arrObj, searchValue) => {
  let middleValue = Math.floor((arrObj.length) / 2);
  if (arrObj[middleValue].id == searchValue) {
    return arrObj[middleValue];
  } else if (middleValue == 0) {
    return false;
  } else if (arrObj[middleValue].id < searchValue) {
    let newArray = arrObj.slice(middleValue)
    return binarySearchIdRecur(newArray, searchValue);
  } else {
    let newArray = arrObj.slice(0, middleValue)
    return binarySearchIdRecur(newArray, searchValue);
  }
}
console.log(binarySearchIdRecur(phoneBook, 503));

// search by id iteration
const binarySearchIdIter = (arrObj, searchValue) => {
  firstIndex = 0
  lastIndex = arrObj.length - 1
  while (firstIndex <= lastIndex) {
    
    let middleValue = firstIndex + Math.floor((lastIndex - firstIndex) / 2);
    if (arrObj[middleValue].id == searchValue) {
      return arrObj[middleValue];
    } else if (arrObj[middleValue].id < searchValue) {
      firstIndex = middleValue + 1;
    } else {
      lastIndex = middleValue - 1;
    }
  }
  return false;
}
console.log(binarySearchIdIter(phoneBook, 503));

// search by attr recursion
const sortArr = (arrObj, attr) => {
  arrObj.sort((a, b) => {
    if (a[attr] < b[attr]) {
      return -1;
    }
    if (a[attr] > b[attr]) {
      return 1;
    }
    return 0
  })
  return arrObj;
}

const binarySearch = (arrObj, attr, searchValue) => {
  let middleValue = Math.floor((arrObj.length) / 2);
  if (arrObj[middleValue][attr] == searchValue) {
    return arrObj[middleValue];
  } else if (middleValue == 0) {
    return false;
  } else if (arrObj[middleValue][attr] < searchValue) {
    let newArray = arrObj.slice(middleValue)
    return binarySearch(newArray, attr, searchValue);
  } else {
    let newArray = arrObj.slice(0, middleValue)
    return binarySearch(newArray, attr, searchValue);
  }
}

const binarySearchByAttr = (arrObj, attr, searchValue) => {
  if (attr != 'id') {
    arrObj = sortArr(arrObj, attr);
  }
  return binarySearch(arrObj, attr, searchValue);
}

console.log(binarySearchByAttr(phoneBook, 'name', 'Isa'));

