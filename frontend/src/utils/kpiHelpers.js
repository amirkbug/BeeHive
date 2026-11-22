import {
  compactFormatter,
  currencyFormatter,
  decimalFormatter,
  numberFormatter,
} from "./numberHelpers";

export const getKpiType = (chartValue) => {
  if (chartValue <= 30) {
    return "destructive";
  }
  if (chartValue <= 50) {
    return "warning";
  }

  return "success";
};

export const formatKpiNumber = (value, numberFormat) => {
  const formatters = {
    decimal: decimalFormatter,
    currency: currencyFormatter,
    compact: compactFormatter,
    number: numberFormatter,
  };

  return (formatters[numberFormat] ?? numberFormatter)(value);
};
