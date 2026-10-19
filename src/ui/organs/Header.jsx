import UserProfile from "../atoms/UserProfile";

function Header() {
  const tokens = ["sm", "md", "lg", "xl"];

  return (
    <header className="flex flex-col gap-8 p-8">
      <h1 className="text-2xl font-bold">UserProfile Playground</h1>

      <section className="flex flex-col gap-4">
        <h2 className="font-semibold">Profile Sizes</h2>

        <div className="border-primary-200 flex flex-wrap items-end gap-8 rounded-lg border p-6">
          {tokens.map((token) => (
            <div key={token} className="flex flex-col items-center gap-3">
              <UserProfile token={token} />

              <span className="text-secondary-400 text-sm">{token}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-semibold">Profile in Context</h2>

        <div className="border-primary-200 flex items-center gap-3 rounded-lg border p-4">
          <UserProfile token="md" />

          <div className="flex flex-col">
            <span className="font-medium">User Name</span>
            <span className="text-secondary-400 text-sm">
              Dashboard Account
            </span>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
