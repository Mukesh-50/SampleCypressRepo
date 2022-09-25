describe('Handle Frames', () => {

    //https://gitlab.com/kgroat/cypress-iframe

    // try doing double click with frame https://api.jquery.com/dblclick/

    it('Handle Frame Without Plugin', () => {

        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.get("iframe")
            .its("0.contentDocument")
            .its("body")
            .then(cy.wrap)
            .clear()
            .type("Cypress")

    });
});