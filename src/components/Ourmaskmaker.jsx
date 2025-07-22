import  SvgMaskEffect  from "/src/components/ui/svg-mask-effect.tsx";
import brandimage from "../assets/images/homep2.png";

const Ourmaskmaker = () => {
  return (
    <div className="w-full py-10 px-0 sm:pt-20 md:px-16 ">
    
      <div className="w-full h-[60vh] bg-[linear-gradient(to_right,_black_0%,_#0c0f1a_40%,_#0c0f1a_50%,_black_100%)] sm:h-screen p-0 sm:p-30">
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
