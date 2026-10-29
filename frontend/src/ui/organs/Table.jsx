import Button from "../molecules/Button";

import { createContext, useContext } from "react";
import {
  Pen2Icon,
  TrashBinTrashIcon,
  WidgetIcon,
  ChartSquareIcon,
  WalletMoneyIcon,
  CalendarDateIcon,
  CalendarMarkIcon,
  CalendarIcon,
  MenuDotsVerticalIcon,
  DatabaseIcon,
  ServerIcon,
  ShopIcon,
  UsersGroupRoundedIcon,
  FolderIcon,
  SunIcon,
  BoltIcon,
} from "@solar-icons/react/line-duotone";

import { AltArrowUpIcon, AltArrowDownIcon } from "@solar-icons/react/bold";
//Maybe in the feature i made a reusable Compound component out of that for now its perfect
//1)Create context
const TableContext = createContext();

//Header default data
const tempHeaderContent = [
  {
    content: "Icon",
    icon: (
      <WidgetIcon
        size={16}
        secondaryColor="var(--color-accent-100)"
        secondaryOpacity={1}
      />
    ),
    type: "primary",
  },
  {
    content: "Title",
    icon: (
      <ChartSquareIcon
        size={16}
        secondaryColor="var(--color-accent-100)"
        secondaryOpacity={1}
      />
    ),
    type: "secondary",
  },
  {
    content: "Value",
    icon: (
      <WalletMoneyIcon
        size={16}
        secondaryColor="var(--color-accent-100)"
        secondaryOpacity={1}
      />
    ),
    type: "secondary",
  },
  {
    content: "Daily",
    icon: (
      <CalendarDateIcon
        size={16}
        secondaryColor="var(--color-accent-100)"
        secondaryOpacity={1}
      />
    ),
    type: "secondary",
  },
  {
    content: "Weekly",
    icon: (
      <CalendarMarkIcon
        size={16}
        secondaryColor="var(--color-accent-100)"
        secondaryOpacity={1}
      />
    ),
    type: "secondary",
  },
  {
    content: "Monthly",
    icon: (
      <CalendarIcon
        size={16}
        secondaryColor="var(--color-accent-100)"
        secondaryOpacity={1}
      />
    ),
    type: "secondary",
  },
  {
    content: "Actions",
    icon: (
      <MenuDotsVerticalIcon
        size={16}
        secondaryColor="var(--color-accent-100)"
        secondaryOpacity={1}
      />
    ),
    type: "primary",
  },
];

//Dumb data
const testData = [
  {
    id: 1,
    icon_name: "shop",
    name: "International Business",
    balance: 1250000,
    daily_profit: 125000,
    monthly_profit: -32500,
    yearly_profit: 48750,
  },
  {
    id: 2,
    icon_name: "chart-square",
    name: "Investment Portfolio",
    balance: 24850,
    daily_profit: 1250,
    monthly_profit: 640,
    yearly_profit: 3200,
  },
  {
    id: 3,
    icon_name: "wallet-money",
    name: "Crypto Wallet",
    balance: 8420,
    daily_profit: -230,
    monthly_profit: -850,
    yearly_profit: 90,
  },
  {
    id: 4,
    icon_name: "wallet",
    name: "Emergency Fund",
    balance: 12000,
    daily_profit: 0,
    monthly_profit: 0,
    yearly_profit: 0,
  },
  {
    id: 5,
    icon_name: "chart-square",
    name: "Stock Portfolio",
    balance: 45700,
    daily_profit: 2400,
    monthly_profit: 1180,
    yearly_profit: 5600,
  },
  {
    id: 6,
    icon_name: "bolt",
    name: "Trading Account",
    balance: 6320,
    daily_profit: -420,
    monthly_profit: -175,
    yearly_profit: -85,
  },
  {
    id: 7,
    icon_name: "users-group-rounded",
    name: "Business Revenue",
    balance: 18250,
    daily_profit: 950,
    monthly_profit: -300,
    yearly_profit: 120,
  },
  {
    id: 8,
    icon_name: "widget",
    name: "Travel Savings",
    balance: 125.75,
    daily_profit: 12,
    monthly_profit: -4,
    yearly_profit: 35,
  },
];

