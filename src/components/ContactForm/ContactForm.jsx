import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const contactExists = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (!contactExists) {
      dispatch(addContact({ id: nanoid(), ...values }));
      resetForm();
    } else {
      alert(`${values.name} is already in contacts`);
    }
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Minimum 3 characters required")
      .max(50, "Maximum 50 characters allowed")
      .required("Name is required"),
    number: Yup.string()
      .matches(
        /^[0-9()+\-\s]+$/,
        "Phone number can contain only numbers and symbols (+, -, (, ), spaces)"
      )
      .min(7, "Minimum 7 characters required")
      .max(15, "Maximum 15 characters allowed")
      .required("Phone number is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={s.form}>
          <label className={s.label}>
            Name
            <Field
              type="text"
              name="name"
              className={s.field}
              placeholder="Enter name..."
            />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
          <label className={s.label}>
            Phone Number
            <Field
              type="text"
              name="number"
              className={s.field}
              placeholder="Enter phone number..."
            />
            <ErrorMessage className={s.error} name="number" component="span" />
          </label>
          <button type="submit" className={s.btn} disabled={isSubmitting}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
