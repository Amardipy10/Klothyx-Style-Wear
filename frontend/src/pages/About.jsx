import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="about_img"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Klothyx was born in India with a vision to blend modern fashion with
            everyday comfort. What started as a simple idea has now grown into a
            homegrown brand focused on delivering quality clothing that matches
            the style and lifestyle of Indian customers.
          </p>
          <p>
            From sourcing premium fabrics to ensuring perfect fits, we pay close
            attention to every detail. Our collections are thoughtfully designed
            to suit Indian tastes—whether it’s casual wear, festive styles, or
            everyday essentials—while keeping quality and affordability at the
            core.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Klothyx is to make stylish, reliable, and affordable
            fashion accessible to everyone across India. We aim to build trust
            through quality products, transparent pricing, and a smooth shopping
            experience from order to delivery.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Quality You Can Trust:</b>
          <p className="text-gray-600">
            Every product goes through strict quality checks to meet Indian
            standards of comfort, durability, and style.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Made for India:</b>
          <p className="text-gray-600">
            Designed keeping Indian climate, trends, and preferences in mind,
            our collections are practical, stylish, and value-driven.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Customer-First Support:</b>
          <p className="text-gray-600">
            Our support team is always ready to help, ensuring a smooth and
            satisfying shopping experience for every customer.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;