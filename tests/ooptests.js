'use strict'

var student = require('../app/oop.js').student;
var scores =require('../app/oop.js').scores;
var subject =require('../app/oop.js').subject;


//var student1 = new student(2,"Blessing", "james", "male" ,08047898);
var scores1 = new scores("Hope", "Ngerebara",0, "first", 70,80, 60, 85);  

describe("Student Class: Create a student", function() {

    it("The student should be a type of `object`, and an instance of the `student` class", function() {
    const student1 = new student(2,"Blessing", "james", "male" ,08047898);

      expect(typeof student1).toEqual(typeof {});
      expect(student1 instanceof student).toBeTruthy();
    }); 

    });
describe("scores : Inheritance ", function() {

    it("The scores should be a type of `object`, and an instance of both `student` and `subject'", function() {
      const scores1 = new scores("Hope", "Ngerebara",0, "first", 70,80, 60, 85);  
      expect(typeof scores1).toEqual(typeof {});
      expect(scores instanceof student).toBeTruthy();
      expect(scores instanceof subject).toBeTruthy();
    });
  });
describe("invalid input ", function() {
  var scores1 = new scores("Hope", "Ngerebara",10, "first", 70,80, 60, 85);  

    it('check if input is valid',function(){
      expect(scores1.checks()).toBe("All good");
    });

    it('check if student Id is valid',function(){
    	var scores1 = new scores("Hope", "Ngerebara",0, "first", 70,80, 60, 85);	
     expect(scores1.checks().toBe("Invalid student id"));
    });
     it('check if student Last name is more than 12 is valid',function(){
      var scores1 = new scores("Hope", "Ngerdddebara",10, "first", 70,80, 60, 85);  
      expect(scores1.checks().toBe("Invalid lastname length"));
     });
     it('check if maths score is greater than 100',function(){
      var scores1 = new scores("Hope", "Ngerebara",10, "first", 120,80, 60, 85);  
      expect(scores1.checks()).toBe("Math score cannot be below -100 and greater than 100");
     });

  });
