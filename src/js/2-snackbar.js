let formData = {
  email: "",
  message: ""
};

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData = { ...parsedData };
  form.elements.email.value = formData.email || "";
  form.elements.message.value = formData.message || "";
}

form.addEventListener('input', (event) => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;
  formData[fieldName] = fieldValue;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (formData.email.trim() === "" || formData.message.trim() === "") {
    return alert("Fill please all fields");
  }
  console.log("Submitted Data:", formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" }; 
  form.reset(); 
});