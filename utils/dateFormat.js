// Define a function called dateFormat
// This function takes a date as a parameter and returns it as a localized string
const dateFormat = (date) => {
    return date.toLocaleString(); // Convert the date to a string using the local date and time representation
};

// Export the dateFormat function to be used in other parts of the application
module.exports = dateFormat;
