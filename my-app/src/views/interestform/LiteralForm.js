import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import dandelion from 'node-dandelion';
//var dandelion = require("node-dandelion");

import RoomData from '../dashboard/roomAllocationPanel/RoomData';

//var dandelion = require("node-dandelion");
dandelion.configure({
  "app_key":"66d73cb67dcc43f59aa5681ac3cbc62c",
  "app_id":"66d73cb67dcc43f59aa5681ac3cbc62c"
});


async function compare(){
  let promise = new Promise((resolve, reject) => {
    if(true){
      dandelion.txtSim(
      {
        "string1": {
          "type":"url",
          "value":"https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBatman"
        },
        "string2":{
          "type":"url",
          "value":"https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSpider-Man"
        },
        "lang":"en",
        "bow":"never"
        },
        function(results){
          console.log(results.similarity)
        }
      );
      resolve("success")
    }
    else{
      reject("failed")
    }
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
  console.log("test");
}


function LiteralForm(){
    
    return(
    <Formik
        initialValues={{ email: '', name: '', interest1: '', interest2: '', interest3: '', interest4: '', interest5: ''}}
        onSubmit={(values, { setSubmitting }) => {
              dandelion.configure({
                "app_key":"66d73cb67dcc43f59aa5681ac3cbc62c",
                "app_id":"66d73cb67dcc43f59aa5681ac3cbc62c"
              });

              let string1Val = "https%3A%2F%2Fen.wikipedia.org%2Fwiki%2F" + values.interest1
              console.log(string1Val)
              dandelion.txtSim(
                {
                  "string1": {
                    "type":"url",
                    "value": string1Val
                  },
                  "string2":{
                    "type":"url",
                    "value":"https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSpider-Man"
                  },  
                  "lang":"en",
                  "bow":"never"
                },
                function(results){
                    console.log(results.similarity)
                    RoomData[0].users.push(results.similarity);
                }
              );
            
              setSubmitting(false);

            setTimeout(() => {
              //RoomData.length
              for (let i = 0; i < 1; i++) {
                compare();
              } 

            //   let string1Val = "https%3A%2F%2Fen.wikipedia.org%2Fwiki%2F" + values.interest1
            //   console.log(string1Val)
            //   dandelion.txtSim(
            //     {
            //       "string1": {
            //         "type":"url",
            //         "value": string1Val
            //       },
            //       "string2":{
            //         "type":"url",
            //         "value":"https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSpider-Man"
            //       },  
            //       "lang":"en",
            //       "bow":"never"
            //     },
            //     function(results){
            //         console.log(results.similarity)
            //         RoomData[0].users.push(results.similarity);
            //         return
            //     }
            //   );

            //   RoomData[0].users.push(values.name);

            //   alert(JSON.stringify(values, null, 2));
   
            //   setSubmitting(false);
   
            }//, 400);
   
          }
   
        >
   
          {({ isSubmitting }) => (
   
            <Form>

              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              <br/>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <br/>
              <label htmlFor="interest1">Interest 1.</label>
              <Field type="text" name="interest1" />
              <br/>
              <label htmlFor="interest2">Interest 2.</label>
              <Field type="text" name="interest2" />
              <br/>
              <label htmlFor="interest3">Interest 3.</label>
              <Field type="text" name="interest3" />
              <br/>
              <label htmlFor="interest4">Interest 4.</label>
              <Field type="text" name="interest4" />
              <br/>
              <label htmlFor="interest5">Interest 5.</label>
              <Field type="text" name="interest5" />
              <br/>
              <button type="submit" disabled={isSubmitting}>Submit</button>
   
            </Form>
   
          )}
    </Formik>
    );
}

export default LiteralForm;
