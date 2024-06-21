class EventView {
  constructor() {
    this.eventListBody = document.querySelector(".event-list__body");
    this.addNewBtn = document.querySelector(".add-new-event__btn");
  }

  renderNewInputRow() {
    const newEventRow = document.createElement("tr");
    newEventRow.classList.add("event-list__row");
    newEventRow.classList.add("event-list__row-input");

    const eventCol = document.createElement("td");
    const eventInput = document.createElement("input");
    eventInput.type = "text";
    eventInput.classList.add("event-list__input");
    eventInput.classList.add("event-list__input-name");
    eventInput.setAttribute("required", "");

    const startCol = document.createElement("td");
    const startInput = document.createElement("input");
    startInput.type = "date";
    startInput.classList.add("event-list__input");
    startInput.classList.add("event-list__input-start");
    startInput.setAttribute("required", "");

    const endCol = document.createElement("td");
    const endInput = document.createElement("input");
    endInput.type = "date";
    endInput.classList.add("event-list__input");
    endInput.classList.add("event-list__input-end");
    endInput.setAttribute("required", "");

    const actionsCol = document.createElement("td");
    actionsCol.classList.add("event-list__btn-container");
    const actionsBtn1 = document.createElement("span");
    actionsBtn1.classList.add("event-list__btn");
    actionsBtn1.classList.add("event-list__btn-add");
    actionsBtn1.classList.add("blue");
    actionsBtn1.innerHTML = `<svg class="event-list__icon" focusable viewBox="0 0 24 24" aria-hidden="true xmlns="http://www.w3.org/2000/svg"><path d="M12 6V18M18 12H6" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    const actionsBtn2 = document.createElement("span");
    actionsBtn2.classList.add("event-list__btn");
    actionsBtn2.classList.add("red");
    actionsBtn2.innerHTML = `<svg class="event-list__icon" focusable="false" aria-hidden="true" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path></svg>`;

    eventCol.append(eventInput);
    startCol.append(startInput);
    endCol.append(endInput);
    actionsCol.append(actionsBtn1, actionsBtn2);
    newEventRow.append(eventCol, startCol, endCol, actionsCol);

    this.eventListBody.appendChild(newEventRow);

    const saveNewBtn = document.querySelector(".event-list__btn-add");
    const nameInput = document.querySelector(".event-list__input-name");
    const startDateInput = document.querySelector(".event-list__input-start");
    const endDateInput = document.querySelector(".event-list__input-end");
    return { saveNewBtn, nameInput, startDateInput, endDateInput };
  }

  renderEventItem(event) {
    const { eventName, startDate, endDate, id } = event;

    const newEventRow = document.createElement("tr");
    newEventRow.classList.add("event-list__row");
    newEventRow.id = id;

    const eventCol = document.createElement("td");
    eventCol.textContent = eventName;

    const startCol = document.createElement("td");
    startCol.textContent = startDate;

    const endCol = document.createElement("td");
    endCol.textContent = endDate;

    const actionsCol = document.createElement("td");
    actionsCol.classList.add("event-list__btn-container");
    const actionsBtn1 = document.createElement("span");
    actionsBtn1.classList.add("event-list__btn");
    actionsBtn1.classList.add("event-list__btn-edit");
    actionsBtn1.classList.add("blue");
    actionsBtn1.innerHTML = `<svg class="event-list__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>`;
    const actionsBtn2 = document.createElement("span");
    actionsBtn2.classList.add("event-list__btn");
    actionsBtn2.classList.add("event-list__btn-delete");
    actionsBtn2.classList.add("red");
    actionsBtn2.innerHTML = `<svg class="event-list__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>`;

    actionsCol.append(actionsBtn1, actionsBtn2);
    newEventRow.append(eventCol, startCol, endCol, actionsCol);
    this.eventListBody.appendChild(newEventRow);
  }

  removeRow(row) {
    row.remove();
  }

  deleteEventItem(eventId) {
    const deletedEvent = document.getElementById(eventId);
    deletedEvent.remove();
  }

  editEventItem(eventId) {
    const editedEvent = document.getElementById(eventId);
    const cells = editedEvent.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      if (i === cells.length - 1) {
        const actionsBtn1 = cell.querySelector(".blue");
        actionsBtn1.classList.remove("event-list__btn-edit");
        actionsBtn1.classList.add("event-list__btn-save");
        actionsBtn1.innerHTML = `<svg class="event-list__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,20V8.414a1,1,0,0,0-.293-.707L16.293,3.293A1,1,0,0,0,15.586,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20A1,1,0,0,0,21,20ZM9,8h4a1,1,0,0,1,0,2H9A1,1,0,0,1,9,8Zm7,11H8V15a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Z"/></svg>`;
        const actionsBtn2 = cell.querySelector(".red");
        actionsBtn2.classList.remove("event-list__btn-cancel");
        actionsBtn2.classList.add("event-list__btn-delete");
        actionsBtn2.innerHTML = `<svg class="event-list__icon" focusable="false" aria-hidden="true" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path></svg>`;
      } else {
        const input = document.createElement("input");
        if (i === 0) {
          input.type = "text";
          input.classList.add("event-list__input-name");
        } else if (i === 1) {
          input.type = "date";
          input.classList.add("event-list__input-start");
        } else {
          input.type = "date";
          input.classList.add("event-list__input-end");
        }
        input.value = cell.textContent;
        cell.innerHTML = "";
        cell.appendChild(input);
      }
    }

    const saveBtn = document.querySelector(".event-list__btn-save");
    const nameInput = document.querySelector(".event-list__input-name");
    const startDateInput = document.querySelector(".event-list__input-start");
    const endDateInput = document.querySelector(".event-list__input-end");
    return { saveBtn, nameInput, startDateInput, endDateInput };
  }

  saveEditedEventItem(event) {
    const { eventName, startDate, endDate, id } = event;
    const editedEvent = document.getElementById(id);
    if (editedEvent) {
      const cells = editedEvent.getElementsByTagName("td");

      for (let i = 0; i < cells.length - 1; i++) {
        cells[i].innerHTML = "";
      }

      cells[0].textContent = eventName;
      cells[1].textContent = startDate;
      cells[2].textContent = endDate;

      const actionsBtn1 = cells[3].querySelector(".blue");
      actionsBtn1.classList.remove("event-list__btn-save");
      actionsBtn1.classList.add("event-list__btn-edit");
      actionsBtn1.innerHTML = `<svg class="event-list__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>`;
      const actionsBtn2 = cells[3].querySelector(".red");
      actionsBtn2.classList.remove("event-list__btn-delete");
      actionsBtn2.classList.add("event-list__btn-cancel");
      actionsBtn2.innerHTML = `<svg class="event-list__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>`;
    }
  }
}
