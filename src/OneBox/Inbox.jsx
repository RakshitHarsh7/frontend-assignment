import React, { useState } from 'react';

const Inbox = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);

  const emails = [
    {
      id: 1,
      sender: 'Orlando',
      subject: 'New Product Launch',
      content: 'Hi {FIRST_NAME},\nI would like to introduce you to SaaSgrow, a productized design service specifically tailored for SaaS startups...',
      date: '20 June 2022, 9:16 AM'
    },
    // Add more email objects here
  ];

  return (
    <div className="flex-1 bg-black text-white p-4 flex">
      <div className="w-1/4 p-4 border-r border-gray-700">
        <h2 className="text-xl font-bold mb-4">All Inboxes</h2>
        {emails.map(email => (
          <div key={email.id} className="bg-gray-800 p-4 rounded-lg mb-2 cursor-pointer" onClick={() => setSelectedEmail(email)}>
            <h3 className="text-lg font-bold">{email.sender}</h3>
            <p className="text-gray-400">{email.subject}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 p-4">
        {selectedEmail ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-bold">{selectedEmail.sender}</h2>
                <p className="text-gray-400">{selectedEmail.subject}</p>
              </div>
              <div className="text-gray-400">{selectedEmail.date}</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p>{selectedEmail.content}</p>
            </div>
          </>
        ) : (
          <div className="text-gray-400">Select an email to view its content</div>
        )}
      </div>
      <div className="w-1/4 p-4 border-l border-gray-700">
        {selectedEmail && (
          <>
            <h2 className="text-xl font-bold mb-4">Lead Details</h2>
            <p>Name: {selectedEmail.sender}</p>
            <p>Email: orlando@gmail.com</p>
            <p>Contact No: +54-9062827869</p>
            <p>LinkedIn: linkedin.com/in/timvadde/</p>
            <p>Company: Reachinbox</p>
            <div className="mt-4">
              <h3 className="font-bold mb-2">Activities</h3>
              <p>Campaign Name: Campaign Name</p>
              <p>Step 1: Email (Sent 3rd Feb)</p>
              <p>Step 2: Email (Opened 5th Feb)</p>
              <p>Step 3: Email (Opened 5th Feb)</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Inbox;
