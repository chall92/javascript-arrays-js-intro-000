var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

  var Array = array


function addElementToBeginningOfArray(array, element) {
  return [element, ...Array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return Array
}

function addElementToEndOfArray(array, element) {
  return [...Array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return Array
}
