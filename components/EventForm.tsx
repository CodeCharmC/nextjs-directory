"use client"

import { Input } from "@/components/ui/input"
import { useState } from "react";

export default function EventForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  return (
    <>
      <form
        // action={formAction} 
        className="events-form">
        <div>
          <label htmlFor="title" className="events-form_label">
            Title
          </label>
          <Input
            id="title"
            name="title"
            className="events-form_input"
            required
            placeholder="events Title"
          />          
        {errors.title && <p className="events-form_error">{errors.title}</p>}
        </div>
      </form>
    </>
  )
}
