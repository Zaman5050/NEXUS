let agentDropdown = document.querySelector(".agent-dropdown")
let searchAgentInput = document.querySelector(".search-agent-input")

searchAgentInput.addEventListener("click", (event) => {
    agentDropdown.style.display = "block";
    event.stopPropagation(); // Prevent the click event from propagating to the document
  });
  
  // Add a click event listener to the document to close the dropdown when clicking outside
  document.addEventListener("click", (event) => {
    // Check if the click target is not inside the dropdown or the input
    if (
      !agentDropdown.contains(event.target) &&
      event.target !== searchAgentInput
    ) {
      agentDropdown.style.display = "none";
    }
  });
  
  // Prevent clicks inside the dropdown from closing it
  agentDropdown.addEventListener("click", (event) => {
    event.stopPropagation();
  });



