import React, { Component } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { postData } from "../actions/users";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
      type: ""
    };
  }

  // handleImage bikin sendiri, bukan bawaan Formik
  handleImage = event => {
    this.setState({
      type: event.target.files[0],
      image: URL.createObjectURL(event.target.files[0])
    });
  };
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            userName: "",
            address: "",
            avatar: "",
            age: 0
          }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values) => {
              let formData = new FormData();

              for (const key in values) {
                  if (values.hasOwnProperty(key)) {
                      formData.append(key, values[key]);
                      if (key === "avatar") {
                          formData.append(key, values.avatar.file);
                      }
                  }
              }
              this.props.postData(formData);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                placeholder="first name"
              />
              {errors.firstName && touched.firstName && errors.firstName}
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                placeholder="last name"
              />
              {errors.lastName && touched.lastName && errors.lastName}
              <input
                type="text"
                name="userName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
                placeholder="username"
              />
              {errors.userName && touched.userName && errors.userName}
              <input
                type="text"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                placeholder="address"
              />
              {errors.address && touched.address && errors.address}
              <input
                type="number"
                name="age"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
                placeholder="age"
              />
              {errors.age && touched.age && errors.age}
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="email"
              />
              <span style={{color: "red", fontStyle: "italic"}}>
                  {errors.email && touched.email && errors.email}
              </span>
              {errors.email && touched.email && errors.email}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="password"
              />
              {errors.password && touched.password && errors.password}
              <input
                type="file"
                name="avatar"
                onChange={event => {
                  setFieldValue("avatar", event.currentTarget.files[0]);
                  this.handleImage(event);
                }}
              />
              {this.state.image !== "" && (
                <img src={this.state.image} alt="avatar" />
              )}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postData: values => dispatch(postData(values))
  };
};

export default connect(null, mapDispatchToProps)(Users);
