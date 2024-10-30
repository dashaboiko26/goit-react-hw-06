import s from "./App.module.css";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { FaAddressBook } from "react-icons/fa";

const App = () => {
  return (
    <div className={s.wrapp}>
      <div className={s.header}>
        <FaAddressBook className={s.icon} />
        <h1 className={s.title}>Phonebook</h1>
      </div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
