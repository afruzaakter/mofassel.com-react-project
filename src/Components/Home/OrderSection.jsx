
import bKash from '../Images/bKash.png';
import QA from '../Images/QA-image.png';
import Nagad from '../Images/Nagad.png';
import Bank from '../Images/logo (1).png';
import msm from '../Images/msm-offer-final-tiny.png';
import oedp from '../Images/oedp-with-support.png';
import { FaUnlockAlt } from 'react-icons/fa';

const OrderSection = () => {
    return (
        <div>
            <div className="lg:p-10 p-3  info lg:flex justify-between  gap-6   m-5  border-white shadow-lg">
                <div className='w-2/8 '>
                    <div className="lg:flex lg:justify-between items-center text-gray-600 text-2xl ">
                        <h1 className='font-bold'>Customer Information</h1>
                        <p className='text-xl'>Already have an account?  <span className='text-blue-500 font-bold'>Log in</span> </p>
                    </div>
                    <div>
                        <div className="flex flex-col text-gray-600 lg:text-xl">
                            <label className='mt-4' htmlFor="">Email Address *</label>
                            <input className="w-full p-3 border border-gray-400 rounded-md mt-2 mb-5" placeholder='Email Address' type="text" />
                        </div>
                        <div className="flex flex-col text-gray-600 ">
                            <h1 className='text-2xl mb-2'>Billing Details</h1>
                            <div className='lg:text-xl'>
                                <label  htmlFor="">Full Name*</label>
                                <input className="w-full border border-gray-400 rounded-md p-3 mb-5 mt-2" type="text" />
                            </div>
                            <div className='lg:text-xl'>
                                <label  htmlFor="">Phone*</label>
                                <input className="w-full mt-2 border border-gray-400 rounded-md p-3 mb-5 " type="text" />
                            </div>
                            <div className='lg:flex justify-between'>
                                <div className='lg:text-xl'>
                                <h1>Country*</h1>
                                <h1 className='font-bold text-xl'>Bangladesh</h1>
                                </div>
                                <div>
                                <label  htmlFor="">Division</label>
                                <input className="w-full mt-2 border border-gray-400 rounded-md p-3 mb-5 " type="text"  />
                                </div>
                            </div>
                            <div className='lg:text-xl'>
                                <label  htmlFor="">Address*</label>
                                <input className="w-full mt-2 border border-gray-400 rounded-md p-3 mb-8 " type="text" placeholder='House number and street name' />
                            </div>

                        </div>
                        {/* =========== Payment ========== */}
                        <h1 className='text-2xl text-gray-600 mb-4 '>Payment</h1>

                        <div className='border border-gray-400 rounded-md'>
                        <div>
                            <div className='flex justify-between p-2 lg:p-5 items-center text-gray-500 text-xl'>
                                <div>
                                <input type="radio" />
                                <label htmlFor="">bKash</label>
                                </div>
                                <img className='w-14' src={bKash} alt="bKash" />
                            </div>
                           <div className='bg-gray-100'>
                           <ul className='p-2 lg:p-5 lg:text-[18px] text-gray-500'>
                                <li>01. Go to your bKash app or Dial *247#</li>
                                <li>02. Choose “Send Money”</li>
                                <li>03. Enter below bKash Account Number</li>
                                <li>04. Enter total amount</li>
                                <li>05. Now enter your bKash Account PIN to confirm the transaction</li>
                                <li>07. Copy Transaction ID from payment confirmation message and paste that Transaction ID below bKash Send Money fee will be added with net price.</li>
                            </ul>
                            <p className='p-5 text-secondary text-xl'>You need to send us <span className='text-secondary font-bold'>৳ 1019.00</span></p>
                            <img className='w-24 ml-28 lg:ml-96' src={QA} alt="QA" />
                             <div className='text-gray-600 lg:text-xl p-4 ml-3 mr-10 border-b-2 mb-4'>
                             <h3>Account Type: <span className='font-bold'> Personal</span></h3>
                            <h3>Account Number: <span className='font-bold'> 01768608427</span></h3>
                             </div>
                            <div className='text-gray-500 p-4  lg:text-xl lg:p-2 lg:ml-4'>
                                <div className='flex flex-col'>
                                <label htmlFor="">Your bKash Account Number</label>
                                <input className='w-56 mt-2 border border-gray-400 rounded-md p-2 lg:p-3 mb-4' placeholder='01XXXXXXXXX' type="text" />
                                </div>
                                 <div className='flex flex-col'>
                                 <label htmlFor="">bKash Transaction ID </label>
                                <input className='w-56 mt-2 border border-gray-400 rounded-md lg:p-3 p-2 mb-8' placeholder='2M7A5' type="text" />
                                 </div>
                            </div>
                           </div>
                        </div>
                        <div className='flex justify-between items-center p-5'>
                           <div className='text-gray-500 text-xl'>
                           <input className='mr-2' type="radio" />
                            <label htmlFor="">Nagad</label>
                           </div>
                            <img className='w-12 ' src={Nagad} alt="Nagad" />
                        </div>
                        <div className='flex justify-between items-center p-5'>
                            <div className='text-gray-500 lg:text-xl'>
                                <input className='mr-2' type="radio" />
                                <label htmlFor="">Bank/Card Payment Gateway</label>
                            </div>
                            <img src={Bank} alt="" />
                        </div>
                        </div>
                    </div>
                    <button className='w-full bg-blue-900 p-4 text-xl mt-10 font-bold rounded-lg'> <FaUnlockAlt className=' inline  mr-2 ' /> Place Order ৳ 1,019.00</button>
                </div>
                {/* ===========your  Order ======== */}
                <div className='text-gray-500 lg:w-2/4 md:text-xl lg:text-xl '>
                    <h1 className='text-2xl mb-4 font-bold mt-10 lg:mt-0'>Your Order</h1>
                    <div className='border p-2 rounded-md'>
                         <div>
                         <div className='flex justify-between  border-b border-gray-300 mt-2 mb-4 lg:p-3'>
                            <h1 className='mb-2'>Product</h1>
                            <h1>Subtotal</h1>
                        </div>
                        <div className='flex justify-between items-center border-b-2 p-3'>
                            <div className='flex items-center gap-2 mb-6 mt-4'>
                            <img className='w-14' src={msm} alt="" />
                            <h1>MSM with Lifetime Support</h1>
                            </div>
                            <p>× 1</p>
                            <h1>৳ 1,000.00</h1>
                        </div>
                        <div className='flex justify-between mt-5 border-b-2 mb-6 p-3'>
                            <h1 className='mb-6'>Subtotal</h1>
                            <h1>৳ 1,000.00</h1>
                        </div>
                         </div>
                        <div className='flex justify-between mt-5 border-b-2 mb-6 p-3'>
                            <h1 className='mb-6'>bKash Charge</h1>
                            <h1>৳ 19.00</h1>
                        </div>
                        <div className='flex justify-between mt-5 p-3 mb-6'>
                            <h1>Total</h1>
                            <h1>৳ 1,019.00</h1>
                        </div>
                    </div>
                    {/* ===== OEDP Program ======= */}
                    <div className='mt-8  border rounded-md '> 
                           <div className='bg-gray-100 text-2xl flex justify-center p-6'>
                              <input className='mr-2 w-5' type="checkbox"  />
                              <p>Yes, I will take it!</p>
                           </div>
                           <div className='lg:p-16 p-10 flex flex-col items-center '>
                            <img className='w-36' src={oedp} alt="" />
                            <h1 className='text-center mt-4 font-bold'>৫০ হাজার টাকার ভ্যালূর OEDP প্রোগ্রামটি প্রায় ৯০% ছাড়ে রেজিস্ট্রেশন করার অফারটি জীবনে একবারই পাবেন</h1>
                            <h2 className='mt-3'>OEDP with Lifetime Support</h2>
                            <h2> <span className='line-through '>৳ 50,000.00</span> ৳ 5,000.00</h2>
                            <p className='text-center p-3 '>যাদের বিজনেস সেটাপ, পন্য/সেবা সিলেকশন, সোর্সিং, প্রাইজিং, কাস্টমার জার্নি, ইত্যাদি বিষয়ে প্রবলেম আছে, 
                                তাছাড়া সেলস্‌ ছাড়াও বিজনেস বিষয়ক অন্যন্য সাপোর্টের প্রয়োজন হবে, তাদের জন্য এই প্রোগ্রামটি Highly Recommended.</p>
                           </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSection;