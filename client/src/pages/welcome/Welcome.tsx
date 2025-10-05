import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleAgree = () => {
    localStorage.setItem("termsAccepted", "true");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to Pigeon Chat 🕊️</h1>
      <p className="text-gray-400 mb-6">
        Please agree to our terms and conditions to continue.
      </p>
      <button
        onClick={handleAgree}
        className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg"
      >
        Agree Terms and Continue
      </button>
    </div>
  );
};

export default Welcome;
