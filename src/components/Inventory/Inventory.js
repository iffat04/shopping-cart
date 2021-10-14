import React from 'react';
import useAuth from '../../hooks/useAuth';
import OrderReview from '../OrderReview/OrderReview';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Inventory = () => {
    const { user} = useAuth();
    
    return (
        <div>
            <h1>this is inventory</h1>
            
        </div>
    );
};

export default Inventory;