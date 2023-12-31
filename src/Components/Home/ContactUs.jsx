import { HiOutlineMail } from 'react-icons/hi';
import { ImMobile } from 'react-icons/im';

const ContactUs = () => {
    return (
        <div className=" p-10">
            <h1 className="text-4xl lg:text-3xl text-secondary text-center font-bold">যোগাযোগ</h1>
            <div className="flex md:flex-row flex-col justify-around items-center mt-16">
                <div className="w-full md:w-2/4 text-center space-y-10 flex flex-col justify-center items-center">
                  <h1 className="text-secondary font-bold text-3xl">অফিস/মেইল এড্রেস</h1>
                  <p className="text-gray-600 text-2xl ">৮০/১, আউটার সার্কুলার রোড, মালিবাগ মোড়, শাহাজালাল কমপ্লেক্স, ৯ম তলা, মালিবাগ, ঢাকা-১২১৭</p>
                  <button className='bg-primary p-3  pl-10 pr-10 text-xl rounded-md flex gap-1 font-sans  justify-center items-center  mt-10'><HiOutlineMail/> care@mofassel.com</button>
                </div>
                <div className="w-full md:w-2/4  text-center ">
                  <h1 className="text-secondary font-bold text-2xl mt-10 md:mt-0 lg:text-3xl">কল/হোয়াটস্‌এপ সাপোর্ট</h1>
                  <div className='flex flex-col justify-center items-center'>
                    <div>
                    <button className='bg-secondary p-3  pl-10 pr-10 rounded-md flex justify-center items-center gap-2  mt-10'> <ImMobile/>+8801581 159789</button>
                    </div>
                    <div>
                    <button className='bg-secondary p-3  pl-10 pr-10 rounded-md flex gap-2 justify-center items-center  mt-10'><ImMobile/> +880768 608 427</button>
                    </div>
                  </div>
              
                </div>
            </div>
        </div>
    );
};

export default ContactUs;