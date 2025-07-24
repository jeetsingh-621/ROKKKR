import  SvgMaskEffect  from "/src/components/ui/svg-mask-effect.tsx";
import brandimage from "../assets/images/homep2.png";

const Ourmaskmaker = () => {
  return (
    <div className="w-full pt-10 px-0 sm:pt-20 md:px-16 ">
    
      <div className="w-full h-[60vh]  sm:h-screen p-0 sm:p-30">
        <SvgMaskEffect
          title="Bold. Iconic. You."
          subtitle="Let your fragrance speak louder."
          loading="lazy"
          image={brandimage}
          
          
        />
      </div>
    </div>
  );
};

export default Ourmaskmaker;
