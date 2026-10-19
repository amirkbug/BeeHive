import HorizintalJustNone from "../../assets/userProfilePlaceholder/HorizintalJustNone.jpg";

//Object for diffrent variations
const tokens = {
  SM: "w-10 h-10",
  MD: "w-12 h-12",
  LG: "w-14 h-14",
  XL: "w-19.25 h-19.25",
};

//Base style
const base =
  "cursor-pointer items-center rounded-full transition-all hover:shadow-300-BoxShadowM";

//Component itself
function UserProfile({ token = "MD" }) {
  return (
    <img
      className={`${tokens[token]} ${base} object-cover`}
      src={HorizintalJustNone}
      alt="User profile"
    />
  );
}

export default UserProfile;
