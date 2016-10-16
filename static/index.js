(function(){
	morsecode=new Array;
	morsekey=0;
	morsecode[morsekey++]=["A",".-"];
	morsecode[morsekey++]=["B","-..."];
	morsecode[morsekey++]=["C","-.-."];
	morsecode[morsekey++]=["D","-.."];
	morsecode[morsekey++]=["E","."];
	morsecode[morsekey++]=["F","..-."];
	morsecode[morsekey++]=["G","--."];
	morsecode[morsekey++]=["H","...."];
	morsecode[morsekey++]=["I",".."];
	morsecode[morsekey++]=["J",".---"];
	morsecode[morsekey++]=["K","-.-"];
	morsecode[morsekey++]=["L",".-.."];
	morsecode[morsekey++]=["M","--"];
	morsecode[morsekey++]=["N","-."];
	morsecode[morsekey++]=["O","---"];
	morsecode[morsekey++]=["P",".--."];
	morsecode[morsekey++]=["Q","--.-"];
	morsecode[morsekey++]=["R",".-."];
	morsecode[morsekey++]=["S","..."];
	morsecode[morsekey++]=["T","-"];
	morsecode[morsekey++]=["U","..-"];
	morsecode[morsekey++]=["V","...-"];
	morsecode[morsekey++]=["W",".--"];
	morsecode[morsekey++]=["X","-..-"];
	morsecode[morsekey++]=["Y","-.--"];
	morsecode[morsekey++]=["Z","--.."];
	morsecode[morsekey++]=["1",".----"];
	morsecode[morsekey++]=["2","..---"];
	morsecode[morsekey++]=["3","...--"];
	morsecode[morsekey++]=["4","....-"];
	morsecode[morsekey++]=["5","....."];
	morsecode[morsekey++]=["6","-...."];
	morsecode[morsekey++]=["7","--..."];
	morsecode[morsekey++]=["8","---.."];
	morsecode[morsekey++]=["9","----."];
	morsecode[morsekey++]=["0","-----"];
	morsecode[morsekey++]=["?","..--.."];
	morsecode[morsekey++]=["/","-..-."];
	morsecode[morsekey++]=["[","-.-.."];
	morsecode[morsekey++]=["]",".---."];
	morsecode[morsekey++]=["-","-....-"];
	morsecode[morsekey++]=[".",".-.-.-"];
	morsecode[morsekey++]=["@","--.-."];
	morsecode[morsekey++]=["*","----"];
	morsecode[morsekey++]=["$","...-."];
	morsecode[morsekey++]=["#","..--"];

	function morse2word(morse){
		if (morse.Right(1)==" ") morse=morse.Left(morse.length-1);
		var morsearr= morse.split(" ");
		var wordarr=new Array;
		var key=0;
		for (var i=0;i<morsearr.length;i++){
			for (var j=0;j<morsecode.length;j++){
				if (morsearr[i]==morsecode[j][1]){
					wordarr[i]=morsecode[j][0];
					key++;
				}
			}
		}
		if (key!=morsearr.length) return "对不起,请在两个连续莫斯密码中间加上空格."
		var word=""
		for (var i=0;i<wordarr.length;i++){
			word+=wordarr[i]+"";
		}
		return word;
	}

	function word2morse(word){
		var wordarr=new Array;
		var morsearr=new Array;
		var spacelen= word.split(" ");
		if (spacelen.length>1) return "对不起,请不要在英文字母中间加上空格.你可以试用减号来代表中间的间隔."
		var oldlen=word.length;
		for (var i=0;i<oldlen;i++){
			wordarr[i]=word.Left(1).toUpperCase();
			word=word.Right(word.length-1);
		}
		for (var i=0;i<wordarr.length;i++){
			for (var j=0;j<morsecode.length;j++){
				if (wordarr[i]==morsecode[j][0]){
					morsearr[i]=morsecode[j][1];
				}
			}
		}
		var morse=""
		for (var i=0;i<morsearr.length;i++){
			morse+=morsearr[i]+" ";
		}
		return morse;
	}

	String.prototype.Left = function(len){
		if(isNaN(len)||len==null){
			len = this.length;
		}else{
			if(parseInt(len)<0||parseInt(len)>this.length){
				len = this.length;
			}
		}	
		return this.substr(0,len);
	}

	String.prototype.Right = function(len){
		if(isNaN(len)||len==null){
			len = this.length;
		}else{
			if(parseInt(len)<0||parseInt(len)>this.length){
				len = this.length;
			}
		}	
		return this.substring(this.length-len,this.length);
	}

	var $contents = document.getElementById("contents");
	var $result = document.getElementById("result");
	DOMUtil.getElementsByClassName('input-button')[0].onclick = function(){
		var value = $contents.value.trim();
		$result.value = word2morse(value);
	};
	DOMUtil.getElementsByClassName('input-button')[1].onclick = function(){
		var value = $result.value.trim();
		$contents.value = morse2word(value);
	};
})();