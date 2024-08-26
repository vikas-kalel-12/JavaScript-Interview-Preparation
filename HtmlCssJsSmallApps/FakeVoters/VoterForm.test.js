// VoterForm.test.js
import {
  fireEvent,
  getByLabelText,
  getByText,
  getByPlaceholderText,
} from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import fetchMock from "jest-fetch-mock";

// Mocking the HTML structure for the tests
document.body.innerHTML = `
  <div class="container">
    <form id="voterForm">
      <div class="input-group">
        <label for="name">Name</label>
        <input type="text" placeholder="Enter Name" name="name" id="name" required />
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" placeholder="Enter Email" name="email" id="email" required />
      </div>
      <div class="input-group">
        <legend>Select Party</legend>
        <div>
          <input type="radio" id="party-a" name="party" value="Party A" />
          <label for="party-a">Party A</label>
        </div>
        <div>
          <input type="radio" id="party-b" name="party" value="Party B" />
          <label for="party-b">Party B</label>
        </div>
        <div>
          <input type="radio" id="party-c" name="party" value="Party C" />
          <label for="party-c">Party C</label>
        </div>
      </div>
      <div class="input-group">
        <label for="numVoters">Voters</label>
        <input name="numVoters" type="number" placeholder="Enter Number Of Voters" id="numVoters" required />
      </div>
      <div class="input-group">
        <button type="submit">Submit</button>
      </div>
      <div class="error-message" role="alert" id="error-message" aria-live="assertive"></div>
    </form>
    <div class="voter-list" id="voterList"></div>
  </div>
`;

// Import the module after setting up the DOM structure
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

// Tests
describe("VoterForm", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("should display error message if form is not filled correctly", () => {
    const form = document.getElementById("voterForm");
    fireEvent.submit(form);

    const errorMessage = document.getElementById("error-message");
    expect(errorMessage).toHaveTextContent(
      "Please fill out all fields correctly."
    );
  });

  test("should fetch and display fake voters", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([
        { first_name: "John", last_name: "Doe", email: "john.doe@example.com" },
        { first_name: "Jane", last_name: "Doe", email: "jane.doe@example.com" },
      ])
    );

    const nameInput = getByPlaceholderText(document.body, "Enter Name");
    fireEvent.change(nameInput, { target: { value: "Test User" } });

    const emailInput = getByPlaceholderText(document.body, "Enter Email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    const partyInput = getByLabelText(document.body, "Party A");
    fireEvent.click(partyInput);

    const numVotersInput = getByPlaceholderText(
      document.body,
      "Enter Number Of Voters"
    );
    fireEvent.change(numVotersInput, { target: { value: "2" } });

    const form = document.getElementById("voterForm");
    fireEvent.submit(form);

    // Wait for async operations
    await new Promise((r) => setTimeout(r, 100));

    const voterList = document.getElementById("voterList");
    expect(voterList).toHaveTextContent("1. John Doe - john.doe@example.com");
    expect(voterList).toHaveTextContent("2. Jane Doe - jane.doe@example.com");
  });
});
