import { fetchAPI } from "./api.js";
import { validateForm } from "./utility.js";

const onLoad = (function () {
  const form = document.getElementById("form-data");
  const voterList = document.getElementById("voter-list");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;
    const fakeVoters = await fetchAPI(
      `https://random-data-api.com/api/users/random_user?size=${form?.voters?.value}`
    );
    console.log(form.voters.value, "voters");

    displayVoters(fakeVoters);
  };

  const displayVoters = (fakeVoters) => {
    if (fakeVoters?.length) {
      fakeVoters.forEach((fakeVoter) => {
        const { first_name, last_name } = { ...fakeVoter };
        const div = document.createElement("div");
        div.innerHTML = first_name + " " + last_name;
        voterList.appendChild(div);
      });
    }
  };
  const init = async () => {
    form.addEventListener("submit", handleSubmit);
  };
  return { init };
})();

document.addEventListener("DOMContentLoaded", onLoad.init);
