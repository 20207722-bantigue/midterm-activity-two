const StudentDetails = ({ students }) => {
  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", fontFamily: "Arial", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "24px" }}>Students List</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#ddd" }}>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, idx) => (
            <tr key={student.id} style={{ backgroundColor: idx % 2 === 0 ? "#fafafa" : "#fff" }}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{student.id}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{student.name}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{student.email}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetails;