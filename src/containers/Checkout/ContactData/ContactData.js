import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
export default class ContactData extends Component {

    state = {
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        }
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter Details</h4>
                <form>
                    <input className={classes.Input} type='text' name='name' placeholder='Enter Name'/>
                    <input className={classes.Input} type='email' name='email' placeholder='Enter Email'/>
                    <input className={classes.Input} type='text' name='street' placeholder='Enter Street'/>
                    <input className={classes.Input} type='text' name='postal' placeholder='Enter Post Code'/>
                    <Button btnType='Success'>ORDER</Button>
                </form>
            </div>
        )
    }
}
