export {};

class Patient {
  constructor(public id: number, public name: string) {}
}

interface IIterator {
  hasNext(): boolean;
  next();
}

interface Aggregate {
  getIterator(): IIterator;
}

class WaitingRoom implements Aggregate {
  private patients: Patient[] = [];

  gwtPatients(): Patient[] {
    return this.patients;
  }

  getCount(): number {
    return this.patients.length;
  }

  checkIn(patient: Patient) {
    this.patients.push(patient);
  }

  getIterator(): IIterator {
    return new WaitingRoomIterator(this);
  }
}

class WaitingRoomIterator implements IIterator {
  private position: number = 0;

  constructor(private aggregate: WaitingRoom) {}

  hasNext(): boolean {
    return this.position < this.aggregate.getCount();
  }

  next() {
    if (!this.hasNext()) {
      console.log("存在しません");
      return;
    }

    const patient = this.aggregate.gwtPatients()[this.position];
    this.position++;
    return patient;
  }
}
