 <!-- Collaborative Real-Time Document Editor -->

This is a real-time collaborative document editor built using **Node.js**, **Express**, **MongoDB**, **Socket.IO**, and **QuillJS**. Multiple users can edit the same document simultaneously and see live updates.

---

<!-- Features -->

* Real-time collaborative editing using Socket.IO
* Rich text editor using Quill.js
* MongoDB database integration to persist documents

---

  <!-- Folder Structure -->

```
collab-doc-editor/
├── backend/
│   ├── server.js
│   └── models/
│       └── Document.js
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
```

---

<!-- ##  Setup Instructions -->

  <!-- Clone the repository -->

Use the command below to clone this project to your local machine:

```bash
git clone https://github.com/your-username/collab-doc-editor.git

#   Then navigate to the project folder:

cd collab-doc-editor
```

 <!-- Install these -->

```bash
cd backend
npm install
```

 <!-- Start MongoDB -->

Make sure MongoDB is running locally at `mongodb://localhost:27017`.

 <!-- Start the Server -->

If you're using PowerShell (Windows):

```powershell
$env:PORT=3001; node server.js
```

> If you're using Git Bash or macOS/Linux:

```bash
PORT=3001 node server.js
```

 <!-- Open the App in Browser -->

 And Visit:

```
http://localhost:3001/index.html
```

To create or open a document, add a hash with a document ID to the URL, like:

```
http://localhost:3001/index.html#example-doc
```

Each unique ID creates a new document or joins the existing one.

 <!-- Author -->
 
 himani kotnala — @himanikotnala
