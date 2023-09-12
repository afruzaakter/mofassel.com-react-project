import SellingMachineSecrate from "./SellingMachineSecrate";

const Home = () => {
    return (
        <div>
            <div className="bg-primary w-screen p-3 pb-8">
            
            <h2 className="text-base-100 text-center  text-2xl font-Roboto">সর্বোচ্চ প্রায় ৯৭% ছাড়ে এনরোল নিন এখনই, অফার সীমিত সময়ের জন্য প্রযোজ্য!</h2>
       <div>
        <div className="text-info text-center text-4xl mt-4 font-bold ">
            <span>01 :</span>
            <span>23 :</span>
            <span>27 :</span>
            <span>40 </span>
          
         </div>
         <div className="text-md text-center mt-3 space-x-4">
            <span>DAYS </span>
            <span>HRS </span>
            <span>MINS </span>
            <span>SECS </span>
         </div>
     </div>
        </div>
        <SellingMachineSecrate/>
        </div>
    );
};

export default Home;