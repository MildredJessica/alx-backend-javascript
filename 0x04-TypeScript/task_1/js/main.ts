// Build a Teacher interface
interface Teacher {
  private readonly firstName: string;
  private readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Add the possibility to add any attribute to the Object

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// An interface for the function named printTeacherFunction
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function printTeacher
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0). ${lastName}`;
};

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}  

// Claas StudentClass
class StudentClass implements StudentInterface {
  private readonly firstName: string;
  private readonly lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

   workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }

}
