import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../Header";
import DirectoryNav from "./DirectoryNav";



export default class Dental extends Component {
    render(){
        return(
            <div>
                <DirectoryNav/>
                <div className='content'>
                    <img src='https://static.dentaldepartures.com/clinics/dd_201604030325_5397cbeba0bbf.jpg?_ga=2.44103460.1011704726.1530860971-1003451310.1530860971'/>
                </div>
                </div>
        )
    }
}