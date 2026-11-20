import { useState, type FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/portfolio/section-heading";

export function ContactSection() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const name = String(values.get("name") ?? "").trim();
    const email = String(values.get("email") ?? "").trim();
    const subject = String(values.get("subject") ?? "").trim();
    const message = String(values.get("message") ?? "").trim();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    setStatus("Opening your email app with your message. Nothing has been sent from this page.");
    window.location.href = `mailto:gudipatinnandini@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section-band section-band-white" id="contact" aria-labelledby="contact-heading">
      <div className="content-shell">
        <SectionHeading headingId="contact-heading" number="06" eyebrow="SAY HELLO" title="Let’s create something meaningful." />
        <div className="contact-layout">
          <div>
            <p className="contact-copy">Have an opportunity, project idea, or just want to connect? I’d love to hear from you.</p>
            <div className="contact-details">
              <a className="contact-detail" href="mailto:gudipatinnandini@gmail.com"><Mail aria-hidden="true" /><span>gudipatinnandini@gmail.com</span></a>
              <a className="contact-detail" href="tel:7396135633"><Phone aria-hidden="true" /><span>7396135633</span></a>
              <span className="contact-detail"><MapPin aria-hidden="true" /><span>Vijayawada, Andhra Pradesh, India</span></span>
              <a className="contact-detail" href="https://www.linkedin.com/in/gnnandini/" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /><span>LinkedIn <ArrowUpRight aria-hidden="true" /></span></a>
              <a className="contact-detail" href="https://github.com/NandiniGudipati" target="_blank" rel="noreferrer"><Github aria-hidden="true" /><span>GitHub <ArrowUpRight aria-hidden="true" /></span></a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="contact-name">NAME</label>
              <Input id="contact-name" name="name" autoComplete="name" required maxLength={100} />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">EMAIL</label>
              <Input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />
            </div>
            <div className="form-field">
              <label htmlFor="contact-subject">SUBJECT</label>
              <Input id="contact-subject" name="subject" required maxLength={150} />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">MESSAGE</label>
              <Textarea id="contact-message" name="message" required maxLength={3000} />
            </div>
            <Button className="contact-submit" type="submit">SEND MESSAGE <ArrowUpRight aria-hidden="true" /></Button>
            <p className="contact-note">This form opens your email app. It does not send or store your message on this website.</p>
            <p className="form-status" role="status" aria-live="polite">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
}