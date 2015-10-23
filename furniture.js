/*
// ############
//    IKEA COUCH
// ############
*/

$('#link1').on('click', function(e){

	var query = $('#query1').val();
	var endpoint = 'http://localhost:5820/furniture/query';
	var format = 'JSON';

	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);

		try {
			var vars = json.head.vars;

			var ul = $('<ul></ul>');
			ul.addClass('list-group');

			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');

				$.each(vars, function(index, v){
					if (value[v] != undefined) {
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];

					li.append('<strong>'+v+'</strong><br/>');

					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
				}

				});
				ul.append(li);

			});

			$('#linktarget1').html(ul);
		} catch(err) {
			$('#linktarget1').html('Something went wrong!');
		}

	});

});


/*
// ############
//    LIST OF FURNITURES
// ############
*/

$('#link2').on('click', function(e){

	var query = $('#query2').val();
	var endpoint = 'http://localhost:5820/furniture/query';
	var format = 'JSON';

	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);

		try {
			var vars = json.head.vars;

			var ul = $('<ul></ul>');
			ul.addClass('list-group');

			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');

				$.each(vars, function(index, v){
					if (value[v] != undefined) {
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];

					li.append('<strong>'+v+'</strong><br/>');

					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
				}
				});
				ul.append(li);

			});

			$('#linktarget2').html(ul);
		} catch(err) {
			$('#linktarget2').html('Something went wrong!');
		}

	});

});


/*
// ############
//    HOUZZ SINK
// ############
*/

$('#link3').on('click', function(e){

	var query = $('#query3').val();
	var endpoint = 'http://localhost:5820/furniture/query';
	var format = 'JSON';

	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);

		try {
			var vars = json.head.vars;

			var ul = $('<ul></ul>');
			ul.addClass('list-group');

			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');

				$.each(vars, function(index, v){
					if (value[v] != undefined) {
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];

					li.append('<strong>'+v+'</strong><br/>');

					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
				}
				});
				ul.append(li);

			});

			$('#linktarget3').html(ul);
		} catch(err) {
			$('#linktarget3').html('Something went wrong!');
		}

	});

});




/*
// ############
//    CABINET
// ############
*/

$('#link4').on('click', function(e){

	var query = $('#query4').val();
	var endpoint = 'http://localhost:5820/furniture/query';
	var format = 'JSON';

	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);

		try {
			var vars = json.head.vars;

			var ul = $('<ul></ul>');
			ul.addClass('list-group');

			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');

				$.each(vars, function(index, v){
					if (value[v] != undefined) {
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];

					li.append('<strong>'+v+'</strong><br/>');

					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
				}
				});
				ul.append(li);

			});

			$('#linktarget4').html(ul);
		} catch(err) {
			$('#linktarget4').html('Something went wrong!');
		}

	});

});




/*
// ############
//    TOILET
// ############
*/

$('#link5').on('click', function(e){

	var query = $('#query5').val();
	var endpoint = 'http://localhost:5820/furniture/query';
	var format = 'JSON';

	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);

		try {
			var vars = json.head.vars;

			var ul = $('<ul></ul>');
			ul.addClass('list-group');

			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');

				$.each(vars, function(index, v){
					if (value[v] != undefined) {
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];

					li.append('<strong>'+v+'</strong><br/>');

					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
				}
				});
				ul.append(li);

			});

			$('#linktarget5').html(ul);
		} catch(err) {
			$('#linktarget5').html('Something went wrong!');
		}

	});

});
