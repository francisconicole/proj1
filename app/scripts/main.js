$(document).ready(function(){
    $('.parallax').parallax();
	Materialize.updateTextFields();
});

new WOW().init();
			
			
	var sortDir = false;
			
	var w = 1000;
	var h = 500;
	var dataset = [
		{ 'name': 'C++', 'rank': 8, 'experience': 'OWNAGE' },
		{ 'name': 'JavaScript', 'rank': 8, 'experience': 'OWNAGE' },
		{ 'name': 'PHP', 'rank': 4, 'experience': 'Low LVL' },
		{ 'name': 'HTML', 'rank': 9, 'experience': 'PWNAGE' },
		{ 'name': 'CSS', 'rank': 9, 'experience': 'PWNAGE' },
		{ 'name': 'D3', 'rank': 1, 'experience': 'Newb' },
		{ 'name': 'jQuery', 'rank': 1, 'experience': 'Newb' },
		{ 'name': 'Photoshop', 'rank': 8, 'experience': 'OWNAGE' },
		{ 'name': 'Illistrator', 'rank': 7, 'experience': 'High LVL' },
		{ 'name': 'Word', 'rank': 9, 'experience': 'PWNAGE' },
		{ 'name': 'Excel', 'rank': 6, 'experience': 'High LVL' },
		{ 'name': 'PowerPoint', 'rank': 8, 'experience': 'OWNAGE' }
	];
			
	//creates a scale suitable for something with ordinal (ordered) value
	var xScale = d3.scale.ordinal()
		.domain(d3.range(dataset.length))
		.rangeRoundBands([0, w], 0.1);
	var yScale = d3.scale.linear()
		.domain([0, 10])
		.range([0, h]);
			
	//Create SVG element
	var svg = d3.select('#charts')
		.append('svg')
		.attr('width', w)
		.attr('height', h);
	//Create bars
		svg.selectAll('rect')
			.data(dataset)
			.enter()
			.append('rect')
			.attr('x', function(d, i) {
			   	return xScale(i);
			})
			.attr('y', function(d) {
				return h - yScale(d.rank);
			})
			.attr('width', xScale.rangeBand())
			.attr('height', function(d) {
			   	return yScale(d.rank);
			})
			.attr('fill', '#8250A3')
			//adds hover color change
			.on('mouseover', function(d) {
			   	d3.select(this)
			   		.attr('fill', 'teal');
		//Get this bar's x/y values, then augment for the tooltip
		var xPosition = parseFloat(d3.select(this).attr('x')) + xScale.rangeBand() / 2;
		var yPosition = parseFloat(d3.select(this).attr('y')) / 2 + h / 2;
		//Update the tooltip position and value
		d3.select('#tooltip')
			.style('left', xPosition + 'px')
			.style('top', yPosition + 'px')						
			.select('#value')
			.text(d.experience);
		d3.select('#tooltip')
			.select('#language')
			.text(d.name);
			   
		//Show the tooltip
		d3.select('#tooltip').classed('hidden', false);
		})
			   //changes back when not hovered
			   .on('mouseout', function(d) {
				   d3.select(this)
						.transition()
				   		.duration(250)
						.attr('fill', '#8250A3');
				//Hide the tooltip
					d3.select('#tooltip').classed('hidden', true);		
			   });
			//Create labels
			svg.selectAll('text')
			   .data(dataset)
			   .enter()
			   .append('text')
			   .text(function(d, i) {
					//grab the label at same index as current element
			   		//return languages[i];
					return d.name;
			   })
			   .attr('text-anchor', 'middle')
			   .attr('x', function(d, i) {
					//place the text relative to the index of the data
			   		return xScale(i) + xScale.rangeBand() / 2;
			   })
			   .attr('y', function(d) {
			   		return h - yScale(d.rank) + 14;
			   })
			   .attr('font-family', 'sans-serif')
			   .attr('font-size', '14px')
			   .attr('fill', 'white');