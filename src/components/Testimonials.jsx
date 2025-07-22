import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { ThumbsUp, Sparkles } from "lucide-react"; // optional icons

const Testimonials = () => {
  return (
    <div className="w-full py-20 px-4 md:px-16 bg-[#E8F4E6] text-black">
      <div className="flex flex-col md:flex-row justify-between mb-10">
        <h1 className="text-2xl font-semibold mb-6 md:w-1/3">Testimonial</h1>
        <p className="text-xl md:text-4xl font-semibold md:w-2/3 font-[roboto]">
          Real stories from brands we’ve helped grow. Hear what clients say
          about working with Rokkkr Metaman.
        </p>
      </div>

      <InfiniteMovingCards
        direction="right"
        speed="normal"
        items={[
          {
            quote:
              "HALO has redefined the way our customers experience fragrance. Pure luxury.",
            company: "HALO",
            name: "Tiyahnn Bryant",
            role: "CEO at RollUpLife Inc",
            icon: <Sparkles className="w-5 h-5 text-primary" />,
          },
          {
            quote:
              "Crafted with legends in mind, HALO is not just a perfume, it’s a lifestyle statement.",
            company: "HALO",
            name: "Aarav Mehta",
            role: "Creative Director at Studio 27",
            icon: <ThumbsUp className="w-5 h-5 text-primary" />,
          },
          {
            quote:
              "From the design to the scent, HALO is unforgettable. It elevates our brand image.",
            company: "HALO",
            name: "Sneha Kapoor",
            role: "Brand Manager at LuxeHaus",
          },
          {
            quote:
              "Every drop of HALO speaks of soul and substance. Customers can’t get enough.",
            company: "HALO",
            name: "Rahul Sharma",
            role: "Founder at ScentNest",
          },
        ]}
      />
    </div>
  );
};

export default Testimonials;
