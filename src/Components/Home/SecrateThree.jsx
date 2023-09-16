import ReactPlayer from 'react-player';
import { FaShareSquare } from 'react-icons/fa';

const SecrateThree = () => {
    return (
        <div className='max-w-s mx-auto'>
        <h1 className='text-center text-primary text-4xl font-bold mt-14'>সিক্রেট-০৩ঃ সেলিং মেশিন প্রয়োগ করা</h1>
        <div className='flex flex-col md:flex-row justify-between items-center p-8'>
            <div className='text-secondary font-bold'>
                  <h1 className='text-xl md:text-2xl lg:text-3xl lg:p-14'>কিভাবে মাত্র ২০ দিনের ভিতর সেলিং মেশিন প্রয়োগ করে মাসে লক্ষাধিক টাকার সেলস্‌ করা শুরু করবেন?</h1>
                  <ul className='lg:pl-14 text-xl  md:text-2xl lg:text-2xl space-y-5  hover:text-secondary'>
                    <li className='flex justify-start  items-center gap-3'><FaShareSquare className='text-primary '/> সংক্ষিপ্ত স্ক্রিপ্ট/স্লাইড/ফ্রেমওয়ার্ক ব্যবহার করে সেলিং পিচ নিয়ে কথা বলা শুরু করুন।</li>
                    <li className='flex justify-start items-start gap-3'><FaShareSquare className='text-primary '/>কেমেরা, লাইটিং, ভিডিও রেকর্ডিং মোবাইল দিয়েই শুরু করুন</li>
                    <li className='flex justify-start items-center gap-3'><FaShareSquare className='text-primary '/> ফেসবুক, ইউটিউব বা জুমের মাধ্যমে লাইভ ওয়েবিনার পরিচালনা করুন</li>
                    <li className='flex justify-start items-center gap-3'><FaShareSquare className='text-primary '/> ব্যপকহারে প্রচারনা করুন, প্রচারই প্রসার। ফ্রি মেথডের পাশাপাশি পেইড মেথডে রিটার্গেটিং এড প্রমোশন করুন</li>
                  </ul>
            </div>
          
            <div className='mt-16 '>
           <ReactPlayer  url='https://youtu.be/ru3B0EmlR-s' />
           </div>              
        </div>
    </div>
    );
};

export default SecrateThree;