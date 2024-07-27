import { useCallback, useRef } from "react";
import React from "react";
import { Text } from "../atoms/Text"
import { TestimonialTexts } from "../particles/DataLists"
import Slider from "react-slick";
import { Button } from "../atoms/Button";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { Card } from "../molecules/Card";
// import ProfileImg1 from "../../assets/profile1.jpeg"
// import ProfileImg2 from "../../assets/profile2.jpeg"
// import ProfileImg3 from "../../assets/profile3.jpeg"
// import ProfileImg4 from "../../assets/profile4.jpeg"

const Testimonials = () => {
    const sliderRef = useRef<Slider | null>();

    // Function for next button
    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };
    // function for previous button
    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,

    };

    return (
        <section className="relative flex flex-col items-start justify-center w-full h-auto gap-5 px-6 lg:px-24 md:px-10 mt-36">
            <main className='grid w-full gap-8 md:grid-cols-2 lg:gap-0 md:gap-5'>
                {/* Text and Steps Container  */}
                <div className='flex flex-col w-full gap-6'>
                    {/* <Text as="p" className="text-base font-light tracking-widest text-color3/80">
                        {TestimonialTexts.firstText}
                    </Text> */}
                    {/* <Text as="h1" className="text-4xl font-medium lg:text-5xl md:text-3xl text-color3">
                        {TestimonialTexts.secondText}
                    </Text> */}
                </div>
                {/* Testimonial Slides Container  */}
                <div className="w-full lg:h-[400px] flex justify-center gap-4 items-center">
                    <div className="lg:h-[250px] w-[90%]">
                    </div>
                    {/* Controllers  */}
                    <div className="flex flex-col gap-4 pb-5">
                        <Button onClick={previous} id="prev" className="p-2 border-none rounded-full outline-none cursor-pointer bg-color2/30 text-color3 hover:bg-color2" type="button">
                            <CaretUp size={18} color="currentColor" weight="fill" />
                        </Button>
                        <Button onClick={next} id="next" className="p-2 border-none rounded-full outline-none cursor-pointer bg-color2/30 text-color3 hover:bg-color2" type="button">
                            <CaretDown size={18} color="currentColor" weight="fill" />
                        </Button>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Testimonials