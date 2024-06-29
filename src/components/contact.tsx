import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { toast } from "sonner";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import emailIcon from "../assets/socials/email.png";
import linkedinIcon from "../assets/socials/linkedin.svg";
import githubicon from "../assets/socials/github.svg";

// Contact
export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // handle form change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  // validate form on submit
  const validateForm = () => {
    // form fields
    const { name, email, message } = form;

    type Current = {
      name: boolean;
      email: boolean;
      message: boolean;
    };

    // Error message
    const nameError = document.querySelector("#name-error")!;
    const emailError = document.querySelector("#email-error")!;
    const messageError = document.querySelector("#message-error")!;
    const current: Current = { name: false, email: false, message: false };

    // validate name
    if (name.trim().length < 3) {
      nameError.classList.remove("hidden");
      current["name"] = false;
    } else {
      nameError.classList.add("hidden");
      current["name"] = true;
    }

    const email_regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // valiate email
    if (!email.trim().toLowerCase().match(email_regex)) {
      emailError.classList.remove("hidden");
      current["email"] = false;
    } else {
      emailError.classList.add("hidden");
      current["email"] = true;
    }

    // validate message
    if (message.trim().length < 5) {
      messageError.classList.remove("hidden");
      current["message"] = false;
    } else {
      messageError.classList.add("hidden");
      current["message"] = true;
    }

    // True if all fields are validated
    return Object.keys(current).every(
      (k) => current[k as keyof typeof current],
    );
  };

  // handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // prevent default page reload
    e.preventDefault();

    // validate form
    if (!validateForm()) return false;

    // show loader
    setLoading(true);

    // send email
    emailjs
      .send(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Shubham",
          from_email: form.email.trim().toLowerCase(),
          to_email: import.meta.env.VITE_APP_EMAILJS_RECIEVER,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_KEY,
      )
      .then(() => toast.success("Thanks for contacting me."))
      .catch((error) => {
        // Error handle
        console.log("[CONTACT_ERROR]: ", error);
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setLoading(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  return (
    <SectionWrapper idName="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          {/* Title */}
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <div className="mt-12 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <img src={emailIcon} alt="Email" className="w-8 h-8" />
              <a
                href="mailto:asifaqeel50@gmail.com"
                className="text-white font-medium"
              >
                asifaqeel50@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
              <a
                href="https://www.linkedin.com/in/muhammad-asif-aqeel-70b788218/"
                className="text-white font-medium"
              >
                Muhammad Asif Aqeel
              </a>
            </div>
            <div className="flex items-center gap-4">
              <img src={githubicon} alt="Github" className="w-8 h-8" />
              <a
                href="https://github.com/asifaqeel50"
                className="text-white font-medium"
              >
                Muhammad Asif Aqeel
              </a>
            </div>
          </div>
        </motion.div>

        {/* Earth Model */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
