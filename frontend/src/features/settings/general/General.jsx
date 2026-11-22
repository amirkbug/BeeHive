import EditInformation from "./EditInformation";
import Explanations from "../../../ui/atoms/Explanations";
import EditPreferences from "./EditPreferences";
import Line from "../../../ui/atoms/Line";

const baseClasses = {
  form: `
  flex flex-col
  justify-start
  w-full h-full
  gap-5
  px-4
  pb-4
  overflow-y-auto
  `,
};

function SettingsGeneral() {
  return (
    <form className={baseClasses.form}>
      <Explanations title="Edit your profile information.">
        <p>
          Update your username, email, and password, and personalize your
          profile background color.
        </p>
      </Explanations>
      <EditInformation />
      <Line />
      <Explanations title="Manage your application preferences.">
        <p>
          Configure your sync frequency, choose a language, and select a
          customization preset to personalize your dashboard experience.
        </p>
      </Explanations>
      <EditPreferences />
    </form>
  );
}

export default SettingsGeneral;
