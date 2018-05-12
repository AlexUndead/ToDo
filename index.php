<!DOCTYPE html>
<html lang="en">
<head>
	<!--Meta-->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<title>Todo</title>
	<link rel="stylesheet" href="/Source/css/style.css">
	<!--Materialize Css-->
	<link rel="stylesheet" href="/Source/css/materialize.min.css">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
	<div class="main-wrapper">
		<header></header>
		<div class="main-container clearfix">
			<div class="main-left-sidebar clearfix">
				<div class="calendar" id="calendar">
					<div class="panel clearfix">
						<div class="buttons">
							<i class="material-icons" v-on:click="followingMonth">chevron_left</i>
							<i class="material-icons" v-on:click="previousMonth">chevron_right</i>
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
							<li class="days" v-for="day in days" v-bind:class="{'now_month': day.thisMonth}">{{ day.number }}</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="main_content" id="content">
				<div class="container">
					<div class="row">
						<div class="todo_list col s12">
							<h1 class="center-align">Список задач</h1>
							<div class="row">
								<input class="col s10" type="text" v-model="todoItem">
								<button class="col s2 waves-effect waves-light btn" type="submit" name="action" v-on:click="addTodoItem(todoItem)">Добавить</button>
								<table class="col s12 center-align striped">
							        <thead>
							        </thead>
							        <tbody>
								        <tr v-for="todo in todos">
								        	<td class="center-align">{{ todo.name }}</td>
								        </tr>
							        </tbody>
							    </table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<!--Vue CDN-->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
<!--Materialize Js-->
<script src="/Source/js/materialize.min.js"></script>
<script src="/Source/js/calendar.js"></script>

</body>
</html>