/* eslint-disable no-undef */
describe("Test /home", () => {
  const nameRecommendation = "test insert recommendation";
  const youtubeLink = "https://www.youtube.com/watch?v=VKaLjHZJ-GY";
  it("should create a new recommendation", () => {
    cy.visit("http://localhost:3000");

    cy.get('Input[placeholder="Name"]').type(nameRecommendation);
    cy.get('Input[placeholder="https://youtu.be/..."]').type(youtubeLink);
    cy.get("Button").click();

    cy.contains(nameRecommendation);

    cy.end();
  });
  it("should click like button and increment score", () => {
    cy.visit("http://localhost:3000");

    cy.get(nameRecommendation).first().find("svg").click();

    cy.get("Row").contains(`1`);

    cy.end();
  });
});
