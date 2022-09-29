const getDateString = (date = new Date(), separator = '-', invert = false) => {
  let dateString = '';
  let dd: number | string = date.getDate();
  let mm: number | string = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }

  if (invert) {
    dateString = dd + separator + mm + separator + yyyy;
  } else {
    dateString = yyyy + separator + mm + separator + dd;
  }

  return dateString;
};

export default getDateString;
