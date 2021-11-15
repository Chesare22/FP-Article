let hora = 8
if ( hora < 12 ) {
  console.log( "Buenos días" ) // "Buenos días"
} else {
  console.log( "Saludos" )
}

hora = 16
if ( hora < 12 ) {
  console.log( "Buenos días" )
} else {
  if ( hora > 20 ) {
    console.log( "Buenas noches" )
  } else {
    console.log( "Buenas tardes" ) // "Buenas tardes"
  }
}
