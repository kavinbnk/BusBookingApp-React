import { createSlice } from '@reduxjs/toolkit';



const initialState = {
     chennaitocoimbatore: [{
          name: 'chennai to coimbatore',
          time: '8:30 p.m',
          price: '₹ 699.00',
          type: '2+1, PREMIUM AC SLEEPER'
     }, {
          name: 'chennai to coimbatore',
          time: '9:40 p.m',
          price: '₹ 1099.00',
          type: '2+1, PREMIUM AC SLEEPER'
     }, {
          name: 'chennai to coimbatore',
          time: '10:30 p.m',
          price: '₹ 865.00',
          type: '2+1, PREMIUM AC SLEEPER'
     }
     ],
     chennaitodharmapuri: [{
          name: 'chennai to dharmapuri',
          time: '8:30 p.m',
          price: '₹ 1099.00',
          type: '2+1, PREMIUM AC SLEEPER'
     }, {
          name: 'chennai to dharmapuri',
          time: '11:40 p.m',
          price: '₹ 1199.00',
          type: '2+1, PREMIUM AC SLEEPER'
     }, {
          name: 'chennai to dharmapuri',
          time: '10:00 p.m',
          price: '₹ 765.00',
          type: '2+1, PREMIUM AC SLEEPER'
     }
     ],
     chennaitobangalure: [{
          name: 'chennai to bangalure',
          time: '9:30 p.m',
          price: '₹ 999.00',
          type: '2+1, PREMIUM AC SLEEPER'
     }, {
          name: 'chennai to bangalure',
          time: '10:40 p.m',
          price: '₹ 799.00',
          type: '2+1, PREMIUM AC SLEEPER'
     }, {
          name: 'chennai to bangalure',
          time: '11:10 p.m',
          price: '₹ 899.00',
          type: '2+1, PREMIUM AC SLEEPER'
     }
     ],
     busSeatl1: [{ id: 'L1' }, { id: 'L2' }, { id: 'L3' }, { id: 'L4' },
     { id: 'L5' }, { id: 'L6' }],
     busSeatl2: [{ id: 'L7' }, { id: 'L8' }, { id: 'L9' }, { id: 'L10' },
     { id: 'L11' }, { id: 'L12' }],
     busSeatl3: [{ id: 'L13' }, { id: 'L14' }, { id: 'L15' }, { id: 'L16' },
     { id: 'L17' }, { id: 'L18' }],

     busSeatu1: [{ id: 'U1' }, { id: 'U2' }, { id: 'U3' }, { id: 'U4' },
     { id: 'U5' }, { id: 'U6' }],
     busSeatu2: [{ id: 'U7' }, { id: 'U8' }, { id: 'U9' }, { id: 'U10' },
     { id: 'U11' }, { id: 'U12' }],
     busSeatu3: [{ id: 'U13' }, { id: 'U14' }, { id: 'U15' }, { id: 'U16' },
     { id: 'U17' }, { id: 'U18' }],
     logInName: '',
     logInPassword:'',
     signInName:'',
     signInPassword:'null',
     signInConformPassword:'',
     boarding:'',
     droping:'',
     date:'',
     showBus:[],
     modalOpen:(false),
     selectedData:(null),
     selectedSeat:(null),
     bookedData:([]),
}


const totalSlice = createSlice({
     name: 'bus',
     initialState,
     reducers: {
         setLogInName:(state, action={})=>{
          state.logInName = action.payload
         },
         setLogInPassword:(state, action={})=>{
          state.logInPassword = action.payload
         },
         setSignInName:(state, action={})=>{
          state.signInName = action.payload
         },
         setSignInPassword:(state, action={})=>{
          state.signInPassword = action.payload
         },
         setSignInConformPassword:(state, action={})=>{
          state.signInConformPassword = action.payload
         },
         setBoarding:(state, action ={})=>{
          state.boarding=action.payload
         },
         setDroping:(state, action ={})=>{
          state.droping=action.payload
         },
         setDate:(state, action ={})=>{
          state.date=action.payload
         },
         setShowBus:(state, action ={})=>{
          state.showBus=action.payload
         },
         setModalOpen:(state,action ={})=>{
          state.modalOpen=action.payload
         },
         setSelectedData:(state, action ={})=>{
          state.selectedData=action.payload
         },
         setSelectedSeat:(state, action ={})=>{
          state.selectedSeat=action.payload
         },
         setBookedData:(state, action ={})=>{
          state.bookedData=action.payload
         }
     }
})

export const {setLogInName, setLogInPassword,setSignInName,setSignInPassword,setSignInConformPassword,setBoarding,setDroping,
setDate,setShowBus,setModalOpen,setSelectedData,setSelectedSeat,setBookedData} = totalSlice.actions
export default totalSlice.reducer