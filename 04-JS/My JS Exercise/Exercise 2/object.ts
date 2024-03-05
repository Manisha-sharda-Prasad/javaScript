class StudentData {
  //A.properties
  nam: string;
  contri: Number;
  food: string;

  //B.methods
  //B.1. spection method
  // name - "constructor"
  // purpose  = to assign values to Class-properties
  constructor(n: string, c: number, f: string) {
    this.nam = n;
    this.contri = c;
    this.food = f;
  }
  //B.2
  add() {
    return 200;
  }
}

let collectionOfStudent: StudentData[] = [];

let student1 = new StudentData("Manisha", 200, "tikki");
collectionOfStudent.push(student1);
student1.add();
student1.contri;

// collectionOfStudent.push( { contri:300, food:"momos", name:"Lek" } )
collectionOfStudent.push(new StudentData("Lek", 300, "momos"));

collectionOfStudent.push(new StudentData("pooja", 600, "chowmen"));

collectionOfStudent.push(new StudentData("Arush", 400, "paneer"));

console.log(collectionOfStudent);
