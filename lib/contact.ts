
export interface InquiryData {
  name: string;
  email: string;
  company?: string;
  service: string;
  details: string;
}

export const sendInquiry = (data: InquiryData): Promise<{ success: boolean; message: string }> => {
  console.log('Submitting inquiry:', data);
  // Simulate a network request
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Randomly succeed or fail to demonstrate error handling
      if (Math.random() > 0.1) { // 90% success rate
        resolve({ success: true, message: 'Your inquiry has been sent successfully! We will be in touch soon.' });
      } else {
        reject(new Error('Something went wrong. Please try again later.'));
      }
    }, 1500); // 1.5 second delay
  });
};
