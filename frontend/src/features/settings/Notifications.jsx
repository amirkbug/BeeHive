import {
  BellIcon,
  ChartSquareIcon,
  LetterIcon,
  ShieldWarningIcon,
} from "@solar-icons/react/line-duotone";
import RadioButtonsForm from "./RadioButtonsForm";

const emailNotifications = [
  {
    id: 1,
    name: "Receive email notifications",
    enabled: true,
  },
  {
    id: 2,
    name: "Weekly summary report",
    enabled: false,
  },
  {
    id: 3,
    name: "Monthly analytics report",
    enabled: true,
  },
  {
    id: 4,
    name: "Product updates",
    enabled: false,
  },
  {
    id: 5,
    name: "Security alerts",
    enabled: true,
  },
];

const inAppNotifications = [
  {
    id: 1,
    name: "KPI updates",
    enabled: true,
  },
  {
    id: 2,
    name: "Data import completed",
    enabled: false,
  },
  {
    id: 3,
    name: "Data export completed",
    enabled: true,
  },
  {
    id: 4,
    name: "System announcements",
    enabled: false,
  },
  {
    id: 5,
    name: "Error notifications",
    enabled: true,
  },
];

const reportsNotifications = [
  {
    id: 1,
    name: "Daily report",
    enabled: true,
  },
  {
    id: 2,
    name: "Weekly report",
    enabled: false,
  },
  {
    id: 3,
    name: "Monthly report",
    enabled: true,
  },
];

const alertsNotifications = [
  {
    id: 1,
    name: "Failed data sync",
    enabled: true,
  },
  {
    id: 2,
    name: "Missing data",
    enabled: false,
  },
  {
    id: 3,
    name: "Account security alerts",
    enabled: true,
  },
  {
    id: 4,
    name: "Unusual KPI changes",
    enabled: false,
  },
];

const baseClasses = {
  section: `
    overflow-y-auto
    flex flex-col
    w-full h-full
    gap-20
    px-4
    pb-4
    `,
};

function Notifications() {
  return (
    <section className={baseClasses.section}>
      <RadioButtonsForm
        options={emailNotifications}
        title="Email Notifications"
        Icon={LetterIcon}
      />
      <RadioButtonsForm
        options={inAppNotifications}
        title="In-App Notifications"
        Icon={BellIcon}
      />
      <RadioButtonsForm
        options={reportsNotifications}
        title="Reports"
        Icon={ChartSquareIcon}
      />
      <RadioButtonsForm
        options={alertsNotifications}
        title="Alerts"
        Icon={ShieldWarningIcon}
      />
    </section>
  );
}

export default Notifications;
