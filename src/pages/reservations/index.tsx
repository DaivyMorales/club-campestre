import React from "react";

function Reservations() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Current location</th>
            <th>Arrival</th>
            <th>Client name</th>
            <th>Departure time</th>
            <th>Arrival time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#001</td>
            <td>In service</td>
            <td>8502 Preston, Maine 98380</td>
            <td>56741 Oak Ave, Pineville 98765</td>
            <td>Leslie Alexander</td>
            <td>23/08/2023 2:11PM</td>
            <td>25/08/2023 10:14PM</td>
            <td><button>View details</button></td>
          </tr>
          <tr>
            <td>#002</td>
            <td>Pending</td>
            <td>2109 Fir Lane, Pine Falls 87654</td>
            <td>1235 Ivy Lane, Lavender 54321</td>
            <td>Ronald Richards</td>
            <td>25/08/2023 1:15PM</td>
            <td>26/08/2023 4:05PM</td>
            <td><button>View details</button></td>
          </tr>
          <tr>
            <td>#003</td>
            <td>Pending</td>
            <td>23421 Birch Ln, Forest 98765</td>
            <td>78831 Cedar Ave, River 87654</td>
            <td>Brooklyn Simmons</td>
            <td>25/08/2023 4:12PM</td>
            <td>26/08/2023 6:07PM</td>
            <td><button>View details</button></td>
          </tr>
          <tr>
            <td>#004</td>
            <td>In service</td>
            <td>21210 Stone Ln, Meadow 12345</td>
            <td>81290 Maple St, Meadow 56789</td>
            <td>Cameron Williamson</td>
            <td>26/08/2023 11:15AM</td>
            <td>26/08/2023 3:10PM</td>
            <td><button>View details</button></td>
          </tr>
          <tr>
            <td>#005</td>
            <td>In service</td>
            <td>45426 Pine Rd, Lakeside 21098</td>
            <td>56217 Green Dr, Hillview 43210</td>
            <td>Esther Howard</td>
            <td>26/08/2023 3:07PM</td>
            <td>28/08/2023 12:17PM</td>
            <td><button>View details</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Reservations;