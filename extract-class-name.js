function extractClassName(sessionTitle) {
  let result = null;
  let monate = {
    Januar: "01",
    Februar: "02",
    Maerz: "03",
    März: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
  };

  if (sessionTitle.includes("Class")) {
    let arr = sessionTitle.split(" ");
    // an dieser Stelle könnte man die letzten zwei Elemente des Arrays nehmen, aber ich nehme lieber das, was nach "Class" kommt.
    let jahr = arr[arr.indexOf("Class") + 1];
    let monat = arr[arr.indexOf("Class") + 2];
    if (
      Number(jahr) > 2020 &&
      Number(jahr) < 2030 &&
      monate.hasOwnProperty(monat)
    ) {
      result = jahr + "-" + monate[monat];
    }
  }
  return result;
}
