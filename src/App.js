import { useState } from 'react';
import './App.css';


function App() {
  const [receiptData, setReceiptData] = useState([
    
  ])

  const [inputData, setInputData] = useState({
    date: "",
    amount: "",
    payment_mode: "",
    remarks: ""
  })

  const inputChange = (e) => {
    console.log(e.target.value)
    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputData.date.length > 0 && inputData.amount.length > 0 && inputData.payment_mode) {
      setReceiptData([...receiptData, inputData])
      console.log(inputData)
      console.log(receiptData)
      setInputData({
        date: "",
        amount: "",
        payment_mode: "",
        remarks: ""
      })
    }
    else {
      alert("Please Fill all mendatory fields")
    }

  }

  return (
    <section className="App">
      <div className="input-div">
        <form action="">
          <h4>Receipt Details</h4>
          <div className="inputs">
            <label>Date<sup style={{ color: "red" }}>*</sup></label>
            <input type="date" name="date" onChange={(e) => inputChange(e)} value={inputData.date}  />
          </div>
          <div className="inputs">
            <label>Amount<sup style={{ color: "red" }}>*</sup></label>
            <input type="number" name="amount" placeholder='Enter Amount (in INR)' onChange={(e) => inputChange(e)} value={inputData.amount} />
          </div>
          <div className="inputs">
            <label>Payment Mode<sup style={{ color: "red" }}>*</sup></label>
            <select name="payment_mode" defaultValue={"Cash"} onChange={(e) => inputChange(e)} value={inputData.payment_mode}>
              <option>Select</option>
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
            </select>
          </div>

          <div className="inputs">
            <label>Remark</label>
            <input type="text" name="remarks" placeholder='Enter Remarks' onChange={(e) => inputChange(e)} value={inputData.remarks} />
          </div>

          <div className="btn-div">
            <button>CANCEL <br /> (ESC)</button>
            <button onClick={(e) => handleSubmit(e)}>SUBMIT <br /> (S)</button>
          </div>
        </form>
      </div>
      <br /><br />



      <div className="input-div">
        <h3>All Receipts</h3>

        <table>

          <tbody>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment Mode</th>
              <th>Remarks</th>
            </tr>
            {
              receiptData && receiptData.map((items, i) =>
                <tr key={i}>
                  <td>{items.date}</td>
                  <td>{items.amount}</td>
                  <td>{items.payment_mode}</td>
                  <td>{items.remarks}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>

    </section>
  );
}

export default App;
