// code your iterative algorithm here

function binarySearch(data, el) {
  let first = 0;
  let last = data.length - 1;
  let = found = false;

  while (first <= last && !found) {
    let mid = Math.floor((first + last) / 2);

    if (data[mid] === el) {
      found = true;
    } else if (data[mid] > el) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }

  return found;
}

const list = [5, 8, 14, 18, 22, 27, 34];
console.log(binarySearch(list, 14));
console.log(binarySearch(list, 12));
