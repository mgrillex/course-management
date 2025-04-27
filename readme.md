# 📚 Courses API Documentation

---

## User Endpoints

### Create a User

**POST** `/users`

#### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456",
  "plan": "premium",
  "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg"
}
```

#### Expected Response (201 Created)

```json
{
  "_id": "65a4bfe459c6fa18d9a2b7f6",
  "name": "John Doe",
  "email": "john@example.com",
  "plan": "premium",
  "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg",
  "enrolledCourses": [],
  "createdAt": "2025-04-27T12:00:00.000Z",
  "updatedAt": "2025-04-27T12:00:00.000Z",
  "__v": 0
}
```

---

### ➡️ Get a Single User

**GET** `/users/:id`

Example:

```
/users/65a4bfe459c6fa18d9a2b7f6
```

#### Expected Response (200 OK)

```json
{
  "_id": "65a4bfe459c6fa18d9a2b7f6",
  "name": "John Doe",
  "email": "john@example.com",
  "plan": "premium",
  "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg",
  "enrolledCourses": []
}
```

---

### ➡️ Update a User

**PUT** `/users/:id`

Example:

```
/users/65a4bfe459c6fa18d9a2b7f6
```

#### Request Body

```json
{
  "name": "John Doe Updated",
  "plan": "basic"
}
```

#### Expected Response (200 OK)

```json
{
  "_id": "65a4bfe459c6fa18d9a2b7f6",
  "name": "John Doe Updated",
  "email": "john@example.com",
  "plan": "basic",
  "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg",
  "enrolledCourses": []
}
```

---

### ➡️ Delete a User

**DELETE** `/users/:id`

Example:

```
/users/65a4bfe459c6fa18d9a2b7f6
```

#### Expected Response (200 OK)

```json
{
  "message": "User deleted successfully"
}
```

---

## 📚 Course Endpoints

### ➡️ Get a Single Course

**GET** `/courses/:id`

Example:

```
/courses/65a4c0e959c6fa18d9a2b7f7
```

#### Expected Response (200 OK)

```json
{
  "_id": "65a4c0e959c6fa18d9a2b7f7",
  "name": "Node.js for Beginners",
  "category": "Programming",
  "link": "https://example.com/nodejs-course"
}
```

---

### ➡️ Update a Course

**PUT** `/courses/:id`

Example:

```
/courses/65a4c0e959c6fa18d9a2b7f7
```

#### Request Body

```json
{
  "name": "Advanced Node.js",
  "category": "Backend Development"
}
```

#### Expected Response (200 OK)

```json
{
  "_id": "65a4c0e959c6fa18d9a2b7f7",
  "name": "Advanced Node.js",
  "category": "Backend Development",
  "link": "https://example.com/nodejs-course"
}
```

---

### ➡️ Delete a Course

**DELETE** `/courses/:id`

Example:

```
/courses/65a4c0e959c6fa18d9a2b7f7
```

#### Expected Response (200 OK)

```json
{
  "message": "Course deleted successfully"
}
```

---

---
