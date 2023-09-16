import SecrateOne from "./SecrateOne";
import SecrateThree from "./SecrateThree";
import SecrateTwo from "./SecrateTwo";
import SellingMachineSecrate from "./SellingMachineSecrate";
import SellingMachineSecrateCard from "./SellingMachineSecrateCard";
import SellingMachineWork from "./SellingMachineWork";

const Home = () => {
    return (
        <section>
            <div className="bg-primary lg:w-screen  md:w-screen w-screen p-3 pb-8">
            
            <h2 className="text-white text-center text-xl   lg:text-2xl md:text-xl font-Roboto">সর্বোচ্চ প্রায় ৯৭% ছাড়ে এনরোল নিন এখনই, অফার সীমিত সময়ের জন্য প্রযোজ্য!</h2>
       <div>
        <div className="text-black text-center text-4xl mt-4 font-bold ">
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
        </section>
    );
};

export default Home;