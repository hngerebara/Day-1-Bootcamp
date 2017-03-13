function student(stuid, fname,lname, gender, phone){ //class

this.stuname = [fname, lname];
this.stuid = stuid;
this.gender = gender;
this.phone = phone;	
}
function subject(semester){
	this.semester = semester;
}
//inheritance
function scores(fname,lname, stuid, semester,maths,english, physics, chem){
	student.call(this, stuid, fname,lname)
	subject.call(this, semester)
	this.maths = maths;
	this.english = english;
	this.physics = physics;
	this.chem = chem;
}
//methods
scores.prototype.cal_scores = function() {
	var total = this.maths + this.english + this.physics + this.chem;
}
//override method 
scores.prototype.cal_scores = function() {
	var total = this.maths + this.english + this.physics + this.chem;
  var average= total / 4;
    if (average < 50)
      return "Welcome" + this.stuname + "With Student id: " + thsis.stuid + "Your Average is " + average + " and you have Failed";
    else
     return "Welcome" + this.stuname + "With Student id: " + this.stuid + "Your Average is " + average + " and you have Passed";
}

//constructor 
var scoreobj = new scores("Hope", "Ngerebara", 70,80, 60, 85);
scoreobj.cal_scores();