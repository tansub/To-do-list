const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  addDoc,
  updateDoc,
  getFirestore,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
    //   apiKey: "your-api-key",
    //   authDomain: "your-auth-domain",
    //   projectId: "your-project-id",
    //   storageBucket: "your-storage-bucket",
    //   messagingSenderId: "your-messaging-sender-id",
    //   appId: "your-app-id",
    apiKey: "AIzaSyDgnmO3WR2Wwm_BgrX6WjX3UgR2lXuiz48",
    authDomain: "to-do-list-d3f76.firebaseapp.com",
    projectId: "to-do-list-d3f76",
    storageBucket: "to-do-list-d3f76.firebasestorage.app",
    messagingSenderId: "292284862618",
    appId: "1:292284862618:web:40d5a1f7a4d945b1c48f23",
    measurementId: "G-KXN2EZ16W6",
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

// Add Task
addTaskBtn.addEventListener("click", async () => {
  const task = taskInput.value.trim();
  if (task) {
    const taskInput = document.getElementById("taskInput");
    const taskText = sanitizeInput(taskInput.value.trim());
    if (taskText) {
      await addTaskToFirestore(taskText);
      renderTasks();
      taskInput.value = "";
    }
    renderTasks();
  }
});
async function addTaskToFirestore(taskText) {
  await addDoc(collection(db, "todos"), {
    text: taskText,
    completed: false,
  });
}

// rendering
async function renderTasks() {
  var tasks = await getTasksFromFirestore();
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    if (!task.data().completed) {
      const taskItem = document.createElement("li");
      taskItem.id = task.id;
      taskItem.textContent = task.data().text;
      taskList.appendChild(taskItem);
    }
  });
}
async function getTasksFromFirestore() {
  var data = await getDocs(collection(db, "todos"));
  let userData = [];
  data.forEach((doc) => {
    userData.push(doc);
  });
  return userData;
}

// sanitation
function sanitizeInput(input) {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
    }

// Remove Task on Click
taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

const sw = new URL("service-worker.js", import.meta.url);
if ("serviceWorker" in navigator) {
  const s = navigator.serviceWorker;
  s.register(sw.href, {
    scope: "/To-do-list/",
  })
    .then((_) =>
      console.log(
        "Service Worker Registered for scope:",
        sw.href,
        "with",
        import.meta.url
      )
    )
    .catch((err) => console.error("Service Worker Error:", err));
}



