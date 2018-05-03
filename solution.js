// array
const binarySearch = (array, searchValue) => {
  let middleValue = Math.floor((array.length) / 2);
  if (array[middleValue] == searchValue) {
    return true;
  } else if (middleValue == 0) {
    return false;
  } else if (array[middleValue] < searchValue) {
    let newArray = array.slice(middleValue)
    return binarySearch(newArray, searchValue);
  } else {
    let newArray = array.slice(0, middleValue)
    return binarySearch(newArray, searchValue);
  }
}

const nameList = [
    'Aaron',
    'Andy',
    'Batman',
    'Boba',
    'Bonnie',
    'Betsy',
    'Clarence',
    'Daisy',
    'Elektra',
    'Flash'
];

console.log(binarySearch(nameList, 'Flash'));

const phoneBook = require('./phoneBook.json')

// search by id
const binarySearch = (arrObj, searchValue) => {
  let middleValue = Math.floor((arrObj.length) / 2);
  if (arrObj[middleValue].id == searchValue) {
    return arrObj[middleValue];
  } else if (middleValue == 0) {
    return false;
  } else if (arrObj[middleValue].id < searchValue) {
    let newArray = arrObj.slice(middleValue)
    return binarySearch(newArray, searchValue);
  } else {
    let newArray = arrObj.slice(0, middleValue)
    return binarySearch(newArray, searchValue);
  }
}

console.log(binarySearch(phoneBook, 503));

// search by attr
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

