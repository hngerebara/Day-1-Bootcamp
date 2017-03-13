exports.dataTypes = function (val) {
			
    if (typeof (val) === 'string'){
    	return (val.length);
    }

    else if((val === null) || (val === undefined)){
    	return "no value";
	}
	    	
	if (typeof(val) ==='boolean'){
		return (val);
	}
	    	
	if (val instanceof Array && (val.length) >= 2){
		return (val[2]);
	}
	else if (val instanceof Array && (val.length) <= 1){
		return (undefined);
	}

 	if (val === 100)
		return ("equal to 100");
    	
    else if (val < 100)
		return ("less than 100");
    
    else if (val > 100)
		return ("more than 100");
	
	if (typeof val == 'function')
		return val(true);

  
}

	