window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
formbutton("create", {
  action: "https://formspree.io/f/moqoywky",
  title: "Write a mail to Phil",
  fields: [
    { 
      type: "text", 
      label: "Your contact (optional):", 
      name: "contact",
      placeholder: "E.g.: your@email.com"
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      required: true,
      placeholder: "What's on your mind?",
    },
    { type: "submit" }      
  ],
  styles: {
    title: {
      backgroundColor: "#4051b5"
    },
    button: {
      backgroundColor: "#4051b5"
    }
  }
});