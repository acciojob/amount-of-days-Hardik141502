//your JS code here. If required.
function daysOfAYear(year) {
  // Check if it's a leap year
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366; // Leap year has 366 days
  } else {
    return 365; // Non-leap year has 365 days
  }
}

// Examples
console.log(daysOfAYear(2022)); // 365
console.log(daysOfAYear(2024)); // 366
console.log(daysOfAYear(1900)); // 365
console.log(daysOfAYear(2000));   
 // 366