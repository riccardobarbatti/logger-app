import React, { useEffect } from 'react';
import {TechModel} from "../../models/TechModel";
import TechItem from "./TechItem";
import { connect } from 'react-redux';
import { getTechs } from "../../actions/techActions";
import Preloader from "../layout/Preloader";

const TechListModal = ({tech: {techs, loading}, getTechs}: any) => {
    // const [techs, setTechs] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        (
            async () => {
                await getTechs();

            }
        )()
    }, []);

    //GET LOGS
    // const getTechs = async () =>{
    //     setLoading(true);
    //     const {data} = await axios.get(`techs`);
    //     setTechs(data);
    //     setLoading(false);
    // }
    if(loading || techs === null) {

        return <Preloader />
    }
    return (
        <div id="tech-list-modal" className='modal'>
          <div className="modal-content">
            <h4>Techs List</h4>
              <ul className="collection">

                  {!loading && techs.map((tech:TechModel) =>
                      (
                          <TechItem key={tech.id} id={tech.id} firstName={tech.firstName} lastName={tech.lastName} />
                      ))}

              </ul>
          </div>
        </div>
    );
};


const mapStateToProps = (state: { tech:TechModel }) =>({
    tech: state.tech
});


export default connect (mapStateToProps, { getTechs: getTechs })(TechListModal);