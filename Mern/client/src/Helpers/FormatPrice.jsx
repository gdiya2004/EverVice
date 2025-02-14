const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR", //country
    //dot ke baad 2 digit
    maximumFractionDigits: 2,
  }).format(price / 100); // 1 rupee=100paise
};

export default FormatPrice;
