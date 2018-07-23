// Write your solution in this file!
let driver={}
function updateDriverWithKeyAndValue(driver,key,value){

return {...driver, [key]:value}

}
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
driver["value"] = "fast"
return
}