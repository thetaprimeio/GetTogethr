import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const CustomizationPanel = () => (
    <div>
      <h2>Customization</h2>
      <Formik
          initialValues={{ eventName: '', numUsersPerRoom: '', numRooms: '' }}
          onSubmit={(values, { setSubmitting }) => {

              setTimeout(() => {
    
                alert(JSON.stringify(values, null, 2));
    
                setSubmitting(false);
    
              }, 400);
    
            }}
    
          >
    
            {({ isSubmitting }) => (
    
              <Form>

                <label htmlFor="eventName">Event Name</label>
                <Field type="text" name="eventName" />
                <br/>
                <label htmlFor="numUsersPerRoom"># Users Per Room</label>
                <Field type="text" name="numUsersPerRoom" />
                <br/>
                <label htmlFor="numRooms"># of Rooms</label>
                <Field type="text" name="numRooms" />
                <br/>
                <button type="submit" disabled={isSubmitting}>Assign Rooms</button>
    
              </Form>
    
            )}
      </Formik>
    </div>
);

export default CustomizationPanel;
