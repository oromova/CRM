export const months = [
  { short: "Yan", full: "Yanvar" },
  { short: "Fev", full: "Fevral" },
  { short: "Mar", full: "Mart" },
  { short: "Apr", full: "Aprel" },
  { short: "May", full: "May" },
  { short: "Iyun", full: "Iyun" },
  { short: "Iyul", full: "Iyul" },
  { short: "Avg", full: "Avgust" },
  { short: "Sen", full: "Sentyabr" },
  { short: "Okt", full: "Oktyabr" },
  { short: "Noy", full: "Noyabr" },
  { short: "Dek", full: "Dekabr" }
];

export const weeks = [
  { short: "Yak", full: "Yakshanba" },
  { short: "Du", full: "Dushanba" },
  { short: "Se", full: "Seshanba" },
  { short: "Chor", full: "Chorshanba" },
  { short: "Pay", full: "Payshanba" },
  { short: "Ju", full: "Juma" },
  { short: "Shan", full: "Shanba" }
];

function getMinusDate(number) {
  let date = new Date(new Date().setDate(new Date().getDate() - number));
  return date;
}

function getPlusDate(number) {
  let date = new Date(new Date().setDate(new Date().getDate() + number));
  return date;
}

export const useDate = () => {
  const d = new Date();
  let day = weeks[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  let week = (count = 0) => [
    getMinusDate(3 - count),
    getMinusDate(2 - count), 
    getMinusDate(1 - count),
    getMinusDate(0 - count),
    getPlusDate(1 + count),
    getPlusDate(2 + count),
    getPlusDate(3 + count),
  ];

  return {year, day, month, date, week}
}

export default useDate;