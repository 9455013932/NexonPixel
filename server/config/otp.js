const OTPTemplate = (otp) => {
  return `
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OTP Email</title>
  <style>
      body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
      }
      .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .email-header {
          text-align: center;
          background-color: #007bff;
          color: #ffffff;
          padding: 20px;
          border-radius: 8px 8px 0 0;
      }

      .email-header h1 {
          margin: 0;
          font-size: 24px;
      }

      .email-body {
          padding: 20px;
          color: #333333;
          line-height: 1.6;
      }

      .otp-code {
          display: inline-block;
          background-color: #007bff;
          color: #ffffff;
          font-size: 24px;
          font-weight: bold;
          padding: 10px 20px;
          border-radius: 8px;
          margin: 20px 0;
          text-align: center;
          letter-spacing: 2px;
      }

      .email-footer {
          text-align: center;
          padding: 10px;
          font-size: 14px;
          color: #777777;
      }
  </style>
</head>

<body>
  <div class="email-container">
      <div class="email-header">
          <h1>Your OTP Code</h1>
      </div>
      <div class="email-body">
     
          <p>Your One-Time Password (OTP) for accessing your account is:</p>
          <div class="otp-code">${otp}</div>
          <p>Please use this code within the next 10 minutes to complete your verification.</p>
          <p>If you did not request this code, please contact our support team immediately.</p>
      </div>
      <div class="email-footer">
          <p>Thank you for choosing our service!</p>
          <p>&copy; 2024 nexonpixel. All rights reserved.</p>
      </div>
  </div>
</body>

</html>
   `
}

export default OTPTemplate