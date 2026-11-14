import EditProfile from "./EditProfile";
import EditInformation from "./EditInformation";
import EditBackgroundColor from "./EditBackgroundColor";

const baseClasses = {
  form: `
  flex flex-col
  justify-start
  w-full h-full
  gap-10
  px-4
  pb-4
  `,
};

function SettingsGeneral() {
  return (
    <form className={baseClasses.form}>
      <EditProfile />
      <EditInformation />
      <EditBackgroundColor />
    </form>
  );
}

export default SettingsGeneral;
