import './App.css';
import {useState} from "react"
function App() {
  const [isSelected, setSelected] = useState(false)
  const [position, setPosition] = useState({ top: "60%", left: "48%" })
  const handleclick = (select) => {
      if (select === "yes") {
          setSelected(true)
          setPosition({top:"60%",left:"48%"})
      }
      else {
          setSelected(false)
      }
  }
  const handlePosition = () => {
      if (!isSelected) {
          const top = Math.floor(Math.random() * 80) + 10;
          const left = Math.floor(Math.random() * 80) + 10;
          setPosition({ top: `${top}%`, left: `${left}%` })
      }
  }
  const handlesubmit = ()=>{
      if(isSelected)
      {
          alert("msg me on whatsapp")
      }else{
          const top = Math.floor(Math.random() * 80) + 10;
          const left = Math.floor(Math.random() * 80) + 10;
          setPosition({ top: `${top}%`, left: `${left}%` })
      }
  }
  return (
      <div className='box' style={{ position: "relative", height: "100vh", textAlign: "center", alignContent: "center", backgroundColor: "rgb(192, 153, 255)", }}>
          <h1 style={{ marginBottom: "5vmin", fontSize: "8vmin" }}>Round La Yenar Ka? 7:00 PM</h1>
          <button onClick={() => handleclick("yes")} style={{ backgroundColor:`${isSelected?"green":"white"}`, color:`${isSelected?"white":"black"}`, border: "none", padding: "1vmin", fontSize: "2vmin", cursor: "pointer", borderRadius: "1vmin", marginRight: "3vmin" }}>Yes</button>
          <button className='no' onClick={() => handleclick("no")} style={{ backgroundColor: "white", color: "black", border: "none", padding: "1vmin", fontSize: "2vmin", cursor: "pointer", borderRadius: "1vmin" }}>No</button><br />
          <button
              style={{
                  marginTop: "5vmin",
                  border: "none",
                  borderRadius: "1vmin",
                  backgroundColor: "black",
                  color: "white",
                  padding: "1vmin",
                  fontSize: "2vmin",
                  cursor: "pointer",
                  position: "absolute",
                  top: position.top,
                  left: position.left,
                  transition: 'top 0.3s, left 0.3s',
              }}
              onMouseOver={handlePosition}
              onClick={handlesubmit}
          >{isSelected?"Kam25":"Chal na Be"}:Clickme</button>
      </div>
  )
}

export default App;
