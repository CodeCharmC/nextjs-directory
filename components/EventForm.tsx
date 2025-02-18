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
        <div>
          <label htmlFor="category" className="events-form_label">
            Category
          </label>
          <Input
            id="category"
            name="category"
            className="events-form_input"
            required
            placeholder="events Category (Tech, Health, Education...)"
          />

          {errors.category && (
            <p className="events-form_error">{errors.category}</p>
          )}
        </div>
        <div>
          <label htmlFor="link" className="events-form_label">
            Image URL
          </label>
          <Input
            id="link"
            name="link"
            className="events-form_input"
            required
            placeholder="events Image URL"
          />

          {errors.link && <p className="events-form_error">{errors.link}</p>}
        </div>
      </form>
    </>
  )
}

/*
<form action={formAction} className="events-form">

      <div data-color-mode="light">
        <label htmlFor="pitch" className="events-form_label">
          Pitch
        </label>

        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder:
              "Briefly describe your idea and what problem it solves",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />

        {errors.pitch && <p className="events-form_error">{errors.pitch}</p>}
      </div>

      <Button
        type="submit"
        className="events-form_btn text-white"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit Your Pitch"}
        <Send className="size-6 ml-2" />
      </Button>
    </form>
 */