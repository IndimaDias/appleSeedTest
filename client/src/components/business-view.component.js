import React, { Component } from 'react';
import axios from 'axios';
import './css/business-view.component.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';

const Business = props => (
    <div className = 'container-view'> 
    <div className = "container-md">
        <div>
            {props.business.info.images.top ? (
                        <div className='row mt-5'>
                            <div className='col-md-6 m-auto'>
                                <img className="img-responsive" src={'/image/' + props.business.info.images.top} alt='' />
                            </div>
                        </div>
            )  : null } 
            <div className = 'mt-5 h1 BusinessName'><h1>{props.business.info.name}</h1></div>
        </div>
        <div><p className='texta lead businessLead'>{props.business.info.topMessage}</p></div>
        
        <div className = 'row'>
            <div className='col-md-6'>
                {(props.business.info.website || props.business.info.phone || props.business.info.email) ? (
                    <div><h5>Contact us:</h5></div>
                ) : null}    
                {props.business.info.website ? (
                      <div>Website: <a href={props.business.info.website}>{props.business.info.website}</a></div>
                 ) : null}
                {props.business.info.phone ? (
                      <div>Phone: {props.business.info.phone}</div>
                 ) : null}

                {props.business.info.email ? (
                    <div>Email: {props.business.info.email}</div>
                ) : null}
                <br></br>    
                <div>
                    <address>
                        {props.business.info.address.addr1}<br></br>
                        {props.business.info.address.addr2}
                        {props.business.info.address.addr2 ? (<br></br> ) : null}
                        {props.business.info.address.city}&nbsp;
                        {props.business.info.address.state}
                        {props.business.info.address.state ? (<br></br> ) : null}
                        {props.business.info.address.zip}
                    </address>
                </div>
            </div>   

            {props.business.info.hours.text ? (
                <div className='col-md-6'>
                    <h5>Open Hours:</h5>
                        <div className="texta">{props.business.info.hours.text}</div>
                </div> 
             ) : null}  

        </div>
 

        {(props.business.info.onlineSales.text || props.business.info.onlineSales.url) ? (
        <div className ='section'>
            <div className='subHead'>
                <h5>Shop Online:</h5>
            </div>
            <div className = 'texta subsection'>{props.business.info.onlineSales.text}
                {props.business.info.onlineSales.url ? (
                    <div>
                        <a href={props.business.info.onlineSales.url}>Shop Now</a>
                    </div>
                ) : null }
            </div>
        </div>
        ) : null }


        {(props.business.info.delivery.text || props.business.info.delivery.url) ? (
            <div className ='section'>
                <div className='subHead'>
                    <h5>Delivery:</h5>
                </div>
                <div className = 'texta subsection'>{props.business.info.delivery.text}
                {props.business.info.delivery.url ? (
                   <div>
                        <a href={props.business.info.delivery.url}>Delivery</a>
                   </div>
                ) : null }
                </div>
            </div>
        ) : null }

        {(props.business.info.giftCard.text || props.business.info.giftCard.url) ? (
            <div className ='section'>
                <div className='subHead'>
                    <h5>Gift Cards:</h5>
                </div>
                <div className = 'texta subsection'>{props.business.info.giftCard.text}
                {props.business.info.giftCard.url ? (
                   <div>
                        <a href={props.business.info.giftCard.url}>Purcase a Gift Card</a>
                   </div>
                ) : null }
                </div>
            </div>
        ) : null }

        {(props.business.info.links.link1Label || props.business.info.links.link2Label || props.business.info.links.link3Label) ? (
            <div className ='section'>
                <div className='subHead'>
                    <h5>Additional Links:</h5>
                </div>
                <div className = 'subsection'>            
                    <div className = 'divLinks'>
                        {props.business.info.links.link1Url ? (
                            <div><a href={props.business.info.links.link1Url}>{props.business.info.links.link1Label}</a></div>
                        ) : null }
                    </div>
                
                    <div className = 'divLinks'>
                        {props.business.info.links.link2Url ? (
                            <div><a href={props.business.info.links.link2Url}>{props.business.info.links.link2Label}</a></div>
                        ) : null }
                    </div>

                    <div className = 'divLinks'>
                        {props.business.info.links.link3Url ? (
                            <div><a href={props.business.info.links.link3Url}>{props.business.info.links.link3Label}</a></div>
                        ) : null }
                    </div>
                </div>
            </div>
        ) : null }


        <div className ="section">
           
           {(props.business.info.social.facebook || props.business.info.social.twitter || props.business.info.social.instagram) ? (
               <div className='subhead'>
                   <h5>Follow us:</h5>
               </div>
            ) : null}

           <div className="row subsection">
               {props.business.info.social.facebook ? (                
                   <div className="col-md-1">                  
                       <a className = 'btnFB' href={props.business.info.social.facebook} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebookF} /></a>        
                   </div>
               ) : null}   

               {props.business.info.social.twitter ? (                
                   <div className="col-md-1">                  
                       <a className = 'btnTwitter' href={props.business.info.social.twitter} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTwitter} /></a>        
                   </div>
               ) : null}  

               {props.business.info.social.instagram ? (                
                   <div className="col-md-1">                  
                       <a className = 'btnInst' href={props.business.info.social.instagram} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} /></a>        
                   </div>
               ) : null}  

           </div>     
       </div>

        <div><h5 className="texta">{props.business.info.bottomMessage}</h5></div>
 
        <div className="float-right">Last Updated: {props.business.updatedAt.substring(0,10)}</div>
    </div>
    </div>  
)

export default class BusinessView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            business : {
                username:'',
                password: '',
                pageId:'',
                info: {
                    name: '',
                    images: {
                        top: '',
                    },
                    address: {
                        addr1: '',
                        addr2: '',
                        city: '',
                        state: '',
                        zip: '',
                    },
                    phone: '',
                    email: '',
                    topMessage: '',
                    bottomMessage: '',
                    hours: {
                        text: '',
                    },
                    social: {
                        facebook: '',
                        twitter: '',
                        instagram: '',
                    },
                    giftCard: {
                        text: '',
                        url: '',
                    },
                    onlineSales: {
                        text: '',
                        url: '',
                    },
                    delivery: {
                        text: '',
                        url: '',
                    },
                    links: {
                        link1Label: '',
                        link1Url: '',
                        link2Label: '',
                        link2Url: '',
                        link3Label: '',
                        link3Url: '',
                    },
                },

                updatedAt: '',
            }
        };

    }

    componentDidMount() {
        
        axios.get('http://localhost:5000/business/' + this.props.match.params.pageId)
            .then(response => {
               this.setState({ business: response.data});
               
            })
            .catch((error) => {
                console.log(error);
            })

           
    }

    showBusiness() {
        return <Business business={this.state.business}/>;
    }

    render() {
        return (
            <div>
                <div>
                    {  this.showBusiness() }
                </div>
            </div>

        ) 
    }

}