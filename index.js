function updateDriverWithKeyAndValue(obj,key,value)  {
return Object.assign({} , obj, {[key]: value });
}
const driver = {nationality : "indian"};

const newDriver = updateDriverWithKeyAndValue(driver,'nationality','colombian');




function destructivelyUpdateDriverWithKeyAndValue(obj,key,value) {
  return Object.assign( obj, {[key]: value });
}

