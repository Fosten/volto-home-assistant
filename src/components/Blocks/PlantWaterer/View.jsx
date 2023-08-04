import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

/**
 * View description block.
 * @module components/manage/Blocks/Description/View
 */

/**
 * View description block class.
 * @class View
 * @extends Component
 */

const View = (props) => {
  const [response, setState] = useState({});
  async function myResponse() {
    window.localStorage.setItem(
      `token`,
      JSON.stringify(window.env.RAZZLE_HOMEASSISTANT_ACCESS_TOKEN),
    );
    try {
      const response = await axios.get(
        `${window.env.RAZZLE_HOMEASSISTANT_API_HOST}:${window.env.RAZZLE_HOMEASSISTANT_API_PORT}/api/states`,
        {
          headers: {
            Authorization: `Bearer ${window.env.RAZZLE_HOMEASSISTANT_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        },
      );
      setState(response);
      window.localStorage.setItem(`response`, JSON.stringify(response));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  useEffect(() => {
    myResponse();
  }, []);

  const renderthis = () => {
    return (
      <div className="container">
        <div className="plantwatererinfo">
        <h2>Soil Moisture Sensors</h2>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <th>Sensor</th>
                <th>State</th>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {response.data
                ?.filter((plantwaterer) =>
                  plantwaterer.entity_id.includes('sensor.soil_moisture'),
                )
                .map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item.entity_id}</td>
                      <td>{item.state}</td>
                    </tr>
                  );
                })}
            </Table.Body>
          </Table>
        <h2>Water Pump Relays</h2>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <th>Sensor</th>
                <th>State</th>
              </Table.Row>
            </Table.Header>
            <Table.Body>              
              {response.data
                ?.filter((plantwaterer) =>
                  plantwaterer.entity_id.includes('sensor.water_pump'),
                )
                .map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item.entity_id}</td>
                      <td>{item.state}</td>
                    </tr>
                  );
                })}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  };

  var yoyo = renderthis();
  return yoyo;
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */

View.propTypes = {
  properties: PropTypes.objectOf(PropTypes.any),
};

export default View;
