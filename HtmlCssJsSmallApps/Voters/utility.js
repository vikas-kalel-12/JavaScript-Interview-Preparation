export const validateForm = (form) => {
  const errorMessage = document.getElementById("error-message");
  const name = form?.name?.value?.trim();
  const email = form?.email?.value?.trim();
  const party = form?.party?.value;
  const voters = form?.voters?.value;
  if (!name || !email || !party || !voters) {
    errorMessage.textContent = "Please enter all fields!!";
    return false;
  }
  errorMessage.textContent = "";
  return true;
};
