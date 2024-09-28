## Country Info Tabs

**Country Info Tabs** is a single-page web application built using pure **JavaScript**. 
The app implements tabbed navigation functionality to display information about different countries. 
The user interface is dynamically generated based on data stored in an array of objects.

### Features:

- **Dynamic Tab Creation**: Tabs and content blocks are generated dynamically using the `insertAdjacentHTML()` method to inject HTML into the DOM.
- **Event Delegation**: A click event is delegated to the tab container to manage user interactions efficiently.
- **Class Manipulation**: The app utilizes `classList.add()` and `classList.remove()` to control which tab and content block is active.

### Key JavaScript Methods:

- **`insertAdjacentHTML()`**: Efficiently inserts HTML at a specific position relative to an existing DOM element.
- **`addEventListener()`**: Handles DOM events like page load and tab clicks.
- **`classList.add()/remove()`**: Manages the active CSS classes that control the visible state of tabs and content sections.
