import React from 'react';
import { Link } from 'react-router-dom'; 

export default function BreadCrumb({ props }) { 
    return (
        <>
            <div className="breadcrum-header">
                <h4>{props}</h4>
            </div>
            <div className="breadcrum-menu">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb"> 
                        <li className="breadcrumb-item">
                            <Link to="/user-panel" className="breadcrumb-item-text">
                                Home
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {props}
                        </li>
                    </ol>
                </nav>
            </div>
        </>
    );
}
