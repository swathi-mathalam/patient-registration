import { useNavigate } from "react-router-dom";
import {
  FaUserInjured,
  FaCalendarCheck,
  FaFlask,
} from "react-icons/fa";


const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-cyan-100 p-8">
 
       <div>
    <h2 className="text-3xl font-bold text-blue-700">
      Healthcare Dashboard
    </h2>
    <p className="text-gray-500 text-sm">
      Welcome to Patient Management System
    </p>  
  </div>

      
     {/* Hero Image */}
<div className="flex justify-center mt-8">
  <img
    src="https://media.istockphoto.com/id/2215511952/photo/healthy-lifestyle-and-medical-concept.jpg"
    alt="Healthcare"
    className="w-[1000px] h-[280px] object-cover rounded-3xl shadow-xl"
  />
</div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
          <div className="flex items-center gap-4">
            <FaUserInjured className="text-5xl text-blue-600" />
            <div>
              <h2 className="text-xl font-bold">
                Total Patients
              </h2>
              <p className="text-3xl text-blue-600 mt-2">
                100
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
          <div className="flex items-center gap-4">
            <FaCalendarCheck className="text-5xl text-green-600" />
            <div>
              <h2 className="text-xl font-bold">
                Appointments
              </h2>
              <p className="text-3xl text-green-600 mt-2">
                25
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
          <div className="flex items-center gap-4">
            <FaFlask className="text-5xl text-red-600" />
            <div>
              <h2 className="text-xl font-bold">
                Lab Tests
              </h2>
              <p className="text-3xl text-red-600 mt-2">
                40
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Register Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() =>
            navigate("/patient-registration")
          }
          className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-lg"
        >
          Register Patient
        </button>
      </div>
      {/* Footer */}
<footer className="mt-16 bg-blue-700 text-white rounded-3xl p-5 text-center shadow-lg">
  <p className="text-lg font-medium">
    © 2026 Healthcare Management System
  </p>
  <p className="text-sm mt-1 text-blue-100">
    Providing better healthcare services for patients
  </p>
</footer>
    </div>
  );
};


export default Dashboard;