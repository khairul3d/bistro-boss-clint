
import { Helmet, } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupdImg from '../../../assets/menu/soup-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import TaitelHading from '../../../Components/Taitel/TaitelHading';
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';

const Menu = () => {
    const [menu] = useMenu()
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Manu</title>
            </Helmet>
            <div className=''>
                <Cover img={menuImg} hadding="Our menu"></Cover>
                <TaitelHading subTitel="Don't miss" hadding="Todays Offer"></TaitelHading>
                {/* offered category */}
                <MenuCategory items={offered}></MenuCategory>
                {/* dessert category */}
                <MenuCategory
                    hadding="dessert"
                    items={dessert}
                    img={dessertImg}
                ></MenuCategory>
                {/* pizza category */}
                <MenuCategory hadding="pizza" items={pizza} img={pizzaImg}></MenuCategory>
                {/* salad category */}
                <MenuCategory hadding="salad" items={salad} img={saladImg}></MenuCategory>
                {/* salad category */}
                <MenuCategory hadding="soup" items={soup} img={saladImg}></MenuCategory>
                {/* salad category */}
                <MenuCategory hadding="soup" items={soup} img={soupdImg}></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;