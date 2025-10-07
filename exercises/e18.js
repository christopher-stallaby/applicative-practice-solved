/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const yearCounts = data.asteroids
    .reduce((acc, asteroid) => {
      const yr = asteroid.discoveryYear;
      acc[yr] = (acc[yr] ?? 0) + 1;
      return acc;
    }, {});
  
  const yearStats = Object.entries(yearCounts).map(([yearStr, cnt]) =>
  ({
    year: Number(yearStr),
    count: cnt,
  }));

  function maxBy(array, cb) {
    // Your code goes here...
    if (!Array.isArray(array) || array.length === 0) return undefined;
    let greatestElement = array[0];
    let max = cb(firstElement);

    for (const element of array) {
      let currentElement = element;
      let currentVal = cb(currentElement);

      if(currentVal > max) {
        greatestElement = currentElement;
        max = currentVal;
      }
    };
    return greatestElement;

  }

  const mostFrequent = maxBy(yearStats, obj => obj.count);

  return mostFrequent.year;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
