/* eslint-disable no-undef */
describe('Test /home', () => {
  const nameRecommendation = 'test insert recommendation';
  const youtubeLink = 'https://www.youtube.com/watch?v=VKaLjHZJ-GY';
  it('should create a new recommendation', () => {
    cy.visit('http://localhost:3000');

    cy.get('Input[placeholder="Name"]').type(nameRecommendation);
    cy.get('Input[placeholder="https://youtu.be/..."]').type(youtubeLink);
    cy.get('Button').click();

    cy.contains(nameRecommendation);

    cy.end();
  });
  it('should click like button and increment score', () => {
    cy.visit('http://localhost:3000');

    cy.get('[id="GoArrowUp"]').first().click();

    cy.get('[id="score"]').first().contains(`1`);

    cy.end();
  });
  it('should click like button and decrement score', () => {
    cy.visit('http://localhost:3000');

    cy.get('[id="GoArrowDown"]').first().click();

    cy.get('[id="score"]').first().contains(`0`);

    cy.end();
  });
  it('should click Top button and redirect for /top page', () => {
    cy.visit('http://localhost:3000');

    cy.get('[id="top"]').first().click();

    cy.url().should('equal', 'http://localhost:3000/top');

    cy.end();
  });

  it('should click Random button and redirect for /random page', () => {
    cy.visit('http://localhost:3000');

    cy.get('[id="random"]').first().click();

    cy.url().should('equal', 'http://localhost:3000/random');

    cy.end();
  });
});

describe('Test /top', () => {
  const nameRecommendation = [
    'test insert recommendation 2',
    'test insert recommendation 3',
  ];
  const youtubeLink = 'https://www.youtube.com/watch?v=VKaLjHZJ-GY';

  it('should click Home button and redirect for / page', () => {
    cy.visit('http://localhost:3000/top');

    cy.get('[id="home"]').first().click();

    cy.url().should('equal', 'http://localhost:3000');

    cy.end();
  });

  it('should order list by score', () => {
    cy.visit('http://localhost:3000');

    cy.get('Input[placeholder="Name"]').type(nameRecommendation[0]);
    cy.get('Input[placeholder="https://youtu.be/..."]').type(youtubeLink);
    cy.get('Button').click();

    cy.reload();

    cy.get('Input[placeholder="Name"]').type(nameRecommendation[1]);
    cy.get('Input[placeholder="https://youtu.be/..."]').type(youtubeLink);
    cy.get('Button').click();

    cy.reload();

    cy.visit('http://localhost:3000/top');

    cy.get('[id="GoArrowDown"]').first().click();
    cy.get('[id="score"]').first().contains(`0`);

    cy.end();
  });
});
describe('Test /random', () => {
  const nameRecommendation = [
    'test insert recommendation 4',
    'test insert recommendation 5',
  ];
  const youtubeLink = 'https://www.youtube.com/watch?v=VKaLjHZJ-GY';

  it('should return a recommendation', () => {
    cy.visit('http://localhost:3000');

    cy.get('Input[placeholder="Name"]').type(nameRecommendation[0]);
    cy.get('Input[placeholder="https://youtu.be/..."]').type(youtubeLink);
    cy.get('Button').click();

    cy.reload();

    cy.get('Input[placeholder="Name"]').type(nameRecommendation[1]);
    cy.get('Input[placeholder="https://youtu.be/..."]').type(youtubeLink);
    cy.get('Button').click();

    cy.reload();

    cy.visit('http://localhost:3000/random');

    cy.get('[id="name"]').last().should('equal', cy.get('[id="name"]').first());

    cy.end();
  });
});
