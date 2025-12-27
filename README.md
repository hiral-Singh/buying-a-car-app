# CARS4GROUP – Group Car Buying Platform

## 🚗 Overview

CARS4GROUP is a **group car buying web application** where buyers collaborate to unlock better discounts on cars. Instead of purchasing individually, users join groups; **only the first group to fill and confirm wins the deal**. The platform acts as the single source of truth between buyers and dealers.

This project is intentionally scoped as a **resume-ready MERN stack application** that demonstrates multi-user state, backend-enforced business rules, and collaborative purchasing logic.

---

## 🧠 Core Idea

* Buyers form or join groups for a specific car
* Each group has a required size (e.g., 5 buyers)
* Multiple groups can compete for the same car
* When a group fills, all members must **confirm participation**
* The **first group to fully confirm wins the deal**
* All other groups are automatically closed

If it’s not formed inside the app, it doesn’t count.

---

## 👥 User Roles

### Buyer

* Register and log in
* Browse cars and available deals
* Create or join groups
* Leave groups before confirmation
* Confirm participation
* Track deal status

### Dealer (Simplified)

* Lists cars with deal conditions
* Views deal outcome (won / closed)
* No direct negotiation or dashboard logic in this version

---

## 📄 Pages & Features

### Home Page (`/`)

**Purpose:** Discovery

* Displays all available cars
* Each car shows basic info and a **View Deals** button

➡️ Clicking a car navigates to the Car Details page

---

### Car Details Page (`/car/:id`)

**Purpose:** Group buying hub

**Displays:**

* Car information (name, image, base price)
* List of all active groups for that car

  * Current members count (e.g., 3/5)
  * Group status (Open / Confirming / Won)

**Actions:**

* Join an existing group
* Leave a group (if still open)
* Create a new group

---

### Confirmation State

**Triggered when a group reaches target size**

* Group status changes to `confirming`
* All members must confirm participation
* If any member declines or times out, the group reopens

---

### Winning Deal State

* First fully confirmed group wins
* Group status becomes `won`
* Discounted price is shown
* All other groups for that car are closed automatically

---

### Authentication Pages

#### Login (`/login`)

* Email + password

#### Register (`/register`)

* Name, email, password

---

### Profile Page (`/profile`)

* View and update user details
* (Optional) View joined groups

---

## 🗄️ Data Models (High Level)

### User

* name
* email
* password

### Car

* name
* basePrice
* image
* description

### DealGroup

* carId
* targetSize
* members: [{ userId, confirmed }]
* status: `open | confirming | won | closed`
* createdAt

---

## ⚙️ Backend Logic (Simplified)

### Join Group

* User must be authenticated
* Group must be open
* User can belong to only one group per car

### Confirmation

* Triggered when group fills
* All members must confirm
* If confirmed → group wins
* Other groups are closed

---

## 🚫 Intentionally Excluded

To keep the project focused and finishable, the following are excluded:

* Dealer dashboards
* Payments and coupons
* Notifications (SMS/email)
* Analytics & BI
* Loans, insurance, accessories
* Chat or social features

These were consciously dropped to avoid startup-level complexity.

---

## 🧾 Resume Description

> Built a MERN-based group car buying platform where multiple buyer groups compete to unlock shared discounts, using confirmation-based deal resolution and backend-enforced fairness rules.

---

## 📌 Tech Stack

* Frontend: React, React Router, Bootstrap
* Backend: Node.js, Express
* Database: MongoDB
* Authentication: JWT

---

## 📍 Project Status

This project focuses on **core group-buying mechanics** rather than a full commercial marketplace. It is designed to clearly demonstrate system design, backend logic, and real-world trade-offs.

---

End of README.
