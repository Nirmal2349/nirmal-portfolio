import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";


export function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ddc5f3",
        "template_9ysk4gq",
        form.current,
        "o0T-FJnoc_d-G8dTv"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container contact__container">
      <div className="contact__options">
        <div className="contact__option">
          <FiMail />
          <h4>Email</h4>
          <p className="text-light">nirmalrajr35@gmail.com</p>
        </div>
        <br></br>
        <article className="contact__option">
          <FiPhoneCall />
          <h4>Phone</h4>
          <p className="text-light">+91 9543838686</p>
        </article>
      </div>
      <div className="inbox">
        <StyledContactForm>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Name" />
            <br></br>
            <input type="email" name="user_email" placeholder="Email" />
            <br></br>
            <textarea name="message" placeholder="Message" />
            <br></br>
            <input type="submit" value="Send" />
          </form>
        </StyledContactForm>
      </div>
    </div>
  );
}

      const StyledContactForm = styled.div`
      width: 400px;
      form {
        display: flex;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      font-size: 16px;
      input {
        width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
      textarea {
        max - width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
      label {
        margin - top: 1rem;
    }
      input[type="submit"] {
        margin - top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
      `;