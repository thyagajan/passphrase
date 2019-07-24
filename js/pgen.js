$( document ).ready(function() {
	console.log("I m ready");
	var count=0;
	var retryCount;
	var word1, word2, word3, password;
	var passwordCounter;
	var specialChars = ['!','@','#','$','&','*','%','-','_',' '];
	var specialCodes = ['ml','sl','rel_jja','rel_jjb','rel_syn','rel_trg'];
	$('#results').hide();
	
	$('#generate').click(function()   {
		passwordCounter = 5;
		retryCount = 5;
		$('#resultList').empty();
		generatePassPhrase();
    });
	
	function generatePassPhrase(){
		let secretWord = $('#secret-word').val();
		word1 = null; word2= null;
		callMuseAPI(secretWord, specialCodes[generateRandomNumber(0,specialCodes.length-1)]);
		callMuseAPI(secretWord, specialCodes[generateRandomNumber(0,specialCodes.length-1)]);
		let number = generateRandomNumber(100,999);
		word3 = convertToWording(number);
	}
	
	function callMuseAPI(secret,type){
		var randomWord ="" ;
		let url = "https://cors-anywhere.herokuapp.com/https://api.datamuse.com/words?"+type+"="+secret;
		count++;
		$.ajax( {url:url, crossDomain:true, success:function( data ) {
  			if(data.length > 0){
				random = generateRandomNumber(0,data.length-1);
				randomWord = data[random].word;
				if(word1)
					word2 = randomWord;
				else
					word1 = randomWord;
		
			}else{
				console.log("retrying...");
				retryCount--;
				if(retryCount > 0)
					callMuseAPI(secret, specialCodes[generateRandomNumber(0,specialCodes.length-1)]);
			}
 	 		count--;
			if(count == 0){
				CombineWords();
			}
		}});
		return randomWord;
	}
	
	
	function CombineWords(){
		$('#results').show();
		passwordCounter--;
		let splChar1 = specialChars[generateRandomNumber(0,specialChars.length-1)];
		let splChar2 = specialChars[generateRandomNumber(0,specialChars.length-1)];
		if(!word1)
			word1 = 'Credit';	
		if(!word2)
			word2= 'Author';
		
		password = formPassphrase(word1,word2,word3,splChar1,splChar2);
		$('#resultList').append('<li class="list-group-item list-group-item-white text-info">'+password+'</li>');
		console.log(password);
		if(passwordCounter > 0)
			generatePassPhrase();
		
	}
	
	function formPassphrase(word1, word2,number,spChar1, spChar2){
		let ranNum = generateRandomNumber(1,19);
		var result = word1+spChar1+word2+number+spChar2;
		switch(ranNum){
			case 1 :
				result = word1+word2+number+spChar1+spChar2;
				break;
			case 2 :
				result = word1+word2+spChar1+number+spChar2;
				break;
			case 3 :
				result = word1+word2+spChar1+spChar2+number;
				break;
			case 4 :
				result = word1+number+word2+spChar1+spChar2;
				break;
			case 5 :
				result = word1+number+spChar1+word2+spChar2;
				break;
			case 6 :
				result = word1+number+spChar1+spChar2+word2;
				break;
			case 7 :
				result = word1+spChar1+number+spChar2+word2;
				break;
			case 8 :
				result = word1+spChar1+spChar2+word2+number;
				break;
			case 9 :
				result = word1+spChar1+spChar2+number+word2;
				break;
			case 10 :
				result = word1+spChar1+word2+spChar2+number;
				break;
			case 11 :
				result = word1+spChar1+word2+number+spChar2;
				break;
			case 12 :
				result = word1+spChar1+number+spChar2+word2;
				break;
			case 13 :
				result = word1+spChar1+number+word2+spChar2;
				break;
			case 14 :
				result = number+word1+word2+spChar1+spChar2;
				break;
			case 15 :
				result = number+word1+spChar1+word2+spChar2;
				break;
			case 16 :
				result = number+word1+spChar1+spChar2+word2;
				break;
			case 17 :
				result = number+spChar1+word1+spChar2+word2;
				break;
			case 18 :
				result = number+spChar1+word1+word2+spChar2;
				break;
			case 19 :
				result = number+spChar1+spChar2+word1+word2;
				break;
		}
		return result;
	}
	
	
	function generateRandomNumber(start,end){
		const random = Math.floor((Math.random() * (end-start+1)) + start);
		return random;
	}
	
	function convertToWording(num){
		const inputNumber = num.toString();
		const random = generateRandomNumber(1,3);
		let result="";
		for(var i=0; i <inputNumber.length; i++){
			if(i== random-1)
				numInWords = inputNumber.charAt(i);
			else
				numInWords = numberToWord(inputNumber.charAt(i));
			result += numInWords;
		}
		return result;
	}
	
	function numberToWord(num){
		var word = "None";
		switch(num){
			case "0" :
				word = "Zero";
				break;
			case "1" :
				word = "One";
				break;
			case "2" :
				word = "Two";
				break;
			case "3" :
				word = "Three";
				break;
			case "4" :
				word = "Four";
				break;
			case "5" :
				word = "Five";
				break;
			case "6" :
				word = "Six";
				break;
			case "7" :
				word = "Seven";
				break;
			case "8" :
				word = "Eight";
				break;
			case "9" :
				word = "Nine";
				break;
			
		}
		return word;	
	}
});