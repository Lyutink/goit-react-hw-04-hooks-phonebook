import React, { Component } from "react";
//import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ContainerForm, LabelForm, BtnForm } from "./ContactForm.styled";

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    )
    .required("Please enter your name, it is required"),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      "Phone number must be digits (at least 5 symbols long), it can contain spaces, dashes, parentheses and can start with +"
    )
    .required("Please enter your phone number, it is required"),
});

class ContactForm extends Component {
  // state = {
  //     name: '',
  //     number: ''
  // };

  // handleChange = event => {
  //     // this.setState({
  //     //     [event.currentTarget.name]: event.currentTarget.value,
  //     // });
  //     const { name, value } = event.currentTarget;

  //     this.setState({ [name]: value });
  // };

  // handleSubmit = event => {
  //    // event.preventDefault();

  //     this.props.onSubmit(this.state);
  //     this.reset();
  // }

  // handleContactInput = ({ name, number }) => {
  //     this.setState({ name, number });
  // }

  // reset = () => {
  //     this.setState({ name: '', number: '' });
  // }

  render() {
    return (
      <Formik
        enableReinitialize
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          this.props.onSubmit(values);
          setSubmitting(false);
        }}
      >
        <Form autoComplete="off">
          <ContainerForm>
            <LabelForm htmlFor="name">Name</LabelForm>
            <Field type="text" name="name" />
            <ErrorMessage name="name" />

            <LabelForm htmlFor="name">Number</LabelForm>
            <Field type="tel" name="number" />
            <ErrorMessage name="number" />

            <BtnForm type="submit">Add contact</BtnForm>
          </ContainerForm>
        </Form>
      </Formik>
    );
  }
}

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node,
// };

export default ContactForm;
