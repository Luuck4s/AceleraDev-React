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
    } = this.props.data;

    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={avatar} alt={name} data-testid="contact-avatar" />
        </span>
        <span className="contact__data" data-testid="contact-name">
          {name}
        </span>
        <span className="contact__data" data-testid="contact-phone">
          {phone}
        </span>
        <span className="contact__data" data-testid="contact-country">
          {country}
        </span>
        <span className="contact__data" data-testid="contact-date">
          {moment(admissionDate).format("DD/MM/YYYY")}
        </span>
        <span className="contact__data" data-testid="contact-company">
          {company}
        </span>
        <span className="contact__data" data-testid="contact-department">
          {department}
        </span>
      </article>
    );
  }
}

export default Contact;
