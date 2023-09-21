

const ReviewSection = () => {
    return (
        <div className='bg-black '>
            <div className='text-center'>
            <h1 className="text-3xl pt-8 ">লাইভ ফিডবেক ও রিভিউস</h1>
            <div className="rating rating-md space-x-3 mt-2 mb-10">
               <input type="radio" name="rating-8" className="mask mask-star-2 bg-primary" />
                <input type="radio" name="rating-8" className="mask mask-star-2  bg-primary"  />
                <input type="radio" name="rating-8" className="mask mask-star-2  bg-primary" />
                <input type="radio" name="rating-8" className="mask mask-star-2  bg-primary"  />
                 <input type="radio" name="rating-8" className="mask mask-star-2 bg-primary" checked />
           </div>
            </div>
            <div className="p-10">
              {/* ------------ Review person-1 section ----------  */}
              
                  <div className="flex gap-4">
                    <div className="stat-figure text-secondary">
                     <div className="avatar online">
                      <div className="w-16 rounded-full">
                       <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/316059488_545357740932635_2083662503129570616_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=5fac6f&_nc_ohc=KdsTnpVKBNQAX-WhsSN&_nc_ht=scontent.fdac14-1.fna&edm=AOf6bZoEAAAA&oh=00_AfDYoqldSl0bsY1La4Zc4PXu7KQSupK2QYtVmE-I9vYboA&oe=650B97A2" />
                     </div>
                     </div>
                    </div>
                     <div>
                     <div className="text-xl">Md Mofassel Hossain</div>
                      <div className="text-3xl text-blue-700">5.0
                      <div className="rating rating-sm ml-2  space-x-2 ">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600" checked/>
                            </div>
                      </div>
                       <div className=" text-gray-500 text-[16px]">Based on 11 reviews</div>
                       <div className=" text-gray-500 text-[16px]">powered by <span className="text-blue-700 text-xl">Facebook</span> </div>
                     </div>
                  </div>    
             
              {/* ------------ Review person-2 section ----------  */}
              <div className="flex gap-4 mt-8">
                    <div className="stat-figure text-secondary">
                     <div className="avatar online">
                      <div className="w-16 rounded-full">
                       <img src="https://sonia.spellbit.com/wp-content/uploads/2023/09/Alex-Kracov-lattice@1x.png" />
                     </div>
                     </div>
                    </div>
                     <div>
                     <div className="text-xl">Anufa Begum</div>
                     <div className=" text-gray-500 text-[16px]">9 months ago</div>
                      <div className="lg:rating  rating-sm lg:ml-2  space-x-2 ">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1" checked/>
                            <div className=" text-white text-[16px]">আমার উদ্যোক্তা জীবনের একটি ভালো মুহূর্ত ছিল MD Mofassel Hossain  ভাইয়ার Digital Marketing Retargetting Mastery কোর্সের... <span className="text-blue-700 text-xl">read more</span> </div>
                   </div>
                    
                     </div>
                  </div> 
              {/* ------------ Review person-3 section ----------  */}
              <div className="flex gap-4 mt-8">
                    <div className="stat-figure text-secondary">
                     <div className="avatar online">
                      <div className="w-16 rounded-full">
                       <img src="https://sonia.spellbit.com/wp-content/uploads/2023/09/Alex-Kracov-lattice@1x.png" />
                     </div>
                     </div>
                    </div>
                     <div>
                     <div className="text-xl">Antar Dey</div>
                     <div className=" text-gray-500 text-[16px]">9 months ago</div>
                      <div className="lg:rating  rating-sm lg:ml-2  space-x-2 ">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1" checked/>
                            <div className=" text-white text-[16px]">আমি অনেক প্লাটফরম এই ডিজিটাল মার্কেটিং বা ফেসবুক মার্কেটিং কোস কিনছিলাম কিন্তু যা হত   তাহলো তারা আর কোন সাপোর্ট দিত না...  <span className="text-blue-700 text-xl">read more</span> </div>
                   </div>
                    
                     </div>
                  </div> 
              {/* ------------ Review person-4 section ----------  */}
              <div className="flex gap-4 mt-8">
                    <div className="stat-figure text-secondary">
                     <div className="avatar online">
                      <div className="w-16 rounded-full">
                       <img src="https://sonia.spellbit.com/wp-content/uploads/2023/09/Alex-Kracov-lattice@1x.png" />
                     </div>
                     </div>
                    </div>
                     <div>
                     <div className="text-xl">Ridwanul Karim</div>
                     <div className=" text-gray-500 text-[16px]">9 months ago</div>
                      <div className="lg:rating  rating-sm lg:ml-2  space-x-2 ">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1" checked/>
                            <div className=" text-white text-[16px]">বাংলাদেশে যে কয়জন উদ্যোক্তা তৈরির কারিগর আছেন জনাব মোফাস্সল হোসেন স্যার তাদের মধ্যে অন্যতম। আমি গত ২বছরেরও বেশি সময় ধরে...<span className="text-blue-700 text-xl">read more</span> </div>
                   </div>
                    
                     </div>
                  </div> 
              {/* ------------ Review person-5 section ----------  */}
              <div className="flex gap-4 mt-8">
                    <div className="stat-figure text-secondary">
                     <div className="avatar online">
                      <div className="w-16 rounded-full">
                       <img src="https://sonia.spellbit.com/wp-content/uploads/2023/09/Alex-Kracov-lattice@1x.png" />
                     </div>
                     </div>
                    </div>
                     <div>
                     <div className="text-xl">Mohammed Salim</div>
                     <div className=" text-gray-500 text-[16px]">9 months ago</div>
                      <div className="lg:rating  rating-sm lg:ml-2  space-x-2 ">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1" checked/>
                            <div className=" text-white text-[16px]"> আচ্ছালামুয়ালাইকুম আমি মোহাম্মাদ সেলিম   আলহামদুলিল্লাহ ডিজিটাল মার্কেটিং রিটার্গেটিং মাস্টারী আজকে দেখা শেষ করলাম।...<span className="text-blue-700 text-xl">read more</span> </div>
                   </div>
                    
                     </div>
                  </div> 
              {/* ------------ Review person-6 section ----------  */}
              <div className="flex gap-4 mt-8">
                    <div className="stat-figure text-secondary">
                     <div className="avatar online">
                      <div className="w-16 rounded-full">
                       <img src="https://sonia.spellbit.com/wp-content/uploads/2023/09/Alex-Kracov-lattice@1x.png" />
                     </div>
                     </div>
                    </div>
                     <div>
                     <div className="text-xl">MD Moniruzzaman Mamun</div>
                     <div className=" text-gray-500 text-[16px]">9 months ago</div>
                      <div className="lg:rating  rating-sm lg:ml-2  space-x-2 ">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1"/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-blue-600 mt-1" checked/>
                            <div className=" text-white text-[16px]"> আমি মোঃ মনিরুজ্জামান মামুন। ডিজিটাল মার্কেটিং শিখছি এবং পাশাপাশি ডিজিটাল মার্কেটিং এ টুকটাক কাজ করছি।“ Digital...<span className="text-blue-700 text-xl">read more</span> </div>
                   </div>
                    
                     </div>
                  </div> 
            </div>
        </div>
    );
};

export default ReviewSection;