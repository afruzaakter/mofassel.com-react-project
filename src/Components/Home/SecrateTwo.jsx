import { FaShareSquare } from 'react-icons/fa';
import ReactPlayer from 'react-player';
const SecrateTwo = () => {
    return (
        <div className='max-w-s mx-auto'>
        <h1 className='text-center text-primary text-4xl font-bold mt-14'>সিক্রেট-০২ঃ সেলিং মেশিন তৈরি করা</h1>
        <div className='flex flex-col md:flex-row justify-between items-center p-8'>
        <div className='mt-16 '>
           <ReactPlayer  url='https://youtu.be/5Tis3P72h4c' />
           </div>  
            <div className='text-secondary font-bold'>
                  <h1 className='text-xl md:text-2xl lg:text-3xl lg:p-14'>কিভাবে মাত্র ৭ দিনের ভিতর জিরো থেকে ‍শুরু করে নিজের ব্যবসার জন্য কার্যকর একটি সেলিং মেশিন তৈরি করবেন।</h1>
                  <ul className='lg:pl-14 text-xl sm:text-xl  md:text-2xl lg:text-2xl space-y-5 '>
                    <li className='flex justify-start  items-center gap-3'><FaShareSquare className='text-primary text-2xl'/> আপনার বিজনেস ক্যাটাগরিতে নিজেকে একজন এক্সপার্ট হিসাবে তৈরি করুন।</li>
                    <li className='flex justify-start items-start gap-3'><FaShareSquare className='text-primary text-2xl'/> আপনার সলিউশন ব্যবহার সংক্রান্ত খুটিনাটি প্রসেস নিজে পরিস্কার  হোন ও ধাপে ধাপে ব্যবহার বিধির উপর ডকুমেন্টেশন তৈরি করুন।</li>
                    <li className='flex justify-start items-center gap-3'><FaShareSquare className='text-primary text-2xl'/> আকর্ষণীয় অফার তৈরি করুন</li>
                    <li className='flex justify-start items-center gap-3'><FaShareSquare className='text-primary text-2xl'/> আপনার সলিউশন ও কাস্টমারের ইস্যু সংক্রান্ত যেকোন প্রশ্নের উত্তর দেয়ার মতো জ্ঞান অর্জন করুন।</li>
                  </ul>
            </div>
          
                     
        </div>
    </div>
    );
};

export default SecrateTwo;