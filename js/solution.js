(function () {
  class Human {
    name = null;

    lastName = null;

    yearOfBirth = null;

    constructor(name, lastName, yearOfBirth) {
      this.name = name;
      this.lastName = lastName;
      this.yearOfBirth = yearOfBirth;
    }

    static isHuman(obj) {
      return obj instanceof Human;
    }
  }

  class School {
    studentsEnrolled = [];

    get enrolledStudents() {
      return this.studentsEnrolled;
    }

    enroll(human) {
      if (!Human.isHuman(human)) throw new Error('Humans only allowed');
      this.studentsEnrolled.push(human);
    }
  }

  class Course {
    #lessonsAttended = null;

    #grades = [];

    #course = null;

    #lessons = null;

    #school = null;

    #gradeConfig = {
      minGrade: 0,
      maxGrade: 100,
    };

    constructor(school, course, numberOfLessons = 25) {
      this.#lessonsAttended = 0;
      this.#lessons = new Array(numberOfLessons);
      this.#course = course;
      this.#school = school;
    }

    set course(human) {
      if (!this.#school.enrolledStudents.includes(human)) throw new Error('To sign up for the course you must enroll to the school first');
      const student = human;
      student.course = this.#course;
      student.lessons = this.#lessons;
      student.grades = this.#grades;
      student.lessonsAttended = this.#lessonsAttended;
    }

    setGrade(student, grade) {
      if (grade < this.#gradeConfig.minGrade || grade > this.#gradeConfig.maxGrade) throw new Error('Grade is below or above the limited bounds');
      if (student.lessons[student.lessonsAttended - 1]) student.grades[student.lessonsAttended - 1] = grade;
    }

    getAveGrade(student) {
      const gradeStats = student.grades.reduce((acc, grade) => {
        acc += grade;
        return acc;
      }, 0);
      return Math.floor(gradeStats / student.grades.length);
    }

    getAveAttendance(student) {
      let present = 0;
      for (let i = 0; i < student.lessonsAttended; i += 1) {
        if (student.lessons[i]) present += 1;
      }
      return (present / student.lessonsAttended).toFixed(1);
    }

    lessonCounter(student, attendance = true) {
      if (student.lessonsAttended === student.lessons.length) throw new Error('No more lessons');
      student.lessons[student.lessonsAttended] = attendance;
      student.lessonsAttended += 1;
    }

    present(student) {
      this.lessonCounter(student, true);
    }

    absent(student) {
      this.lessonCounter(student, false);
    }

    summary(student) {
      if (this.getAveGrade(student) <= 89 && this.getAveAttendance(student) <= 0.89) {
        alert('Редиска!');
      } else if (this.getAveGrade(student) >= 90 && this.getAveAttendance(student) >= 0.9) {
        alert('Молодець!');
      } else if (this.getAveGrade(student) <= 89 || this.getAveAttendance(student) <= 0.89) {
        alert('Добре, але можна краще');
      }
    }
  }

  const alex = new Human('Alex', 'Smith', 2003);

  const university = new School();
  university.enroll(alex);

  const science = new Course(university, 'Computer Science', 2);
  science.course = alex;

  console.log(alex);

  science.present(alex);
  science.setGrade(alex, 100);
  science.present(alex);
  science.setGrade(alex, 100);
  science.summary(alex);

  const leo = new Human('Leo', 'Sokol', 2000);
  const art = new Course(university, 'Art', 2);
  university.enroll(leo);
  art.course = leo;
  console.log(leo);

  art.present(leo);
  art.setGrade(leo, 50);
  art.present(leo);
  art.setGrade(leo, 100);
  art.summary(leo);

  const vlad = new Human('Vlad', 'Sokol', 1999);
  const geo = new Course(university, 'Geographic Science', 2);
  university.enroll(vlad);
  geo.course = vlad;
  console.log(vlad);

  geo.present(vlad);
  geo.setGrade(vlad, 50);
  geo.absent(vlad);
  geo.setGrade(vlad, 100);
  geo.summary(vlad);
}());
