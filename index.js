// Write your solution in this file!
let driver={fiola}
function updateDriverWithKeyAndValue(driver,key,value){

return {...driver, [key]:value}

}
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
driver[key] = value
return driver
}
function deleteFromDriverByKey(driver,key){
  delete driver[key]
  return driver
} 
