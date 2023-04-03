import React, { useState, useEffect } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Tour = ( props ) => {
    const [tab, setTab] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3005/candidates`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setTab(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="formBackground">
            <div className="formWrapper tourWrapper">
                <div className="tableContainer">
                    <h3 className="table-title">Candidates</h3>
                    <table className="candidates">
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>E-mail address</th>
                            <th>Why do you want to go to Mars?</th>
                        </tr>

                        {tab.map((el, ind) => {
                            return (
                                <tr>
                                <td key={ind}>{el.firstName}</td>
                                <td key={ind}>{el.lastName}</td>
                                <td key={ind}>{el.email}</td>
                                <td key={ind}>{el.motivation}</td>
                            </tr>)
                        })}
                    </table>
                    <CloseRoundedIcon className="close" fontSize="large" onClick={props.handleClose}/>
                </div>
            </div>
        </div>
    )
};

export default Tour;