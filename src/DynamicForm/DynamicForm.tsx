import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DynamicForm = () => {
  const [data, setData] = useState([{ name: "Jeevan", role: "Admin" }]);

  const handleAdd = () => {
    setData([...data, { name: "", role: "" }]);
  };

  const handleChange = (e, index) => {
    const tempData = data;
    tempData[index][e.target.name] = e.target.value;
    setData([...tempData]);
  };

  return (
    <>
      <div className="container my-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th colSpan={2}>
                <button className="btn btn-success" onClick={handleAdd}>
                  ADD
                </button>
              </th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    className="form-control"
                    defaultValue={item.name}
                    onChange={(e) => handleChange(e, index)}
                    name="name"
                  />
                </td>
                <td>
                  <input
                    className="form-control"
                    defaultValue={item.role}
                    onChange={(e) => handleChange(e, index)}
                    name="role"
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={2}>
                <button
                  className="btn btn-primary"
                  onClick={() => console.log(data)}
                >
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DynamicForm;
