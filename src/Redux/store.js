import {configureStore} from '@reduxjs/toolkit';
import totalReduser from '../Redux/slice'


export const store = configureStore({
    reducer:{
        bus : totalReduser,
    }
});
