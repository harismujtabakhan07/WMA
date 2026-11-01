import React, { useState } from "react";

function Contacts() {
  const [selectedContact, setSelectedContact] = useState(null);

  const contacts = [
    { name: "Ali", email: "ali@gmail.com", phone: "03001234567" },
    { name: "Ahmed", email: "ahmed@gmail.com", phone: "03111234567" },
    { name: "Sara", email: "sara@gmail.com", phone: "03221234567" },
    { name: "Ayesha", email: "ayesha@gmail.com", phone: "03331234567" },
    { name: "Usman", email: "usman@gmail.com", phone: "03441234567" }
  ];

  return (
    <div className="contacts">
      <h2>Contact List</h2>

      {contacts.map((contact, index) => (
        <button
          className="contact-button"
          key={index}
          onClick={() => setSelectedContact(contact)}
        >
          {contact.name}
        </button>
      ))}

      {selectedContact && (
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p>Name: {selectedContact.name}</p>
          <p>Email: {selectedContact.email}</p>
          <p>Phone: {selectedContact.phone}</p>
        </div>
      )}
    </div>
  );
}

export default Contacts;