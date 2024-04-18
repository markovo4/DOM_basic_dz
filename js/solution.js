(function () {
  class Student {
    #gradesConfig = {
      minGrade: 0,
      maxGrade: 100,
    };

    #grades = new Array(this.lessonsCount);

    constructor(name, lastName, yearOfBirth, lessonsCount = 25) {
      this.name = name;
      this.lastName = lastName;
      this.yearOfBirth = yearOfBirth;
      this.lessonsCount = new Array(lessonsCount);
    }

    _lesson = 0;

    get lesson() {
      return this._lesson;
    }

    set lesson(number) {
      this._lesson = number;
    }

    get grades() {
      return this.#grades;
    }

    get gradesConfig() {
      return this.#gradesConfig;
    }

    get fullName() {
      return `${this.name} ${this.lastName}`;
    }

    get age() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.yearOfBirth;
    }

    set grade(grade) {
      if (grade < this.gradesConfig.minGrade || grade > this.gradesConfig.maxGrade) throw new Error('Grade is below or above the limited bounds');
      this.#grades[this.lesson - 1] = grade;
    }

    get aveGrade() {
      const gradeStats = this.grades.reduce((acc, grade) => {
        acc.gradesSum += grade;
        acc.gradesCount += 1;
        return acc;
      }, {
        gradesSum: 0,
        gradesCount: 0,
      });
      return Math.floor(gradeStats.gradesSum / gradeStats.gradesCount);
    }

    get aveAttendance() {
      let present = 0;
      for (let i = 0; i < this.lesson; i += 1) {
        if (this.lessonsCount[i]) present += 1;
      }
      return (present / this.lesson).toFixed(1);
    }

    lessonCounter(attendance = true) {
      if (this.lesson === this.lessonsCount.length) throw new Error('No more lessons');
      this.lessonsCount[this.lesson] = attendance;
      this.lesson += 1;
    }

    present() {
      this.lessonCounter(true);
    }

    absent() {
      this.lessonCounter(false);
    }

    summary() {
      if (this.aveGrade <= 89 && this.aveAttendance <= 0.89) {
        alert('Редиска!');
      } else if (this.aveGrade >= 90 && this.aveAttendance >= 0.9) {
        alert('Молодець!');
      } else if (this.aveGrade <= 89 || this.aveAttendance <= 0.89) {
        alert('Добре, але можна краще');
      }
    }
  }

  const student1 = new Student('Vova', 'Kirillov', 2003, 2);
  console.log(student1);
  console.log(student1.fullName);
  console.log(student1.age);

  student1.present();
  student1.grade = 100;
  student1.present();
  student1.grade = 100;
  student1.summary();
  console.log(student1.aveGrade);

  const student2 = new Student('John', 'Smith', 2000, 2);
  console.log(student2);
  console.log(student2.fullName);
  console.log(student2.age);

  student2.present();
  student2.grade = 0;
  student2.absent();
  student2.grade = 100;
  student2.summary();
  console.log(student2.aveGrade);

  const student3 = new Student('Vlad', 'Kirillov', 1980, 2);
  console.log(student3);
  console.log(student3.fullName);
  console.log(student3.age);

  student3.present();
  student3.grade = 0;
  student3.present();
  student3.grade = 100;
  student3.summary();
  console.log(student3.aveGrade);
}());
