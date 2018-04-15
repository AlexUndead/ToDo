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
				<div class="calendar">
					<div class="panel">
						<button v-on:click="followingMonth"><</button>
						<button v-on:click="previousMonth">></button>
					</div>
					<div id="dates">
						<ul class="clearfix">
							<li class="days" v-for="day in days">{{ day }}</li>
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