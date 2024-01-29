import SliderStyle from "./SliderStyle";

type sliderType= {
    image: string,
    title: string,
    text: string
}

const Slider = ({image, title, text} : sliderType) => {


  return (
    <SliderStyle>
       <div className="slider__container">
           <img src={image} alt="market"/>
            <div className="slider__text">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
        </div>

    </SliderStyle>
  )
}

export default Slider