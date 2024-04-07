(function () {
  const Студент = function (name, lastName, yearOfBirth, grades, attendance) {
    this.name = name;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.grades = grades;
    this.attendance = attendance;
    this.iterator = this.getAttendance();
  };

  const getAveGrade = function (obj) {
    const numberOfGrades = obj.grades.length;
    const sumOfGrades = obj.grades.reduce((accumulator, grade) => accumulator + grade, 0);
    const result = Math.round(sumOfGrades / numberOfGrades);
    return result;
  };

  const getAveAttend = function (obj) {
    const arrLen = obj.attendance.length;
    let counter = 0;
    obj.attendance.forEach((item) => {
      if (item) {
        counter += 1;
      }
    });
    const result = counter / arrLen;
    return result;
  };

  Студент.prototype.getAttendance = function* () {
    let index = 0;
    while (index < this.attendance.length) {
      yield index++;
    }
  };

  Студент.prototype.getAge = function () {
    const age = 2024 - this.yearOfBirth;
    console.log(`${this.name} is ${age} years old.`);
  };

  Студент.prototype.getMeanGrade = function () {
    const result = getAveGrade(this);
    console.log(`${this.name} average grade is ${result}`);
  };

  Студент.prototype.present = function () {
    const nextAttendance = this.iterator.next();

    if (!nextAttendance.done) {
      const index = nextAttendance.value;
      this.attendance[index] = true;
    } else {
      console.log('Attendance list is full.');
    }
  };

  Студент.prototype.absent = function () {
    const nextAttendance = this.iterator.next();

    if (!nextAttendance.done) {
      const index = nextAttendance.value;
      this.attendance[index] = false;
    } else {
      console.log('Attendance list is full.');
    }
  };

  Студент.prototype.summary = function () {
    const grade = getAveGrade(this);
    const attendance = getAveAttend(this);
    if (grade >= 90 && attendance >= 0.9) {
      alert('Молодец!');
    } else if (grade >= 90 || attendance >= 0.9) {
      alert('Хорошо, но можно лучше');
    } else if (grade < 90 && attendance < 0.9) {
      alert('Редиска!');
    }
  };

  const student1 = new Студент('Vova', 'Kirillov', 2003, [90, 90, 100, 98, 89], new Array(25));
  console.log(student1);
  student1.getAge();
  student1.getMeanGrade();
  for (let i = 0; i < 24; i += 1) {
    student1.present();
  }
  student1.absent();
  student1.summary();

  const student2 = new Студент('Vlad', 'Smith', 1998, [70, 75, 80, 85, 89], new Array(25));
  console.log(student2);
  student2.getAge();
  student2.getMeanGrade();
  for (let i = 0; i < 24; i += 1) {
    student2.present();
  }
  student2.absent();
  student2.summary();

  const student3 = new Студент('John', 'Kirillov', 1990, [70, 70, 68, 89, 81], new Array(25));
  console.log(student3);
  student3.getAge();
  student3.getMeanGrade();
  for (let i = 0; i < 24; i += 1) {
    student3.absent();
  }
  student3.present();
  student3.summary();
}());
