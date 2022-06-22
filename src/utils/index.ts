export const formatPrice = (price: number): string => {
  const delimetersRegex = /\d{1,3}/g;
  const revertedValue = price.toString().split("").reverse().join("");
  const numericGroups = revertedValue.match(delimetersRegex);
  if (!numericGroups) return "";
  const finalValue = numericGroups.join(" ").split("").reverse().join("");
  return finalValue;
};
