import React, { useState, useEffect } from 'react';

import useApi from '../hooks/useApi';

const Login = ()=> {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ count, setCount ] = useState(1);
    const postData = {
        'username': username,
        'password': password
    }

    const [ isLoading, isError, data, fetchData ] = useApi("http://localhost:8080/user/authenticate", postData);

    const test = () => {
        console.log(username);
        console.log(password);
        console.log(fetchData);
        fetchData();
    }

    return (
        <div id="page-content">        
        <div className="breadcrumbs-wrapper">
        	<div className="container">
            	<div className="breadcrumbs"><a href="index.html" title="Back to the home page">Home</a> <span aria-hidden="true">|</span> <span>Login</span></div>
            </div>
        </div>
        <div className="page-title"><h1>Login</h1></div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 box">
                	<h3>New Customers</h3>
                    <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                    <a href="register.html" className="btn">Create an account</a>
                </div>
				<div className="col-12 col-sm-12 col-md-6 col-lg-6 box">
                	<div className="mb-4">
                       <form id="CustomerLoginForm" accept-charset="UTF-8" className="contact-form">	
                       <h3>Registered Customers</h3>
						<p>If you have an account with us, please log in.</p>
                          <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="form-group">
                                    <label for="CustomerEmail">Email <span className="required">*</span></label>
                                    <input type="email" onChange={(e) => setUsername(e.target.value)} name="customer[email]" placeholder="" id="CustomerEmail" className="" autocorrect="off" autocapitalize="off"  />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="form-group">
                                    <label for="CustomerPassword">Password <span className="required">*</span></label>
                                    {/* <input type="text" onChange={(e) => setPassword(e.target.value)} value="" name="customer[password]" placeholder="" id="CustomerPassword" className="" /> */}
                                    <input type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                                </div>
                            </div>
                          </div>
                          <div className="row">
                            <div onClick={() => test()} className="text-left col-12 col-sm-12 col-md-12 col-lg-12">
                                <input  className="btn mb-3" value="Sign In" />
                                {count}
                                <p className="mb-4">
									<a href="forgot-your-password.html">Forgot your password?</a> &nbsp; | &nbsp;
								    <a href="register.html" id="customer_register_link">Create account</a>
                                </p>
                            </div>
                         </div>
                     </form>
                     <button className="btn mb-3" onClick={() => {setCount(count + 1)}}  > Test </button>

                    </div>
               	</div>
			</div>
        
        </div>
    </div>
    )

}

export default Login;