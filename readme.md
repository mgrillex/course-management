Create a User
Endpoint: POST /users

Request Body (JSON)

{
"name": "John Doe",
"email": "john@example.com",
"password": "123456",
"plan": "premium",
"profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg"
}
Expected Response (201 Created)

{
"\_id": "65a4bfe459c6fa18d9a2b7f6",
"name": "John Doe",
"email": "john@example.com",
"plan": "premium",
"profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg",
"enrolledCourses": [],
"createdAt": "2025-04-27T12:00:00.000Z",
"updatedAt": "2025-04-27T12:00:00.000Z",
"\_\_v": 0
}

Get a Single User
Endpoint: GET /users/:id

Example: GET /users/65a4bfe459c6fa18d9a2b7f6

Expected Response (200 OK)

{
"\_id": "65a4bfe459c6fa18d9a2b7f6",
"name": "John Doe",
"email": "john@example.com",
"plan": "premium",
"profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg",
"enrolledCourses": []
}
Update a User
Endpoint: PUT /users/:id

Example: PUT /users/65a4bfe459c6fa18d9a2b7f6

Request Body (JSON)

json
Copy
Edit
{
"name": "John Doe Updated",
"plan": "basic"
}
Expected Response (200 OK)

{
"\_id": "65a4bfe459c6fa18d9a2b7f6",
"name": "John Doe Updated",
"email": "john@example.com",
"plan": "basic",
"profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg",
"enrolledCourses": []
}

Delete a User
Endpoint: DELETE /users/:id

Example: DELETE /users/65a4bfe459c6fa18d9a2b7f6

Expected Response (200 OK)

{
"message": "User deleted successfully"
}

Get a Single Course
Endpoint: GET /courses/:id

Example: GET /courses/65a4c0e959c6fa18d9a2b7f7

Expected Response (200 OK)

{
"\_id": "65a4c0e959c6fa18d9a2b7f7",
"name": "Node.js for Beginners",
"category": "Programming",
"link": "https://example.com/nodejs-course"
}
📌 Update a Course
Endpoint: PUT /courses/:id

Request Body (JSON)

{
"name": "Advanced Node.js",
"category": "Backend Development"
}
Expected Response (200 OK)

{
"\_id": "65a4c0e959c6fa18d9a2b7f7",
"name": "Advanced Node.js",
"category": "Backend Development",
"link": "https://example.com/nodejs-course"
}
📌 Delete a Course
Endpoint: DELETE /courses/:id

Example: DELETE /courses/65a4c0e959c6fa18d9a2b7f7

Expected Response (200 OK)

{
"message": "Course deleted successfully"
}
