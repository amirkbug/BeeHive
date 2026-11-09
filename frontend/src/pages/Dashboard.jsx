import IconDoutone from "../ui/atoms/IconDoutone";
import Line from "../ui/atoms/Line";
import Button from "../ui/molecules/Button";
import Chart from "../ui/molecules/Chart";
import Kpi from "../ui/organs/Kpi";

import {
  WalletMoneyIcon,
  GraphUpIcon,
  DangerTriangleIcon,
  CalendarIcon,
  ClockCircleIcon,
} from "@solar-icons/react/line-duotone";
import { CalendarMarkIcon } from "@solar-icons/react/line-duotone/calendar-mark";
function Dashboard() {
  return (
    <>
      <section
        className="
          overflow-x-auto
          flex flex-row shrink-0
          items-center justify-between
          w-full h-fit
          gap-5
          py-5
          pl-4
        "
      >
        <Kpi
          chartValue={30}
          token="md"
          type="secondary"
          kpiType="warning"
          KpiIconName={WalletMoneyIcon}
          SubTxtIcon={null}
          title="Revenue at Risk"
          number="$9,923"
          subtxt="Potential revenue at risk."
        />

        <Kpi
          chartValue={85}
          token="md"
          type="secondary"
          kpiType="success"
          KpiIconName={GraphUpIcon}
          SubTxtIcon={null}
          title="Revenue Growth"
          number="+18.6%"
          subtxt="Revenue increased this month."
        />

        <Kpi
          chartValue={15}
          token="md"
          type="secondary"
          kpiType="destructive"
          KpiIconName={DangerTriangleIcon}
          SubTxtIcon={null}
          title="Critical Issues"
          number="24"
          subtxt="Issues require immediate attention."
        />
      </section>
      <div
        className="
          w-full
          pl-5
        "
      >
        <Line />
      </div>
      <nav
        className="
          flex flex-row
          items-center justify-end
          gap-2
          pt-4
        "
      >
        <Button token="sm" type="secondary">
          Past month
          <IconDoutone Icon={CalendarMarkIcon} size={16} type="secondary" />
        </Button>
        <Button token="sm" type="secondary">
          Past week
          <IconDoutone Icon={CalendarIcon} size={16} type="secondary" />
        </Button>
        <Button token="sm" type="secondary">
          Today
          <IconDoutone Icon={ClockCircleIcon} size={16} type="secondary" />
        </Button>
      </nav>
      <section
        className="
          overflow-y-auto
          flex flex-col flex-1
          justify-between
          w-full
        "
      >
        <section
          className="
            flex flex-row
            justify-between
            w-full
            gap-4
            py-4
            pl-4
          "
        >
          <Chart chartType="scatter" type="secondary" token="lg" />
          <Chart chartType="dougnut" type="secondary" token="lg" />
          <Chart chartType="bar" type="secondary" token="lg" />
        </section>
        <section
          className="
            flex flex-row
            justify-between
            w-full
            gap-4
            py-4
            pl-4
          "
        >
          <Chart chartType="pie" type="secondary" token="lg" />
          <Chart chartType="line" type="secondary" token="lg" />
          <Chart chartType="area" type="secondary" token="lg" />
        </section>
      </section>
    </>
  );
}

export default Dashboard;
