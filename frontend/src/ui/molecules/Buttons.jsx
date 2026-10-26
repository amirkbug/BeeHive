//Objects for customize variations
const tokens = {
  sm: "text-12px px-2 py-1",
  md: "text-14px px-3 py-2",
  lg: "text-16px px-4 py-3",
};

const types = {
  primary: `
  text-primary-100
  bg-secondary-500
  inset-ring-0
  hover:shadow-300-BoxShadowM
  active:inset-ring-accent-100  active:shadow-none active:inset-ring-1
  focus-visible:inset-ring-accent-200
  `,
  primary_destructive: `
  text-destructive-500
  bg-secondary-500
  inset-ring-0
  hover:shadow-300-destructure-BoxShadowM
  active:inset-ring-destructive-400  active:inset-ring-1 active:shadow-none
  focus-visible:inset-ring-destructive-400
  `,
  primary_warning: `
  text-warning-300
  bg-secondary-500
  inset-ring-0
  hover:shadow-300-BoxShadowM
  active:inset-ring-accent-100  active:inset-ring-1 active:shadow-none
  focus-visible:inset-ring-accent-100 
  `,
  primary_success: `
  text-success-400
  bg-secondary-500
  inset-ring-0
  hover:shadow-300-success-BoxShadowM
  active:inset-ring-success-400 active:inset-ring-1 active:shadow-none
  focus-visible:inset-ring-success-400
  `,

  secondary: `
  text-secondary-500
  bg-primary-100
  inset-ring-0
  hover:shadow-300-BoxShadowM
  active:inset-ring-accent-100 active:shadow-none active:inset-ring-1
  focus-visible:inset-ring-accent-100
  `,
  secondary_destructive: `
  text-destructive-500
  bg-primary-100
  inset-ring-0
  hover:shadow-300-destructure-BoxShadowM
  active:inset-ring-destructive-400 active:inset-ring-1 active:shadow-none
  focus-visible:inset-ring-destructive-400
  `,
  secondary_warning: `
  text-warning-500
  bg-primary-100
  inset-ring-0
  hover:shadow-300-BoxShadowM
  active:inset-ring-accent-100 active:inset-ring-1 active:shadow-none
  focus-visible:inset-ring-accent-100
  `,
  secondary_success: `
  text-success-500
  bg-primary-100
  inset-ring-0
  hover:shadow-300-success-BoxShadowM
  active:inset-ring-success-400 active:inset-ring-1 active:shadow-none
  focus-visible:inset-ring-success-400
  `,

  outline_secondary: `
  text-secondary-500
  inset-ring-1 inset-ring-secondary-300
  hover:inset-ring-0 hover:shadow-200-BoxShadowM hover:bg-primary-100
  active:inset-ring-accent-100 active:inset-ring-1 active:shadow-none active:bg-transparent
  focus-visible:inset-ring-accent-100
  `,
  outline_primary: `
  text-primary-100
  inset-ring-1 inset-ring-primary-300
  hover:inset-ring-0 hover:shadow-200-BoxShadowM hover:bg-secondary-500
  active:inset-ring-accent-100 active:inset-ring-1 active:bg-transparent  active:shadow-none active:inset-ring-1
  focus-visible:inset-ring-accent-100
  `,

  ghost_secondary: `
  text-primary-300
  hover:text-primary-100
  active:text-primary-100
  focus-visible:text-primary-300
  `,
  ghost_primary: `
  text-secondary-300
  hover:text-secondary-500
  active:text-secondary-500
  focus-visible:text-secondary-500
  `,
};

//Base classes
const base = `
  group
  flex flex-row justify-center items-center
  w-fit h-fit
  gap-1
  rounded-lg
  transition-all
  cursor-pointer
  focus-visible:outline-none
  focus-visible:inset-ring-1
  `;

function Buttons({ token = "md", type = "primary", children }) {
  //Error boundry
  const selectedToekn = tokens[token] ?? tokens.md;
  const selectedType = types[type] ?? types.primary;

  //Component itself
  return (
    <button
      className={`
        ${base}
        ${selectedType}
        ${selectedToekn}
      `}
    >
      {children}
    </button>
  );
}

export default Buttons;
