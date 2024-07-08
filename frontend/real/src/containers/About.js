import React, { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import House from '../assets/images/house.webp';

const About = () => {
    const [topSeller, setTopSeller] = useState([]);
    const [realtors, setRealtors] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const getTopSeller = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/realtors/topseller`, config);
                setTopSeller(res.data);
            }
            catch (err) {

            }
        };

        getTopSeller();
    }, []);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const getRealtors = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/realtors/`, config);
                setRealtors(res.data);
            }
            catch (err) {

            }
        };

        getRealtors();
    }, []);

    const getAllRealtors = () => {
        let allRealtors = [];
        let results = [];

        realtors.map(realtor => {
            return allRealtors.push(
                <Fragment key={realtor.id}>
                    <div className='about_display'>
                        <img className='about_display_image_real' src={realtor.photo} alt='' />
                    </div>
                    <h3 className='about_realtor_name'>{realtor.name}</h3>
                    <p className='about_realtor_contact'>{realtor.phone}</p>
                    <p className='about_realtor_contact'>{realtor.email}</p>
                    <p className='about_realtor_desc'>{realtor.description}</p>
                </Fragment>
            );
        });

        for (let i = 0; i < realtors.length; i += 3) {
            results.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {allRealtors[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i+1] ? allRealtors[i+1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i+2] ? allRealtors[i+2] : null}
                    </div>
                </div>
            );
        }

        return results;
    };  

    const getTopSeller = () => {
        let result = [];

        topSeller.map(seller => {
            return result.push(
                <Fragment key={seller.id}>
                    <h3 className='about_topseller'>Top Seller</h3>
                    <p className='about_topseller_name'>{seller.name}</p>
                    <p className='about_topseller_contact'>{seller.phone}</p>
                    <p className='about_topseller_contact'>{seller.email}</p>
                    <div className='about_display'>
                        <img className='about_topseller_image' src={seller.photo} alt='' />
                    </div>
                   
                    <p className='about_topseller_desc'>{seller.description}</p>
                </Fragment>
            );
        });

        return result;
    };

    return (
        <main className='about'>
            <Helmet>
                <title>Realest Estate - About</title>
                <meta
                    name='description'
                    content='About us'
                />
            </Helmet>
            <header className='about_header'>
                <h1 className='about_heading'>Inspiring Your Dream Homes</h1>
            </header>
            <section className='about_info'>
                <div className='row'>
                    <div className='col-3-of-4'>
                        <h2 className='about_subheading'>We Find The Perfect Home For You</h2>
                        <p className='about_paragraph'>
                            We understand that finding the perfect home is more than just a transaction—it's about 
                            discovering a place where memories are made and dreams come to life. Our dedicated team 
                            of real estate experts is committed to guiding you through every step of the journey, from 
                            initial search to closing day. With an in-depth knowledge of the local market and a personalized 
                            approach, we ensure that your unique needs and preferences are at the forefront of our efforts. 
                            Whether you're looking for a cozy family home, a chic urban apartment, or a serene suburban retreat, 
                            we are here to find the perfect home for you.     
                        </p>    
                        <div className='about_display'>
                            <img className='about_display_houseimage' src={House} alt='' />
                        </div>
                        <p className='about_paragraph'>
                            where your dream home is just a step away. Our featured image captures the essence of the warm, 
                            inviting spaces we strive to find for you. With a keen eye for detail and a passion for excellence, 
                            our team is dedicated to presenting you with a curated selection of properties that not only meet 
                            but exceed your expectations. Whether it's the charm of a historic residence or the modern amenities 
                            of a contemporary design, we are committed to ensuring that each home we present reflects the quality 
                            and comfort you deserve. Let us help you turn the key to your future, one perfect home at a time.
                        </p>
                    </div>
                    <div className='col-1-of-4'>
                        {getTopSeller()}
                    </div>
                </div>
            </section>
            <section className='about_team'>
                <div className='row'>
                    <h2 className='about_subheading'>Meet Out Awesome Team!</h2>
                </div>
                {getAllRealtors()}
            </section>
        </main>
    );
};

export default About;








