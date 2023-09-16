
import ReactPlayer from 'react-player'

const SellingMachineSecrate = () => {
    return (
      <div className='max-w-s mx-auto mb-8'>
          <div className="flex md:flex-row flex-col bg-white justify-around items-center ">
            <div>
            <h1 className="text-primary lg:text-5xl text-3xl font-bold mb-6 lg:ml-28">সেলিং মেশিন সিক্রেটস্‌</h1>
            <h2 className="text-black text-3xl font-semibold  mb-5 lg:ml-28">আমরা সেলিং মেশিনের মাধ্যমে উদ্যোক্তাদের ব্যবসার সেলস্‌ বাড়াতে সহযোগীতা করি
            </h2>
            <p className='text-3xl lg:ml-28 text-black'>
                আর SELLING MACHINE তৈরি ও প্রয়োগ করে সর্বোচ্চ <span className='font-bold'>RESULT</span>  নিশ্চিত করার একমাত্র উপায় হচ্ছে <span className='font-bold'>“MASTERING SELLING MACHINE“</span>
            </p>
            <button className='bg-primary p-3  pl-10 pr-10 rounded-md  lg:ml-28 mt-10'>ENROLL NOW !</button>
           </div>
           <div className='mt-16  lg:w-full '>
            <ReactPlayer  url='https://youtu.be/bKVG14dpLW4' />
           </div> 

        </div>
      </div>
    );
};

export default SellingMachineSecrate;