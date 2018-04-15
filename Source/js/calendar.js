var Calendar = {
	now: function(){
		var arg = [].slice.call(arguments);
		return !arg != 0 ? new Date(arg) : new Date();
	},

	nowDate: function(){
		var arg = [].slice.call(arguments);
		return arg != 0 ? this.now().getDate(arg) : this.now().getDate();
	},

	nowMonth: function(){
		var arg = [].slice.call(arguments);
		return arg != 0 ? this.now().getMonth(arg) : this.now().getMonth();
	},

	nowYear: function(){
		var arg = [].slice.call(arguments);
		return arg != 0 ? this.now().getFullYear(arg) : this.now().getFullYear();
	},

	nowDay: function(){
		var arg = [].slice.call(arguments);
		return arg != 0 ? this.now().getDay(arg) : this.now().getDay();
	},

	//Функция высчитывает порядковый номер первого числа месяца
	//Возвращает: число
	getFirstNumber: function(a, b){
		var year = a || this.nowYear(),
			month = b || this.nowMonth();
		return this.nowDay(year, month, 1);
	},

	//Функция подсчитывает количество дней в месяце
	//Возвращает: число
	getCountDaysInMonth: function(a ,b){
		if (a != undefined) {
			var year = a;
		} else {
			var year = this.nowYear();
		}

		if (b != undefined) {
			var month = b;
		} else {
			var month = this.nowMonth();
		}
		
		return 33 - new Date(year, month, 33).getDate();
	},
	//Функция заполняет начало массива Календаря числами из предыдущего месяца
	//Пояснение: если функция без аргументов, берется предыдущий месяц от текущего, иначе подставляются аргументы
	//Возвращает: массив
	getArrDatesLastMonth: function(a, b){
		var i,
			arr = [],
			year = a || this.nowYear(),
			month = b || this.nowMonth() - 1,
			endMonday = this.getFirstNumber(a, b) - 1, 
			allDays = this.getCountDaysInMonth(year, month);
			for (i = 0; i <= endMonday; i++) {
				arr.push(allDays);
				allDays--;
			}
		return arr.reverse(); 
	},

	getCollectedArrDates: function(a, b){
		var i, j = 1;
			if (b == 0){
				a -= 1;
			}
			var allDays = this.getCountDaysInMonth(a, b),
			arr = this.getArrDatesLastMonth(a, b - 1),
			count = 42 - arr.length;
			for (i = 1; i <= count; i++){
				if(i <= allDays){
					arr.push(i);
				} else {
					arr.push(j);
					j++;
				}
			}
		return arr;
	},

	test: function(a,b){
		return a;
	}
}
var dayInMonth = Calendar.getCollectedArrDates();
console.log(Calendar.getCollectedArrDates(2018, 0));
//console.log(33 - new Date(2018, 0, 33).getDate());

//Vue
var calendar = new Vue ({
	el: "#dates",
	data: {
		days: dayInMonth,
	}
})

