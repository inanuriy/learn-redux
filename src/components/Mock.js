import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataMock, addDataMock, deleteData } from "../actions/mock";
import { Formik } from "formik";

class Mock extends Component {
  componentDidMount = () => {
    this.props.fetchDataMock();
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>Mock API Fetch Data with Redux Thunk and Formik</h1>
        <Formik
          initialValues={{ name: "name", avatar: "avatar", city: "city", country: "country" }}
          onSubmit={(values, actions) => {
            this.props.dispatch(addDataMock(values));
          }}
        >
          {({ handleBlur, handleChange, values, errors, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
              />
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
                name="city"
              />
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.country}
                name="country"
              />
              {errors.name && <div id="feedback">{errors.name}</div>}
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
        <ol>
          {this.props.mock.data !== undefined &&
            this.props.mock.data.map(item => {
              return (
                <div key={item.id}>
                  <li><img src={item.avatar} alt="avatar"/><br/>Name: {item.name}, City: {item.city}, Country: {item.country}</li>
                  <span
                    onClick={() => this.props.dispatch(deleteData(item.id))}
                  >
                    Delete
                  </span>
                </div>
              );
            })}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mock: state.mock
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDataMock: () => dispatch(fetchDataMock()),
    addData: values => dispatch(addDataMock(values)),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mock);
