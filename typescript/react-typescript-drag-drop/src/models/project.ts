namespace App {
  // Project Type - Since it is absolutely only Active or Finished, enum instead of type makes more sense.
  export enum ProjectStatus { Active, Finished }

   export class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatus,
    ) {}
  }
}


