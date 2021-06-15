import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login } from '../../../store/auth/action';

import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';
import Helper from '~/components/helpers/networks';
import {HomeContext} from '~/components/helpers/context';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            phonenumber: '',
            otp: '',
            otpsend: '',
            visible:false
        };
    }

    static getDerivedStateFromProps(props) {
        if (props.isLoggedIn === true) {
            Router.push('/');
        }
        return false;
    }
    handleChange = ( event ) => {
        this.setState({ [event.target.name]: event.target.value });
       };
    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }
    modalSuccess = (type) => {
        notification[type]({
            message: 'Success',
            description: 'OTP generated successfully!',
            duration: 10,
        });
    };
     modalWarning = type => {
        notification[type]({
            message: 'Good bye!',
            description: 'OTP is not valid',
        });
    };
     async handleLoginSubmit(e){
        
        console.log('test');
        let data;
        const token=await Helper.getToken();
        data=await Helper.generateOTP(this.state);
        const responseData = data;
        console.log( 'responseData', responseData);
        this.setState({
            otp:responseData.data.data,
            visible:true
        })
        console.log( 'otp', responseData.data.data);
        this.modalSuccess('success');
        //this.props.dispatch(login());
        //Router.push('/');

    };
    async handleotpSubmit(e){
        if( this.state.otp != this.state.otpsend)
        {
            this.modalWarning('warning');

        }
        else
        {
            let data;
            const token=await Helper.getToken();
            data=await Helper.validateOTP(this.state);
            console.log( 'data', data);
            sessionStorage.setItem('fullName', data.data.fullName);
            sessionStorage.setItem('userID', data.data.userID);
            sessionStorage.setItem('mobileNo', data.data.mobileNo);
            sessionStorage.setItem('email', data.data.email);
            sessionStorage.setItem('profilePic', data.data.profilePic);
            this.modalSuccess('success');
            this.props.dispatch(login());
            Router.push('/');
        }
       

    };

    render() {
        return (
            <div className="ps-my-account">
               
                <div className="container">
                {   this.state.visible == false ?
                    <Form
                        className="ps-form--account"
                        onFinish={this.handleLoginSubmit.bind(this)}>
                        <ul className="ps-tab-list">
                            <li className="active">
                                <Link href="/account/login">
                                    <a>Login</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/register">
                                    <a>Register</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5>Log In Your Account</h5>
                                <div className="form-group">
                                 <Form.Item
                                     name="username"
                                     rules={[
                                         {
                                             required: true,
                                             message:
                                                 'Please input your username!',
                                         },
                                     ]}
                                    >
                                     <Input
                                         className="form-control"
                                         type="text"
                                         name="username"
                                         placeholder="username"
                                         onChange={this.handleChange}
                                     />
                                 </Form.Item>
                             </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="phonenumber"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your phonenumber!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="number"
                                            name="phonenumber"
                                            placeholder="Phone number..."
                                            onChange={this.handleChange}
                                        />
                                    </Form.Item>
                                </div>
                                
                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        Login
                                    </button>
                                </div>
                            </div>
                            <div className="ps-form__footer">
                                <p>Connect with:</p>
                                <ul className="ps-list--social">
                                    <li>
                                        <a
                                            className="facebook"
                                            href="#"
                                            onClick={e =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="google"
                                            href="#"
                                            onClick={e =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="twitter"
                                            href="#"
                                            onClick={e =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="instagram"
                                            href="#"
                                            onClick={e =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Form>:
                     <Form
                     className="ps-form--account"
                     onFinish={this.handleotpSubmit.bind(this)}>
                     <ul className="ps-tab-list">
                         <li className="active">
                             <Link href="/account/login">
                                 <a>Login</a>
                             </Link>
                         </li>
                         <li>
                             <Link href="/account/register">
                                 <a>Register</a>
                             </Link>
                         </li>
                     </ul>
                     <div className="ps-tab active" id="sign-in">
                         <div className="ps-form__content">
                             <h5>Validate OTP</h5>
                             <div className="form-group">
                                 <Form.Item
                                     name="otpsend"
                                     rules={[
                                         {
                                             required: true,
                                             message:
                                                 'Please input your otp!',
                                         },
                                     ]}
                                    >
                                     <Input
                                         className="form-control"
                                         type="number"
                                         name="otpsend"
                                         placeholder="OTP"
                                         onChange={this.handleChange}
                                     />
                                 </Form.Item>
                             </div>
                                                       
                             <div className="form-group submit">
                                 <button
                                     type="submit"
                                     className="ps-btn ps-btn--fullwidth">
                                     Validate
                                 </button>
                             </div>
                         </div>
                        
                     </div>
                 </Form> 
                    
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(Login);
