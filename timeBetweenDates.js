// Create a function that takes two dates and returns the number of days between the first and second date.

// Input: Two new dates written in longhand
// Output: the number of days between the two dates

const getDays = (date1, date2) => {
    

    // Declare a days var to hold the number of days between the dates
    let days = 0;

    const date1Year = date1.getUTCFullYear();
    const date2Year = date2.getUTCFullYear();
    
    const date1Month = date1.getUTCMonth();
    const date2Month = date2.getUTCMonth();
    
    const date1Days = date1.getUTCDate();
    const date2Days = date2.getUTCDate();

    console.log('-----', date1Days, '-----');
    console.log('-----', date2Days, '-----');
    
    // Check if the years are the same.
    if (date1Year !== date2Year) {
        // Add 365 * the difference in years to the day count
        const difference = Math.abs(date2Year - date1Year);
        days += 365 * difference;
    }
    
    if (date1Month !== date2Month) {
        // 10, 8, 5, 4 -- 30 day months
        // 1 - 28 day month
        // rest are 31 days
        let max;
        let min;
        if (date1Month > date2Month) {
            max = date1Month;
            min = date2Month;
        } else {
            max = date2Month;
            min = date1Month;
        }
        for (let i = min; i <= max; i++) {
            const shorterDays = [10,8,5,4];
            if (shorterDays.includes(i)) {
                days += 30;
            } else if (i === 1) {
                days += 28;
            } else {
                days += 31;
            }
        }
    }

    if (date1Days === date2Days) {
        return days;
    } else {
        const diff = Math.abs(date1Days - date2Days);
        return days + diff;
    }
    // If NOT Check how many years they are off and then check the months difference 
        // -- Then Check 
    
}
console.log(getDays(
    new Date("July 20, 2019"),
    new Date("July 30, 2019")
)); //  ➞ 10
console.log(getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
)); //  ➞ 6
console.log(getDays(
    new Date("December 29, 2018"),
    new Date("January 1, 2019")
)); //  ➞ 3
// Dates may not all be in the same month/year.

