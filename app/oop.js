function student(stuid, fname,lname, gender, phone){ //class

this.stuname = [fname, lname];
this.stuid = stuid;
this.gender = gender;
this.phone = phone;	
}

function subject(semester, teacher){
	this.semester = semester;
	this.teacher = teacher;
}
//inheritance
function scores(fname,lname, stuid, semester,maths,english, physics, chem){
	student.call(this, stuid, fname,lname)
	subject.call(this, semester)
	this.maths = maths;
	this.english = english;
	this.physics = physics;
	this.chem = chem;


scores.prototype.checks = function()
{

	if (stuid <= 0){
	return "Invalid student id"
  }
  if ((fname.length) > 10 || (fname.length < 0)){
	  return "Invalid firstname length"
  }
else if ((lname.length) > 10 || (lname.length < 0)){
	return "Invalid lastname length"
}
if ((maths < -100) || (maths > 100)){
	return "Math score cannot be below -100 and greater than 100"
}
else if ((english < -100) || (english > 100)){
	return "English score cannot be below -100 and greater than 100"
}
else if ((physics < 50) || (physics > 100)){
	return "Physics score cannot be below 50 and greater than 100"
}
else if ((chem < -100) || (chem > 100)){
	return "Chem score cannot be below -100 and greater than 100"
}
else{
  return "All good"
}
}
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
      return "Welcome " + this.stuname + " with Student id: " + thsis.stuid + " Your Average is " + average + " and you have Failed";
    else
     return "Welcome " + this.stuname + " with Student id: " + this.stuid + " Your Average is " + average + " and you have Passed";
    
}
module.exports={
	student:student,
	scores:scores,
	subject:subject
}