
import ReactPlayer from 'react-player';

const SellingMachineSecrate = () => {
    return (
      <div className='max-w-s w-full pt-14'>
          <div className="flex flex-col lg:flex-row gap-x-10 ">
            <div className='lg:w-2/4 lg:ml-10 ml-6'>
            <h1 className="text-primary lg:text-5xl text-2xl font-bold mb-6 font-hind-siliguri font-body">সেলিং মেশিন সিক্রেটস্‌</h1>
            <h2 className="text-black text-2xl font-semibold  mb-5 md:text-3xl font-body font-hind-siliguri">আমরা সেলিং মেশিনের মাধ্যমে উদ্যোক্তাদের ব্যবসার সেলস্‌ বাড়াতে সহযোগীতা করি
            </h2>
            <p className='text-2xl md:text-3xl  text-black font-hind-siliguri'>
                আর SELLING MACHINE তৈরি ও প্রয়োগ করে সর্বোচ্চ <span className='font-bold'>RESULT</span>  নিশ্চিত করার একমাত্র উপায় হচ্ছে <span className='font-bold'>“MASTERING SELLING MACHINE“</span>
            </p>
            <button className='bg-primary p-3  pl-10 pr-10 rounded-md   mt-10'>ENROLL NOW !</button>
           </div>
           <div className='mt-10  md:w-2/4 '>
            <ReactPlayer width='90%'  url='https://youtu.be/bKVG14dpLW4' />
           </div> 

        </div>
      </div>
    );
};

export default SellingMachineSecrate;