import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { addTech } from "../../actions/techActions";

const AddTechModal = ({ addTech }: any) => {
    //set message - tech -important state
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');


    const onSubmit = () =>{

        if (firstName === '' || lastName === '') {
            M.toast({ html: 'Please enter a Firstname and Lastname' });
        } else {
          //  console.log("-->:  "+firstname, lastname);
            const newTech = {
                firstName,
                lastName,
                date: new Date()
            };
            addTech(newTech);
            M.toast({ html: `Tech added` });
            // Clear Fields
            setFirstName('');
            setLastName('');

        }

    }

    return (
        <div id='add-tech-modal' className='modal' >
            <div className='modal-content'>
                <h4>Create New Tech</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='firstName'
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <label htmlFor='firstname' className='active'>
                            First Name
                        </label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                                <input
                                    type='text'
                                    name='lastName'
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                />
                                <label htmlFor='lastname' className='active'>
                                    Last Name
                                </label>
                            </div>
                        </div>
                    </div>
            <div className='modal-footer'>
                <a
                    href='#!'
                    onClick={onSubmit}
                    className='modal-close waves-effect blue waves-light btn'
                >
                    Enter
                </a>
            </div>
        </div>
    );
};


export default connect(null, { addTech })(AddTechModal);