
import bKash from '../Images/bKash.png';
import QA from '../Images/QA-image.png';
import Nagad from '../Images/Nagad.png';
import Bank from '../Images/logo (1).png';
import oedp from '../Images/oedp-with-support.png';

const OrderSection = () => {
    return (
        <div>
            <div className="p-10 bg-slate-700 lg:flex justify-center items-start">
                <div>
                  <div className="flex justify-center items-center"> 
                    <h1>Customer Information</h1>
                    <p>Already have an account?  <span>Log in</span> </p>
                  </div>
                 <div>
                 <div className="flex flex-col">
                     <label htmlFor="">Email Address *</label>
                    <input className="w-full" type="text" />
                  </div>
                 <div className="flex flex-col">
                    <h1>Billing Details</h1>
                    <div>
                    <label htmlFor="">Full Name*</label>
                    <input className="w-full" type="text" />
                    </div>
                    <div>
                    <label htmlFor="">Phone*</label>
                    <input className="w-full" type="text" />
                    </div>
                    <div>
                        <h1>Country*</h1>
                        <h1>Bangladesh</h1>
                    <label htmlFor="">Division</label>
                    <input className="w-full" type="text" />
                    </div>
                  </div>
                  {/* =========== Payment ========== */}
                  <h1>Payment</h1>
                  <div>
                    <div>
                        <input type="radio" />
                        <label htmlFor="">bKash</label>
                        <img src={bKash} alt="" />
                    </div>
                    <ul>
                        <li>01. Go to your bKash app or Dial *247#</li>
                        <li>02. Choose “Send Money”</li>
                        <li>03. Enter below bKash Account Number</li>
                        <li>04. Enter total amount</li>
                        <li>05. Now enter your bKash Account PIN to confirm the transaction</li>
                        <li>07. Copy Transaction ID from payment confirmation message and paste that Transaction ID below bKash Send Money fee will be added with net price.</li>
                    </ul>
                    <p>You need to send us <span>৳ 1019.00</span></p>
                    <img src={QA} alt="" />
                    <h3>Account Type: <span> Personal</span></h3>
                    <h3>Account Number: <span> 01768608427</span></h3>
                    <div>
                    <label htmlFor="">Your bKash Account Number</label>
                     <input placeholder='01XXXXXXXXX' type="text" />
                    <label htmlFor="">bKash Transaction ID </label>
                     <input placeholder='2M7A5' type="text" />
                    </div>
                  </div>
                  <div>
                      <input type="radio" />
                        <label htmlFor="">Nagad</label>
                        <img src={Nagad} alt="" />
                  </div>
                  <div>
                      <input type="radio" />
                        <label htmlFor="">Nagad</label>
                        <img src={Bank} alt="" />
                  </div>
                 </div>
                 <button className='w-full bg-blue-900'>Place Order ৳ 1,019.00</button>
                </div>
                <div>
                    <h1>Your Order</h1>
                    <div>
                        <div>
                            <h1>Product</h1>
                            <h1>Subtotal</h1>
                        </div>
                        <div>
                            <img src={oedp} alt="" />
                            <h1>MSM with Lifetime Support</h1>
                            <p>× 1</p>
                            <h1>৳ 1,000.00</h1>
                        </div>
                        <div>
                            <h1>Subtotal</h1>
                            <h1>৳ 1,000.00</h1>
                        </div>
                        <div>
                            <h1>bKash Charge</h1>
                            <h1>৳ 19.00</h1>
                        </div>
                        <div>
                            <h1>Total</h1>
                            <h1>৳ 1,019.00</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSection;