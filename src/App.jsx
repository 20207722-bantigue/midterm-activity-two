import { useState } from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import StudentDetails from "./components/StudentDetails";
import { Routes, Route } from "react-router";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Juan Dela Cruz", email: "juan@example.com", course: "BSIT" },
    { id: 2, name: "Maria Santos", email: "maria@example.com", course: "BSCS" }
  ]);

  const addStudent = (newStudent) => {
    setStudents(prev => [
      ...prev,
      { id: prev.length + 1, ...newStudent }
    ]);
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register addStudent={addStudent} />} />
          <Route path="/students" element={<StudentDetails students={students} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;