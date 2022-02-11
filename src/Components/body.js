import React, { Component } from 'react';
// import LOGOIMAGE from '../images/Saylani.png' 
import Slider1 from '../images/slider1.PNG';
import Slider2 from '../images/slider 2.PNG';
import Slider3 from '../images/slider 3.PNG';
import Slider4 from '../images/slider 4.PNG';
import Slider5 from '../images/slider 5.PNG';
import img from '../images/say.png';
import Meal from '../images/removebg1.png';
import People from '../images/people.PNG';
import Doctor from '../images/doc.PNG';
import cap from '../images/Capture.PNG';
import '../App.css';


import Snip1 from '../images/snip1.PNG';
import Snip2 from '../images/snip2.PNG';
import Snip3 from '../images/snip3.PNG';
import Snip4 from '../images/snip4.PNG';
import Snip5 from '../images/snip5.PNG';
import Snip6 from '../images/snip6.PNG';



class Body extends React.Component {
    render() {
        return (
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Slider1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Slider2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Slider3} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Slider4} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Slider5} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <br />
                <marquee style={{ backgroundColor: "blue", color: "white" }} behavior="scroll" direction="left" scrollamount={20}>(News-1 Dated:15-05-2019)  Saylani Welfare Announced "Donation Application" . More Details    (News-2 Dated:07-05-2019)  Alhamdulillah Saylani Organized 200+ Locations For Iftar And Sehri In This Holy Month . More Details    (News-3 Dated:08-03-2019)  Saylani Welfare Distributing Ration & Clothes to affected people of Balochistan. More Details    (News-4 Dated:25-02-2019)  PIAIC Entrance Exam Merit Ranking List Announced. More Details   (News-5 Dated:23-02-2019)  President of Pakistan (Dr. Arif Alvi) Visited Saylani Welfare International Trust HeadOffice Karachi. More Details    (News-6 Dated:19-02-2019)  Dr Jamil Ahmed (Additional Inspector General of Police) & Atiqmir Visit Saylani Welfare International Trust, Saylani Mass I.T. Training. More Details</marquee>

                <br /> <br /> <br />

                <h2 style={{ textAlign: "center" }}>INTRODUCATION</h2>
                <img src={img} alt="cur" className='Image' />
                <br /> <br />
                <div className='center' >
                    <p>
                        Established in May 1999 by famous spiritual and religious scholar Maulana Bashir Ahmed Farooqui, Saylani Welfare International Trust was built on the fundamentals of breaking the cycle of poverty, alleviating the financial troubles of the poor, giving people a chance to live a       dignified life and spreading happiness.
                    </p>
                    <p>
                        Established in May 1999 by famous spiritual and religious scholar Maulana Bashir Ahmed Farooqui, Saylani Welfare International Trust was built on the fundamentals of breaking the cycle of poverty, alleviating the financial troubles of the poor, giving people a chance to live a       dignified life and spreading happiness.
                    </p>
                    <p>
                        Today, we are proud to say that our physical presence extends throughout Pakistan with a vast network of 125 branches operating in major cities including Karachi, Lahore, Islamabad, Rawalpindi, Hyderabad and Faisalabad. Apart from Pakistan, we have overseas offices in the UK, USA and UAE as well. Our worldwide branches are operating under the guidance of a team of over 3,500 working professionals who help almost 150,000 people on a daily basis.
                    </p>
                    <p>
                        We strongly believe that a little help goes a long way and our work would not be possible without the generous support of our valuable donors. Our local and international donors have graciously lent us a hand by supporting our causes and enabling us to serve the needs of people in need.
                    </p>
                </div>
                <div>
                    <div className="main">
                        <span className="meal">
                            <center><img src={Meal} alt="..." height="50px" width="50px" /></center>
                            <center><h1><b>150,000</b></h1></center>
                            <center><p><b>DAILY DASTRAKHAN(MONTHLY) </b></p></center>
                        </span>
                        <span className="fam">
                            <center><img src={People} alt="..." height="50px" width="50px" /></center>
                            <center><h1><b>8,500</b></h1></center>
                            <center><p><b>FAMILY ADOPTION(MONTHLY) </b></p></center>
                        </span>
                        <span className="doc">
                            <center><img src={Doctor} alt="..." height="50px" width="50px" /></center>
                            <center><h1><b>53,749</b></h1></center>
                            <center><p><b>MEDICAL(MONTHLY) </b></p></center>
                        </span>
                        <span className="edu">
                            <center><img src={cap} alt="..." height="50px" width="50px" /></center>
                            <center><h1><b>180,000</b></h1></center>
                            <center><p><b>Education(MONTHLY) </b></p></center>
                        </span>
                    </div>
                    <br /> <br />
                    <h1 style={{ textAlign: 'center' }} >WHAT WE ARE DOING</h1>
                    <img src={img} alt="cur" className='Image' />
                    <br /> <br />
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={Snip1} className="card-img-top" alt="..." width="5px" height="50px" />
                        <div className="card-body">
                            <center><h5 className="card-title">ONLINE SADQAH</h5></center>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={Snip2} className="card-img-top" alt="..." width="5px" height="50px" />
                        <div className="card-body">
                            <center><h5 className="card-title">WELFARE</h5></center>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={Snip3} className="card-img-top" alt="..."  width="5px" height="50px" />
                        <div className="card-body">
                            <center><h5 className="card-title">MEDICAL</h5></center>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={Snip4} className="card-img-top" alt="..." width="5px" height="50px" />
                        <div className="card-body">
                        <center><h5 className="card-title">DASTRAKHAN</h5></center>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={Snip5} className="card-img-top" alt="..." width="5px" height="50px" />
                        <div className="card-body">
                        <center><h5 className="card-title">RO PLANT</h5></center>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={Snip6} className="card-img-top" alt="..." width="5px" height="50px" />
                        <div className="card-body">
                            <center><h5 className="card-title">EDUCATION</h5></center>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Body;