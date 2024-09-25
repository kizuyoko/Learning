// Import in TS starts with 3 slashes (///) and XML-tag reference, put the code in namespace.


/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />
namespace App {
  new ProjectInput();
  new ProjectList('active'); 
  new ProjectList('finished'); 
}

