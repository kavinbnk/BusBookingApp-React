import React, { useState } from "react";
import { Modal ,message} from 'antd';
import "./buslist.css";
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {setModalOpen,setSelectedData,setSelectedSeat,setBookedData,setDate} from './Redux/slice';


function List(){  

    //redux
    const reduxbus = useSelector((state) => state.bus)

    const busSeatl1 = reduxbus.busSeatl1
    const busSeatl2 = reduxbus.busSeatl2
    const busSeatl3 = reduxbus.busSeatl3
    const busSeatu1 = reduxbus.busSeatu1
    const busSeatu2 = reduxbus.busSeatu2
    const busSeatu3 = reduxbus.busSeatu3
    const boarding = reduxbus.boarding
    const droping = reduxbus.droping
    const date = reduxbus.date
    const showBus= reduxbus.showBus
    const modalOpen= reduxbus.modalOpen
    const selectedData= reduxbus.selectedData
    const selectedSeat= reduxbus.selectedSeat
    const bookedData= reduxbus.bookedData

    const dispatch= useDispatch()

    //redux close  

    const page = useNavigate()  

    const [cusName, setCusName] = useState('')
  const [cusMail, setCusMail] = useState('')
  const [cusAge, setCusAge] = useState('')
  const [cusPhoneno, setCusPhoneno] = useState('')
  const [cusGender, setCusGender] = useState('')
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Booked successfully',
      className: 'custom-class',
    });
  };




  const time = new Date();
  const time_sec = format(time, 'MMMM dd, yyyy HH:mm:ss')

  function detail(e) {
    e.preventDefault();
    var data = {
      boarding: boarding,
      droping: droping,
      date: date,
      time: selectedData.time,
      bookedtime: time_sec,
      type: selectedData.type,
      price: selectedData.price,
      seat: selectedSeat && selectedSeat.id,
      name: cusName,
      mail: cusMail,
      age: cusAge,
      phoneno: cusPhoneno,
      gender: cusGender
    }

    if (selectedSeat == "") {
      alert('selet seat')
    }

    dispatch(setBookedData([...bookedData, data]))

    dispatch(setSelectedSeat(''))
    dispatch(setModalOpen(false))
    dispatch(setDate(null))
    // page('/home')
    success()

    
  }
                          

    return(
        <>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:" rgba(0,0,0,0.8)",padding:"10px"}}>
            <img src="https://cdn-assets1-cf-r5in.ticketsimply.net/assets/essaar_v1/images/logo-3ea9b2372876ca7a53792d1840db946b85130f185893ed8b3997c21733350818.png" alt="image error"/>
            <div id="back" style={{display:"flex",justifyContent:"center",marginRight:"50px",width:'70px',height:"20px",fontSize:"18px",fontWeight:"500",borderRadius:"8px",padding:"12px 18px 12px 14px",backgroundColor:"#4aad4e",color:"white"}} onClick={()=>page("/home")}> Go Back</div>
        </div>
        <div id="buslist">
            {showBus&&showBus.map((i)=>{
                return(
                    <div id="busdetail" style={{borderRadius:"20px",marginTop:"30px",marginBottom:"20px",display:"flex",justifyContent:"space-evenly",height:"100px",width:"1000px",textAlign:"center",alignItems:"center"}}>
                    <div><b>Destination</b><br></br>{i.name}</div>
                    <div><b>Time</b><br></br>{i.time}</div>
                    <div><b>Start from</b><br></br>{i.price}</div>
                    <div><b>Journey Date</b><br></br>{date}</div>
                    <div><b>Bus type</b><br></br>{i.type}</div>
                    <button onClick={()=>{dispatch(setSelectedData(i));dispatch(setModalOpen(true))}}>Book</button>
                    </div>
                )
            })}
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
        <Modal title="SELECT YOURS" open={modalOpen}  onCancel={()=>{dispatch(setModalOpen(false))}} 
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}  style={{marginTop:"-50px"}} width={1000}>
            <div style={{display:"flex"}}> 
                <div style={{display:"flex",border:"2px solid black",textAlign:"center",width:"140px",padding:"10px"}}>
                    <div>
                    {busSeatl1.map((i)=>{
                        return(
                            <div className="seat"  onClick={()=>{dispatch(setSelectedSeat(i))}} style={{width:"30px",height:"70px",border:"2px solid black", backgroundColor: i === selectedSeat  ? "blue" : "initial" }}>{i.id}</div>
                        )
                    })}
                    </div>
                    <div style={{marginLeft:"30px"}}>
                    {busSeatl2.map((i)=>{
                        return(
                            <div className="seat" onClick={()=>{dispatch(setSelectedSeat(i))}} style={{width:"30px",height:"70px",border:"2px solid black",backgroundColor: i === selectedSeat ? "blue" : "initial" }}>{i.id}</div>
                        )
                    })}
                    </div>
                    <div>
                    {  busSeatl3 &&  busSeatl3.map((i)=>{
                        return(
                            <div className="seat" onClick={()=>{dispatch(setSelectedSeat(i))}} style={{width:"30px",height:"70px",border:"2px solid black",backgroundColor: i === selectedSeat ? "blue" : "initial" }}>{i.id}</div>
                        )
                    })}
                    </div>
                </div>
                <div style={{display:"flex",border:"2px solid black",textAlign:"center",width:"150px",padding:"10px",marginLeft:"50px"}}>
                    <div>
                    {  busSeatu1 &&  busSeatu1.map((i)=>{
                        return(
                            <div className="seat" onClick={()=>{dispatch(setSelectedSeat(i))}} style={{width:"30px",height:"70px",border:"2px solid black",backgroundColor: i ===  selectedSeat ? "blue" : "initial" }}>{i.id}</div>
                        )
                    })}
                    </div>
                    <div style={{marginLeft:"30px"}}>
                    { busSeatu2 && busSeatu2.map((i)=>{
                        return(
                            <div className="seat" onClick={()=>{dispatch(setSelectedSeat(i))}} style={{width:"30px",height:"70px",border:"2px solid black", backgroundColor: i === selectedSeat ? "blue" : "initial" }}>{i.id}</div>
                        )
                    })}
                    </div>
                    <div>
                    { busSeatu3 && busSeatu3.map((i)=>{
                        return(
                            <div className="seat" onClick={()=>{dispatch(setSelectedSeat(i))}} style={{width:"30px",height:"70px",border:"2px solid black",backgroundColor: i === selectedSeat ? "blue" : "initial" }}>{i.id}</div>
                        )
                    })}
                    </div>
                </div>
                <div style={{marginLeft:"100px",width:"500px",border:"2px solid black",backgroundColor:"whitesmoke"}}>
                <form onSubmit={(e)=>{detail(e)}} style={{marginLeft:"50px"}}>
                    <div style={{fontWeight:"900",fontSize:"22px",paddingLeft:"90px",paddingTop:"15px",paddingBottom:"4px"}}>BOOKING DETAILS</div>
                    <div style={{paddingTop:"5px"}}><b>BOARDING :</b> {boarding} (Essaar Office)</div>
                    <div style={{paddingTop:"5px"}}><b>DROPING :</b> {droping} (Essaar Office)</div>
                    <div style={{paddingTop:"5px"}}><b>DATE :</b> {date}</div>
                    <div style={{paddingTop:"5px"}}><b>BUS TYPE :</b> {selectedData && selectedData.type}</div>
                    <div style={{paddingTop:"5px"}}><b>TIME :</b> {selectedData && selectedData.time}</div>
                    <div style={{paddingTop:"5px"}}><b>PRICE :</b> {selectedData && selectedData.price}</div>
                    <div style={{paddingTop:"5px"}}><b>SELECTED SEAT :</b> {selectedSeat && selectedSeat.id}</div>
                    <div style={{fontWeight:"900",fontSize:"22px",paddingLeft:"75px",paddingBottom:'10px'}}>PASSENGER DEATILS</div>
                    <div style={{paddingTop:"5px"}}><b style={{paddingRight:"31px"}}>NAME :</b> <input type="text" style={{width:"200px",height:"25px"}} placeholder="enter your name" onChange={(e)=>{setCusName(e.target.value)}} required/></div>
                    <div style={{paddingTop:"5px"}}><b style={{paddingRight:"25px"}}>E-MAIL :</b> <input type="text" style={{width:"200px",height:"25px"}} placeholder="enter your E-mail" onChange={(e)=>{setCusMail(e.target.value)}} required/></div>
                    <div style={{paddingTop:"5px"}}><b style={{paddingRight:"52px"}}>AGE :</b><input type="text" style={{width:"40px",height:"25px"}} placeholder='age' onChange={(e)=>{setCusAge(e.target.value)}} required/></div>
                    <div style={{paddingTop:"5px"}}><b style={{paddingRight:"5px"}}>PHONE NO :</b><input type="text" style={{width:"200px",height:"25px"}} placeholder="mobile no" onChange={(e)=>{setCusPhoneno(e.target.value)}} required/></div>
                    <div style={{paddingTop:"5px"}}><b>GENDER : </b><b>MALE </b><input onChange={(e)=>{setCusGender(e.target.value)}} type="radio" name="gender" value={'male'} required/>
                    <b>FEMALE </b> <input type="radio" name="gender" onChange={(e)=>{setCusGender(e.target.value)}} value={'female'} required/></div>
                    <button style={{marginLeft:"100px",width:"150px",height:"30px",marginTop:"15px",backgroundColor:"#4aad4e",borderRadius:"5px",boxShadow:"0px 0px 4px 4px lightgrey"}} type="submit">BOOK </button>
                </form>
                </div>
            </div>    
        <div>{contextHolder}</div>
        </Modal>
        </>
    )
}

export default List