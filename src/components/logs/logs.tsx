import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {LogsModel} from "../../models/LogsModel";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { getLogs } from "../../actions/logActions"


const Logs = ({log: {logs, loading}, getLogs}:any) => {
    // const [logs, setLogs] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        (
            async () => {
                await getLogs();

            }
        )()
    }, []);

    //GET LOGS
    // const getLogs = async () =>{
    //     setLoading(true);
    //     const {data} = await axios.get(`logs`);
    //     setLogs(data);
    //     setLoading(false);
    // }
    //loading bar
    if(loading || logs === null) {

        return <Preloader />
    }

    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>Logs List</h4>
            </li>
            {!loading && logs.length === 0 ? (
                <p className='center'>no Logs to show...</p>
            ) : (
                logs.map((log:LogsModel) => (
                    <LogItem key={log.id}
                        id={log.id}
                        message={log.message}
                        attention={log.attention}
                             date={log.date}
                        tech={log.tech}
                    />))
            )}
        </ul>
    );
};
const mapStateToProps = (state: { log:LogsModel }) => ({
   log: state.log
});
export default connect(mapStateToProps,{getLogs: getLogs})(Logs);