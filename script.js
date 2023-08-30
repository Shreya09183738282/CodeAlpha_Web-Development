const pages = document.querySelectorAll('.page');
let currentPage = 0;

function showPage(pageIndex) {
  pages.forEach((page, index) => {
    if (index === pageIndex) {
      page.classList.add('show');
    } else {
      page.classList.remove('show');
    }
  });
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

function saveDataToLocalStorage() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const feedback = document.getElementById('feedback').value;

  localStorage.setItem('name', name);
  localStorage.setItem('age', age);
  localStorage.setItem('feedback', feedback);
}

function loadDataFromLocalStorage() {
  const name = localStorage.getItem('name');
  const age = localStorage.getItem('age');
  const feedback = localStorage.getItem('feedback');

  if (name) document.getElementById('name').value = name;
  if (age) document.getElementById('age').value = age;
  if (feedback) document.getElementById('feedback').value = feedback;
}
function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}
function submitForm() {
  saveDataToLocalStorage();
  // Additional code to handle form submission to the backend (server-side)
  alert('Survey submitted successfully!');
}

loadDataFromLocalStorage();
showPage(currentPage);
