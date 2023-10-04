
import {useState} from "react";
import {BiSolidRightArrow} from "react-icons/bi"
const Accordion = (props) => {
    const [item, setItem] = useState(props.datas);
  
    const handletoggleActive = () => {
        let newActive = item.active === 1 ? 0 : 1 ;
        setItem({...item, active: newActive});
    };
    return (
        <div className={`bg-[#FFF7F7] duration-500 p-5 border border-gray 
         text-blue group ${item.active === 1? 'is-active':''}`}>
            <div className="flex items-center">
            <div className="text-[28px] p-2 ml-4 group-[.is-active]:rotate-[270deg]
                text-secondary" onClick={handletoggleActive}> <  BiSolidRightArrow className="text-[16px]" /> </div> 
               <div className="w-full text-xl text-gray-600
                group-[.is-active]:font-bold  group-[.is-active]:text-[#FF9C00] ">
                 {item.question}
               </div>
               
            </div>
            <div className="overflow-hidden max-h-0 pl-4 pt-4 ml-8 lg:text-[20px] text-gray-500 
            group-[.is-active]:max-h-[400px] group-[.is-active]:lg:max-h-[200px] lg:leading-[45px]">
               {item.answer} <br/>
               {item.answers} <br/>
               {item.answered} <br/>
               {item.answer4}
            </div>  
        </div>
    );
};

export default Accordion;