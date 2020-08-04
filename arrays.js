var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  var Array = array
  return [element, ...Array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var Array = array
  array.unshift(element)
  return Array
}

function addElementToEndOfArray(array, element) {
  var Array = array
  return [...Array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  var Array = array
  array.push(element)
  return Array
}

function accessElementInArray(array, index) {
  var Array = array
  return (Array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  var Array = array
  Array.shift(element)
  return Array
}

function removeElementFromBeginningOfArray(array) {
  var Array = array
  Array.slice(1)
  return Array
}
