import { FaCheckDouble } from 'react-icons/fa';

const Categori = () => {
    return (
            <div >
                 <h2 className="text-center fon-hind-siliguri text-3xl text-secondary mt-24 mb-8 font-bold">সেলিং মেশিন মাল্টিপল মাধ্যমে প্রচার করে যেকোন পন্য/সেবা সেলস্‌ করতে পারবেন</h2>
          <div className='flex flex-col lg:flex-row justify-around items-center gap-8 p-10'>
          <div className="md:w-2/4 w-full  bg-white shadow-xl ">
             <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl text-black">কি কি উপায়ে ব্যবহার করবেন?</h2>
            <ul className='flex flex-col items-start text-xl text-secondary space-y-6 mt-8'>
            <li className='flex justify-center items-center gap-2'><FaCheckDouble/>ব্যক্তি পর্যায়ে কাস্টমারের সাথে আলোচনায়</li>
            <li className='flex justify-center items-center gap-2'><FaCheckDouble/>ছোট-বড় হল রুমে সেমিনার পরিচালনায়</li>
            <li className='flex justify-center items-center gap-2'><FaCheckDouble/>ফেসবুক, ইউটিউব বা জুম লাইভ করার সময়</li>
            <li className='flex justify-center items-center gap-2'><FaCheckDouble/>সিরিজ ভিডিও রেকর্ড করে রিটার্গেট মার্কেটিং করা</li>
            <li className='flex justify-center items-center gap-2'><FaCheckDouble/>অটোমেটেড ওয়েবিনার ২৪/৭ প্রচার করার সুযোগ</li>
            </ul>
             </div>
             </div>
             <div className=" md:w-2/4 w-full bg-white shadow-xl ">
             <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl text-black">কি কি উপায়ে ব্যবহার করবেন?</h2>
            <ul className='flex flex-col items-start text-xl text-secondary mt-8 space-y-6'>
            <li className='flex justify-center items-center gap-2'><FaCheckDouble/>ব্যক্তি পর্যায়ে কাস্টমারের সাথে আলোচনায়</li>
            <li className='flex justify-center items-center gap-2'><FaCheckDouble/>ছোট-বড় হল রুমে সেমিনার পরিচালনায়</li>
            <li className='flex justify-center items-center gap-2'><FaCheckDouble/>ফেসবুক, ইউটিউব বা জুম লাইভ করার সময়</li>
            <li className='flex justify-center items-center gap-2'><FaCheckDouble/>সিরিজ ভিডিও রেকর্ড করে রিটার্গেট মার্কেটিং করা</li>
            <li className='flex justify-center items-center gap-2'><FaCheckDouble/>অটোমেটেড ওয়েবিনার ২৪/৭ প্রচার করার সুযোগ</li>
            </ul>
             </div>
             </div>
          </div>

          <button className='bg-primary p-3  pl-14 pr-10 rounded-md ml-10 lg:ml-24 mt-10 mb-10 btn-lg'>ENROLL NOW !</button>
            </div>
  
    );
};

export default Categori;