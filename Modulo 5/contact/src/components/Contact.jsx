import React from "react";

import moment from "moment";
import "moment/locale/pt-br";

class Contact extends React.Component {
  render() {
    const {
      name,
      avatar,
      phone,
      country,
      admissionDate,
      company,
      department,
    } = this.props;
    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={avatar} alt={name} />
        </span>
        <span className="contact__data">{name}</span>
        <span className="contact__data">{phone}</span>
        <span className="contact__data">{country}</span>
        <span className="contact__data">
          {moment(admissionDate).format("DD/MM/YYYY")}
        </span>
        <span className="contact__data">{company}</span>
        <span className="contact__data">{department}</span>
      </article>
    );
  }
}

export default Contact;
