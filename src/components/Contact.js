import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Animationrouter } from "./animationrouter";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";




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
    <Animationrouter>
      <div className="contact__container">
        <div className="contact__options">
          
            <p className="text-light">
              <AttachEmailIcon sx={{ fontSize: 40 }} />
              nirmalrajr35@gmail.com
            </p>
          
          <br></br>
          
            <p className="text-light">
              <PhoneInTalkIcon sx={{ fontSize: 40 }} />
              +91 9543838686
            </p>
          
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
    </Animationrouter>
  );
}

      const StyledContactForm = styled.div`
      width: 400px;
      form {
        display: flex;
      flex-direction: column;
      
      font-size: 16px;
      padding-left: 40px;
      input {
        width: 100%;
      height: 35px;
      padding: 7px;
      
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