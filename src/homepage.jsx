import React from "react";
import "./Home.css";
import logo from "./images/logo1.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {setBoarding,setDroping,setDate,setShowBus} from './Redux/slice'

function Home(){

    const page = useNavigate()

    const dispatch = useDispatch()
    
    const reduxbus = useSelector((state) => state.bus)
    const chennaitocoimbatore = reduxbus.chennaitocoimbatore
    const chennaitodharmapuri = reduxbus.chennaitodharmapuri
    const chennaitobangalure = reduxbus.chennaitobangalure
    const boarding = reduxbus.boarding
    const droping = reduxbus.droping
    const date = reduxbus.date

    function click(){
        if(boarding=='chennai'&& droping=='coimbatore'){
          dispatch(setShowBus(chennaitocoimbatore));
          if(date>=0 && date<=31){
            alert('select date')
          }
          else{
            page('/list')
            
          }
        }
        else if(boarding=='chennai'&& droping=='dharmapuri'){
          dispatch(setShowBus(chennaitodharmapuri));
          if(date>=0 && date<=31){
            alert('select date')
          }
          else{
            page('/list')
          }
        }
        else if(boarding=='chennai'&& droping=='bangalure'){
          dispatch(setShowBus(chennaitobangalure));
          if(date>=0 && date<=31){
            alert('select date')
          }
          else{
            page('/list')
          }
        }
        else{
          alert('NO SERVICE IN THIS ROUTE')
        }
      }

    return(
        <>
        <div id="container">
            <div><img id="home_image" src="https://cdn-assets1-cf-r5in.ticketsimply.net/assets/essaar_v1/images/bus_5-0b9d11dc3e35ea12979416cfe826b6e146e7e7fc776991a29a1519db9a3073b3.jpg" alt="image error"/></div>
            <div id="nav">
                <div id="logo">
                    <img src={logo} alt="image error"/>
                </div>
                <div id="menu">
                    <div id="menubar">
                            <div><a id="g_color">Home</a></div>
                            <div>|</div>
                            <div><a onClick={()=>{page("/ticket")}}>Booked Tickets</a></div>
                            <div>|</div>
                            <div><a>Contact</a></div>
                            <div>|</div>
                            <img src="https://th.bing.com/th/id/OIP.-xyN4OJYBnCWnhBbN29lcwHaHa?pid=ImgDet&w=203&h=203&c=7&dpr=1.3" alt="erroe"/>
                            <div><a>+91 84899 10650 / 92442 28857</a></div>
                    </div>
                </div>
            </div>
            <div id="locationbox">
                <div id="locationinput">
                    <div><input type="text" placeholder="Boarding point" onChange={(e)=>{dispatch(setBoarding(e.target.value))}}/></div>
                    <div><input type="text" placeholder="Droping point" onChange={(e)=>{dispatch(setDroping(e.target.value))}}/></div>
                    <div id="date"><input type="date" placeholder="Select date" onChange={(e)=>{dispatch(setDate(e.target.value))}}/></div>
                    <div id="booknow" onClick={()=>{click()}}>BOOK NOW</div>
                </div>
            </div>
            <div id="secondcontent">
                <div id="content">
                    <div>
                        <h2>Who we are?</h2>
                        <p><b>Essaar</b> - the journey began with the aspiration of conducting economical and enjoyable<br></br> journey experience at 1993. Now having 25 years of service in the public transportation<br></br> industry and being one of the largest providers of Inter-City bus transportation in<br></br> Coimbatore, serving more than 50 destinations across Tamil Nadu.</p>
                        <h3>SINCE 1993</h3>
                    </div>
                    <div>
                        <img src="https://cdn-assets1-cf-r5in.ticketsimply.net/assets/essaar_v1/images/bus-img-7a8e58ca8592e005652a059d98c2ff07b4209d161be77e8433b0eea2551abc2c.png" alt="error"/>
                    </div>
                </div>
                <div id="servicedetail">
                    <div className="serviceimg">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.4TdmHsWjAv3ZFjxhS528OgHaHa&pid=Api&P=0&h=180" alt="error"/>
                        <h1>30+</h1>
                        <p>Daily Services</p>
                    </div>
                    <div className="serviceimg">
                        <img src="https://tse3.mm.bing.net/th?id=OIP.d1eo_I-Kwqf5tqaL-i3MOAAAAA&pid=Api&P=0&h=180" alt="error"/>
                        <h1>800+</h1>
                        <p>Daily Delighted Customers</p>
                    </div>
                    <div className="serviceimg">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYjmESqjyDMiGjn2Gefbia-j7FyPk5lx3NA&usqp=CAU" alt="error"/>
                        <h1>50+</h1>
                        <p>Connecting Destinations</p>
                    </div>
                </div>
            </div>
            <div id="thirdcontent">
                <span>Destinations Featured</span>
                <p>Now having 25 years of service in the public transportation industry and being one of the largest providers of Inter-City<br></br> bus transportation in Coimbatore, serving more than 50 destinations across Tamil Nadu.</p>
                <div id="locimg">
                    <img src="https://cdn-assets2-cf-r5in.ticketsimply.net/assets/essaar_v1/images/dest-1-a0d62f713db64958bccdf353e55ece5f47b33c0a953215067a82281a91b4966e.jpg" alt="error"/>
                    <img src="https://cdn-assets1-cf-r5in.ticketsimply.net/assets/essaar_v1/images/dest-2-63cde1154010c5c576e98b79606781de7057d945f1040e8aeb9e923fe92b7bc0.jpg" alt="error"/>
                    <img src="https://cdn-assets2-cf-r5in.ticketsimply.net/assets/essaar_v1/images/dest-3-a9d3fbd39e126397cde817c926d618eb191cec12c38ae16fea594cf81f32d536.jpg" alt="error"/>
                    <img src="https://cdn-assets0-cf-r5in.ticketsimply.net/assets/essaar_v1/images/dest-4-6bfa66cf8cdeb22ac0bcb49b79f21226ebd57207c687cd76bf63bf4f8e3c1289.jpg" alt="error"/>
                </div>
                <div id="locimg2">
                    <img src="https://cdn-assets0-cf-r5in.ticketsimply.net/assets/essaar_v1/images/dest-5-9ec7ce7576529f045ca19569add3d868afbf27a7e3f05d03dd57ff2aa1f29f1b.jpg" alt="error"/>
                    <img src="https://cdn-assets2-cf-r5in.ticketsimply.net/assets/essaar_v1/images/dest-6-4e5522b69215517380be08ae79cf44d99cbeb31a8453434dee77db90b778d0c6.jpg" alt="error"/>
                    <img src="https://cdn-assets0-cf-r5in.ticketsimply.net/assets/essaar_v1/images/dest-7-5e90aaff3a9be51654ddc5e750208634f9ed3d8d045bbb9a2972f504ab192082.jpg" alt="error"/>
                </div>
            </div>
            <div id="fourthcontent">
                <div id="fourthtopimg">
                    <h1>Our Features</h1>
                    <img src="https://cdn-assets0-cf-r5in.ticketsimply.net/assets/essaar_v1/images/amenities-1-a969869ad77fb4564ef0b9f2769004e28ac9c79a5387b24767f276a02c9b6488.png" alt="error"/>
                </div>
                <img id="fourthbg" src="https://cdn-assets2-cf-r5in.ticketsimply.net/assets/essaar_v1/images/amenitie-bg-78529d23b62de6282aec0e45f683b68150c8b61fec8e718a62a5aa5e2d78f5f3.png" alt="error"/>
                <div id="fourthbottomimg">
                    <h1>Our Amenities</h1>
                    <img src="https://cdn-assets2-cf-r5in.ticketsimply.net/assets/essaar_v1/images/amenities-2-52d09f465b28a4fc991b02f3eaca2c8ce330324354ec53df701af694ec3dc33f.png" alt="error"/> 
                </div>
            </div>
            <div id="footercontainer">
                <div id="footer">
                    <div>
                        <h1>ESSAAR</h1>
                        <h3><b>Essaar</b> company you can rely on, when it comes to a <br></br>comfortable journey throughout. We are dedicated<br></br> to give you top notch Quality of Service, through a<br></br> good variety of dedicated Buses to choose from. Our<br></br> Staff is Professionally trained.</h3>
                    </div>
                    <div>
                        <h1>Other Info</h1>
                        <div id="otherdetails">
                            <div>
                            <h3>Testimonial<br></br>News<br></br>Faqs<br></br>Agent Registration<br></br>Download App</h3>
                            </div>
                            <div id="about">
                            <h3>About us<br></br>Terms & Conditions<br></br>Cancellation<br></br>Privacy Policy<br></br>Fedback
                            </h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Contact Us</h1>
                        <h3>Power House<br></br>No.1, Old No. 237,<br></br>Dr. Rajendra Prasad Road,<br></br>Coimbatore, Tamilnadu.<br></br>Ph: 9244228869, 0422-2491326</h3>
                    </div>
                </div>
                <div id="footerimg">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.3qqVx6bAfZvXngfPnnwiegHaHa&pid=Api&P=0&h=180" alt="error"/>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.3Oxbr3EA4nOuu7tutl7ZQwHaHO&pid=Api&P=0&h=180" alt="error"/>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.JtmXSh_uyZBaTg1eXd-NtgHaHa&pid=Api&P=0&h=180" alt="error"/>
                    <p>Powered By <b>'KAVIN'</b></p>
                </div>
            </div>     
        </div>
        </>
    )
}


export default Home;