import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './CustomizationPanel.css';

class CustomizationPanel extends React.Component{
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
render(){
  return(
    <div>
      <h2>Customization</h2>
      <Formik
          initialValues={{ eventName: '', numUsersPerRoom: '', numRooms: '' }}
          onSubmit={(values, { setSubmitting }) => {

              setTimeout(() => {
                
                this.props().isHidden = !this.props().isHidden;

                document.getElementById("roomContainer").style.display = "block";
    
                setSubmitting(false);
    
              }, 400);
    
            }}
    
          >
    
            {({ isSubmitting }) => (
    
              <Form class="question-box">

                <label htmlFor="eventName">Event Name</label>
                <Field class="padding" type="text" name="eventName" />
                <br/>
                <label htmlFor="numUsersPerRoom"># Users Per Room</label>
                <Field class="padding" type="text" name="numUsersPerRoom" />
                <br/>
                <label htmlFor="numRooms"># of Rooms</label>
                <Field class="padding" type="text" name="numRooms" />
                <br/>
                <button type="submit" disabled={isSubmitting}>Assign Rooms</button>
    
              </Form>
    
            )}
      </Formik>
    </div>
);
            }
}

export default CustomizationPanel;
