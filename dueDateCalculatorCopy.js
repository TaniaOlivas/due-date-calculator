function CalculateDueDate(submittedDate, turnaroundTime) {
  const submittedHour = submittedDate.getHours();
  const submittedDay = submittedDate.getDay();

  const work = {
    startTime: 9,
    endTime: 17,
    firstDayOfWeek: 1,
    lastDayOfWeek: 5,
  };

  if (submittedDay >= work.firstDayOfWeek || submittedDay <= work.lastDayOfWeek) {
    if (submittedHour >= work.startTime && submittedHour < work.endTime) {
      while (turnaroundTime > 0) {
        turnaroundTime = turnaroundTime - 1;

        // Reassigns submittedDate to 24 hours later
        submittedDate.setDate(submittedDate.getDate() + 1);

        // Once the new submitted date reaches a Saturday, it
        // will add 2 days instead to skip the non-working days
        if (submittedDate.getDay() === 6) {
          submittedDate.setDate(submittedDate.getDate() + 2);
        }
      }
      return submittedDate;
    } else {
      console.error('Cannot submit during non-work hours.');
    }
  } else {
    console.error('Cannot submit during non-work hours.');
  }
}

module.exports = CalculateDueDate;
