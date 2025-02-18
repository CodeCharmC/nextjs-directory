"use client"

import { Input } from "@/components/ui/input"
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

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
        <div>
        <label htmlFor="description" className="events-form_label">
          Description
        </label>
          <Textarea
            id="description"
            name="description"
            className="events-form_textarea"
            required
            placeholder="events Description"
          />

          {errors.description && (
            <p className="events-form_error">{errors.description}</p>
          )}
        </div>
      </form>
    </>
  )
}
