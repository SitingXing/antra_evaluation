class Controller {
    #model;
    #view;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;
        this.initApp();
    }

    initApp() {
        this.setUpEvents();
    }

    setUpEvents() {}
}