function primeNumber(){

	let num= 13; 
	for(let i=1; i<=num; i++){
       if(num%i==0){
		count++
	   }
	}
	if(count==2){
		return true;
	}
	return false
}