describe(`Rock Paper Scissors Game`, () => {
  it(`Plays the game with a name and checks history log`, () => {
    const username = `Your Name`; // Replace 'Your Name' with your actual name

    cy.visit(`http://localhost:8080`); // Replace 'your_port_number' with your server's port number

    // Type your name into the input field
    cy.get(`#username-input`).type(username);

    // Select a choice from the dropdown (e.g., Rock)
    cy.get(`#selection-dropdown`).select(`Rock`);

    // Click the play button
    cy.get(`#play-button`).click();

    // Confirm that the history log contains the right number of tries and your name
    cy.get(`#history-log`).should(`contain.text`, `${username} selected Rock`);
    cy.get(`#history-log`).should(`have.length`, 1); // Assuming each play adds one entry to the log
  });
});