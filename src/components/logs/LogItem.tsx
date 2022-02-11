import React, {Dispatch} from 'react';
import { connect, useDispatch } from "react-redux";
import * as moment from 'moment'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { removeLog, setCurrent } from "../../actions/logActions";


interface Props {
     message:string;
     attention:boolean,
     tech:string,
     date:string,
     id:number,
}

const LogItem = (log:Props) => {
    //delete Log
    const dispatch = useDispatch();
    const onDelete = () =>{
        dispatch(removeLog(log.id));
        M.toast({ html: `Log ${log.id} deleted` });
    }

        return (
            <li className="collection-item">
                <div>
                    <a href='#edit-log-modal'
                       // onClick={() => dispatch(setCurrent(log))}
                       className={`modal-trigger ${
                        log.attention ? 'red-text' : 'blue-text'
                    }`}
                       onClick={() => dispatch(setCurrent(log))}
                    >

                        {log.message}
                    </a>
                    <br/>
                    <span className='grey-text'>
                        <span className='black-text'>ID #{log.id}</span> Last update by{' '}
                        <span className='black-text'>{log.tech}</span> on{' '}
                        <span>{moment(log.date).format('DD/MM/YYYY')}</span>
                        {/*<Moment format="MMMM Do YYYY, h:mm:ss a">{l.date}</Moment>*/}
                    </span>
                    <a href="#!" onClick={() => onDelete()} className="secondary-content">
                        <i className="material-icons grey-text">delete</i>
                    </a>
                </div>
                
            </li>
        );

};


export default connect(null, {removeLog, setCurrent})(LogItem);