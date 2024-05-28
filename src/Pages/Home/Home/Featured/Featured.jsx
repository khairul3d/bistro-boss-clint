import TaitelHading from '../../../../Components/Taitel/TaitelHading';
import featuredImg from '../../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item text-white bg-fixed bg-opacity-70 py-3 mb-20'>
             <TaitelHading subTitel="Chacke it out" hadding="Featured Item"></TaitelHading>
           <div className=' md:flex justify-center bg-slate-700 bg-opacity-20 items-center pb-14 pt-12 px-36 '>
           
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className=' md:ml-7 text-gray-100'>
                <h1 className=' uppercase'>Aug 20, 2029</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum voluptatum, atque a ullam blanditiis exercitationem ab voluptate error sapiente cupiditate illo ipsum quod ducimus mollitia ad voluptas animi sint harum?</p>
                <button className="btn btn-outline border-0 border-b-4">Order Now</button>
            </div>
            </div> 
        </div>
    );
};

export default Featured;