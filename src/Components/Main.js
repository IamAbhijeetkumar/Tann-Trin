import React, { useEffect, useState } from 'react';
import axios from 'axios';



const Main = ({ setaddtocart, addtocart, saved, setsaved }) => {

    const [data, setData] = useState([])
    useEffect(() => {
        axiosdata()
    }, [])

    function axiosdata() {
        axios.get('https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json')
            .then(function (response) {
                console.log(response.data.data.products, "response");
                setData(response.data.data.products)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }


    var save = () => {
        console.log(saved);
        setsaved(saved + 1)
    }
    const add = () => {
        console.log(addtocart);
        setaddtocart(addtocart + 1)
    }

    return (
        <>
            <div className='Main-Window'>
                {data.map((product) => (
                    <div className='cardn'>
                        <div className='img1'>
                            <img src={product.image[0]} alt='Sorry for Inconvenient'></img>
                            <button onClick={save} className='img2'><i class="fa-regular fa-bookmark"></i>
                            </button>
                        </div>
                        <div className='Name'><a href='/' >{product.name ? product.name.slice(0, 45) : ""}</a></div>
                        <div className='Price-sec'>
                            <div className='price'><a href='/'>₹{product.special_price}</a></div>
                            <div className='margin'><a href='/'>₹{product.price}</a></div>
                            <div className='offer'><a href='/'>({product.discount})</a></div>
                            <button onClick={add} className='btn'><i class="fa-solid fa-bag-shopping"></i></button>
                        </div>
                    </div>

                ))}

            </div>
        </>
    )
}

export default Main
