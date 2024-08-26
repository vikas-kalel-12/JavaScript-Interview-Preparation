const VoterForm = (function () {
  const voterForm = document.getElementById("voterForm");
  const errorMessage = document.getElementById("error-message");
  const voterList = document.getElementById("voterList");

  const validateForm = () => {
    const name = voterForm.name.value.trim();
    const email = voterForm.email.value.trim();
    const party = voterForm.party.value;
    const numVoters = voterForm.numVoters.value;

    if (!name || !email || !party || !numVoters || numVoters < 1) {
      errorMessage.textContent = "Please fill out all fields correctly.";
      return false;
    }

    errorMessage.textContent = "";
    return true;
  };

  const fetchFakeVoters = async (num) => {
    try {
      const response = await fetch(
        `https://random-data-api.com/api/users/random_user?size=${num}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching fake voters:", error);
    }
  };

  const displayVoters = (voters) => {
    voterList.innerHTML = "<h3>List of Fake Voters</h3>";
    voters.forEach((voter, index) => {
      const voterItem = document.createElement("div");
      voterItem.textContent = `${index + 1}. ${voter.first_name} ${
        voter.last_name
      } - ${voter.email}`;
      voterList.appendChild(voterItem);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const numVoters = voterForm.numVoters.value;
    const fakeVoters = await fetchFakeVoters(numVoters);
    displayVoters(fakeVoters);
  };

  const init = () => {
    voterForm.addEventListener("submit", handleSubmit);
  };

  return {
    init,
  };
})();

document.addEventListener("DOMContentLoaded", VoterForm.init);
