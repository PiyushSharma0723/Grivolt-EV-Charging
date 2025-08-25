/* =========================
   Form Validation
========================= */
document.addEventListener('DOMContentLoaded', () => {

  // Signup Form Validation
  const signupForm = document.getElementById('signupForm');
  if(signupForm){
    signupForm.addEventListener('submit', function(e){
      e.preventDefault();
      let valid = true;

      const fullName = this.fullName.value.trim();
      const email = this.email.value.trim();
      const password = this.password.value;
      const confirmPassword = this.confirmPassword.value;

      if(!fullName){
        this.fullName.classList.add('is-invalid');
        valid = false;
      } else {
        this.fullName.classList.remove('is-invalid');
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailPattern.test(email)){
        this.email.classList.add('is-invalid');
        valid = false;
      } else {
        this.email.classList.remove('is-invalid');
      }

      if(password.length < 6){
        this.password.classList.add('is-invalid');
        valid = false;
      } else {
        this.password.classList.remove('is-invalid');
      }

      if(password !== confirmPassword || confirmPassword.length < 6){
        this.confirmPassword.classList.add('is-invalid');
        valid = false;
      } else {
        this.confirmPassword.classList.remove('is-invalid');
      }

      if(valid){
        alert('Signup successful! (Demo only)');
        this.reset();
      }
    });
  }

  // Login Form Validation
  const loginForm = document.getElementById('loginForm');
  if(loginForm){
    loginForm.addEventListener('submit', function(e){
      e.preventDefault();
      const email = this.email.value.trim();
      const password = this.password.value;
      if(!email || !password){
        alert('Please enter both email and password.');
      } else {
        alert('Login successful! (Demo only)');
        this.reset();
      }
    });
  }

  // Contact Form Validation
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const message = this.message.value.trim();

      if(!name || !email || !message){
        alert('Please fill in all fields.');
      } else {
        alert('Message sent! (Demo only)');
        this.reset();
      }
    });
  }

  /* =========================
     Booking System (Demo)
  ========================== */
  const bookingForm = document.getElementById('bookingForm');
  if(bookingForm){
    bookingForm.addEventListener('submit', function(e){
      e.preventDefault();
      const station = this.station.value;
      const date = this.date.value;
      const time = this.time.value;

      if(!station || !date || !time){
        alert('Please fill all booking details.');
      } else {
        alert(`Booking confirmed!\nStation: ${station}\nDate: ${date}\nTime: ${time}`);
        this.reset();
      }
    });
  }

  /* =========================
     Dashboard Demo
  ========================== */
  const dashboardContainer = document.getElementById('dashboardContainer');
  if(dashboardContainer){
    const bookings = [
      {station: "Delhi Central", date: "2025-08-25", time: "10:00 AM", status: "Confirmed"},
      {station: "Mumbai West", date: "2025-08-26", time: "02:00 PM", status: "Pending"},
      {station: "Bangalore East", date: "2025-08-27", time: "09:00 AM", status: "Confirmed"}
    ];

    bookings.forEach(booking => {
      const div = document.createElement('div');
      div.className = "dashboard-card";
      div.innerHTML = `
        <h4>${booking.station}</h4>
        <p>Date: ${booking.date}</p>
        <p>Time: ${booking.time}</p>
        <p>Status: <strong>${booking.status}</strong></p>
      `;
      dashboardContainer.appendChild(div);
    });
  }

});
