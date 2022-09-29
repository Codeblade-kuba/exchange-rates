const getDateString = (date = new Date()) => {
  let dd: number | string = date.getDate();
  let mm: number | string = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }
  let dateString = `${yyyy}-${mm}-${dd}`;
  return dateString;
};

export default getDateString;
