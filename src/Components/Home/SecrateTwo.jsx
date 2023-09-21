import { FaShareSquare } from 'react-icons/fa';
import ReactPlayer from 'react-player';
const SecrateTwo = () => {
    return (
        <div >
        <h1 className='text-center text-primary text-4xl font-bold mt-16'>সিক্রেট-০২ঃ সেলিং মেশিন তৈরি করা</h1>
        <div className='flex flex-col md:flex-row mt-14  ml-8 lg:ml-10'>
        <div className=' w-full lg:w-2/4'>
           <ReactPlayer  width='90%'  url='https://youtu.be/5Tis3P72h4c' />
           </div>  
            <div className='text-secondary font-bold w-full md:w-2/4 mt-5 lg:mt-0'>
                  <h1 className='text-xl md:text-2xl lg:text-[27px] mb-5 font-hind-siliguri'>কিভাবে মাত্র ৭ দিনের ভিতর জিরো থেকে ‍শুরু করে নিজের ব্যবসার জন্য কার্যকর একটি সেলিং মেশিন তৈরি করবেন।</h1>
                  <ul className=' text-xl sm:text-xl  md:text-xl lg:text-[22px] space-y-5 font-hind-siliguri'>
                    <li className='flex justify-start  items-center gap-3'><FaShareSquare className='text-primary w-8 lg:w-7 h-7'/> আপনার বিজনেস ক্যাটাগরিতে নিজেকে একজন এক্সপার্ট হিসাবে তৈরি করুন।</li>
                    <li className='flex justify-start items-start gap-3'><FaShareSquare className='text-primary w-14 lg:w-12 h-8'/> আপনার সলিউশন ব্যবহার সংক্রান্ত খুটিনাটি প্রসেস নিজে পরিস্কার  হোন ও ধাপে ধাপে ব্যবহার বিধির উপর ডকুমেন্টেশন তৈরি করুন।</li>
                    <li className='flex justify-start items-center gap-3'><FaShareSquare className='text-primary  lg:w-7 h-7'/> আকর্ষণীয় অফার তৈরি করুন</li>
                    <li className='flex justify-start items-center gap-3'><FaShareSquare className='text-primary w-12 lg:w-10 h-10'/> আপনার সলিউশন ও কাস্টমারের ইস্যু সংক্রান্ত যেকোন প্রশ্নের উত্তর দেয়ার মতো জ্ঞান অর্জন করুন।</li>
                  </ul>
            </div>
          
                     
        </div>
    </div>
    );
};

export default SecrateTwo;