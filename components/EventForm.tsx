"use client"

import { Input } from "@/components/ui/input"

export default function EventForm() {
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
          
        </div>
      </form>
    </>
  )
}
