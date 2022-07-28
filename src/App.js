import { useState } from 'react';
import './App.css';


function App() {
  const receiptData = [
    {
      "Date": "22/05/2022",
      "Amount": "500rs",
      "Payment_Mode": "Cash",
      "Remarks": "For Food"
    },
    {
      "Date": "22/05/2022",
      "Amount": "500rs",
      "Payment_Mode": "Cash",
      "Remarks": "For Food"
    },
    {
      "Date": "22/05/2022",
      "Amount": "500rs",
      "Payment_Mode": "Cash",
      "Remarks": "For Food"
    },
    {
      "Date": "22/05/2022",
      "Amount": "500rs",
      "Payment_Mode": "Cash",
      "Remarks": "For shopping"
    }
  ]

  const [inputData, setInputData] = useState({
    date: "",
    amount: "",
    payment_mode: "",
    remarks: ""
  })
  const inputChange = (e)=>{
    console.log(e.target.value)
  }
  return (
    <section className="App">
      <div className="input-div">
        <form action="">
          <h4>Receipt Details</h4>
          <div className="inputs">
            <label>Date<sup style={{ color: "red" }}>*</sup></label>
            <input type="date" name="date" onChange={(e)=>inputChange(e)} />
          </div>
          <div className="inputs">
            <label>Amount<sup style={{ color: "red" }}>*</sup></label>
            <input type="text" name="amount" placeholder='Enter Amount (in INR)' />
          </div>
          <div className="inputs">
            <label>Payment Mode<sup style={{ color: "red" }}>*</sup></label>
            <select name="payment_mode" id="">
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
            </select>
          </div>

          <div className="inputs">
            <label>Remark</label>
            <input type="text" name="remarks" placeholder='Enter Remark' />
          </div>

          <div className="btn-div">
            <button>CANCEL <br /> (ESC)</button>
            <button>SUBMIT <br /> (S)</button>
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
            receiptData.reverse().map((items, i) =>
              <tr key={i}>
                <td>{items.Date}</td>
                <td>{items.Amount}</td>
                <td>{items.Payment_Mode}</td>
                <td>{items.Remarks}</td>
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
