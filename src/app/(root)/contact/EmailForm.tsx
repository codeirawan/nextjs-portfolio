"use client";
import InputForm from "@/components/elements/Input";
import Textarea from "@/components/elements/Textarea";
import axios from "axios";
import clsx from "clsx";
import { motion } from "framer-motion";
import * as React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useTheme } from "next-themes";

interface EmailForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function EmailForm() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Send Message");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmailForm>();

  const handleSubmitForm = async (payload: EmailForm) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/email", payload);

      if (response.status === 200) {
        toast.success(response.data.message || "Message sent successfully!", {
          style: {
            background: theme === "dark" ? "#1f2937" : "#f3f4f6",
            color: theme === "dark" ? "#f3f4f6" : "#1f2937",
          },
          iconTheme: {
            primary: theme === "dark" ? "#22c55e" : "#16a34a",
            secondary: theme === "dark" ? "#f3f4f6" : "#1f2937",
          },
        });
        reset();
      } else {
        toast.error("Failed to send message.", {
          style: {
            background: theme === "dark" ? "#1f2937" : "#f3f4f6",
            color: theme === "dark" ? "#f3f4f6" : "#1f2937",
          },
          iconTheme: {
            primary: "#ef4444",
            secondary: theme === "dark" ? "#f3f4f6" : "#1f2937",
          },
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.", {
        style: {
          background: theme === "dark" ? "#1f2937" : "#f3f4f6",
          color: theme === "dark" ? "#f3f4f6" : "#1f2937",
        },
        iconTheme: {
          primary: "#ef4444",
          secondary: theme === "dark" ? "#f3f4f6" : "#1f2937",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    setButtonText(isLoading ? "Your message is being sent" : "Send Message");
  }, [isLoading]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="primary text-lg font-semibold md:text-xl">
        Or send me an email
      </h2>

      <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-8">
        <div className="md:flex md:gap-4">
          <InputForm
            name="name"
            type="text"
            rule={{ required: true }}
            register={register}
            error={errors}
            placeholder="Enter your name"
          />
          <InputForm
            name="email"
            type="email"
            rule={{ required: true }}
            register={register}
            error={errors}
            placeholder="Enter your email"
          />
        </div>

        <InputForm
          name="subject"
          type="text"
          rule={{ required: true }}
          register={register}
          error={errors}
          placeholder="Enter your subject"
        />

        <Textarea
          name="message"
          rule={{ required: true }}
          register={register}
          error={errors}
          placeholder="Enter your message"
        />

        <button
          type="submit"
          disabled={isLoading}
          className={clsx(
            "primary",
            "mt-8 w-full px-4 py-2",
            "text-sm font-semibold",
            "rounded-md bg-neutral-200",
            "dark:bg-neutral-800",
            "disabled:cursor-not-allowed",
            "disabled:opacity-50",
            "md:text-lg",
          )}
        >
          {buttonText}
        </button>

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: theme === "dark" ? "#1f2937" : "#f3f4f6",
              color: theme === "dark" ? "#f3f4f6" : "#1f2937",
            },
          }}
        />
      </form>
    </motion.section>
  );
}
