import React, { useState } from "react";

const Reply = ({ threadId }) => {
  const [formData, setFormData] = useState({
    toName: "",
    to: "",
    from: "",
    fromName: "",
    subject: "",
    body: "",
    references: [],
    inReplyTo: ""
  });
  const token = localStorage.getItem('jwtToken');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="toName" value={formData.toName} onChange={handleChange} placeholder="To Name" />
      <input type="email" name="to" value={formData.to} onChange={handleChange} placeholder="To Email" />
      <input type="email" name="from" value={formData.from} onChange={handleChange} placeholder="From Email" />
      <input type="text" name="fromName" value={formData.fromName} onChange={handleChange} placeholder="From Name" />
      <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
      <textarea name="body" value={formData.body} onChange={handleChange} placeholder="Body"></textarea>
      <button type="submit">Send Reply</button>
    </form>
  );
};

export default Reply;
