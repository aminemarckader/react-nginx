import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { getHardware } from '../../Actions/hardwareActions';
import Hardware from '../Cards/Hardware';
import Metadata from '../../Metadata';
const Home = () => {

    const dispatch = useDispatch();
    const {hardware} = useSelector(state => state.hardware)
    useEffect(() => {
        dispatch(getHardware());
    }, [dispatch]);

    return (
        <>
                <Metadata title={'Home Page'} />
           <div className="text-xs-center">
           <h1>
            Home page
            </h1>
           </div>
           <div className="row">
               
           {
               hardware && hardware.map( h => (
                   <Hardware data={h} />
               ))
           }
          
           </div>
        </>
    )
}

export default Home

