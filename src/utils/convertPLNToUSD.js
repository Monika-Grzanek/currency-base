export const convertPLNToUSD = (PLN) => {
  if(!Number.isInteger(PLN)) return NaN; 
  const PLNtoUSD = PLN / 3.5;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD);
}