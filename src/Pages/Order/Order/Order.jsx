import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import coverImg from '../../../assets/shop/order.jpg'
import Cover from '../../Shared/Cover/Cover';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import OrderItems from '../OrderItems/OrderItems';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categorys = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams()
    const initialsIndex = categorys.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialsIndex)
    const [menu] = useMenu()
    console.log(category);
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div className=' text-center'>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover hadding="order" img={coverImg}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                  <OrderItems items={salad}></OrderItems>
                </TabPanel>
                <TabPanel>
                <OrderItems items={pizza}></OrderItems>

                </TabPanel>
                <TabPanel>
                <OrderItems items={soup}></OrderItems>

                </TabPanel>
                <TabPanel>
                <OrderItems items={dessert}></OrderItems>

                </TabPanel>
                <TabPanel>
                <OrderItems items={drinks}></OrderItems>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;