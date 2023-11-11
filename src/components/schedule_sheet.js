import React, { useState, useEffect } from 'react';

const ScheduleUploader = () => {
  const [scheduleData, setScheduleData] = useState(null);

  useEffect(() => {
    const API_KEY = 'AIzaSyALCgrQiuC4_udbv0Cab10nTrYS_6TGiUc';
    const link = 'https://sheets.googleapis.com/v4/spreadsheets/2PACX-1vRIFUd1UOZ3xuAxqm1ExwYRnjUyEyTA_jF6GO70Uum2cBuiUldgSM9GF6CpBsxbqRz_l7cdXm_NP96f/values/Sheet1?alt=json&key=' + API_KEY;
    
    const fetchData = async () => {
      try {
        const data = await fetchGoogleSheet(link);
        console.log('Fetched data:', data);
        setScheduleData(data);
      } catch (error) {
        console.error('Error fetching Google Sheet data:', error);
      }
    };

    fetchData();
  }, []); 
  
  const fetchGoogleSheet = async (link) => {
    try {
      const response = await fetch(link);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched Google Sheet data:', data);
  
      const rows = data.values.map((row) => {
        const entry = {};
        for (let i = 0; i < row.length; i++) {
          entry[`Column${i + 1}`] = row[i];
        }
        return entry;
      });
  
      return rows.slice(1); // Skip the header row
    } catch (error) {
      console.error(`Error fetching Google Sheet data: ${error.message}`);
      throw new Error('Error fetching Google Sheet data.');
    }
  };
  
  

  return (
    <div>
      {scheduleData && scheduleData.length > 0 && (
        <div>
          <h2>Schedule</h2>
          <table border="1">
            <thead>
              <tr>
                {Object.keys(scheduleData[0]).map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ScheduleUploader;
