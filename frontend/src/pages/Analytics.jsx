import Button from "../ui/molecules/Button";
import {
  CalendarDateIcon,
  CalendarMarkIcon,
  CalendarIcon,
} from "@solar-icons/react/line-duotone";
import Chart from "../ui/molecules/Chart";
import IconDoutone from "../ui/atoms/IconDoutone";

function Analytics() {
  return (
    <section
      className="
        flex flex-col
        items-center justify-between
        w-full h-full
        pt-4
      "
    >
      <div
        className="
          flex flex-col
          items-center justify-start
          w-full
          py-1
        "
      >
        <div
          className="
            w-full
            pl-4
          "
        >
          <Button
            className="
              justify-start
              w-full
            "
            token="sm"
            type="secondary"
            disabled
          >
            <IconDoutone type="secondary" size={16} Icon={CalendarDateIcon} />{" "}
            Daily
          </Button>
        </div>
        <section
          className="
            overflow-x-auto
            flex flex-row
            items-center justify-start
            w-full
            gap-4
            py-3
            pl-4
          "
        >
          <Chart token="md" type="secondary" chartType="bar" />
          <Chart token="md" type="secondary" chartType="dougnut" />
          <Chart token="md" type="secondary" chartType="area" />
          <Chart token="md" type="secondary" chartType="line" />
          <Chart token="md" type="secondary" chartType="pie" />
          <Chart token="md" type="secondary" chartType="bar" />
        </section>
      </div>
      <div
        className="
          flex flex-col
          items-center justify-start
          w-full
          py-1
        "
      >
        <div
          className="
            w-full
            pl-4
          "
        >
          <Button
            className="
              justify-start
              w-full
            "
            token="sm"
            type="secondary"
            disabled
          >
            <IconDoutone type="secondary" size={16} Icon={CalendarMarkIcon} />{" "}
            Weekly
          </Button>
        </div>
        <section
          className="
            overflow-x-auto
            flex flex-row
            items-center justify-start
            w-full
            gap-4
            py-3
            pl-4
          "
        >
          <Chart token="md" type="secondary" chartType="bar" />
          <Chart token="md" type="secondary" chartType="dougnut" />
          <Chart token="md" type="secondary" chartType="area" />
          <Chart token="md" type="secondary" chartType="line" />
          <Chart token="md" type="secondary" chartType="pie" />
          <Chart token="md" type="secondary" chartType="bar" />
        </section>
      </div>
      <div
        className="
          flex flex-col
          items-center justify-start
          w-full
          py-1
        "
      >
        <div
          className="
            w-full
            pl-4
          "
        >
          <Button
            className="
              justify-start
              w-full
            "
            token="sm"
            type="secondary"
            disabled
          >
            <IconDoutone type="secondary" size={16} Icon={CalendarIcon} />{" "}
            Monthly
          </Button>
        </div>
        <section
          className="
            overflow-x-auto
            flex flex-row
            items-center justify-start
            w-full
            gap-4
            py-3
            pl-4
          "
        >
          <Chart token="md" type="secondary" chartType="bar" />
          <Chart token="md" type="secondary" chartType="dougnut" />
          <Chart token="md" type="secondary" chartType="area" />
          <Chart token="md" type="secondary" chartType="line" />
          <Chart token="md" type="secondary" chartType="pie" />
          <Chart token="md" type="secondary" chartType="bar" />
        </section>
      </div>
    </section>
  );
}

export default Analytics;
