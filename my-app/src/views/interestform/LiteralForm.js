import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const LiteralForm = () => (
    <Formik
        initialValues={{ email: '', name: '', interest1: '', interest2: '', interest3: '', interest4: '', interest5: ''}}
        onSubmit={(values, { setSubmitting }) => {

            setTimeout(() => {
   
              alert(JSON.stringify(values, null, 2));
   
              setSubmitting(false);
   
            }, 400);
   
          }}
   
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

export default LiteralForm;
