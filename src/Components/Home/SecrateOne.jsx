import ReactPlayer from 'react-player';
import { FaShareSquare } from 'react-icons/fa';
const SecrateOne = () => {
    return (
        <div className='max-w-s mx-auto'>
            <h1 className='text-center text-primary text-4xl font-bold mt-14'>সিক্রেট-০১ঃ সেলিং মেশিন হ্যাকিং</h1>
            <div className='flex flex-col md:flex-row justify-between items-center p-8'>
                <div className='text-secondary font-bold'>
                      <h1 className='text-xl md:text-2xl lg:text-3xl lg:p-14'>কিভাবে মাত্র ৩ দিনের ভিতর নিজের ব্যবসার জন্য একটি সেলিং মেশিন তৈরির যাবতীয় প্রস্তুতি নিবেন।</h1>
                      <ul className='lg:pl-14  space-y-5 '>
                        <li className='flex justify-start  items-center gap-3 text-xl  md:text-xl lg:text-xl'><FaShareSquare className='text-primary text-3xl'/> আপনার ও আপনার সলিউশনের উপর কাস্টমারের বিশ্বাস তৈরি করুন</li>
                        <li className='flex justify-start items-start gap-3 text-xl  md:text-xl lg:text-xl'><FaShareSquare className='text-primary text-3xl '/> আপনার সলিউশন ব্যবহার করার মাধ্যমে কাস্টমারের প্রয়োজন মিট হবে সেই আস্থা অর্জন করুন</li>
                        <li className='flex justify-start items-center gap-3 text-xl  md:text-xl lg:text-xl'><FaShareSquare className='text-primary text-3xl'/> আকর্ষণীয় ভাবে অফার উপস্থাপন করুন</li>
                        <li className='flex justify-start items-center gap-3 text-xl  md:text-xl lg:text-xl'><FaShareSquare className='text-primary text-3xl '/> প্রশ্নোত্তর পর্ব পরিচালনা করুন ও অর্ডার প্রসেস ক্লিয়ার করুন।</li>
                      </ul>
                </div>
              
                <div className='mt-16 '>
               <ReactPlayer  url='https://youtu.be/ru3B0EmlR-s' />
               </div>              
            </div>
        </div>
    );
};

export default SecrateOne;