function moreDate(){
	this.date = new Date();
	this.year = this.date.getFullYear();
	this.month = this.date.getMonth();
	this.arrMonth = ['Январь', 'Февраль','Март','Апрель','Май','Июнь', 'Июль', 'Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];

	function getCountDaysInMonth(a, b){
		return 33 - new Date(a, b, 33).getDate();
	}

	//Функция заполняет начало массива Календаря числами из предыдущего месяца
	//Возвращает: массив
	function getArrDatesLastMonth(a, b){
		var i, arr = [],
			myYear = a, myMonth = b,
			endMonday = new Date(myYear, myMonth, 1).getDay(), 
			allDays = getCountDaysInMonth(myYear, (myMonth - 1));
			//костыль для воскресенья
			if (endMonday == 0){endMonday += 6} else {endMonday-= 1};
			for (i = 1, k = endMonday; i <= endMonday; i++, k--) {
				arr.unshift({id:k, number:allDays, status:"fol"});
				allDays--;
			}
		return arr; 
	}

	this.getCollectedArrDates = function(a, b){
		var i, j = 1,
		myYear = a, myMonth = b,
		allDays = getCountDaysInMonth(myYear, myMonth),
		arr = getArrDatesLastMonth(myYear, myMonth),
		count = 42 - arr.length;
		for (i = 1, k = arr.length+1; i <= count; i++, k++){
			if(i <= allDays){
				arr.push({id:k, number:i, status:"now", thisMonth:true});
			} else {
				arr.push({id:k, number:j, status:"pre"});
				j++;
			}
		}
		return arr;
	}
	
}

var cal = new moreDate,
	Myyear = cal.year,
	Mymonth = cal.month;

//Vue
var calendar = new Vue ({
	el: "#calendar",
	data: {
		year: Myyear,
		month: Mymonth,
		nameMonth: cal.arrMonth[Mymonth],
		days: cal.getCollectedArrDates(Myyear, Mymonth),
		activeDate: undefined,
	},
	methods: {
		followingMonth: function(){
			Mymonth--;
			a = new Date(Myyear, Mymonth);
			this.year = a.getFullYear();
			this.nameMonth = cal.arrMonth[a.getMonth()];
			this.days = cal.getCollectedArrDates(Myyear, Mymonth);
			//console.log(cal.getCollectedArrDates(cal.year, cal.month));
		},
		previousMonth: function(){
			Mymonth++;
			a = new Date(Myyear, Mymonth);
			this.year = a.getFullYear();
			this.nameMonth = cal.arrMonth[a.getMonth()];
			this.days = cal.getCollectedArrDates(Myyear, Mymonth);
			//console.log(cal.getCollectedArrDates(cal.year, cal.month + 1));
		},
		addClass: function(){
			console.log(this.$ref);
		}
	}
});

var content = new Vue ({
	el:"#content",
	data:{
		todoItem:'',
		todos:[
			{id:1, name:"Разбудить марину"},
			{id:2, name:"Постелить диван"}
		]
	},
	methods:{
		addTodoItem: function(a){
			if(trim(a)){
				var td = this.todos;
				td.push({id:td.length+1, name:a})
			}
		}
	}
})

//test
var monthafaf = 26;
var test = new Date(2018, monthafaf, 1);
console.log(cal.getCollectedArrDates(2018, 2));




