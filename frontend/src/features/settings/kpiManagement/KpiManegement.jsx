import Form from "./Form";
import KpiPreview from "./KpiPreview";
import Explanations from "../../../ui/atoms/Explanations";
import Footer from "./Footer";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setKpiContents } from "../settingsSlice";
import { useForm } from "react-hook-form";
import { useThemeContext } from "../../../contexts/ThemeContext";

const baseClasses = {
  main: `
    flex flex-col
    w-full h-full
  `,
  content: `
    flex flex-col flex-1
    min-h-0
    overflow-y-auto
    gap-4
  `,
};

function KpiManegement() {
  const { id } = useParams();
  const { selectedTypeInverse } = useThemeContext();
  const kpiContents = useSelector((state) => state.settings.kpiContents);
  const selectedKpi = kpiContents.find((kpi) => String(kpi.id) === id);
  const { register, handleSubmit, control, reset, formState } = useForm({
    defaultValues: selectedKpi,
  });
  const dispatch = useDispatch();

  function onSubmit(data) {
    dispatch(setKpiContents({ id: selectedKpi.id, data: data }));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={baseClasses.main}>
      <main className={baseClasses.content}>
        <Explanations title="Customize your KPI metrics.">
          <p>
            Choose which connected data sources and metrics your KPIs are based
            on, and configure the values you want to track on your dashboard.
          </p>
        </Explanations>
        <KpiPreview selectedKpi={selectedKpi} />
        <Form
          formState={formState}
          selectedTypeInverse={selectedTypeInverse}
          register={register}
          control={control}
          key={id}
          selectedKpi={selectedKpi}
        />
      </main>
      <Footer selectedTypeInverse={selectedTypeInverse} reset={reset} />
    </form>
  );
}

export default KpiManegement;
