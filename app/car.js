function Vehicle(vehicletype){
  if(typeof(vehicletype) == typeof("")){
      this.vehicletype = vehicletype;
  }
}
//inheritaning from super class vehicle
function Car(vehicletype,carname,carmodel,cartype){ //
Vehicle.call(this, vehicletype)
if(typeof(vehicletype) === Car){
  if(typeof(carname) !== 'string'){
    this.carname = "General";
  }
  else{
    this.carname = carname;
  }
  if(typeof(carmodel) !== 'string'){
    this.carmodel = "GM";
  }
  else{
    this.carmodel = carmodel;
  }
  
  this.carspeed = "0 km/h";
    this.drive = function(val){
      this.gear = val;
      if(this.carname === "Porshe"){
        this.carspeed = "250 km/h";
      }
        
      if(this.carname === "MAN"){
        this.carspeed ="77 km/h";
      }
        return this; 
    }
      
  this.cartype = cartype;
    if(this.carname === "Porshe" || this.carname === "Koenigsegg"){
      this.numOfDoors = 2;
    }
    else{
      this.numOfDoors = 4;
    }

    if(this.cartype === "trailer"){
      this.numOfWheels = 8;
      this.isSaloon = false;
    }
    else{
      this.numOfWheels = 4;
      this.isSaloon = true;
      }

}    
}


  module.exports={
  Vehicle:Vehicle,
  Car:Car 
  }