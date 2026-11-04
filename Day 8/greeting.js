
export function greet(timeString) {

  const [hoursStr] = timeString.split(":");
  const hours = parseInt(hoursStr);

  if (hours >= 5 && hours < 12) {
    return "Good morning";
  } else if (hours >= 12 && hours < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}