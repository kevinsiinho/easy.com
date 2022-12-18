$(document).ready(function () {
  


});
var position=0;
function irderecha(){

  var tamano=$('.carousel-inner')[0].scrollWidth
  var cardtamano=$('.carousel-item').width()
    console.log("toal-"+ tamano)
    
if(position<tamano-(position*3)){
  position=position+cardtamano;
  console.log("actual-"+position)
  $('.carousel-inner').animate({scrollLeft:position},1600)
}else{ 
  inicio()
}
 
}

function inicio(){
  var tamano=$('.carousel-inner')[0]
  var cardtamano=$('.carousel-item').width()
  position=0
  $('.carousel-inner').animate({scrollLeft:position},1600)
 
}

function irizquierda(){

  var tamano=$('.carousel-inner')[0]
  var cardtamano=$('.carousel-item').width()
if(position>0){
  position=position-cardtamano;
  console.log(position)
  $('.carousel-inner').animate({scrollLeft:position},1600)
 }else{
  fin()
 } 
}

function fin(){
  var tamano=$('.carousel-inner')[0]
  var cardtamano=$('.carousel-item').width()
  position=cardtamano*3
  $('.carousel-inner').animate({scrollLeft:position},1600)
 
}

function simulacion(name,loteria,num){
  Swal.fire({
    title: 'Felicitaciones al usuari@ '+name+', por ser el feliz ganador del sorteo #'+loteria+' con el número '+num,
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url(assets/simulacion.gif)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("assets/simulacion.gif")
      left top
      no-repeat
    `
 
  })
}

function ventana(){
       Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  
  
