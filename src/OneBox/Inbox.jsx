import React, { useState, useEffect } from 'react';

const Inbox = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmails = async () => {
      const token = localStorage.getItem('jwt_token');
      if (!token) {
        setError('No token found, please log in first');
        setLoading(false);
        return;
      }

      const requestOptions = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        redirect: 'follow'
      };

      try {
        const response = await fetch("https://hiring.reachinbox.xyz/api/v1/onebox/list", requestOptions);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        setEmails(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex-1 bg-black text-white p-4 flex">
      <div className="w-1/4 p-4 border-r border-gray-700">
        <h2 className="text-xl font-bold mb-4">All Inboxes</h2>
        {emails.map(email => (
          <div key={email.id} className="bg-gray-800 p-4 rounded-lg mb-2 cursor-pointer" onClick={() => setSelectedEmail(email)}>
            <h3 className="text-lg font-bold">{email.fromName}</h3>
            <p className="text-gray-400">{email.subject}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 p-4">
        {selectedEmail ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-bold">{selectedEmail.fromName}</h2>
                <p className="text-gray-400">{selectedEmail.subject}</p>
              </div>
              <div className="text-gray-400">{new Date(selectedEmail.sentAt).toLocaleString()}</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div dangerouslySetInnerHTML={{ __html: selectedEmail.body }} />
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
            <p>Name: {selectedEmail.fromName}</p>
            <p>Email: {selectedEmail.fromEmail}</p>
            <p>To: {selectedEmail.toEmail}</p>
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
