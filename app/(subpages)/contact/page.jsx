"use client";
import styles from "./page.module.css";
import Image from "next/image";
import Link from 'next/link'
import { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { GrMail } from 'react-icons/gr';
import { AiFillPhone } from 'react-icons/ai';

// export const metadata = {
//   title: "Contact COMMANTECH",
//   description: "Contact Commantech",
// };

async function saveFormData(data) {
  return await fetch("https://formsubmit.co/info@commantech.it", {
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"},
      method: "POST"
  });
}

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault()
        const response = await saveFormData({ email, subject, name , lastName , message });
        if (response.status === 200) {
          alert("Your email was sent successfully");
          setEmail("");
          setName("");
          setSubject("");
        } else {
          alert("There was a problem sending the email, please try again");
        }
    }

  return (
    <div className="container contact">
      {/* <Image src="/Looper-3.png"
        width={500}
        height={500}
        className="contact__looper"
        >
        </Image> */}
      <div className="contact__left">
        <h2 className="contact__left-title">
          Are you interested in<span className="contact__left-title-color"> working together</span>?
        </h2>
        <div className="contact__left-info">
          <div className="contact__left-info-data">
            <div className="contact__left-info-data-title">Phone</div>
            <div className="contact__left-info-data-info">(39) 331 3542388</div>
          </div>
          <div className="contact__left-info-data">
            <div className="contact__left-info-data-title">Email</div>
            <div className="contact__left-info-data-info">info@commantech.it</div>
          </div>
          <div className="contact__left-info-data">
            <div className="contact__left-info-data-title">Address</div>
            <div className="contact__left-info-data-info">Via di Salicchi, 361 1P, 55100 <br></br><br></br> Lucca LU, Italia</div>
          </div>
        </div>
      </div>
      <div className="contact__right">
        <div className="form__container">
          <h3 className="form__title">Contact Form</h3>
          <form onSubmit={onSubmit}>
            <div>
              <input
                type="text" value={name}
                className="form__input"
                name="name" onChange={e => setName(e.target.value)}
                id="exampleFormControlInput1"
                placeholder="First Name"
                required={true}
              />
            </div>
            <div>
              <input
                type="text" value={lastName}
                className="form__input"
                name="name" onChange={e => setLastName(e.target.value)}
                id="exampleFormControlInput1"
                placeholder="Last Name"
                required={true}
              />
            </div>
            <div>
              <input
                type="email" value={email}
                className="form__input"
                name="email" required={true}
                onChange={e => setEmail(e.target.value)}
                id="exampleFormControlInput2"
                placeholder="Email address"
              />
            </div>
            <div >
              <input
                type="text"
                className="form__input"
                name="subject" value={subject}
                id="exampleFormControlTextarea1"
                placeholder="Subject"
                rows="3" onChange={e => setSubject(e.target.value)}
                required={true}
              />
            </div>
            <div >
              <textarea
                className="form__input"
                name="message" value={message}
                id="exampleFormControlTextarea1"
                rows="3" onChange={e => setMessage(e.target.value)}
                placeholder="Message"
                required={true}
              ></textarea>
            </div>
            <div className="form__text">
                By submitting this form, you consent to share your personal information with us to service your request and for communication purposes. We do not sell your data to third parties. 
            </div>
            <button className="form__button" type="submit">
              Send Message
            </button>
          </form>
          
        </div>
      </div>
      {/* <div className={styles.rightPanel}>
        <div className={styles.contact_panel}>
          <Link href={process.env.location}>
            <Image
              src="/location.png"
              alt="Location"
              width={300}
              height={300}
            />
          </Link>
          <p>
            <HiLocationMarker/> Address: <Link href={process.env.location} target="_blank" className={styles.link}>Via di Salicchi, 361 1P, 55100 Lucca LU, Italia</Link>
          </p>
          <p>
            <AiFillPhone/> Phone: <Link href="tel:+393313542388" target="_blank" className={styles.link}>(39) 331 3542388</Link>
          </p>
          <p>
            <GrMail/> Email: <Link href="mailto:info@commantech.it" target="_blank" className={styles.link}>info@commantech.it</Link>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default ContactPage;
