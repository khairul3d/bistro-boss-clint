
import TaitelHading from '../../../Components/Taitel/TaitelHading';
import ManuItem from '../../Shared/ManuItem/ManuItem';
import useMenu from '../../../hooks/useMenu';

const PopulerManu = () => {
  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === 'popular')
   
    return (
        <section className=' mb-12'>
          <TaitelHading
          subTitel="populer items"
          hadding="from our menu"
          ></TaitelHading>  
          <div className=' grid md:grid-cols-2 gap-4'>
            {
                  popular.map(item => <ManuItem
                  key={item._id}
                  item={item}
                  ></ManuItem>)
            }
          </div>
          <div className=' text-center my-4'>
          <button className="btn btn-outline border-0 border-b-2">Vew Full Manu</button>
          </div>
        </section>
    );
};

export default PopulerManu;