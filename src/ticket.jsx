import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {setBookedData} from './Redux/slice';


function Ticket(){


    const page = useNavigate()

    const reduxbus = useSelector((state) => state.bus)
    const bookedData= reduxbus.bookedData
    const dispatch= useDispatch()
    

    const cancelTicket = (index) => {
        const updatedBookedData = [...bookedData];
        updatedBookedData.splice(index, 1);
        dispatch(setBookedData(updatedBookedData));
      };

    return(
        <>

            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:" rgba(0,0,0,0.8)",padding:"10px"}}>
                <img src="https://cdn-assets1-cf-r5in.ticketsimply.net/assets/essaar_v1/images/logo-3ea9b2372876ca7a53792d1840db946b85130f185893ed8b3997c21733350818.png" alt="image error"/>
                <div id="back" style={{display:"flex",justifyContent:"center",marginRight:"50px",width:'70px',height:"20px",fontSize:"18px",fontWeight:"500",borderRadius:"8px",padding:"12px 18px 12px 14px",backgroundColor:"#4aad4e",color:"white"}} onClick={()=>{page("/home")}}> Go Back</div>
            </div>
            <div style={{marginLeft:"22%"}}>
                { bookedData && bookedData.map((i,index)=>{
                    return(
                        <>
                            <div style={{borderRadius:"20px",width:"830px",height:"500px",textAlign:"center",backgroundColor:"#c8e8c9"}}>
                            
                                <h2 style={{marginTop:"40px",paddingTop:"30px"}}>Boarding & Droping Details :</h2>
                                <div style={{border:"1px dashed black",width:"500px",marginLeft:"160px"}}></div>
                                <div style={{display:"flex",gap:".7cm",paddingTop:"16px",fontSize:"18px",paddingLeft:"60px"}}>
                                    <div><b>Boarding point :</b>{i.boarding}</div>
                                    <div><b>Droping point :</b>{i.droping}</div>
                                    <div><b>Travel Date :</b>{i.date}</div>
                                </div>
                                <h2>Passenger Details :</h2>
                                <div style={{border:"1px dashed black",width:"230px",marginLeft:"300px"}}></div>
                                <div style={{display:"flex",paddingLeft:"160px",gap:"1.4cm",paddingTop:"10px",fontSize:"18px"}}>
                                    <div><b>Name :</b>{i.name}</div>
                                    <div><b>Email :</b>{i.mail}</div>
                                    <div><b>Age :</b>{i.age}</div>
                                </div>
                                <div style={{display:"flex",paddingLeft:"250px",gap:"1.4cm",paddingTop:"10px",fontSize:"18px"}}>
                                    <div><b>Phone no :</b>{i.phoneno}</div>
                                    <div><b>Gender :</b>{i.gender}</div>
                                </div>
                                <h2>Seat Details :</h2>
                                <div style={{border:"1px dashed black",width:"164px",marginLeft:"330px"}}></div>
                                <div style={{display:"flex",gap:"1.5cm",paddingLeft:"140px",paddingTop:"10px",fontSize:"18px"}}>
                                    <div><b>Bus Type :</b>{i.type}</div>
                                    <div><b>Ticket Fair :</b>{i.price}</div>
                                </div>
                                <div style={{display:"flex",gap:"1.5cm",paddingLeft:"220px",paddingTop:"10px",fontSize:"18px"}}>    
                                    <div><b>Journey Time :</b>{i.time }</div>
                                    <div><b>Seat No :</b>{i.seat}</div>
                                </div>
                                <div style={{marginTop:"20px"}}>
                                    <button onClick={() => cancelTicket(index)} style={{width:"150px",height:"35px",borderRadius:"10px",fontWeight:"800",backgroundColor:"red"}}>Cancel ticket</button>
                                    {/* <button style={{marginLeft:"30px",width:"150px",height:"36px",borderRadius:"10px",fontWeight:"800",backgroundColor:'royalblue'}}>Edit Details</button> */}
                                </div>
                                <div style={{display:"flex",justifyContent:"end",marginRight:"20px"}}>{i.bookedtime}</div>
                            </div>    
                        </>
                    )
                })}
            </div> 
            <div id="footercontainer" style={{marginTop:"40px"}}>
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
        </>
    )
}

export default Ticket