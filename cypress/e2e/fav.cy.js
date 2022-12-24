describe("when testing admin", () => {
    // beforeEach(() => {
    //     cy.visit("/");
    //     cy.contains("Admin").click();
    //     cy.url().should("contain", "/admin");
    // });


    it.skip("should create a new movie entry", () => {
        cy.visit("/");
        cy.contains("Admin").click();
        cy.url().should("contain", "/admin");

        cy.contains("button", "New Entry").click();
        cy.contains("Upload a New Movie");
        cy.get("input[name=title]").type("El padrino(e2e test)");
        cy.get("textarea[name=description]").type("tony montana es un asesino mortal");
        cy.get("select[name=genre]").select("Action");
        cy.get("input[name=year]").clear().type("1974");
        cy.get("input[name=length]").clear().type("175");
        cy.get("input[name=imageUrl]").type("https://www.mundopeliculas.tv/wp-content/uploads/2017/12/scarface.jpg", { delay: 0 });
        cy.get("input[name=videoUrl]").type("https://www.youtube.com/embed/-UxXMzhZsNI", { delay: 0 });
        cy.contains("button", "Add Movie").click();
    });

    it("should add to favorites", () => {
        cy.visit("/");
        cy.get("img[alt='El padrino(e2e test)']").click();
        cy.get("button[name=addtofav]").click();
        cy.contains("button", "Close").click();

    });

    it("should go to favorites and play", () => {
        cy.visit("/favorites");
        cy.get("img[alt='El padrino(e2e test)']").click();
        cy.contains("Watch Now").click();
    });

});
