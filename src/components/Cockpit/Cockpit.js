import React, {useEffect, useState} from 'react'
import classes from './Cockpit.css'


const cockpit = (props) => {
    useState();
    useEffect(() => {

        console.log('[Cockpit.js] useEffect');
        const timer = setTimeout(()=>{
            alert('Saved data to cloud');
        },1000);

        return ()=>{
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect')
        }

    },[]);


    useEffect(()=>{

        console.log('[Cockpit.js] 2nd useEffect');
        return ()=>{
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }

    })


    const assignedClasses = [];
    let btnClass = '';

    if (props.ShowPersons) {
        btnClass = classes.red;
    }


    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red)
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold)
    }


    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is realy working!</p>

            <button
                className={btnClass}
                onClick={props.clicked}
            >Toggle Persons
            </button>
        </div>
    )
}

export default React.memo(cockpit);