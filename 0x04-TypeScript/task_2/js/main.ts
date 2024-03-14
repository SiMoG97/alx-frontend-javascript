// Task-5 -------
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

const createEmployee = (
  salary: number | string
): DirectorInterface | TeacherInterface => {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
};

console.log(createEmployee(200));
Teacher;
console.log(createEmployee(1000));
Director;
console.log(createEmployee("$500"));
Director;

// Task-6 -------

const isDirector = (employee: Director | Teacher): boolean => {
  return employee instanceof Director;
};

const executeWork = (employee: Director | Teacher): void => {
  if (employee instanceof Director) {
    console.log(employee.workDirectorTasks());
  }
  if (employee instanceof Teacher) {
    console.log(employee.workTeacherTasks());
  }
};
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

// task-7 -----
type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects) => {
  if (todayClass === "History") {
    return "Teaching History";
  }
  if (todayClass === "Math") {
    return "Teaching Math";
  }
};

console.log(teachClass("Math"));
console.log(teachClass("History"));
