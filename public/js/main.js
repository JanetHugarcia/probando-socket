var chat=[];
var persona=$('#contacto').text();
//socket
 var socket = io(); 
 socket.on('chat message', function (msg,hora,minuto) {
 	$('.chat-chat').append('<div class="msg"><div class="bubble message-out tail"><div class="message-text"><span class="emoji-text">'+msg+'</span><div class="message-meta"><span class="message-datetime chat-time">'+hora+':'+minuto+'</span></div></div></div></div>');
 	persona =$('#contacto').text();

	 for(var a=1;a<contacto.length;a++){
		 if(contacto[a].nombre==persona){
			 chat.push(msg);
			 contacto[a].mensaje=chat;
		 }
		 
	 }
	 
 });
 $('#m-wassap').keyup(function (evt) {
   if (evt.keyCode === 13) {
		var tiempo = new Date();
 		var hora = tiempo.getHours();
 		var minuto = tiempo.getMinutes();


// 		$('.chat-chat').append('<div class="msg"><div class="bubble message-out tail"><div class="message-text"><span class="emojitext">'+mensajewsp+'</span><div class="message-meta"><span class="message-datetime chat-time">'+hora+':'+minuto+'</span></div></div></div></div>');
     socket.emit('chat message', $('#m-wassap').val(),hora,minuto);
     $('#m-wassap').val('');
		 alert("hola");
   }
 });

$('.cont_inf').click(function(evt){
	var img = $(this).find('img').attr("src").substring(6);
	
	for(i in contacto){
		if(img===contacto[i].foto){
				$('#contacto').text(contacto[i].nombre);
 				$('#i-contacto').text(contacto[i].ultimo_mensaje);
 				$('#contacto-face').attr("src","image/"+contacto[i].foto);
 				$('.chat-chat').html('<div class="msg"><div class="bubble message-in tail"><div class="message-text"><span class="emojitext">'+contacto[i].ultimo_mensaje+'</span><div class="message-meta"><span class="message-datetime chat-time">'+contacto[i].hora+':'+contacto[i].minuto+'</span></div></div></div></div>');
				
				for(a in contacto[i].mensaje){
					$('.chat-chat').append(contacto[i].mensaje[a]);
				}
			
		}
//		for(a in contacto[i].mensaje){
//			console.log("mensaje  "+contacto[i].mensaje[a]);
//		}
	}
	alert("hola " + img);
	chat=[];
	
});



	

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




