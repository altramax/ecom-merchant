import CourierStyle from "./CourierStyles"

const Courier = () => {
  return (
    <CourierStyle>

       <div className="courier__container">
        <div className="courier__information">
            <h4>Courier Name</h4>
            <p>Emeka Agbo</p>
        </div>
        <div className="courier__information">
            <h4>Courier Phone Number</h4>
            <p>07056832245</p>
        </div>
       </div>
    </CourierStyle>
  )
}

export default Courier