import Button from "../molecules/Button";
import IconDoutone from "../atoms/IconDoutone";

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

// Dumb data
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
  {
    id: 9,
    icon_name: "widget",
    name: "Travel Savings",
    balance: 125.75,
    daily_profit: 12,
    monthly_profit: -4,
    yearly_profit: 35,
  },
  {
    id: 10,
    icon_name: "widget",
    name: "Travel Savings",
    balance: 125.75,
    daily_profit: 12,
    monthly_profit: -4,
    yearly_profit: 35,
  },
  {
    id: 11,
    icon_name: "widget",
    name: "Travel Savings",
    balance: 125.75,
    daily_profit: 12,
    monthly_profit: -4,
    yearly_profit: 35,
  },
  {
    id: 12,
    icon_name: "widget",
    name: "Travel Savings",
    balance: 125.75,
    daily_profit: 12,
    monthly_profit: -4,
    yearly_profit: 35,
  },
  {
    id: 13,
    icon_name: "widget",
    name: "Travel Savings",
    balance: 125.75,
    daily_profit: 12,
    monthly_profit: -4,
    yearly_profit: 35,
  },
  {
    id: 14,
    icon_name: "shop",
    name: "Online Store",
    balance: 58200,
    daily_profit: 3200,
    monthly_profit: 1450,
    yearly_profit: 8200,
  },
];

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

//What icon should be in the rows
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

//Base classes
const baseClasses = {
  tr: `
  grid grid-cols-7
  items-center justify-center
  rounded-lg
  text-secondary-500 text-12px
  bg-secondary-100
  transition-shadow
  `,

  td: `
  flex flex-row
  items-center 
  h-8
  `,

  secondTd: `
  flex flex-row
  items-center 
  h-8
  border-r 
  `,

  span: ` 
  flex flex-row
  items-center justify-center
  `,

  table: `
  overflow-hidden
  flex flex-5 flex-col
  w-full
  gap-4
  pb-4 pl-4
  `,

  tbody: `
  overflow-y-auto
  flex flex-1 flex-col
  min-h-0
  gap-4
  `,

  theadTr: `
  grid
  items-center justify-center
  px-2 py-5
  `,

  theadTrFirstTd: `
  first:border-r last:justify-end
  `,

  theadTrSecondTd: `
  justify-center
  border-r
  `,
};

//Make the context throw and error when used outside of the bound
function useTableContext() {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error("You used form context out of the bound.");
  }
  return context;
}

//Table component just act as a hub the data will come here and get used in other parts
function Table({
  data = testData,
  headerContent = tempHeaderContent,
  type = "secondary",
  children,
}) {
  //Error boundry
  const selectedTypeInverse = type === "primary" ? "secondary" : "primary";
  const selectedType = types[selectedTypeInverse] ?? types.primary;

  return (
    //2)Provide the value
    <TableContext.Provider
      value={{ data, headerContent, type, selectedType, selectedTypeInverse }}
    >
      <table className={baseClasses.table}>{children}</table>
    </TableContext.Provider>
  );
}

function TableBody() {
  //3)Use the value
  const { data, type } = useTableContext();

  //Error boundry
  const selectedTypeInverse = type === "primary" ? "secondary" : "primary";
  const selectedType = types[selectedTypeInverse] ?? types.primary;

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
    <tbody className={baseClasses.tbody}>
      {data.map((item, i) => (
        <tr
          key={item.id}
          className={`
            ${baseClasses.tr}
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

function TableHeader() {
  const { headerContent, type } = useTableContext();

  //Error boundry
  const selectedType = Object.hasOwn(types, type) ? type : "primary";

  return (
    <thead>
      <tr
        className={`
          ${baseClasses.theadTr}
          ${"grid-cols-" + headerContent.length}
        `}
      >
        {headerContent.map((content, i) =>
          i === 0 || i === headerContent.length - 1 ? (
            <td
              key={i}
              className={`
                ${baseClasses.theadTrFirstTd}
                ${types[selectedType].tdLineColorHeader}
                ${baseClasses.td}
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
                ${baseClasses.theadTrSecondTd}
                ${types[selectedType].tdLineColorHeader}
                ${baseClasses.td}
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

function TableCell({ item }) {
  const { type, selectedType } = useTableContext();

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

  //Component itself
  return (
    <>
      <td
        className={`
          justify-start
          pl-6
          ${baseClasses.secondTd}
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
          ${baseClasses.secondTd}
          ${selectedType.tdLineColor}
          ${selectedType.txtColor}
        `}
      >
        {name}
      </td>

      <td
        className={`
          justify-center
          ${baseClasses.secondTd}
          ${selectedType.tdLineColor}
          ${selectedType.txtColor}
        `}
      >
        {balance}
      </td>

      <td
        className={`
          justify-center
          ${baseClasses.secondTd}
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
              ${baseClasses.span}
            `}
          >
            <AltArrowUpIcon size={9} color="var(--color-success-400)" />
            {daily_profit}
          </span>
        ) : (
          <span
            className={`
              text-destructive-400
              ${baseClasses.span}
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
          ${baseClasses.secondTd}
          ${selectedType.txtColor}
        `}
      >
        {monthly_profit === 0 ? (
          "-"
        ) : monthly_profit > 0 ? (
          <span
            className={`
              text-success-400
              ${baseClasses.span}
            `}
          >
            <AltArrowUpIcon size={9} color="var(--color-success-400)" />
            {monthly_profit}
          </span>
        ) : (
          <span
            className={`
              text-destructive-400
              ${baseClasses.span}
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
          ${baseClasses.secondTd}
          ${selectedType.txtColor}
        `}
      >
        {yearly_profit === 0 ? (
          "-"
        ) : yearly_profit > 0 ? (
          <span
            className={`
              text-success-400
              ${baseClasses.span}
            `}
          >
            <AltArrowUpIcon size={9} color="var(--color-success-400)" />
            {yearly_profit}
          </span>
        ) : (
          <span
            className={`
              text-destructive-400
              ${baseClasses.span}
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
            <IconDoutone Icon={TrashBinTrashIcon} size={16} type={type} />
          </button>

          <button type="button" aria-label="Edit">
            <IconDoutone Icon={Pen2Icon} size={16} type={type} />
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

Table.TableHeader = TableHeader;
Table.TableBody = TableBody;
Table.TableFooter = TableFooter;

export default Table;
