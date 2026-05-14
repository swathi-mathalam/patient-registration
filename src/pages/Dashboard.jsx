import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-100 p-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-700">
        Healthcare Dashboard
      </h1>

      <p className="text-center text-gray-600 mt-2">
        Welcome to Patient Management System
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-bold">
            Total Patients
          </h2>

          <p className="text-3xl text-blue-600 mt-2">
            100
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-bold">
            Appointments
          </h2>

          <p className="text-3xl text-green-600 mt-2">
            25
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl font-bold">
            Lab Tests
          </h2>

          <p className="text-3xl text-red-600 mt-2">
            40
          </p>
        </div>
      </div>

      {/* Register Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() =>
            navigate("/patient-registration")
          }
          className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
        >
          Register Patient
        </button>
      </div>
    </div>
  );
};

export default Dashboard;