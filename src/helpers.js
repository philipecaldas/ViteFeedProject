export const getTimeParams = (date) => {
  const differenceInMs = Math.abs(date.getTime() - new Date().getTime()); // / 86400000;
  const differenceInDays = Math.floor(differenceInMs / 86400000);
  const differenceInMinutes = Math.floor(differenceInMs / 60000);

  if (differenceInDays > 730) {
    return { value: Math.floor(differenceInDays / 365), unit: "years" };
  } else if (differenceInDays > 365) {
    return { value: Math.floor(differenceInDays / 365), unit: "year" };
  } else if (differenceInDays > 60) {
    return { value: Math.floor(differenceInDays / 30), unit: "months" };
  } else if (differenceInDays > 30) {
    return { value: Math.floor(differenceInDays / 30), unit: "month" };
  } else if (differenceInDays > 14) {
    return { value: Math.floor(differenceInDays / 7), unit: "weeks" };
  } else if (differenceInDays > 7) {
    return { value: Math.floor(differenceInDays / 7), unit: "week" };
  } else if (differenceInDays > 1) {
    return { value: differenceInDays, unit: "days" };
  } else if (differenceInMinutes > 120) {
    return { value: Math.floor(differenceInMinutes / 60), unit: "hours" };
  } else if (differenceInMinutes > 59) {
    return { value: Math.floor(differenceInMinutes / 60), unit: "hour" };
  } else if (differenceInMinutes > 1) {
    return { value: differenceInMinutes, unit: "minutes" };
  }
  return { value: differenceInMinutes, unit: "minute" };
};