//Objecs for diffrent variations
const types = {
  primary: {
    trClasses: "bg-secondary-500",
    tdLineColorHeader: "border-primary-100",
    tdLineColor: "border-secondary-100",
    txtColor: "text-primary-100",
    iconHoverColor: "hover:text-primary-300",
  },
  secondary: {
    trClasses: "bg-primary-100",
    tdLineColorHeader: "border-secondary-100",
    tdLineColor: "border-secondary-500",
    txtColor: "text-secondary-500",
    iconHoverColor: "hover:text-secondary-300",
  },
};

//Table component just act as a hub the data will come here and get used in other parts
function Table({
  data = testData,
  headerContent = tempHeaderContent,
  type = "secondary",
}) {
  return (
    //2)Provide the value
    <TableContext.Provider value={{ data, headerContent, type }}>
      <table
        className="
          flex flex-col
          justify-center
          gap-4
          pb-4
        "
      >
        <TableHeader />
        <TableBody />
        <TableFooter />
      </table>
    </TableContext.Provider>
  );
}

//Table row base classes
const tableRowBaseClasses = `
  grid grid-cols-7
  items-center justify-center
  rounded-lg
  text-secondary-500 text-12px
  bg-secondary-100
  transition-shadow
  `;

function TableBody() {
  //3)Use the value
  const { data, type } = useContext(TableContext);

  //Error boundry
  const selectedType = types[type] ?? types.primary;

  //Calculating whether the user is in profit or loss
  const rowShadowClasses = data.map((item) => {
    const values = [item.daily_profit, item.monthly_profit, item.yearly_profit];

    const profitCount = values.filter((value) => value > 0).length;
    const lossCount = values.filter((value) => value < 0).length;

    if (profitCount === lossCount) {
      return "hover:shadow-200-BoxShadowM";
    }

    return profitCount > lossCount
      ? "hover:shadow-200-success-BoxShadowM"
      : "hover:shadow-200-destructure-BoxShadowM";
  });

  //Component itself
  return (
    <tbody
      className="
        flex flex-col
        gap-16
      "
    >
      {data.map((item, i) => (
        <tr
          key={item.id}
          className={`
            ${tableRowBaseClasses}
            ${rowShadowClasses[i]}
            ${selectedType.trClasses}
          `}
        >
          <TableCell item={item} />
        </tr>
      ))}
    </tbody>
  );
}

const buttonsBaseClasses = `
  flex flex-row
  items-center 
  h-8
  `;

function TableHeader() {
  const { headerContent, type } = useContext(TableContext);

  //Error boundry
  const selectedType = Object.hasOwn(types, type) ? type : "primary";

  return (
    <thead>
      <tr
        className={`
          grid
          items-center justify-center
          px-2 py-5
          ${"grid-cols-" + headerContent.length}
        `}
      >
        {headerContent.map((content, i) =>
          i === 0 || i === headerContent.length - 1 ? (
            <td
              key={i}
              className={`
                first:border-r last:justify-end
                ${types[selectedType].tdLineColorHeader}
                ${buttonsBaseClasses}
              `}
            >
              <Button
                disabled={true}
                type={selectedType === "primary" ? "secondary" : "priamry"}
                token="sm"
              >
                {content.content}
                {content.icon}
              </Button>
            </td>
          ) : (
            <td
              key={i}
              className={`
                justify-center
                border-r
                ${types[selectedType].tdLineColorHeader}
                ${buttonsBaseClasses}
              `}
            >
              <Button type={selectedType} token="sm">
                {content.content}
                {content.icon}
              </Button>
            </td>
          ),
        )}
      </tr>
    </thead>
  );
}

const iconMap = {
  "widget": WidgetIcon,
  "wallet-money": WalletMoneyIcon,
  "chart-square": ChartSquareIcon,
  "database": DatabaseIcon,
  "server": ServerIcon,
  "shop": ShopIcon,
  "users-group-rounded": UsersGroupRoundedIcon,
  "folder": FolderIcon,
  "sun": SunIcon,
  "bolt": BoltIcon,
};

//Objects for diffrent variations

const tdBaseClasses = `
  flex flex-row
  items-center 
  h-8
  border-r 
  `;

const iconBaseClasses = `
  transition-colors
  active:scale-95
  cursor-pointer
  `;

const upAndDownArrow = ` 
  flex flex-row
  items-center justify-center
  `;

