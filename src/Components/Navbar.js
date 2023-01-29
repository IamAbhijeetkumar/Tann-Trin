import React from 'react'

const Navbar = ({saved}) => {
    return (
        <>
            <div className='Navbar'>
                <div className='logo'>
                    <h2>TANN TRIN</h2>
                </div>
                <div className='menu'>
                    <ul>
                        <li><a href='/'>Bag</a></li>
                        <li><a href='/'>Travel</a></li>
                        <li><a href='/'>Accesories</a></li>
                        <li><a href='/'>Gifting</a></li>
                        <li><a href='/'>Jewelery</a></li>
                    </ul>
                </div>
                <div className='menu2'>
                    <ul>
                        <li><a href='/'><i class="fa-solid fa-magnifying-glass"></i></a></li>
                        <li><a href='/'><i class="fa-regular fa-user"></i></a></li>
                        <li><a href='/'><i class="fa-regular fa-bookmark saved"> <sup>{saved}</sup></i></a></li>
                        <li><a href='/'><i class="fa-solid fa-bag-shopping"></i></a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar
