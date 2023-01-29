import React from 'react'

const Home = ({addtocart}) => {
  return (
    <>
      <div className='frame'>
            <div className='card'>
                <img src='Images/Frame 461.png' alt='.'></img>
                <h6>All Bags</h6>
            </div>
            <div className='card'>
                <img src='Images/Frame 50.png' alt='.'></img>
                <h6>Vanity Pouch</h6>
            </div>
            <div className='card'>
                <img src='Images/Frame 49.png' alt='.'></img>
                <h6>Tote Bag</h6>
            </div>
            <div className='card'>
                <img src='Images/Frame 13.png' alt='.'></img>
                <h6>Duffle Bag</h6>
            </div>
            <div className='card'>
                <img src='Images/Laptop Sleeve.png' alt='.'></img>
                <h6>Laptop Sleeve</h6>
            </div>
            <div className='card'>
                <img src='Images/Frame 49(1).png' alt='.'></img>
                <h6>Messenger Bags</h6>
            </div>
            <div className='card'>
                <img src='Images/Frame 22.png' alt='.'></img>
                <h6>Slings Bgs</h6>
            </div>
            <div className='card'>
                <img src='Images/Handbag.png' alt='.'></img>
                <h6>Handbags</h6>
            </div>
            <div className='card1'>
                <img src='Images/Component 5.png' alt='.'></img>
                <h6>Buck</h6>
            </div>
        </div>
        <div className='Product-menu'>
            <div>
                <ul>
                    <li><a href='/'>Bag</a></li>
                    <li><a href='/'><i class="fa-solid fa-circe"></i></a></li>
                    <li><a href='/'>Backpacks</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href='/'>{addtocart} Products</a></li>
                    <li><a href='/'><i class="fa-solid fa-arrow-up-from-bracket"></i></a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Home
