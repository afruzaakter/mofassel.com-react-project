

const ReviewSection = () => {
    return (
        <div className='bg-black'>
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
            <div>
            <div className="">
         <div className="stat-figure text-secondary">
          <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/316059488_545357740932635_2083662503129570616_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=5fac6f&_nc_ohc=KdsTnpVKBNQAX-WhsSN&_nc_ht=scontent.fdac14-1.fna&edm=AOf6bZoEAAAA&oh=00_AfDYoqldSl0bsY1La4Zc4PXu7KQSupK2QYtVmE-I9vYboA&oe=650B97A2" />
        </div>
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
            </div>
        </div>
    );
};

export default ReviewSection;