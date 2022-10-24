class Content {
  constructor() {
    this.courses = [];
  }
  addCourse(courseName, cover, instructor, progressBar) {
    let course = {
      name: courseName,
      cover: cover,
      instructor: instructor,
      progressBar: progressBar,
    };
    this.courses = [...this.courses, course];
  }
  getCourses() {
    return this.courses;
  }
}

export default Content;
