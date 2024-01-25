import SliderStyle from "./SliderStyle"

type sliderType= {
    image: any,
    skip: boolean,
    title: string,
    text: string
}

const Slider = ({image, skip, title, text} : sliderType) => {


  return (
    <SliderStyle>
       <div className="slider__container">
           <p className={` ${skip === false ? "hidden" : null}`}> Skip</p>
           <img src={image} alt="market"/>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
        </div>

    </SliderStyle>
  )
}

export default Slider