import AuthenticationLayout from "../features/authentication/AuthenticationLayout";

function Authentication() {
  return (
    <AuthenticationLayout>
      <AuthenticationLayout.FrameRing />
      <AuthenticationLayout.Overlay />
      <AuthenticationLayout.HoverLogo />

      <AuthenticationLayout.Login />
      <AuthenticationLayout.SignUp />
      <AuthenticationLayout.ForgotPassword />
    </AuthenticationLayout>
  );
}

export default Authentication;
