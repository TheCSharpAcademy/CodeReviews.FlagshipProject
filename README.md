***Radiology Second Opinion Application***

***Overview***

In daily radiology practices, patients often seek a second opinion on their diagnostic images. This web application aims to provide patients with an online platform to obtain a second opinion from qualified radiologists.
The system allows patients to create accounts, upload their medical images, and request evaluations, all while ensuring a streamlined process for both patients and doctors.

***Features***

***User Account Management:***
System administrators can create and manage doctor accounts. Patients can easily create user accounts to access the platform.

***Image Uploading:***
Patients can upload their radiological images to a preferred storage location on the internet.

***Examination Requests:*** 
After uploading images, patients can log in to create new examination requests, submitting necessary details and image links.

***Payment Integration:*** 
Patients are directed to a payment page to complete transactions for the examination services.

***Doctor Review System:*** 
Newly created examinations appear in the "Pending Examinations" section for doctors. Interested doctors can accept cases and change the status to "Under Review."

***Report Generation:*** 
Doctors can download images, complete the review, and submit their reports within the system.

***Notification System:*** 
Once the report is finalized, patients receive notifications via email or SMS, and the report is sent directly to their email address.

***Client Side: Blazor***

    Easier to use with ms identity and external authentication templates
    
***Mobile Client: Blazor hybrid***

***Cloud Services: Azure***

***External Service: Stripe as payment gateway***

***Database Schema***
The application utilizes the following key tables:

***Patients***

Stores patient information, including personal details and user account linkage.

***Examinations***

Records details of examination requests, including patient ID, doctor ID, and image links.

***Doctors***

Stores doctor information, allowing for account management and review of patient cases.

***Incomes***

Tracks income details associated with examinations and doctor payments.

***Users***

Manages user authentication and roles within the application.

![flagship_1](https://github.com/user-attachments/assets/d94140ab-47f5-47a2-aebb-643002dbdc95)


