# TodoList Application

A modern, feature-rich todo list application built with vanilla JavaScript, featuring project organization, local storage persistence, and a beautiful responsive design.

## ✨ Features

- **Project Management**: Create and organize tasks within different projects
- **Task Management**: Add, view, and complete tasks with detailed descriptions and due dates
- **Local Storage**: Automatically saves your data in the browser's local storage
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations and hover effects
- **Date Formatting**: Human-readable due dates with relative time display
- **Form Validation**: Input validation for projects and tasks

## 🚀 Getting Started

### Prerequisites

- A modern web browser with JavaScript enabled
- Local storage support (available in all modern browsers)

### Installation

1. Clone the repository or download the project files
2. Open `src/index.html` in your web browser
3. Start creating projects and managing your tasks!

### File Structure

```
src/
├── index.html              # Main HTML file
├── index.js               # Main JavaScript entry point
├── styles.css             # Complete styling and responsive design
├── LeftPanelDOM.js        # Left sidebar DOM manipulation
├── LeftPanelEventListeners.js  # Event handlers for sidebar
├── RightPanelDOM.js       # Main display area DOM manipulation
├── RightPanelEventListeners.js # Event handlers for display area
├── Modal.js               # Task creation modal functionality
├── ModalEventListeners.js # Event handlers for modal
├── projects.js            # Project management logic
├── localStorage.js        # Local storage handling
└── checkLocalStorage.js   # Local storage availability check
```

## 📱 How to Use

### Creating Projects

1. Enter a project name in the "Create New Project" input field
2. Click the **+** button to add the project
3. Your project will appear in the "Your Projects" section

**Project Name Rules:**
- Cannot be empty
- Cannot contain whitespace
- Must be unique (no duplicate names)

### Creating Tasks

1. First, create at least one project
2. Enter a task name in the "Create New Task" input field
3. Click the **+** button to open the task creation modal
4. Fill in the task details:
   - **Task Name**: Brief description of the task
   - **Description**: Detailed description of what needs to be done
   - **Due Date**: When the task should be completed
   - **Project**: Select which project this task belongs to
5. Click "AddTodo" to create the task

### Managing Tasks and Projects

- **View Project Tasks**: Click on any project in the sidebar to view its tasks
- **Complete Tasks**: Check the checkbox next to a task to mark it as complete (this will delete the task)
- **Delete Projects**: Click the **×** button next to any project to delete it and all its tasks
- **Home View**: Click the **🏠 Home** button to return to the welcome screen

## 🎨 Design Features

- **Gradient Header**: Eye-catching animated gradient header with shimmer effect
- **Modern Cards**: Clean card-based design with subtle shadows and hover animations
- **Responsive Layout**: Adapts to different screen sizes with mobile-first approach
- **Color Scheme**: Professional color palette with CSS custom properties
- **Interactive Elements**: Smooth transitions and hover effects throughout
- **Accessibility**: Focus states and semantic markup for better accessibility

## 💾 Data Persistence

The application automatically saves your data to the browser's local storage:

- **Projects**: All project information is saved
- **Tasks**: Complete task details including descriptions and due dates
- **Relationships**: Task-to-project associations are maintained
- **Auto-save**: Data is saved whenever you create, modify, or delete items

**Note**: Data is stored locally in your browser. Clearing browser data or using a different browser/device will not retain your information.

## 🛠️ Technical Details

### Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with custom properties, flexbox, and animations
- **Vanilla JavaScript**: ES6+ features including modules, destructuring, and arrow functions
- **Date-fns**: Date formatting and manipulation library
- **Crypto API**: UUID generation for unique task identification

### Key JavaScript Features

- **ES6 Modules**: Modular code organization with import/export
- **Event Delegation**: Efficient event handling
- **Local Storage API**: Data persistence
- **UUID Generation**: Unique identifiers for tasks
- **Form Validation**: Input validation and user feedback

### Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🔧 Development

### Code Organization

The codebase follows a modular architecture:

- **DOM Manipulation**: Separated into specific files for different UI sections
- **Event Handling**: Dedicated event listener files for different components
- **Data Management**: Separate modules for projects and todos
- **Storage**: Abstracted local storage operations
- **Validation**: Input validation and error handling

### Key Functions

- `createProject()`: Constructor for project objects
- `createTodo()`: Constructor for todo objects
- `modifyProject`: Object containing project management methods
- `modifyTodo`: Object containing todo management methods
- `modifyDisplay`: Object containing display rendering methods
- `modifyTodoModal`: Object containing modal management methods

## 🎯 Future Enhancements

Potential features for future versions:

- Task editing functionality
- Task priority levels
- Search and filter capabilities
- Data export/import
- Drag and drop task reordering
- Task categories and tags
- Recurring tasks
- Task collaboration features

## 🤝 Contributing

This project is built with vanilla JavaScript and focuses on clean, readable code. When contributing:

1. Follow the existing code structure and naming conventions
2. Ensure cross-browser compatibility
3. Test local storage functionality
4. Maintain responsive design principles
5. Add appropriate error handling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Enjoy organizing your tasks with TodoList!** 📝✅
