(function () {
  class Human {
    name = null;

    lastName = null;

    yearOfBirth = null;

    constructor(name, lastName, yearOfBirth) {
      this.name = name;
      this.lastName = lastName;
      this.yearOfBirth = yearOfBirth;
      this.lessons = [];
      this.grades = [];
      this.lessonsAttended = 0;
      this.course = null;
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
      if (!Human.isHuman(human)) throw new Error('Only humans are allowed to enroll');
      this.studentsEnrolled.push(human);
    }
  }

  class Course {
    #lessonsAttended = null;

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
      human.course = this.#course;
    }

    setGrade(student, grade) {
      if (grade < this.#gradeConfig.minGrade || grade > this.#gradeConfig.maxGrade) throw new Error('Grade is below or above the limited bounds');
      if (!student.course || student.course !== this.#course) throw new Error('Student is not enrolled in this course');
      student.grades.push(grade);
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
      if (student.lessonsAttended === this.#lessons.length) throw new Error('No more lessons');
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
      const aveGrade = this.getAveGrade(student);
      const aveAttendance = this.getAveAttendance(student);

      if (aveGrade <= 89 && aveAttendance <= 0.89) {
        alert('Редиска!');
      } else if (aveGrade >= 90 && aveAttendance >= 0.9) {
        alert('Молодець!');
      } else {
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
  university.enroll(leo);
  science.course = leo;
  console.log(leo);

  science.present(leo);
  science.setGrade(leo, 50);
  science.present(leo);
  science.setGrade(leo, 100);
  science.summary(leo);

  const vlad = new Human('Vlad', 'Sokol', 1999);
  university.enroll(vlad);
  science.course = vlad;
  console.log(vlad);

  science.present(vlad);
  science.setGrade(vlad, 50);
  science.absent(vlad);
  science.setGrade(vlad, 100);
  science.summary(vlad);
}());
