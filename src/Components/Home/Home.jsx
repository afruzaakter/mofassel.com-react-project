import Categori from "./Categori";
import ContactUs from "./ContactUs";
import Faq from "./FAQ/Faq";
// import RoundedDesign from "./FAQ/RoundedDesign";
import OrderSection from "./OrderSection";
import ReviewSection from "./ReviewSection";
import SecrateOne from "./SecrateOne";
import SecrateThree from "./SecrateThree";
import SecrateTwo from "./SecrateTwo";
import SellingMachineSecrate from "./SellingMachineSecrate";
import SellingMachineSecrateCard from "./SellingMachineSecrateCard";
import SellingMachineWork from "./SellingMachineWork";
import SellingMachingPricing from "./SellingMachingPricing";

const Home = () => {
    return (
        <section className="  ">
            <div className="bg-primary  p-3 pb-8">
            
            <h2 className="text-white text-center text-xl   lg:text-2xl md:text-xl font-body ">সর্বোচ্চ প্রায় ৯৭% ছাড়ে এনরোল নিন এখনই, অফার সীমিত সময়ের জন্য প্রযোজ্য!</h2>
            
       <div>
        <div className="text-black text-center text-4xl mt-8 font-bold ">
            <span>01 :</span>
            <span>23 :</span>
            <span>27 :</span>
            <span>40 </span>
          
         </div>
         <div className="text-md text-black text-center mt-3 space-x-4">
            <span>DAYS </span>
            <span>HRS </span>
            <span>MINS </span>
            <span>SECS </span>
         </div>
     </div>
        </div>
        <SellingMachineSecrate/>
        <SellingMachineWork/>
        <SellingMachineSecrateCard/>
        <SecrateOne/>
        <SecrateTwo/>
        <SecrateThree/>
        <Categori/>
        <ReviewSection/>
        <SellingMachingPricing/>
        <OrderSection/>
         <Faq/>
        <ContactUs/>
        {/* <RoundedDesign/> */}
        </section>
    );
};

export default Home;