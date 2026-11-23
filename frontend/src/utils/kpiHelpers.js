import {
  compactFormatter,
  currencyFormatter,
  decimalFormatter,
  numberFormatter,
} from "./numberHelpers";

import {
  CartLargeIcon,
  DatabaseIcon,
  GraphUpIcon,
  TargetIcon,
  UsersGroupRoundedIcon,
  WalletMoneyIcon,
} from "@solar-icons/react/linear";

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

export const chartValue = (target, value, trendDirection) => {
  if (target <= 0 || value < 0) {
    return 0;
  }

  if (trendDirection === "lower_is_better") {
    if (value <= target) {
      return 100;
    }

    return Math.floor((target / value) * 100);
  }

  return Math.floor(Math.min((value / target) * 100, 100));
};

export const kpiIconName = (iconName) => {
  const kpiMapping = {
    "wallet-money": WalletMoneyIcon,
    "graph-up": GraphUpIcon,
    "users-group-rounded": UsersGroupRoundedIcon,
    "cart-large": CartLargeIcon,
    "target": TargetIcon,
    "database": DatabaseIcon,
  };

  return kpiMapping[iconName] ?? DatabaseIcon;
};
