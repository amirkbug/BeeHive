import HorizintalJustNone from "../../assets/userProfilePlaceholder/HorizintalJustNone.jpg";

//Object for diffrent variations
const tokens = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-14 h-14",
  xl: "w-19.25 h-19.25",
};

//Base style
const base =
  "cursor-pointer items-center rounded-full transition-all hover:shadow-300-BoxShadowM";

//Component itself
function UserProfile({ token = "md" }) {
  return (
    <img
      className={`
        object-cover
        ${tokens[token]}
        ${base}
      `}
      src={HorizintalJustNone}
      alt="User profile"
    />
  );
}

export default UserProfile;
