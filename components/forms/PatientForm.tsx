"use client";
import {zodResolver} from "@hookform/resolvers/zod";

import {z} from "zod";

import {Button} from "@/components/ui/button";
import CustomFormField from "../CustomFormField";
import {Form, FormField} from "../ui/form";
import {useForm} from "react-hook-form";
import SubmitButton from "../SubmitButton";
import {useState} from "react";
import {UserFormValidation} from "@/lib/validation";
import {Phone} from "lucide-react";
import {useRouter} from "next/navigation";

// define enum

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datepicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const PatientForm = () => {
  const router = useRouter();
  const {isLoading, setLoading} = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      username: "",
      name: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      const newUser = await createUser(user);

      if (newUser) {
        router.push(`/patients/${newUser.$id}/register`);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="Anupam Roy"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="anupam@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Enter Your Phone Number"
          placeholder="{+880}1719247600"
        />
        <SubmitButton isLoading={isLoading}>Get Start</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
