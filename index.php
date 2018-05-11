<!DOCTYPE html>
<html lang="en">
<head>
	<!--Meta-->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<title>Todo</title>
	<link rel="stylesheet" href="/Source/css/style.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
</head>
<body>
	<div class="main-wrapper">
		<header></header>
		<div class="main-container clearfix">
			<div class="main-left-sidebar clearfix">
				<div class="calendar" id="calendar">
					<div class="panel clearfix">
						<div class="buttons">
							<button v-on:click="followingMonth"><</button>
							<button v-on:click="previousMonth">></button>
						</div>
						<div class="date">
							<div class="year">{{ year }}</div>
							<div class="month">{{ nameMonth }}</div>
						</div>
					</div>
					<div id="dates">
						<ul class="clearfix">
							<li class="days name_day">Пн</li>
							<li class="days name_day">Вт</li>
							<li class="days name_day">Ср</li>
							<li class="days name_day">Чт</li>
							<li class="days name_day">Пт</li>
							<li class="days name_day">Сб</li>
							<li class="days name_day">Вс</li>
							<li class="days" v-for="day in days" v-bind:class="{'now_month': day.thisMonth, 'active':activeDate === day.id}" v-on:mousedown="activeDate = day.id">{{ day.number }}</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="main-content">1</div>
		</div>
	</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
<script src="/Source/js/calendar.js"></script>
</body>
</html>