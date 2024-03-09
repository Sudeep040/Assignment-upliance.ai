const SignUp: React.FC = () => {
  const mockSignUp = () => {
    console.log("User signed up.");
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <button onClick={mockSignUp}>Sign Up with Google</button>
    </div>
  );
};
export default SignUp;
