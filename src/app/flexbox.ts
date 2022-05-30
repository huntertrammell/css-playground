// ELEMENT ID'S
const ADD_ELEMENT_ID = "add-element";
const PLAYGROUND_ID = "flex-playground";
const JUSTIFY_SELECT_ID = "flex-justify";
const ALIGN_SELECT_ID = "flex-align";
const WRAP_INPUT_ID = "flex-wrap";
const GROW_INPUT_ID = "flex-grow";
const SHRINK_INPUT_ID = "flex-shrink";
const BASIS_INPUT_ID = "flex-basis";
const DIRECTION_INPUT_ID = "flex-direction"
const SIZE_INPUT_ID = "flex-box-size";

// CSS Variables
const ALIGN_PROPERTY = "--align-items";
const JUSTIFY_PROPERTY = "--justify-content";
const SIZE_PROPERTY = "--box-size";
const WRAP_PROPERTY = "--flex-wrap";
const GROW_PROPERTY = "--flex-grow";
const SHRINK_PROPERTY = "--flex-shrink";
const BASIS_PROPERTY = "--flex-basis";
const DIRECTION_PROPERTY = "--flex-direction";

class FlexBoxPlayground {
  playground: HTMLElement;
  inputs: { el: HTMLInputElement; property: string }[];

  constructor() {
    this.playground = document.getElementById(PLAYGROUND_ID);
    this.inputs = [
      {
        el: document.getElementById(JUSTIFY_SELECT_ID) as HTMLInputElement,
        property: JUSTIFY_PROPERTY,
      },
      {
        el: document.getElementById(ALIGN_SELECT_ID) as HTMLInputElement,
        property: ALIGN_PROPERTY,
      },
      {
        el: document.getElementById(WRAP_INPUT_ID) as HTMLInputElement,
        property: WRAP_PROPERTY,
      },
      {
        el: document.getElementById(GROW_INPUT_ID) as HTMLInputElement,
        property: GROW_PROPERTY,
      },
      {
        el: document.getElementById(SHRINK_INPUT_ID) as HTMLInputElement,
        property: SHRINK_PROPERTY,
      },
      {
        el: document.getElementById(BASIS_INPUT_ID) as HTMLInputElement,
        property: BASIS_PROPERTY,
      },
      {
        el: document.getElementById(DIRECTION_INPUT_ID) as HTMLInputElement,
        property: DIRECTION_PROPERTY,
      },
    ];
    this.init();
  }

  init() {
    // Add Element
    const add_el = document.getElementById(ADD_ELEMENT_ID);
    add_el.addEventListener("click", (e) => {
      e.preventDefault();
      this.addElement();
    });

    this.inputs.forEach((input) => {
      input.el.addEventListener("change", () => {
        this.updateVariable(input.property, input.el.value);
      });
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
    const num = this.playground.getElementsByTagName("div").length + 1;
    div.textContent = `${num}`;
    this.playground.appendChild(div);
  }

  updateVariable(property: string, value: string) {
    document.documentElement.style.setProperty(property, value);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const flex = new FlexBoxPlayground();
});
