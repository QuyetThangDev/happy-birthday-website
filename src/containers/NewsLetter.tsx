import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"
import { SubscribeForm } from "../molecules/SubscribeForm"
import { NewsletterTexts } from "../particles/DataLists"
// import groupOfPlus from "../../assets/plusGroup2.png"
import React from "react"


const NewsLetter = () => {
    return (
        <section className="w-full my-32 flex justify-between relative items-start h-[400px]">
            <div className="bg-color3/10 w-[30%] h-[70%] self-end rounded-r-xl"></div>
            <div className="bg-color3/10 w-[30%] h-[70%] rounded-l-xl"></div>
            <div className="w-full bg-color3/5 h-[100%] absolute flex flex-col items-center
            justify-center md:gap-16 gap-10 px-5">
                <Text as="h1" className="w-full text-xl text-center lg:text-3xl md:text-2xl text-color3/70 lg:w-3/5">
                    {NewsletterTexts.firstText}
                </Text>
                <SubscribeForm />
            </div>
            {/* <Image image={groupOfPlus} alt="Plus" className="absolute h-32 -bottom-16 right-2" /> */}
        </section>
    )
}

export default NewsLetter