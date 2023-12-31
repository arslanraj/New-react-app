import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function Review() {
  return (
<div>
  <Tabs defaultActiveKey="profile"  id="uncontrolled-tab-example"  className="mb-3 "  >
      <Tab eventKey="seller" title="Seller Reviews" style={{ marginBottom:"5rem"}}>
             <h1 style={{marginLeft:"40rem"}}>Seller Reviews</h1>
      </Tab>
      <Tab eventKey="Buyer" title="Buyer Reviews"  style={{ marginBottom:"5rem" }}>
      <h1 style={{marginLeft:"40rem"}}>Buyer Reviews</h1>
      </Tab>
      
    </Tabs>
      
    </div>
  )
}

export default Review
