let counter=0;

function rendar() {
  document.getElementById("counter").innerHTML = counter;
  
}
function increment() {
  counter++;
  console.log(counter)
  rendar();
 }

 document.getElementById("increment").addEventListener("click", increment);
function decrement() {
  counter--;
   console.log(counter)
   rendar();
}
rendar();
document.getElementById("decrement").addEventListener("click", decrement);