import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [storeInfo, setStoreInfo] = useState({ movieName: "", dirName: "" });
  const [showData, setShowData] = useState([]);
  const [updateTable, setUpdateTable] = useState(null);

  const storeData = (e) => {
    setStoreInfo({ ...storeInfo, [e.target.name]: e.target.value });
  };

  const submitData = () => {
    const tempArr = showData;

    tempArr.push(storeInfo);
    setShowData(tempArr);
    setUpdateTable(updateTable + 1);
  };

  const removeItem = (index) => {
    const tempArr = showData;
    tempArr.splice(index, 1);
    setShowData(tempArr);
    setUpdateTable(updateTable + 1);
  };

  return (
    <>
      <div className="App">
        <label>Movie Name </label>
        <input type="text" name="movieName" onChange={storeData} />
        <br />
        <br />
        <label>Director Name </label>
        <input type="text" name="dirName" onChange={storeData} />
        <br />
        <button
          type="button"
          onClick={submitData}
          style={{
            width: "20%",
            height: "8vh",
            marginTop: "3vh",
            backgroundColor: "cyan",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          Add
        </button>
      </div>
      <table
        style={{
          borderWidth: "2px",
          margin: "auto",
          borderColor: "black",
          borderStyle: "solid",
          position: "relative",
          top: "4vh",
          width: "80%"
        }}
      >
        <thead>
          <tr>
            <td>Movie Name</td>
            <td>Director Name</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {updateTable &&
            showData?.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item?.movieName}</td>
                  <td>{item?.dirName}</td>
                  <td>
                    <button onClick={() => removeItem(i)}>Remove</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
