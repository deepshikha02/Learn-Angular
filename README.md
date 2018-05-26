# Learn-Angular
Learning Angular from Udemy

Angular 6 depends on Rxjs 6. 

Framework, CLI and Material are 6.0.0. in sync, 

Code : 
Animations : 
1. Import from @angular/animations

2. removes the support for template tag and instead uses <ng-template>

3. Registering providers : Before : To register a service, we would import and add it to the providers array. 
Now : This can be done with providedIn property. 
Services provided this way are exposed to the entire module and do not need to be imported for any specific component. 

4. ngModelChange : previously ngModelChange was emitted before its underlying control was updated. 

ANGULAR CLI : 

ngUpdate : analyzes package.json to recommend updates to the application. 
3rd parties can provide update scripts based on schematics. 

ngAdd : Add new capabilities to your application
ng add @angular/material. So things like angular/material, progress webapps, service workers and angular elements is easier. 

CLI + MATERIAL STARTER TEMPLATES : 

material sidenav : ng generate @angular/material.materialNav-nav-name=my nav. generates a starter temlate which is responsive.

data table : ng generate @angular/material:material-table --name=my-table

CLI6 has support for workspaces containing multiple projects. They can use angular.json instead of angular-cli.json

ANGULAR ELEMENTS : 
ability to use angular components in other environments
takes the angular component in custom elements

IVY : 
Next gen rendering engine. 
Increase the speed and decrease the app size. : for future


https://www.udemy.com/angular-mastering-the-basics/learn/v4/t/lecture/10462818?start=0
