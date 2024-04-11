(function () {
  const Student = function (name, lastName, yearOfBirth, lessonsCount = 25) {
    this.name = name;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.grades = new Array(lessonsCount);
    this.lessonsCount = new Array(lessonsCount);
    this.lesson = 0;
  };

  Student.prototype.gradesConfig = {
    minGrade: 0,
    maxGrade: 100,
  };

  Student.prototype.getFullName = function () {
    return `${this.name} ${this.lastName}`;
  };

  Student.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirth;
  };

  Student.prototype.lessonCounter = function (attendance = true) {
    if (this.lesson === this.lessonsCount.length) throw new Error('No more lessons');
    this.lessonsCount[this.lesson] = attendance;
    this.lesson += 1;
  };

  Student.prototype.present = function () {
    this.lessonCounter(true);
  };

  Student.prototype.absent = function () {
    this.lessonCounter(false);
  };

  Student.prototype.addGrade = function (grade = 100) {
    if (grade < this.gradesConfig.minGrade || grade > this.gradesConfig.maxGrade) throw new Error('Grade is below or above the limited bounds');
    this.grades[this.lesson - 1] = grade;
  };

  Student.prototype.getAveGrade = function () {
    const gradeStats = this.grades.reduce((acc, grade) => {
      acc.gradesSum += grade;
      acc.gradesCount += 1;
      return acc;
    }, {
      gradesSum: 0,
      gradesCount: 0,
    });
    return Math.floor(gradeStats.gradesSum / gradeStats.gradesCount);
  };

  Student.prototype.getAveAttendance = function () {
    let present = 0;
    for (let i = 0; i < this.lesson; i += 1) {
      if (this.lessonsCount[i]) present += 1;
    }
    return (present / this.lesson).toFixed(1);
  };

  Student.prototype.summary = function () {
    if (this.getAveGrade() <= 89 && this.getAveAttendance() <= 0.89) {
      alert('Редиска!');
    } else if (this.getAveGrade() >= 90 && this.getAveAttendance() >= 0.9) {
      alert('Молодець!');
    } else if (this.getAveGrade() <= 89 || this.getAveAttendance() <= 0.89) {
      alert('Добре, але можна краще');
    }
  };

  const student1 = new Student('Vova', 'Kirillov', 2003, 2);
  console.log(student1);
  console.log(student1.getFullName());
  console.log(student1.getAge());

  student1.present();
  student1.addGrade(100);
  student1.present();
  student1.addGrade(100);
  student1.summary();
  console.log(student1.getAveGrade());

  const student2 = new Student('John', 'Smith', 2000, 2);
  console.log(student2);
  console.log(student2.getFullName());
  console.log(student2.getAge());

  student2.present();
  student2.addGrade(0);
  student2.absent();
  student2.addGrade(100);
  student2.summary();
  console.log(student2.getAveGrade());

  const student3 = new Student('Vlad', 'Kirillov', 1980, 2);
  console.log(student3);
  console.log(student3.getFullName());
  console.log(student3.getAge());

  student3.present();
  student3.addGrade(0);
  student3.present();
  student3.addGrade(100);
  student3.summary();
  console.log(student3.getAveGrade());
}());
