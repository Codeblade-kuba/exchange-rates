const getDateString = () => {
  let today: Date | string = new Date();
  let dd: number | string = today.getDate();
  let mm: number | string = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }
  today = `${yyyy}-${mm}-${dd}`;
  return today;
};

export default getDateString;
