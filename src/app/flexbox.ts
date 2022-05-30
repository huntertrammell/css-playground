// ELEMENT ID'S
const ADD_ELEMENT_ID = "add-element";
const JUSTIFY_SELECT_ID = "flex-justify";
const ALIGN_SELECT_ID = "flex-align";
const SIZE_INPUT_ID = "flex-size";
const PLAYGROUND_ID = "flex-playground";

// CSS Variables
const ALIGN_PROPERTY = "--align-items";
const JUSTIFY_PROPERTY = "--justify-content";
const SIZE_PROPERTY = "--box-size";

class FlexBoxPlayground {
  playground: HTMLElement;

  constructor() {
    this.playground = document.getElementById(PLAYGROUND_ID);

    this.init();
  }

  init() {
    // Add Element
    const add_el = document.getElementById(ADD_ELEMENT_ID);
    add_el.addEventListener("click", (e) => {
      e.preventDefault();
      this.addElement();
    });

    // Change Justify
    const justify_select = document.getElementById(
      JUSTIFY_SELECT_ID
    ) as HTMLSelectElement;
    justify_select.addEventListener("change", () => {
      const value = justify_select.value;
      this.updateVariable(JUSTIFY_PROPERTY, value);
    });

    // Change Align
    const align_select = document.getElementById(
      ALIGN_SELECT_ID
    ) as HTMLSelectElement;
    align_select.addEventListener("change", () => {
      const value = align_select.value;
      this.updateVariable(ALIGN_PROPERTY, value);
    });

    // Change size
    const size_input = document.getElementById(
      SIZE_INPUT_ID
    ) as HTMLInputElement;
    size_input.addEventListener("change", () => {
      const value = `${size_input.value}px`;
      this.updateVariable(SIZE_PROPERTY, value);
    });
  }

  addElement() {
    const div = document.createElement("div");
    this.playground.appendChild(div);
  }

  updateVariable(property: string, value: string) {
    document.documentElement.style.setProperty(property, value);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const flex = new FlexBoxPlayground();
});
