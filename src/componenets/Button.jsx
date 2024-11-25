import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const Button = () => {

  const slides = [
    { id: 1, text: "Design Efficiency" },
    { id: 2, text: "Style Innovation" },
    { id: 3, text: "Creative Solutions" },
    { id: 4, text: "Modern Aesthetics" },
  ];
  return (





    <>







<h1 className="text-3xl font-black text-black md:text-4xl md:leading-[60px] lg:text-6xl ">
        We're a Full-Service
        <div className=" mx-auto inline-block">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        verticalSwipe="natural"
        axis="vertical"
        autoPlay='true'
        useKeyboardArrows
        className="rounded-lg shadow-lg"
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex justify-center items-center h-full"
          >
            <h2 className="text-4xl p-2 font-bold text-blue-600">{slide.text}</h2>
            
          </div>
          
        ))}
      </Carousel>
    </div>



       
         {/* <div className=" inline-block">
          <Slider {...settings}>
            {slides.map((text, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-full"
              >
                <span className="text-3xl lg:text-6xl text-[#f72d74] font-black  md:text-4xl md:leading-[60px] ">
                  {text}
                </span>
              </div>
            ))}
          </Slider>
        </div>  */}


				
        <br />
        Development Agency
      </h1>







     {/*  <div className="relative flex overflow-x-hidden">
  <div className="py-12 animate-marquee whitespace-nowrap">
    <span className="text-4xl mx-4">Marquee Item 1</span>
    <span className="text-4xl mx-4">Marquee Item 2</span>
    <span className="text-4xl mx-4">Marquee Item 3</span>
    <span className="text-4xl mx-4">Marquee Item 4</span>
    <span className="text-4xl mx-4">Marquee Item 5</span>
  </div>

  <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
    <span className="text-4xl mx-4">Marquee Item 1</span>
    <span className="text-4xl mx-4">Marquee Item 2</span>
    <span className="text-4xl mx-4">Marquee Item 3</span>
    <span className="text-4xl mx-4">Marquee Item 4</span>
    <span className="text-4xl mx-4">Marquee Item 5</span>
  </div>
</div> */}



    </>
  )
}

export default Button