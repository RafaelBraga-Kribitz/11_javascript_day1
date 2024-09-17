     //first statement
     let people = ['Greg', 'Mary', 'Devon','James'];
     console.log(people);
     

     // second statement--> remove greg
     people.shift ();
     console.log(people);
     
     // third statement --> add matt in the front
     people.unshift('Matt');
     console.log (people);

     //forth statement --> remove james
     people.pop ();
     console.log(people);
     
     //fifth statement --> add my name at the end
     people.push('Misa');
     console.log(people);
     

     //sixth  statement --> make a copy using slice (not include mary and matt)
     console.log(people.slice(2));
     
     // seventh statement --> use index meth. to find Mary
     console.log(people.indexOf('Mary'));
     
     // eighth  statement --> use index meth. to find Foo(should return -1)
     console.log(people.indexOf('Foo'));

     // ninth statement --> redefine people variable with the initial values
     people.splice(0,4,'Greg', 'Mary', 'Devon','James');
     console.log(people);
     
     // tenth statement --> splice - remove devon -add elizabeth and anna

     people.splice(2,1, 'Elizabeth', 'Anna');
     console.log(people);