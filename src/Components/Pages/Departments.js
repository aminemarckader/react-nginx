import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Department from './../Cards/Department';
import Metadata from './../../Metadata';
import { getDepartments } from '../../Actions/departmentsActions';
const Departments = () => {
    
    const {loading, departments,error, departmentsCount} = useSelector(state => state.departments);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDepartments());
    }, [dispatch]);
    departments.sort(function (a, b) {
        return a.name.localeCompare(b.name); //using String.prototype.localCompare()
      });
    return (

        
        <div>
                <Metadata title={'Departments'} />
            <h1 className="text-xs-center p-2 mb-2">
                Departments &nbsp; {departmentsCount}
            </h1>
            <div className="row">
            {departments && departments.map( (department) => (
                <Department key={department._id} department={department} />
            ))}
            </div>
        </div>
    )
}

export default Departments
