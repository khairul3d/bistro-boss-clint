import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const FoodCard = ({ item }) => {
    const { name, image, price, recipe,  _id } = item;
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const location = useLocation()
    const handleAddCart = food => {
        if (user && user.email) {
            console.log(user.email, food);
            const cartItem = {
             manuId: _id, 
             email: user.email, 
             name, 
             image, 
             price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name}: added to your cart`,
                        showConfirmButton: false,
                        timer: 2000
                      });
                }
            })
        }
        else {
            Swal.fire({
                title: "you are not to login",
                text: "please login add to card!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "please, login!"
              }).then((result) => {
               navigate('/login', {state: {location}})
              });
        }
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className=" bg-slate-900 text-white mt-3 mr-6 absolute right-0">${price}</p>
            <div className="card-body">
                <div className=" flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                </div>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddCart(item)} className="btn btn-outline bg-gray-100 border-0 border-b-2 ">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;