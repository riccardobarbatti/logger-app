import React, {FC,Component} from 'react';
import {connect, useDispatch} from 'react-redux';
import { removeTech } from "../../actions/techActions";
import M from "materialize-css";

interface Props {
    id:number,
    firstName:string,
    lastName:string,
}

const TechItem: React.FC<Props> = (techItem: Props) => {
    const dispatch = useDispatch();
    const onDelete = () =>{
        dispatch(removeTech(techItem.id));
        M.toast({ html: `Tech ${techItem.id} deleted` });
    }
    return (
        <li className="collection-item">
           <div>
               {techItem.firstName} {techItem.lastName}
               <a href="#!" onClick={() => onDelete()} className="secondary-content">
                   <i className="material-icons grey-text">delete</i>
               </a>
           </div>
        </li>
            

    );
};

export default connect(null, { removeTech })(TechItem);