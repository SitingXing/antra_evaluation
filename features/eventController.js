class EventController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
    this.initApp();
  }

  initApp() {
    this.setUpEvents();
    this.fetchEvents();
  }

  setUpEvents() {
    this.setUpAddNewInputRow();
    this.setUpDeleteEvent();
    this.setUpEditEvent();
  }

  fetchEvents() {
    eventAPI.fetchAPI().then((events) => {
      this.#model.setEvents(events);
      events.forEach((event) => {
        this.#view.renderEventItem(event);
      });
    });
  }

  setUpAddNewInputRow() {
    this.#view.addNewBtn.addEventListener("click", (e) => {
      const { saveNewBtn, nameInput, startDateInput, endDateInput } =
        this.#view.renderNewInputRow();
      saveNewBtn.addEventListener("click", (e) => {
        const newEventName = nameInput.value;
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;

        const newEventItem = {
          eventName: newEventName,
          startDate: startDate,
          endDate: endDate,
        };

        eventAPI.postAPI(newEventItem).then((_newEvent) => {
          this.#model.addEvent(_newEvent);
          this.#view.renderEventItem(newEventItem);
          this.#view.removeRow(saveNewBtn.parentElement.parentElement);
        });
      });
    });
  }

  setUpDeleteEvent() {
    this.#view.eventListBody.addEventListener("click", (e) => {
      if (e.target.classList.contains("event-list__btn-delete")) {
        const eventId = e.target.parentElement.parentElement.getAttribute("id");

        eventAPI.deleteAPI(eventId).then(() => {
          this.#model.removeEvent(eventId);
          this.#view.deleteEventItem(eventId);
        });
      }
    });
  }

  setUpEditEvent() {
    this.#view.eventListBody.addEventListener("click", (e) => {
      if (e.target.classList.contains("event-list__btn-edit")) {
        const eventId = e.target.parentElement.parentElement.getAttribute("id");

        const { saveBtn, nameInput, startDateInput, endDateInput } =
          this.#view.editEventItem(eventId);
        saveBtn.addEventListener("click", (e) => {
          const newEventName = nameInput.value;
          const startDate = startDateInput.value;
          const endDate = endDateInput.value;

          const editedEventItem = {
            eventName: newEventName,
            startDate: startDate,
            endDate: endDate,
            id: eventId,
          };

          eventAPI.patchAPI(eventId, editedEventItem).then((_editedEvent) => {
            this.#model.editEvent(eventId, editedEventItem);
            this.#view.saveEditedEventItem(editedEventItem);
          });
        });
      }
    });
  }
}
