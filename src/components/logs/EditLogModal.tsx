import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { updateLog } from "../../actions/logActions";
import {LogsModel} from "../../models/LogsModel";
import PropTypes from "prop-types";

const EditLogModal = ( {current, updateLog}:any) => {
    //set message - tech -important state
    const [message, setMessage] = useState<string>('');
    const [attention, setAttention] = useState<boolean | any>(false);
    const [tech, setTech] = useState<string>('');

    //set current log to update
    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
    }, [current]);

    //update log event action
    const onSubmit = () =>{

        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' });
        } else {
           // console.log("-->:  "+message, tech, attention);
            const newLog = {
                id: current.id,
                message,
                tech,
                attention,
                date: new Date()
            };
            updateLog(newLog);
            M.toast({html:`Log Updated: ${newLog.id}`+` by ${tech}`});
        }
            setMessage('');
            setTech('');
            setAttention(false);
        // }

    }



    return (
        <div id='edit-log-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Enter System Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='message'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />

                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <select
                            name='tech'
                            value={tech}
                            className='browser-default'
                            onChange={e => setTech(e.target.value)}
                        >
                            <option value='' disabled>
                                Select Technician
                            </option>
                            <option value='Freddy Kruger'> Freddy Kruger</option>
                            <option value='Jimmy Hendrix'> Jimmy Hendrix</option>
                            <option value='Kurt Cobain'> Kurt Cobain</option>
                        </select>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <p>
                            <label>
                                <input
                                    type='checkbox'
                                    className='filled-in'
                                    checked={attention}
                                    value={attention}
                                    onChange={e => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
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
//set modal style
const modalStyle ={
    width: '80%',
    height: '80%'
};

// EditLogModal.propTypes = {
// //current: PropTypes.object,
//
// }

const mapStateToProps = (state:any) => ({
    current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);