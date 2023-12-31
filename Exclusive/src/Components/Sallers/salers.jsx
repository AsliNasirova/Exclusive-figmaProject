import React from 'react'
import './salers.scss'
import { CiShop } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
const Sallers = () => {
    return (
        <>
            <section id='SalersActive'>
                <div className="SalersActiveBox">
                    <div className='deliveryyBox'>
                        <div className="deliveryygreyIcon">
                            <div className='deliveryyIcon'>
                            <CiShop className='TbTruckk'/>
                            </div>
                        </div><br />
                        <h1>10.5k </h1>
                        <p>Sallers active our site</p>
                    </div>
                    <div className='deliveryyBox'>
                        <div className="deliveryygreyIcon">
                            <div className='deliveryyIcon'>
                            <FaDollarSign className='TbTruckk'/>
                            </div>
                        </div><br />
                        <h1>33k</h1>
                        <p>Mopnthly Produduct Sale</p>
                    </div>
                    <div className='deliveryyBox'>
                        <div className="deliveryygreyIcon">
                            <div className='deliveryyIcon'>
                            <FaShoppingBag className='TbTruckk'/>
                            </div>
                        </div><br />
                        <h1>45.5k</h1>
                        <p>Customer active in our site</p>
                    </div>
                    <div className='deliveryyBox'>
                        <div className="deliveryygreyIcon">
                            <div className='deliveryyIcon'>
                             <TbMoneybag className='TbTruckk'/>
                            </div>
                        </div><br />
                        <h1>25k</h1>
                        <p>Anual gross sale in our site</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sallers
