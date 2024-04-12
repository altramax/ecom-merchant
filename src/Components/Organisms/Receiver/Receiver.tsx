import ReceiverStyle from "./ReceiverStyles"

const Receiver = () => {
  return (
    <ReceiverStyle>

       <div className="receiver__container">
        <div className="receiver__information">
            <h4>Receiver Name</h4>
            <p>Emeka Agbo</p>
        </div>
        <div className="receiver__information">
            <h4>Receiver Phone Number</h4>
            <p>07056832245</p>
        </div>
        <div className="receiver__information">
            <h4>Receiver Email</h4>
            <p>izyyope@gmail.com</p>
        </div>
        <div className="receiver__information">
            <h4>Receiver Address</h4>
            <p> 234, adeoti Avenue, Ikeja Lagos</p>
        </div>
       </div>
    </ReceiverStyle>
  )
}

export default Receiver