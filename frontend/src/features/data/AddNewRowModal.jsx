import FormContainer from "../../ui/organs/FormContainer";
import Button from "../../ui/molecules/Button";
import IconDoutone from "../../ui/atoms/IconDoutone";
import InputContainer from "../../ui/molecules/InputContainer";
import DropDown from "../../ui/molecules/DropDown";
import AnimatedIcon from "../../ui/atoms/AnimatedIcon";
import DataProviderForm from "./DataProviderForm";
import IconWithText from "../../ui/atoms/IconWithText";

import {
  ShopIcon,
  CartLargeIcon,
  ChartSquareIcon,
  GraphUpIcon,
  WalletMoneyIcon,
  DatabaseIcon,
  UsersGroupRoundedIcon,
  BuildingsIcon,
  TargetIcon,
  CloudIcon,
  CpuIcon,
  AddCircleIcon,
} from "@solar-icons/react/line-duotone";
import { useThemeContext } from "../../contexts/ThemeContext";
import { Controller, useForm } from "react-hook-form";
import { addData } from "./dataSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const baseClasses = {
  div: `
  flex flex-1
  items-center
  pr-10
  `,

  button: `
  mx-2
  disabled:ring-1 disabled:ring-accent-100
  `,

  ul: `
  w-fit!
  px-3.5!
  mx-2
  `,
};

const icons = [
  {
    value: "shop",
    label: "Shop",
    IconComponent: ShopIcon,
  },
  {
    value: "cart-large",
    label: "Cart large",
    IconComponent: CartLargeIcon,
  },
  {
    value: "chart-square",
    label: "Chart square",
    IconComponent: ChartSquareIcon,
  },
  {
    value: "graph-up",
    label: "Graph up",
    IconComponent: GraphUpIcon,
  },
  {
    value: "wallet-money",
    label: "Wallet money",
    IconComponent: WalletMoneyIcon,
  },

  {
    value: "database",
    label: "Database",
    IconComponent: DatabaseIcon,
  },
  {
    value: "users-group-rounded",
    label: "Users group",
    IconComponent: UsersGroupRoundedIcon,
  },
  {
    value: "buildings",
    label: "Buildings",
    IconComponent: BuildingsIcon,
  },
  {
    value: "target",
    label: "Target",
    IconComponent: TargetIcon,
  },
  {
    value: "cloud",
    label: "Cloud",
    IconComponent: CloudIcon,
  },
  {
    value: "cpu",
    label: "Cpu",
    IconComponent: CpuIcon,
  },
];

const dataSources = [
  { label: "📊 Google Analytics", value: "google_analytics" },
  { label: "🛍️ Shopify", value: "shopify" },
  { label: "☁️ Salesforcey", value: "salesforce" },
  { label: "🎯 HubSpot", value: "hubspot" },
  { label: "🐬 MySQL", value: "mysql" },
  { label: "🐘 PostgreSQL", value: "postgresql" },
  { label: "🔗 Custom API", value: "custom_api" },
];

function AddNewData() {
  const { type, selectedTypeInverse } = useThemeContext();
  const { register, control, handleSubmit, formState, reset } = useForm({
    shouldUnregister: true,
  });
  const [provider, setProvider] = useState("google_analytics");
  const { errors } = formState;

  const dispatch = useDispatch();

  function onSubmit(data) {
    dispatch(
      addData({
        ...data,
        id: crypto.randomUUID(),
        balance: 0,
        daily_profit: 0,
        monthly_profit: 0,
        yearly_profit: 0,
      }),
    );
  }

  return (
    <FormContainer
      isValid={formState.isValid}
      onSubmit={handleSubmit(onSubmit)}
      type={selectedTypeInverse}
    >
      <FormContainer.Overlay />

      <FormContainer.OpenButton onOpen={reset} opens="addNewRow">
        <div className={baseClasses.div}>
          <Button type={type}>
            Add row
            <IconDoutone size={20} type={type} Icon={AddCircleIcon} />
          </Button>
        </div>
      </FormContainer.OpenButton>

      <FormContainer.Window name="addNewRow">
        <FormContainer.Header />
        <InputContainer
          hasError={Boolean(errors.name)}
          inputId="name"
          type={selectedTypeInverse}
        >
          <InputContainer.InputTxt>Data Source Name</InputContainer.InputTxt>
          <InputContainer.Input
            LeftIcon={null}
            placeholderText="e.g. Sales Dashboard"
            {...register("name", {
              setValueAs: (value) => value.trim(),

              required: "Please enter a name for your data source.",

              minLength: {
                value: 2,
                message: "Name must contain at least 2 characters.",
              },

              maxLength: {
                value: 30,
                message: "Name must not exceed 30 characters.",
              },
            })}
          />
          <InputContainer.InputTxt>
            {errors.name?.message ||
              "Enter a descriptive name to identify this data source."}
          </InputContainer.InputTxt>
        </InputContainer>
        <DropDown
          optionValue={provider}
          setOptionValue={setProvider}
          token="sm"
          type={type}
        >
          <DropDown.DropDownButton opens="data_source">
            <Button
              className={baseClasses.button}
              token="md"
              type={selectedTypeInverse}
            >
              Data Provider
              <AnimatedIcon position="right" type={type} token="md" />
            </Button>
          </DropDown.DropDownButton>
          <DropDown.DropDownUl className={baseClasses.ul} name="data_source">
            {dataSources.map((dataSource) => (
              <DropDown.DropDownLi
                key={dataSource.label}
                value={dataSource.value}
              >
                {dataSource.label}
              </DropDown.DropDownLi>
            ))}
          </DropDown.DropDownUl>
        </DropDown>

        <Controller
          name="icon_name"
          control={control}
          defaultValue="cloud"
          render={({ field }) => {
            return (
              <DropDown
                optionValue={field.value}
                setOptionValue={field.onChange}
                token="sm"
                type={type}
              >
                <DropDown.DropDownButton opens="iconName">
                  <Button
                    className={baseClasses.button}
                    token="md"
                    type={selectedTypeInverse}
                  >
                    Select Icons
                    <AnimatedIcon position="right" type={type} token="md" />
                  </Button>
                </DropDown.DropDownButton>
                <DropDown.DropDownUl className={baseClasses.ul} name="iconName">
                  {icons.map((icon) => (
                    <DropDown.DropDownLi key={icon.value} value={icon.value}>
                      <IconWithText
                        title={icon.label}
                        Icon={icon.IconComponent}
                      />
                    </DropDown.DropDownLi>
                  ))}
                </DropDown.DropDownUl>
              </DropDown>
            );
          }}
        />
        <DataProviderForm
          key={provider}
          selectedTypeInverse={selectedTypeInverse}
          dataProvider={provider}
          register={register}
          errors={errors}
        />
        <FormContainer.Footer>
          <Button htmlType="submit" token="md" type={selectedTypeInverse}>
            Add Data Source
          </Button>

          <FormContainer.CloseButton>
            <Button token="md" type={selectedTypeInverse}>
              Cancel
            </Button>
          </FormContainer.CloseButton>
        </FormContainer.Footer>
      </FormContainer.Window>
    </FormContainer>
  );
}

export default AddNewData;
