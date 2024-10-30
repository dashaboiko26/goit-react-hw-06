import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectedNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectedNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <ul className={s.list}>
      {filteredContacts.length === 0 ? (
        <li className={s.empty}>No contacts found</li>
      ) : (
        filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      )}
    </ul>
  );
};

export default ContactList;
