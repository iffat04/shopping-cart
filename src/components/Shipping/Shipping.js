import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css';
const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const {user} = useAuth();

    return (
        <div >
            <h1 className="form-container">Shipping</h1>
            <div className="form-container">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                
                < input placeholder="" defaultValue={user.displayName} {...register("name")} />
                < input defaultValue={user.email} {...register("email", { required: true })} />
                < input placeholder="Phone" {...register("phone")} />
                < input placeholder="Address"  {...register("address")} />
                < input placeholder="City"  {...register("city")} />

                
                {errors.email && <span>This field is required</span>}
                
                < input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default Shipping;