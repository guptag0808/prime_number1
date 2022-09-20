

function palindrom(str){
	let bag=""
	for(let i=str.length-1; i>=0; i--){
bag+= str[i]
if(str=bag){
	return true;
}
return false
	}

}

  let ans=palindrom("naman");
  if(ans=true){
	console.log("Palindrome")
  }else{
	console.log("Not a palindrome")
  }

