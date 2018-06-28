import React, { Component } from 'react';
import '../assets/css/multipleresultspage.css';
import glutenfreeone from '../assets/images/multipleresultsimages/glutenfreeone.png';
import glutenfreetwo from '../assets/images/multipleresultsimages/glutenfreetwo.png'
import glutenfreethree from '../assets/images/multipleresultsimages/glutenfreethree.png'
import glutenfreefour from '../assets/images/multipleresultsimages/glutenfreefour.png'
import glutenfreefive from '../assets/images/multipleresultsimages/glutenfreefive.png'
import glutenfreesix from '../assets/images/multipleresultsimages/glutenfreesix.png'
import {Link} from 'react-router-dom';

class Searchresults extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="multipleResultsContainer">
                <div className="multipleResultsItemsContainer">
                    <Link to='/SingleResult'>
                        <div className="multipleResultsItem">
                            <img className="multipleResultsImage" src={glutenfreeone} alt=""/>
                            <p className="multipleResultsLabel">Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </Link>
                    <Link to='/SingleResult'>
                        <div className="multipleResultsItem">
                            <img className="multipleResultsImage" src={glutenfreetwo} alt=""/>
                            <p className="multipleResultsLabel">Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </Link>
                    <Link to='/SingleResult'>
                        <div className="multipleResultsItem">
                            <img className="multipleResultsImage" src={glutenfreethree} alt=""/>
                            <p className="multipleResultsLabel">Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </Link>
                    <Link to='/SingleResult'>
                        <div className="multipleResultsItem">
                            <img className="multipleResultsImage" src={glutenfreefour} alt=""/>
                            <p className="multipleResultsLabel">Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </Link>
                    <Link to='/SingleResult'>
                        <div className="multipleResultsItem">
                            <img className="multipleResultsImage" src={glutenfreefive} alt=""/>
                            <p className="multipleResultsLabel">Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </Link>
                    <Link to='/SingleResult'>
                        <div className="multipleResultsItem">
                            <img className="multipleResultsImage" src={glutenfreesix} alt=""/>
                            <p className="multipleResultsLabel">Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </Link>
                </div>
                <div className='footerButtons'>
                    <Link to='/Categories'><div type='button' className='btnStyle btnNormal'>&#8592; Back</div></Link>
                    <Link to='/'><div type='button' className='btnStyle btnNormal'>Home &#8594;</div></Link>
                </div>
            </div>
        )
    }
}

export default Searchresults;