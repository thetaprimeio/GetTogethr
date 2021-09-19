import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import RoomData from '../dashboard/roomAllocationPanel/RoomData';

//<link rel="stylesheet" href="LiteralForm.css">

function LiteralForm(){
    
    return(
    <center><Formik
        initialValues={{ email: '', name: '', interest1: '', interest2: '', interest3: '', interest4: '', interest5: ''}}
        onSubmit={(values, { setSubmitting }) => {

            setTimeout(() => {
              
              if(values.interest1 == "Dogs" || values.interest1 == "Cats" || values.interest2 == "Dogs" || values.interest2 == "Cats" 
              || values.interest3 == "Dogs" || values.interest3 == "Cats" || values.interest4 == "Dogs" || values.interest4 == "Cats"
              || values.interest5 == "Dogs" || values.interest5 == "Cats"){ // Pets Room
                RoomData[0].users.push(values.name);
              }
              else if(values.interest1 == "Hockey" || values.interest1 == "Soccer" || values.interest2 == "Hockey" || values.interest2 == "Soccer" 
              || values.interest3 == "Hockey" || values.interest3 == "Soccer" || values.interest4 == "Hockey" || values.interest4 == "Soccer"
              || values.interest5 == "Hockey" || values.interest5 == "Soccer"){ // Sports Room
                RoomData[1].users.push(values.name);
              }
              else if(values.interest1 == "Avengers" || values.interest1 == "Fast and Furious" || values.interest2 == "Avengers" || values.interest2 == "Fast and Furious" 
              || values.interest3 == "Avengers" || values.interest3 == "Fast and Furious" || values.interest4 == "Avengers" || values.interest4 == "Fast and Furious"
              || values.interest5 == "Avengers" || values.interest5 == "Fast and Furious"){ // Movies Room
                RoomData[2].users.push(values.name);
              }
              else if(values.interest1 == "Franz Kafka" || values.interest1 == "Stephen King" || values.interest2 == "Franz Kafka" || values.interest2 == "Stephen King" 
              || values.interest3 == "Franz Kafka" || values.interest3 == "Stephen King" || values.interest4 == "Franz Kafka" || values.interest4 == "Stephen King"
              || values.interest5 == "Franz Kafka" || values.interest5 == "Stephen King"){ // Books Room
                RoomData[3].users.push(values.name);
              }
              else if(values.interest1 == "Fortnite" || values.interest1 == "Amoung Us" || values.interest2 == "Fortnite" || values.interest2 == "Amoung Us" 
              || values.interest3 == "Fortnite" || values.interest3 == "Amoung Us" || values.interest4 == "Fortnite" || values.interest4 == "Amoung Us"
              || values.interest5 == "Fortnite" || values.interest5 == "Amoung Us"){ // Games Room
                RoomData[4].users.push(values.name);
              }

              alert("Thank you for completing the interest form. At the time of the event you will be assigned to a room based off of shared interest with  other participants.");
   
              setSubmitting(false);
   
            }, 400);
   
          }}
   
        >
   
          {({ isSubmitting }) => (
   
            <center><Form>

              <p></p>
              <label htmlFor="name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name: </label>
              <Field type="text" name="name" />
              <br/>
              <label htmlFor="email">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: &nbsp;</label>
              <Field type="email" name="email" />
              <br/>
              <p></p>
              <label id="test" htmlFor="interest1">Interest 1. </label>
              <Field type="text" name="interest1" />
              <br/>
              <label htmlFor="interest2">Interest 2. </label>
              <Field type="text" name="interest2" />
              <br/>
              <label htmlFor="interest3">Interest 3. </label>
              <Field type="text" name="interest3" />
              <br/>
              <label htmlFor="interest4">Interest 4. </label>
              <Field type="text" name="interest4" />
              <br/>
              <label htmlFor="interest5">Interest 5. </label>
              <Field type="text" name="interest5" />
              <br/>
              <p></p>
              <button type="submit" disabled={isSubmitting}>Submit</button>

            </Form></center>
   
          )}
    </Formik></center>
    );
}

export default LiteralForm;