export default function arrayAllSucceeded(array) {
  var success = true;
  array.forEach(function(record){
    if(record.state == 'rejected') {
      success = false;
    }
  });
  return success;
}
