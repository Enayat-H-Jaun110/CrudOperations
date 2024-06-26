"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { EmployeeSchema } from "@/schemas"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createEmployee } from "@/actions/createEmployee"

export const EmployeeForm = () => {
    const form = useForm<z.infer<typeof EmployeeSchema>>({
        resolver: zodResolver(EmployeeSchema),
        defaultValues: {
          FirstName: "",
          LastName: "",
          email: "",
          phone: "",
        },
      });

      // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof EmployeeSchema>) {
    createEmployee(values);
  } 
    
    return(
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="FirstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your First Name" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        /> <FormField
        control={form.control}
        name="LastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter Your Last Name" {...field} />
            </FormControl>
           
            <FormMessage />
          </FormItem>
        )}
      /> <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" placeholder="Enter Your email" {...field} />
          </FormControl>
         
          <FormMessage />
        </FormItem>
      )}
    /> <FormField
    control={form.control}
    name="phone"
    render={({ field }) => (
      <FormItem>
        <FormLabel>phone</FormLabel>
        <FormControl>
          <Input  placeholder="Enter Your Phone Number" {...field} />
        </FormControl>
       
        <FormMessage />
      </FormItem>
    )}
  />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  

    ); 
};
