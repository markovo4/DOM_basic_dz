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

    get age() {
      const now = new Date();
      return now.getFullYear() - this.yearOfBirth;
    }

    static isHuman(obj) {
      return obj instanceof Human;
    }
  }

  class School {
    #studentsEnrolled = [];

    course = null;

    constructor(course) {
      this.course = course;
    }

    set enroll(student) {
      if (!Human.isHuman(student)) throw new Error('Humans only allowed');
      this.#studentsEnrolled.push(student);
    }
  }

  class Course {
    #lessonsAttended = [];

    #grades = [];

    #students = [];
  }

  const alex = new Human('Alex', 'Smith', 2003);
  console.log(alex.age);

  const university = new School('Science');
  university.enroll = alex;
  console.log(university);
}());
