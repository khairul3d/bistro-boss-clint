

const ManuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div>
            <div className="flex space-x-4">
            
            <img style={{borderRadius: '0 300px 300px 300px' }} className=" w-[120px]" src={image} alt="" />
           <div>
                  <h1 className=" uppercase">{name}-----------</h1>
                  <p>{recipe}</p>
           </div>
           <p className=" text-yellow-500">${price}</p>
           
        </div>
       
        </div>
    );
};

export default ManuItem;