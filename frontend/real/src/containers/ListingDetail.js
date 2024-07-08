import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ListingDetail = (props) => {
  const { id } = useParams();
  const [listing, setListing] = useState({});
  const [realtors, setRealtors] = useState({});
  const [price, setPrice] = useState('');

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  
  useEffect(() => {
    // const slug = props.match.params.id;
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
  }, [ [id]]);



  useEffect(() => {
    const id = listing.id;
    console.log("hello",id)
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };
    
    if (id) {
       console.log('if')        
      axios.get(`http://localhost:8000/api/realtors/${id}`, config)
        .then(res => {
          setRealtors(res.data);
        })
        .catch(err => {
          console.error(err);
        });
    }else {
        console.log("else")
    }
  }, [listing.id]);

  

  const displayInteriorImages = () => {
    let images = [];

    images.push(
        <div key={1} className='row'>
            <div className='col-1-of-3'>
                {
                    listing.photo_1 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_1} alt='' />
                        </div>
                    ) : null
                }
            </div>
            <div className='col-1-of-3'>
                {
                    listing.photo_2 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_2} alt='' />
                        </div>
                    ) : null
                }
            </div>
            <div className='col-1-of-3'>
                {
                    listing.photo_3 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_3} alt='' />
                        </div>
                    ) : null
                }
            </div>
        </div>
    );

    images.push(
        <div key={2} className='row'>
            <div className='col-1-of-3'>
                {
                    listing.photo_4 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_4} alt='' />
                        </div>
                    ) : null
                }
            </div>
            <div className='col-1-of-3'>
                {
                    listing.photo_5 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_5} alt='' />
                        </div>
                    ) : null
                }
            </div>
            <div className='col-1-of-3'>
                {
                    listing.photo_6 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_6} alt='' />
                        </div>
                    ) : null
                }
            </div>
        </div>
    );

    images.push(
        <div key={3} className='row'>
            <div className='col-1-of-3'>
                {
                    listing.photo_7 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_7} alt='' />
                        </div>
                    ) : null
                }
            </div>
            <div className='col-1-of-3'>
                {
                    listing.photo_8 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_8} alt='' />
                        </div>
                    ) : null
                }
            </div>
            <div className='col-1-of-3'>
                {
                    listing.photo_9 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_9} alt='' />
                        </div>
                    ) : null
                }
            </div>
        </div>
    );

    images.push(
        <div key={4} className='row'>
            <div className='col-1-of-3'>
                {
                    listing.photo_10 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_10} alt='' />
                        </div>
                    ) : null
                }
            </div>
            <div className='col-1-of-3'>
                {
                    listing.photo_12 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_11} alt='' />
                        </div>
                    ) : null
                }
            </div>
            <div className='col-1-of-3'>
                {
                    listing.photo_12 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_12} alt='' />
                        </div>
                    ) : null
                }
            </div>
        </div>
    );

    images.push(
        <div key={5} className='row'>
            <div className='col-1-of-3'>
                {
                    listing.photo_13 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_13} alt='' />
                        </div>
                    ) : null
                }
            </div>
            <div className='col-1-of-3'>
                {
                    listing.photo_14 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_14} alt='' />
                        </div>
                    ) : null
                }
            </div>
            <div className='col-1-of-3'>
                {
                    listing.photo_15 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_15} alt='' />
                        </div>
                    ) : null
                }
            </div>
        </div>
    );

    images.push(
        <div key={6} className='row'>
            <div className='col-1-of-3'>
                {
                    listing.photo_16 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_16} alt='' />
                        </div>
                    ) : null
                }
            </div>
            <div className='col-1-of-3'>
                {
                    listing.photo_17 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_17} alt='' />
                        </div>
                    ) : null
                }
            </div>
            <div className='col-1-of-3'>
                {
                    listing.photo_18 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_18} alt='' />
                        </div>
                    ) : null
                }
            </div>
        </div>
    );

    images.push(
        <div key={7} className='row'>
            <div className='col-1-of-3'>
                {
                    listing.photo_19 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_19} alt='' />
                        </div>
                    ) : null
                }
            </div>
            <div className='col-1-of-3'>
                {
                    listing.photo_20 ? (
                        <div className='listingdetail_display'>
                            <img className='listingdetail_display_image' src={listing.photo_20} alt='' />
                        </div>
                    ) : null
                }
            </div>
            <div className='col-1-of-3'></div>
        </div>
    );

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
          <Link className='listingdetail_breadcrumb_link' to='/'>Home</Link> <h4 className='listingdetail_breadcrumb_link'>/{listing.title}</h4>
        </div>
      </div>

      <div className='row'>
        <div className='col-3-of-4'>
          <div className='listingdetail_display'>
            <img className='listingdetail_display_image_main' src={listing.photo_main} alt='main_photo' />
          </div>
        </div>

        <div className='col-1-of-4'>
          <div className='listingdetail_display'>
            <img className='listingdetail_display_image_real' src={realtors.photo} alt='realtor_photo' />
          </div>
          <h3 className='listingdetail_realtor'>{realtors.name}</h3>
          <h3 className='listingdetail_contact'>{realtors.phone}</h3>
          <h3 className='listingdetail_contact'>{realtors.email}</h3>
          <br />
          <p className='listingdetail_about'>{realtors.description}</p>
        </div>
      </div>

      <div className='row'>
        <div className='col-2-of-4'>
          <ul className='listingdetail_list'>
            <li className='listingdetail_list_item'><span style ={{color:'grey'}}>Home Type :</span> {listing.home_type}</li>
            <li className='listingdetail_list_item'><span style ={{color:'grey'}}>Price :</span> ${price}</li>
            <li className='listingdetail_list_item'><span style ={{color:'grey'}}>Bedrooms :</span> {listing.bedrooms}</li>
            <li className='listingdetail_list_item'><span style ={{color:'grey'}}>Bathrooms :</span> {listing.bathrooms}</li>
            <li className='listingdetail_list_item'><span style ={{color:'grey'}}>Square Feet :</span> {listing.sqft}</li>
          </ul>
        </div>
        <div className='col-2-of-4'>
          <ul className='listingdetail_list'>
            <li className='listingdetail_list_item'><span style ={{color:'grey'}}>Sale Type :</span> {listing.sale_type}</li>
            <li className='listingdetail_list_item'><span style ={{color:'grey'}}>Address :</span> {listing.address}</li>
            <li className='listingdetail_list_item'><span style ={{color:'grey'}}>City :</span> {listing.city}</li>
            <li className='listingdetail_list_item'><span style ={{color:'grey'}}>State :</span> {listing.state}</li>
            <li className='listingdetail_list_item'><span style ={{color:'grey'}}>Zipcode :</span> {listing.zipcode}</li>
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

