import React from 'react';
import './Contacts.css';
import person1 from '../../assets/people/01.jpg';
import person2 from '../../assets/people/02.jpg';
import person3 from '../../assets/people/03.jpg';

const Contacts = () => {
  const contacts = [
    {
      img: person1,
      name: "Manisha Selvanayagam ",
      position: "Organizing Committee Vice President - Delegates",
      email: "manisha.selvanayagam@aiesec.net",
      phone: "074 293 3039",
    },
    {
      img: person2,
      name: "Kushani Perera",
      position: "Organizing Committee Vice President - Delegates",
      email: "kushani.perera@aiesec.net",
      phone: "071 073 2650",
    },
    {
      img: person3,
      name: "Savidya Wijayakulasooriya",
      position: "Organizing Committee Vice President - Delegates",
      email: "savidya.wj@aiesec.net",
      phone: "070 528 2925",
    },
  ];

  return (
    <div className="contacts" id='Contacts'>
      <h2>CONTACT US</h2>
      <div className="contact-cards">
        {contacts.map((contact, index) => (
          <div className="contact-card" key={index}>
            <img src={contact.img} alt={contact.name} className="contact-image" />
            <div className="contact-details">
              <h3>{contact.name}</h3>
              <p className="contact-position">{contact.position}</p>
              <p className="contact-email">📧 {contact.email}</p>
              <p className="contact-phone">📞 {contact.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
