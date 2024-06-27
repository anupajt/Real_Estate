import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ListingDetail = () => {
  const { id } = useParams();
  const [listing, setListing] = useState({});
  const [realtors, setRealtors] = useState({});
  const [price, setPrice] = useState('');

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };
    axios.get(`http://localhost:8000/api/listings/${id}`, config)
      .then(res => {
        setListing(res.data);
        setPrice(numberWithCommas(res.data.price));
      })
      .catch(err => {
        console.error(err);
      });
  }, [id]);

  useEffect(() => {
    const realtorId = listing.realtors;
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };
    if (realtorId) {
      axios.get(`http://localhost:8000/api/realtors/${realtorId}`, config)
        .then(res => {
          setRealtors(res.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [listing.realtors]);

  const displayInteriorImages = () => {
    let images = [];

    for (let i = 1; i <= 20; i++) {
      if (listing[`photo_${i}`]) {
        images.push(
          <div key={i} className='col-1-of-3'>
            <div className='listingdetails_display'>
              <img className='listing_display_image' src={listing[`photo_${i}`]} alt={`photo_${i}`} />
            </div>
          </div>
        );
      }
    }

    return images;
  };

  return (
    <div className='listingdetail'>
      <Helmet>
        <title>Real Estate - Listing | {listing.title || 'Loading...'}</title>
        <meta name='description' content='Listing detail' />
      </Helmet>

      <div className='listingdetail_header'>
        <h1 className='listingdetail_title'>{listing.title}</h1>
        <p className='listingdetail_location'>{listing.city}, {listing.state}, {listing.zipcode}</p>
      </div>

      <div className='row'>
        <div className='listingdetail_breadcrumb'>
          <Link className='listingdetail_breadcrumb_link' to='/'>Home</Link> / {listing.title}
        </div>
      </div>

      <div className='row'>
        <div className='col-3-of-4'>
          <div className='listingdetail_display'>
            <img className='listingdetail_display_image' src={listing.photo_main} alt='main_photo' />
          </div>
        </div>

        <div className='col-1-of-4'>
          <div className='listingdetail_display'>
            <img className='listingdetail_display_image' src={realtors.photo} alt='realtor_photo' />
          </div>
          <h3 className='listingdetail_realtor'>{realtors.name}</h3>
          <h3 className='listingdetail_contact'>{realtors.phone}</h3>
          <h3 className='listingdetail_email'>{realtors.email}</h3>
          <h3 className='listingdetail_about'>{realtors.description}</h3>
        </div>
      </div>

      <div className='row'>
        <div className='col-1-of-4'>
          <ul className='listingdetail_list'>
            <li className='listingdetail_list_item'>Home Type: {listing.home_type}</li>
            <li className='listingdetail_list_item'>Price: ${price}</li>
            <li className='listingdetail_list_item'>Bedrooms: {listing.bedrooms}</li>
            <li className='listingdetail_list_item'>Bathrooms: {listing.bathrooms}</li>
            <li className='listingdetail_list_item'>Square Feet: {listing.sqft}</li>
          </ul>
        </div>
        <div className='col-1-of-4'>
          <ul className='listingdetail_list'>
            <li className='listingdetail_list_item'>Sale Type: {listing.sale_type}</li>
            <li className='listingdetail_list_item'>Address: {listing.address}</li>
            <li className='listingdetail_list_item'>City: {listing.city}</li>
            <li className='listingdetail_list_item'>State: {listing.state}</li>
            <li className='listingdetail_list_item'>Zipcode: {listing.zipcode}</li>
          </ul>
        </div>
      </div>

      <div className='row'>
        <p className='listingdetail_description'>{listing.description}</p>
      </div>

      <div className='row'>
        {displayInteriorImages()}
      </div>
    </div>
  );
};

export default ListingDetail;

