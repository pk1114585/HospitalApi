## Hospital API
This project is a Hospital an API for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients
![image](https://github.com/pk1114585/HospitalApi/assets/45114125/b9abde16-5bc8-4aaf-9019-5e6090db6e1b)

# Installation

To run this application on your local machine, please follow these steps:

Install the required dependencies using the following command: $ npm install

Start the application using the following command: $ npm run start

Open the application in your Postman app by visiting the following URL: http://localhost:8000

# Features:

# - There can be 2 types of Users

1. Doctors

2. Patients

- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
 
1. Register the patient in the app (using phone number, if the patient already exists, just
return the patient info in the API)

2. After the checkup, create a Report
- Patient Report will have the following fields

1. Created by doctor

2. Status - Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit]

3. Date


Routes:

# - /doctors/register → with username and password
- ![image](https://github.com/pk1114585/HospitalApi/assets/45114125/f581f3e9-2f91-45bf-8992-39cd7de71d52)

# - /doctors/login → returns the JWT to be used
![image](https://github.com/pk1114585/HospitalApi/assets/45114125/2d2b55f0-d81e-42ea-a592-f8dfed994861)

# - /patients/register
![image](https://github.com/pk1114585/HospitalApi/assets/45114125/d2080c74-42b4-4693-80d0-c2a4b40d8284)

# - /patients/:id/create_report
![image](https://github.com/pk1114585/HospitalApi/assets/45114125/e2479862-4a2d-45af-90e5-efd81fe8770e)

# - /patients/:id/all_reports → List all the reports of a patient oldest to latest
![image](https://github.com/pk1114585/HospitalApi/assets/45114125/c4be332c-5a2f-4b8e-86a8-fc14745df648)

# - /reports/:status → List all the reports of all the patients filtered by a specific status
![image](https://github.com/pk1114585/HospitalApi/assets/45114125/ce2cf802-96ad-40b2-b5a3-75e31790df52)

## Tech Stack: Node.js &amp; Mongo DB
