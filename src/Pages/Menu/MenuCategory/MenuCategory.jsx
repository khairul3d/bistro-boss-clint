import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import ManuItem from "../../Shared/ManuItem/ManuItem";


const MenuCategory = ({items, hadding, img}) => {
    return (
        <div className=' pt-7'>
            {hadding && <Cover img={img} hadding={hadding}></Cover>}
           <div className=" grid md:grid-cols-2 gap-10 mt-10 ">
           {
                  items.map(item => <ManuItem
                  key={item._id}
                  item={item}
                  ></ManuItem>)
            }
           </div>
          <div className="text-center mt-4">
          <Link to={`/order/${hadding}`}>
           <button className="btn btn-outline border-0 border-b-2 ">Order Now</button>
           </Link>
          </div>
          </div>
    );
};

export default MenuCategory;