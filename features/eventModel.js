class EventModel {
  #events;

  constructor() {
    this.#events = [];
  }

  setEvents(events) {
    this.#events = events;
  }

  addEvent(newEvent) {
    this.#events.push(newEvent);
  }

  removeEvent(id) {
    this.#events = this.#events.filter((event) => event.id !== id);
  }

  editEvent(id, editedEvent) {
    this.#events = this.#events.map((event) =>
      event.id === id ? editedEvent : event
    );
  }
}
