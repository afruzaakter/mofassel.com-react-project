import ReactPlayer from 'react-player';
import { FaShareSquare } from 'react-icons/fa';
const SecrateOne = () => {
    return (
        <div className='w-full '>
            <h1 className='text-center text-primary text-4xl font-bold mt-14  '>সিক্রেট-০১ঃ সেলিং মেশিন হ্যাকিং</h1>
            <div className='flex flex-col   lg:flex-row justify-between items-center p-2 md:p-0 lg:ml-14  mt-10 gap-8'>
                <div className='text-secondary font-bold w-full lg:w-2/4'>
                      <h1 className='text-xl md:text-2xl lg:text-[30px] lg:p-2 mb-8 leading-relaxed  '>কিভাবে মাত্র ৩ দিনের ভিতর নিজের ব্যবসার জন্য একটি সেলিং মেশিন তৈরির যাবতীয় প্রস্তুতি নিবেন।</h1>
                      <ul className='lg:pl-2  space-y-5 md:text-xl lg:text-[20px]'>
                        <li className='flex justify-start  gap-3  '><FaShareSquare className='text-primary lg:w-8 w-6'/> আপনার ও আপনার সলিউশনের উপর কাস্টমারের বিশ্বাস তৈরি করুন</li>
                        <li className='flex justify-start   gap-3'><FaShareSquare className='text-primary lg:w-8 w-8'/> আপনার সলিউশন ব্যবহার করার মাধ্যমে কাস্টমারের প্রয়োজন মিট হবে সেই আস্থা অর্জন করুন</li>
                        <li className='flex justify-start  gap-3'><FaShareSquare className='text-primary lg:w-8 w-6'/> আকর্ষণীয় ভাবে অফার উপস্থাপন করুন</li>
                        <li className='flex justify-start  gap-3 '><FaShareSquare className='text-primary lg:w-8 w-6'/> প্রশ্নোত্তর পর্ব পরিচালনা করুন ও অর্ডার প্রসেস ক্লিয়ার করুন।</li>
                      </ul>
                </div>
              
                <div className='mt-16 w-full lg:w-2/4'>
               <ReactPlayer width='90%'  url='https://youtu.be/ru3B0EmlR-s' />
               </div>              
            </div>
        </div>
    );
};

export default SecrateOne;