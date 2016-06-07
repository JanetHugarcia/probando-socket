// var contacto = [{
// 		"nombre":"Aldo Alfaro",
// 		"foto":"aldo.jpg",
// 		"hora":12,
// 		"minuto":34,
// 		"ultimo_mensaje":"Vao a comer"
// 	},
// 	{
// 		"nombre":"Raymi Saldomando",
// 		"foto":"raymi.jpg",
// 		"hora":17,
// 		"minuto":24,
// 		"ultimo_mensaje":"La clase va bien!"
// 	},
// 	{
// 		"nombre":"Mariana Costa",
// 		"foto":"mariana.jpg",
// 		"hora":14,
// 		"minuto":24,
// 		"ultimo_mensaje":"El panel de speakers esta buenazo"
// 	},
// 	{
// 		"nombre":"Ana María Martíne Franklin",
// 		"foto":"anamaria.jpg",
// 		"hora":11,
// 		"minuto":36,
// 		"ultimo_mensaje":"Pues dale chamo!"
// 	},
// 	{
// 		"nombre":"Rodulfo Prieto",
// 		"foto":"rodulfo.jpg",
// 		"hora":14,
// 		"minuto":24,
// 		"ultimo_mensaje":"¿Cómo van las chicas?"
// 	}
// 	,
// 	{
// 		"nombre":"Andrea Lamas",
// 		"foto":"andrea.jpg",
// 		"hora":14,
// 		"minuto":24,
// 		"ultimo_mensaje":"Hoy me toca clases de canto, yee!"
// 	}
// 	,
// 	{
// 		"nombre":"Maria Paula Rivarola",
// 		"foto":"mariapaula.jpg",
// 		"hora":14,
// 		"minuto":24,
// 		"ultimo_mensaje":"Wuju! esto me encanta! en verdad!"
// 	}
// 	,
// 	{
// 		"nombre":"Katy Sanchez",
// 		"foto":"katy.jpg",
// 		"hora":14,
// 		"minuto":24,
// 		"ultimo_mensaje":"No te preocupes tengo el salón bajo control"
// 	},
// 	{
// 		"nombre":"Laboratoria Peru",
// 		"foto":"logocodeacademy.png",
// 		"hora":14,
// 		"minuto":24,
// 		"ultimo_mensaje":"Aldo: Dale dale!"
// 	}
// 	]
// 	var availableTags = [
// 		"Laboratoria Peru",
// 		"Raymi Saldomando",
// 		"Mariana Costa",
// 		"Ana María Martíne Franklin",
// 		"Rodulfo Prieto",
// 		"Andrea Lamas",
// 		"Maria Paula Rivarola",
// 		"Katy Sanchez",
// 		"Aldo Alfaro"
// 	];

// //-------------------chat--------

// var chat=[];
// $(document).ready(function(){
// 	$('#m-wassap').keyup(function (evt) {
//       if (evt.keyCode === 13) {
//       	var tiempo = new Date();
// 		var hora = tiempo.getHours();
// 		var minuto = tiempo.getMinutes();
// 		var mensajewsp = $('#m-wassap').val();

// 		var persona = $('#contacto').text();
// 		for (i in contacto){
// 			if(persona === contacto[i].nombre){
// 				chat.push(mensajewsp);
// 				contacto[i].mensaje=chat;
// 			}
// 		}


// 		$('.chat-chat').append('<div class="msg"><div class="bubble message-out tail"><div class="message-text"><span class="emojitext">'+mensajewsp+'</span><div class="message-meta"><span class="message-datetime chat-time">'+hora+':'+minuto+'</span></div></div></div></div>');


//         $('#m-wassap').val('');
//       }
//     });

// 	$('.msg').click(function(){
// 		$(this).remove();
// 	});
// //_--------------------
	
// 	//_-------------
// 	$( "#autocomplete" ).autocomplete({
// 		source: availableTags
// 	});

// 	$('#autocomplete').keyup(function (evt) {
//       if (evt.keyCode === 13) {
//       	var persona = $('#autocomplete').val();	
// 		for (i in contacto){
// 			if(persona === contacto[i].nombre){
// 				$('#contacto').text(persona);
// 				$('#i-contacto').text(contacto[i].ultimo_mensaje);
// 				$('#contacto-face').attr("src","image/"+contacto[i].foto);
// 				$('.chat-chat').html('<div class="msg"><div class="bubble message-in tail"><div class="message-text"><span class="emojitext">'+contacto[i].ultimo_mensaje+'</span><div class="message-meta"><span class="message-datetime chat-time">'+contacto[i].hora+':'+contacto[i].minuto+'</span></div></div></div></div>');

// 				for (a in contacto[i].mensaje){
// 					$('.chat-chat').append('<div class="msg"><div class="bubble message-out tail"><div class="message-text"><span class="emojitext">'+contacto[i].mensaje[a]+'</span><div class="message-meta"><span class="message-datetime chat-time">'+contacto[i].hora+':'+contacto[i].minuto+'</span></div></div></div></div>');
// 				}
// 				chat=[];
// 			}
// 		}	
//       }
//     });


// });





//socket
//  var socket = io(); 
// socket.on('chat message', function (msg) {
// 	$('.chat-chat').append( $('<div>').text(msg) );
// });
// $('#m-wassap').keyup(function (evt) {
//   if (evt.keyCode === 13) {
//     socket.emit('chat message', $('#m-wassap').val());
//     $('#m-wassap').val('');
//   }
// });