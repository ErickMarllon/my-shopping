export function FormatHours(hour: string | undefined) {
  if (hour && hour.slice(3) !== "00") {
    return hour;
  }

  if (hour) {
    return hour.slice(0, 2);
  }
}
