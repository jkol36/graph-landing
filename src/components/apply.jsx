import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyAESvj5CVZNOPevyaj9l1kinQ28fX-lkKY",
    authDomain: "graph-6a480.firebaseapp.com",
    projectId: "graph-6a480",
    storageBucket: "graph-6a480.appspot.com",
    messagingSenderId: "934022120874",
    appId: "1:934022120874:web:8f89784f6e0a25a87557d3",
    measurementId: "G-ZTZRSW1RJC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const Apply = () => {
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      firebase.auth().createUserWithEmailAndPassword(formik.values.email, formik.values.password)
      .then(res => {
        const user = firebase.auth().currentUser
        user.sendEmailVerification().then(() => {
          history.push('/confirm')
        })
      })
    },
  });


  return (
    <div style={{marginTop: 200, width: '50%', marginLeft: '25%'}}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          inputProps={{
            style: {
              fontSize: 20
            }
          }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="firstName"
          name="first name"
          label="first name"
          type="text"
          inputProps={{
            style: {
              fontSize: 20
            }
          }}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
         <TextField
          fullWidth
          id="lastName"
          name="last name"
          label="last name"
          type="text"
          inputProps={{
            style: {
              fontSize: 20
            }
          }}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          fullWidth
          id="companyName"
          name="company name"
          label="company name"
          type="text"
          inputProps={{
            style: {
              fontSize: 20
            }
          }}
          value={formik.values.companyName}
          onChange={formik.handleChange}
          error={formik.touched.companyName && Boolean(formik.errors.companyName)}
          helperText={formik.touched.companyName && formik.errors.companyName}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="password"
          type="password"
          inputProps={{
            style: {
              fontSize: 20
            }
          }}
          style={{marginBottom: 20}}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button style={{marginTop: 20}} style={{fontSize: 20}} color="primary" variant="contained" fullWidth type="submit">
          Apply
        </Button>
      </form>
    </div>
  );
};


