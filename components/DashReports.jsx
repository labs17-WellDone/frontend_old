import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

export default function DashReports() {
  const [monitor, setMonitor] = useState(11);
  const [functional, setFunctional] = useState(50);
  const [nonFunctional, setNonFunctional] = useState(15);
  const [unknown, setUnknown] = useState(10);

  return (
    <>
      <div className="report-container">
        <div className="monitor-reports">
          <div className="icon-divs">
            <FontAwesomeIcon icon={faEdit} size={'2x'} />
            <h2>Monitor Reports</h2>
          </div>
          <p>{monitor}</p>
        </div>
        <div className="functional">
          <div className="icon-divs">
            <FontAwesomeIcon color="#50c537" icon={faCheckSquare} size={'2x'} />
            <h2>Functional</h2>
          </div>
          <p>{functional}</p>
        </div>
        <div className="non-functional">
          <h2>Non-functional</h2>
          <p>{nonFunctional}</p>
        </div>
        <div className="unknown">
          <h2>Unknown</h2>
          <p>{unknown}</p>
        </div>
      </div>
      <style jsx>{`
            .report-container {
                display: flex;
                margin: 2%;
            }
            .monitor-reports, .functional, .non-functional {
                border 1px solid grey;
                width: 100%;
                margin-right: 2%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .unknown {
                border 1px solid grey;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .icon-divs {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            
            
            
    `}</style>
    </>
  );
}
