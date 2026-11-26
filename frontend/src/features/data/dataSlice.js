import { createSlice } from "@reduxjs/toolkit";

const testData = [
  {
    id: 1,
    icon_name: "shop",
    name: "International Business",
    data_source: "salesforce",
    balance: 1250000,
    daily_profit: 125000,
    monthly_profit: -32500,
    yearly_profit: 48750,
  },
  {
    id: 2,
    icon_name: "cart-large",
    name: "Investment Portfolio",
    data_source: "mysql",
    balance: 24850,
    daily_profit: 1250,
    monthly_profit: 640,
    yearly_profit: 3200,
  },
  {
    id: 3,
    icon_name: "chart-square",
    name: "Crypto Wallet",
    data_source: "custom_api",
    balance: 8420,
    daily_profit: -230,
    monthly_profit: -850,
    yearly_profit: 90,
  },
  {
    id: 4,
    icon_name: "graph-up",
    name: "Emergency Fund",
    data_source: "csv_file",
    balance: 12000,
    daily_profit: 0,
    monthly_profit: 0,
    yearly_profit: 0,
  },
  {
    id: 5,
    icon_name: "wallet-money",
    name: "Stock Portfolio",
    data_source: "postgresql",
    balance: 45700,
    daily_profit: 2400,
    monthly_profit: 1180,
    yearly_profit: 5600,
  },
  {
    id: 6,
    icon_name: "database",
    name: "Trading Account",
    data_source: "custom_api",
    balance: 6320,
    daily_profit: -420,
    monthly_profit: -175,
    yearly_profit: -85,
  },
  {
    id: 7,
    icon_name: "users-group-rounded",
    name: "Business Revenue",
    data_source: "hubspot",
    balance: 18250,
    daily_profit: 950,
    monthly_profit: -300,
    yearly_profit: 120,
  },
  {
    id: 8,
    icon_name: "buildings",
    name: "Travel Savings",
    data_source: "csv_file",
    balance: 125.75,
    daily_profit: 12,
    monthly_profit: -4,
    yearly_profit: 35,
    api: {
      api_endpoint: "",
      api_key: "",
    },
  },
  {
    id: 9,
    icon_name: "target",
    name: "Online Store",
    data_source: "shopify",
    balance: 58200,
    daily_profit: 3200,
    monthly_profit: 1450,
    yearly_profit: 8200,
  },
];

const initialState = {
  data: testData,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData(state, action) {
      state.data.push(action.payload);
    },
  },
});
export default dataSlice.reducer;
export const { addData } = dataSlice.actions;
