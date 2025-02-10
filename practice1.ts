//クラス図 演習1
class Employee {
  private id: number;
  private name: string;
  private salary: number;

  work() {
    console.log(`働きます`);
  }

  protected getSalary(): number {
    return this.salary;
  }

  protected setSalary(salary: number) {
    this.salary = salary;
  }
}

//クラス図 演習2
interface Shape {
  calcArea(): number;
}

class Rectangle implements Shape {
  private width: number;
  private height: number;

  calcArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  private radius: number;
  calcArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

class Client {
  private shape: Shape;
}
