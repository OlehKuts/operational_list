export const minutesToHoursConverter = (minutes) => {
  const numberedMins = Number(minutes);
  const mins = numberedMins % 60;
  let hours = (numberedMins / 60).toFixed(0);
  const result =
    numberedMins < 60 ? `${mins} хвилин` : `${hours} год. ${mins} хвилин`;
  return result;
};

console.log(minutesToHoursConverter(15));
