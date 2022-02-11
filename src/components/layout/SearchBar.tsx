import React, {SyntheticEvent, useRef} from 'react';
import {connect, useDispatch} from 'react-redux';
import { searchLogs } from "../../actions/logActions";

const SearchBar = () => {

    const text = useRef<any>('');
      //On Change Input
    const dispatch = useDispatch();
    const onChange = ( e: SyntheticEvent ) =>{
      //search call action
        //console.log(text.current.value);
        //if(text.current.value)
        dispatch(searchLogs(text.current.value));
          //searchLogs(text.current.value);


    }
    return (


        <div>
            <nav style={{ marginBottom: '30px'}}>
                <div className="nav-wrapper black">
                    <form>
                        <div className="input-field">
                            <input id="search"
                                   type="search"
                                   placeholder="Search..."
                                   ref={ text }
                                   onChange={ onChange }
                            />
                                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>


        </div>
    );
};

export default connect(null, {searchLogs})(SearchBar);