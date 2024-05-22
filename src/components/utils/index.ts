export function formatDate(date: Date): string {
  const d = new Date(date);
  const day = d.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[d.getMonth()];
  const year = d.getFullYear();

  return `${day} ${month} ${year}`;
}

export function formatTime(date: Date): string {
  const d = new Date(date);
  let hours = d.getHours();
  let minutes: number | string = d.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

export function formatDateTime(date: Date): string {
  const formattedDate = formatDate(date);
  const formattedTime = formatTime(date);
  return `${formattedDate} ${formattedTime}`;
}
