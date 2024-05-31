describe.only('Dropdown Interaction Test', () => {
  beforeEach("call url",()=>{
    cy.visit('https://sankey.cap-stone.pk/3%7C2%7C1/NA/farman/admin/create-sankeys');

  })
  it('Visits the webpage, clicks on dropdown menu, and selects an option', () => {
  cy.get("select[class='bg-white w-[389px] h-[32px] rounded-[2px] border-[1px] border-solid border-[#DCDDDC] py-[4px] px-[12px] gap-[10px]']").select('Emission')
  cy.wait(10000);
  cy.get('#name').type("Emission"); 
  cy.wait(2000);
  cy.get('.text-\\[600\\]', { timeout: 10000 }).should('be.visible').click();
  cy.wait(2000);
  cy.get(':nth-child(9) > :nth-child(4)').dblclick();
   cy.wait(2000);
  cy.get("#root > main > div > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div.flex.items-center.space-x-10.mb-4.rounded > select:nth-child(1)").select('Petrol products production');
  cy.get(2000);
  cy.get('.text-gray-300').select('E1');
  cy.wait(2000);
  cy.get('.justify-end > .justify-center').click();
   cy.wait(2000);
  cy.get('#sankey-diagram > div > button').click();
   cy.wait(4000);
 



})
})

