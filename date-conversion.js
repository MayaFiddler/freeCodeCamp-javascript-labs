const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

function formatDateMMDDYYYY (date){
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`
};

function formatDateLong(date){
  const options = {month:"long", day:"numeric", year:"numeric"};
  const formattedDate = date.toLocaleDateString('en-US', options);
  return `Formatted Date (Month Day, Year): ${formattedDate}`;
};