function TableCell({ item }) {
  const { type } = useContext(TableContext);

  //Destructure the item object
  const {
    icon_name,
    name,
    balance,
    daily_profit,
    monthly_profit,
    yearly_profit,
  } = item;

  //Choose the icon base on the item icon_name
  const Icon = iconMap[icon_name] ?? WidgetIcon;

  //Error boundry
  const selectedType = types[type] ?? types.primary;

  //Component itself
  return (
    <>
      <td
        className={`
          justify-start
          pl-6
          ${tdBaseClasses}
          ${selectedType.tdLineColor}
          ${selectedType.txtColor}
        `}
      >
        <Icon
          size={16}
          secondaryColor="var(--color-accent-100)"
          secondaryOpacity={1}
        />
      </td>

      <td
        className={`
          justify-center
          ${tdBaseClasses}
          ${selectedType.tdLineColor}
          ${selectedType.txtColor}
        `}
      >
        {name}
      </td>

      <td
        className={`
          justify-center
          ${tdBaseClasses}
          ${selectedType.tdLineColor}
          ${selectedType.txtColor}
        `}
      >
        {balance}
      </td>

      <td
        className={`
          justify-center
          ${tdBaseClasses}
          ${selectedType.tdLineColor}
          ${selectedType.txtColor}
        `}
      >
        {daily_profit === 0 ? (
          "-"
        ) : daily_profit > 0 ? (
          <span
            className={`
              text-success-400
              ${upAndDownArrow}
            `}
          >
            <AltArrowUpIcon size={9} color="var(--color-success-400)" />
            {daily_profit}
          </span>
        ) : (
          <span
            className={`
              text-destructive-400
              ${upAndDownArrow}
            `}
          >
            <AltArrowDownIcon size={9} color="var(--color-destructive-400)" />
            {Math.abs(daily_profit)}
          </span>
        )}
      </td>

      <td
        className={`
          justify-center
          ${tdBaseClasses}
          ${selectedType.txtColor}
        `}
      >
        {monthly_profit === 0 ? (
          "-"
        ) : monthly_profit > 0 ? (
          <span
            className={`
              text-success-400
              ${upAndDownArrow}
            `}
          >
            <AltArrowUpIcon size={9} color="var(--color-success-400)" />
            {monthly_profit}
          </span>
        ) : (
          <span
            className={`
              text-destructive-400
              ${upAndDownArrow}
            `}
          >
            <AltArrowDownIcon size={9} color="var(--color-destructive-400)" />
            {Math.abs(monthly_profit)}
          </span>
        )}
      </td>

      <td
        className={`
          justify-center
          ${tdBaseClasses}
          ${selectedType.txtColor}
        `}
      >
        {yearly_profit === 0 ? (
          "-"
        ) : yearly_profit > 0 ? (
          <span
            className={`
              text-success-400
              ${upAndDownArrow}
            `}
          >
            <AltArrowUpIcon size={9} color="var(--color-success-400)" />
            {yearly_profit}
          </span>
        ) : (
          <span
            className={`
              text-destructive-400
              ${upAndDownArrow}
            `}
          >
            <AltArrowDownIcon size={9} color="var(--color-destructive-400)" />
            {Math.abs(yearly_profit)}
          </span>
        )}
      </td>
      <td>
        <div
          className="
            flex
            items-center justify-end
            gap-1
            pr-6
          "
        >
          <button type="button" aria-label="Delete">
            <TrashBinTrashIcon
              secondaryOpacity={1}
              secondaryColor="var(--color-accent-100)"
              size={16}
              className={`
                hover:
                ${selectedType.iconHoverColor}
                ${iconBaseClasses}
                ${selectedType.txtColor}
              `}
            />
          </button>

          <button type="button" aria-label="Edit">
            <Pen2Icon
              secondaryOpacity={1}
              secondaryColor="var(--color-accent-100)"
              size={16}
              className={`
                ${iconBaseClasses}
                ${selectedType.txtColor}
                ${selectedType.iconHoverColor}
              `}
            />
          </button>
        </div>
      </td>
    </>
  );
}

function TableFooter({ children }) {
  //Maybe in the feature we added some pagination but not now
  return <tfoot>{children}</tfoot>;
}

export default Table;
