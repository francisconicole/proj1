$(document).ready(function(){
    $('.parallax').parallax();
	Materialize.updateTextFields();
});

new WOW().init();
			
			
var programVisible = false;
var softwareVisible = false;
var axisOn = true;
var myData2 = ['HTML', 'CSS', 'jQuery', 'JS', 'C++', 'D3', 'PHP','Node', 'Bower', 'Gulp'];
var myData3 = ['Photoshop', 'Illistrator', 'Word', 'Excel', 'Powerpoint'];

var myData22 = ['HTML', 'CSS', 'jQuery', 'JavaScript', 'C++', 'D3', 'PHP','Node', 'Bower', 'Gulp'];
var myData33 = ['Photoshop', 'Illistrator', 'Word', 'Excel', 'Powerpoint'];

var myData4 = ['Newb', 'Low Level', 'Good', 'ownage', 'pwnage', 'Near Max Lvl'];
var myData5 = ['0', '1', '2', '3', '4', '5'];
var myMargin = {
	top: 50,
	right: 20,
	bottom: 40,
	left: 20
}

var myHeight;
var myWidth;

function drawGraph(h, w){
	var front = d3.select('#program')
	.on('click', function(){
		if(programVisible == false){
			var myData = [500, 500, 300, 400, 400, 100, 200, 300, 300, 300];

			var margin = myMargin;

			var height = h/myHeight;
			var width = w/myWidth;
			var animateduration = 2000;
			var animateDelay = 100;

			var tooltip = d3.select('#charts').append('div')
				.style('position','absolute')
				.style('background','#f4f4f4')
				.style('padding','10px 20px')
				.style('border','2px #333 solid')
				.style('border-radius','5px')
				.style('opacity','0')

			var yScale = d3.scale.linear()
				.domain([0, d3.max(myData)])
				.range([0, height]);

			var xScale = d3.scale.ordinal()
				.domain(d3.range(0, myData.length))
				.rangeBands([0, width])

			var colors = d3.scale.linear()
				.domain([0, myData.length])
				.range(['#0A8A63','#0E6199'])

			var myChart = d3.select('#chart').append('svg')
				.attr('id', 'frontChart')
				.attr('cursor', 'pointer')
				.attr('width', width + margin.right + margin.left)
				.attr('height', height + margin.top + margin.bottom)
				.append('g')
				.attr('transform', 'translate('+margin.left+', '+margin.top+')')
				.style('background', '#f4f4f4')
				.selectAll('rect')
					.data(myData)
					.enter().append('rect')
						.style('fill', function(d, i){
							return colors(i);
						})
						.attr('width', xScale.rangeBand())
						.attr('height', 0)
						.attr('x', function(d, i){
							return xScale(i);
						})
						.attr('y', height)
				.on('mouseover', function(d){

					tooltip.transition()
						.style('opacity', 1)
					tooltip.html(d)
						.style('left', (d3.event.pageX)+'px')
						.style('top', (d3.event.pageY)+'px')
					d3.select(this).style('opacity', 0.5)

				})
				.on('mouseout', function(d){
					tooltip.transition()
						.style('opacity', 0)
					d3.select(this).style('opacity', 1)
				})

			myChart.transition()
				.attr('height', function(d){
					return yScale(d);
				})
				.attr('y', function(d){
					return height - yScale(d);
				})
				.duration(animateduration)
				.delay(function(d, i){
					return i * animateDelay;
				})
				.ease('elastic')

			var vScale = d3.scale.linear()
				.domain([0, d3.max(myData)])
				.range([height, 0]);

			var hScale = d3.scale.ordinal()
				.domain(d3.range(0, myData.length))
				.rangeBands([0, width])

			//V Axis
			var vAxis = d3.svg.axis()
				.scale(vScale )
				.orient('left')
				.ticks(5)
				.tickPadding(5)
				.tickFormat(function(d,i){ 
					if(axisOn == true){
						return myData4[i];
					}
					else{
						return myData5[i];
					}
					
				})

			//V Guide
			var vGuide = d3.select('svg')
				.append('g')
					vAxis(vGuide)
					vGuide.attr('transform', 'translate('+margin.left+', '+margin.top+')')
					vGuide.selectAll('path')
						.style('fill', 'none')
						.style('stroke', '#000')
					vGuide.selectAll('line')
						.style('stroke', '#000')

			//H Axis

			var hAxis = d3.svg.axis()
				.scale(hScale)
				.orient('bottom')
				.tickValues(hScale.domain().filter(function(d, i){
					//return !(i % (myData.length/myData.length));
					return !(i % i);
				}))
				.tickFormat(function(d,i){ 
					if(axisOn == true){
						return myData22[i];
					}
					else{
						return myData2[i];
					}
				});

			//H Guide
			var hGuide = d3.select('svg')
				.append('g')
					hAxis(hGuide)
					hGuide.attr('transform', 'translate('+margin.left+','+(height + margin.top)+')')
					hGuide.selectAll('path')
						.style('fill', 'none')
						.style('stroke', '#000')
					hGuide.selectAll('line')
						.style('stroke', '#000')

			d3.select('#backChart').remove();
			softwareVisible = false;
			programVisible = true;
		}
	})


var back = d3.select('#software')
	.on('click', function(){
		if(softwareVisible == false){
			var myData = [400, 300, 500, 400, 400];

			var margin = myMargin;

			var height = h/myHeight;
			var width = w/myWidth;
			var animateduration = 2000;
			var animateDelay = 100;

			var tooltip = d3.select('#charts').append('div')
				.style('position','absolute')
				.style('background','#f4f4f4')
				.style('padding','5 15px')
				.style('border','1px #333 solid')
				.style('border-radius','5px')
				.style('opacity','0')

			var yScale = d3.scale.linear()
				.domain([0, d3.max(myData)])
				.range([0, height]);

			var xScale = d3.scale.ordinal()
				.domain(d3.range(0, myData.length))
				.rangeBands([0, width])

			var colors = d3.scale.linear()
				.domain([0, myData.length])
				.range(['#0A8A63','#0E6199'])

			var myChart2 = d3.select('#chart2').append('svg')
				.attr('id', 'backChart')
				.attr('cursor', 'pointer')
				.attr('width', width + margin.right + margin.left)
				.attr('height', height + margin.top + margin.bottom)
				.append('g')
				.attr('transform', 'translate('+margin.left+', '+margin.top+')')
				.style('background', '#f4f4f4')
				.selectAll('rect')
					.data(myData)
					.enter().append('rect')
						.style('fill', function(d, i){
							return colors(i);
						})
						.attr('width', xScale.rangeBand())
						.attr('height', 0)
						.attr('x', function(d, i){
							return xScale(i);
						})
						.attr('y', height)

				.on('mouseover', function(d){
					tooltip.transition()
						.style('opacity', 1)

					tooltip.html(d)
						.style('left', (d3.event.pageX)+'px')
						.style('top', (d3.event.pageY)+'px')
					d3.select(this).style('opacity', 0.5)

				})
				.on('mouseout', function(d){
					tooltip.transition()
						.style('opacity', 0)
					d3.select(this).style('opacity', 1)
				})

			myChart2.transition()
				.attr('height', function(d){
					return yScale(d);
				})
				.attr('y', function(d){
					return height - yScale(d);
				})
				.duration(animateduration)
				.delay(function(d, i){
					return i * animateDelay;
				})
				.ease('elastic')

			var vScale = d3.scale.linear()
				.domain([0, d3.max(myData)])
				.range([height, 0]);

			var hScale = d3.scale.ordinal()
				.domain(d3.range(0, myData.length))
				.rangeBands([0, width])

			//V Axis
			var vAxis = d3.svg.axis()
				.scale(vScale)
				.orient('left')
				.ticks(5)
				.tickPadding(5)
				.tickFormat(function(d,i){ 
					if(axisOn == true){
						return myData4[i];
					}
					else{
						return myData5[i];
					}
				})

			//V Guide
			var vGuide = d3.select('#backChart')
				.append('g')
					vAxis(vGuide)
					vGuide.attr('transform', 'translate('+margin.left+', '+margin.top+')')
					vGuide.selectAll('path')
						.style('fill', 'none')
						.style('stroke', '#000')
					vGuide.selectAll('line')
						.style('stroke', '#000')

			//H Axis
			var hAxis = d3.svg.axis()
				.scale(hScale)
				.orient('bottom')
				.tickValues(hScale.domain().filter(function(d, i){
					return !(i % i);
				}))
				.tickFormat(function(d,i){ 
					if(axisOn == true){
						return myData33[i];
					}
					else{
						return myData3[i];
					}
				});

			//H Guide
			var hGuide = d3.select('#backChart')
				.append('g')
					hAxis(hGuide)
					hGuide.attr('transform', 'translate('+margin.left+','+(height + margin.top)+')')
					hGuide.selectAll('path')
						.style('fill', 'none')
						.style('stroke', '#000')
					hGuide.selectAll('line')
						.style('stroke', '#000')

			d3.select('#frontChart').remove();
			softwareVisible = true;
			programVisible = false;
		}
	})

}

//draw graph the first time
if ($(window).width() >800) {
	axisOn = true;
	myMargin = {
		top: 30,
		right: 130,
		bottom: 40,
		left: 130
	}
	myHeight = 2;
	myWidth = 1.5;
	drawGraph(($(window).height()), ($(window).width()/1.5));
} 
else {
	axisOn = false;
	myMargin = {
		top: 30,
		right: 20,
		bottom: 40,
		left: 20
	}
	myHeight = 1.5;
	myWidth = 1.25;
	drawGraph(($(window).height()/1.4), ($(window).width()-50));
}