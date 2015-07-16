# PR1_Zholobova_810
<script>
	function getResult(n) {
		var units = ["один", "два", "три", "четыре", "пять", 
				"шесть", "семь", "восемь", "девять"];
		var tens = ["десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
		var hundreds = ["сто","двести","триста","четыреста","пятьсот","шестьсот","семьсот", "восемьсот","девятьсот"]; 
		var sten = ["одиннадцать","двенадцать","тринадцать","четырнадцать","пятнадцать", "шестнадцать","семнадцать","восемнадцать","девятнадцать"]; 
		var result = "";
		var digits = [n % 10, Math.floor((n / 10) % 10), Math.floor(n / 100)];
		if (digits[2] > 0) 
			result += hundreds[digits[2] - 1] + " ";

		if (digits[1] > 0) {
			if ((digits[1] == 1) && (digits[0] != 0)) {
				result += sten[digits[0] - 1] + " ";
				return result;
			} else {
				result += tens[digits[1] - 1] + " ";
			}
		}

		if (digits[0] > 0) {
			result += units[digits[0] - 1];
		}
		return result;
	}

	function run() {
		var n = document.app.a.value;
		var s = "";
		if (n > 1000 || n < 0) { alert("Неправильные входные данные"); return; }
		if(n == 1000){
			s = "тысяча";
		} else {
			s = getResult(n);
		}
		var f = document.getElementById('result');
		f.innerHTML = s;
	}
</script>
