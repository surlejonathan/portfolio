export const postMessage = async (payload) => {
  const res = await fetch('/api/sendgrid', {
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  const { error } = await res.json();
  console.log('ERROR', error ? error.message : 'Form sent successfully!');
  if (error) {
    console.log(error);
    return;
  }
};
