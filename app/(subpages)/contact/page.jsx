"use client";
import styles from "./page.module.css";
import Image from "next/image";
import Link from 'next/link'
import { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { GrMail } from 'react-icons/gr';
import { AiFillPhone } from 'react-icons/ai';

export const metadata = {
  title: "Contact COMMANTECH",
  description: "Contact Commantech",
};

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
    const onSubmit = async (e) => {
        e.preventDefault()
        const response = await saveFormData({ email, subject, name });
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
    <div className={styles.splitted}>
      <div className={styles.leftPanel}>
        <h3>Get in touch</h3>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="exampleFormControlInput1" className={styles.formLabel}>
              Name
            </label>
            <input
              type="name" value={name}
              className={styles.formInput}
              name="name" onChange={e => setName(e.target.value)}
              id="exampleFormControlInput1"
              placeholder="full name"
              required={true}
            />
          </div>
          <div>
            <label htmlFor="exampleFormControlInput2" className={styles.formLabel}>
              Email address
            </label>
            <input
              type="email" value={email}
              className={styles.formInput}
              name="email" required={true}
              onChange={e => setEmail(e.target.value)}
              id="exampleFormControlInput2"
              placeholder="name@example.com"
            />
          </div>
          <div >
            <label htmlFor="exampleFormControlTextarea1" className={styles.formLabel}>
              Subject
            </label>
            <textarea
              className={styles.formInput}
              name="subject" value={subject}
              id="exampleFormControlTextarea1"
              rows="3" onChange={e => setSubject(e.target.value)}
              required={true}
            ></textarea>
          </div>
          <div className="button">
            <button type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
      <div className={styles.rightPanel}>
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
            <HiLocationMarker/> Address: <Link href={process.env.location} className={styles.link}>Via di Salicchi, 361 1P, 55100 Lucca LU, Italia</Link>
          </p>
          <p>
            <AiFillPhone/> Phone: <span className={styles.link}>(39) 331 3542388</span>
          </p>
          <p>
            <GrMail/> Email: <Link href="mailto:info@commantech.it" className={styles.link}>info@commantech.it</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
