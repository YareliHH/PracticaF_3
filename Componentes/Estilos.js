import {StyleSheet} from 'react-native';

export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101624',
        color:'#fff',
    },
    //ESTILOS DEL COMPONENTE CALCULADORA
    contenedorBotones: {
        flex: 2,
        paddingTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    textoCaja: {
        color: '#141718',
        fontSize: 60,
        textAlign: 'right',
    },
    textoBoton: {
        color: '#141718',
        fontSize: 34
    },
    botonNum: {
        width: 80, // Tamaño del botón
        height: 80, // Tamaño del botón
        borderRadius: 50, // Hace el botón completamente redondo (la mitad del ancho o alto)
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#ffffff',
        margin: '1%',
        marginLeft: 5,
        marginBottom: 15,
    },
    boton: {
        width: 80, // Tamaño del botón
        height: 80, // Tamaño del botón
        borderRadius: 50, // Hace el botón completamente redondo (la mitad del ancho o alto)
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#adacac',
        borderWidth: 1,
        borderColor: '#adacac',
        margin: '1.3%',
        marginLeft: 5,
        marginBottom: 20,
    },
    estiloCaja:{
        height:200,
        margin:5,
        alignItems:'flex-end',
        justifyContent:'center',
        padding:10,
        backgroundColor: '#f7f7f7',
    },

    //ESTILOS DEL COMPONENTE PERSONAJESDISNEY
    titulo:{
        fontSize: 24, // Un tamaño de fuente un poco más grande
        padding: 20, // Un poco más de espacio alrededor del título
        fontWeight: 'bold',
        color: '#adac00', // Un color más oscuro para el título
        textAlign: 'center', // Centrar el título
    },
    
    cardItem:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 2,
        borderColor: '#adac00', // Un color de borde dorado
        borderRadius: 20, // Bordes más redondeados
        marginBottom: 5, // Un poco más de espacio debajo de cada tarjeta
        backgroundColor: '#f8f8f8', // Fondo de tarjeta gris claro
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2, // Sombra suave para dar profundidad
        shadowRadius: 4,
        elevation: 5, // Efecto de elevación para dispositivos Android
    },
    imgItem:{
        margin: 15,
        borderRadius: 15, // Bordes redondeados para las imágenes
        borderColor: '#ddd', // Borde ligero alrededor de las imágenes
        borderWidth: 2,
    },
 infoItem:{
    flex: 2,
    margin: 10,
    fontSize: 28, // Tamaño de fuente ligeramente más grande para la información
    color: '#2c3e50', // Color de texto más oscuro
    fontFamily: 'Arial', // Cambio de tipografía a Arial
},
textNameItem:{
    fontWeight: 'bold',
    fontSize: 20, // Tamaño de fuente ligeramente más grande para los nombres
    color: '#3498db', // Un color azul claro para los nombres
    fontFamily: 'Verdana', // Cambio de tipografía a Verdana
},
textInfoItem:{
    fontSize: 18, // Tamaño de fuente un poco más grande para la información adicional
    color: '#000', // Un color verde para la información adicional
    fontFamily: 'Georgia', // Cambio de tipografía a Georgia
},


// ESTILOS DEL COMPONENTE CLIMA
locate:{
    color: '#CCCCCC',
    fontWeight: 'normal', // Cambiado de light a normal
    fontSize: 35, // Cambiado de 30 a 35
    paddingTop: 10, // Cambiado de 5 a 10
    paddingLeft: 15, // Cambiado de 10 a 15
    paddingBottom: 40, // Cambiado de 30 a 40
},
temp:{
    color: '#fff',
    fontWeight: 'normal', // Cambiado de light a normal
    fontSize: 110, // Cambiado de 100 a 110
    textAlign: 'center',
    paddingTop: 40, // Cambiado de 30 a 40
    marginLeft: 40, // Cambiado de 35 a 40
},
condicion:{
    color: '#fff',
    fontWeight: 'normal', // Cambiado de light a normal
    fontSize: 20, // Cambiado de 18 a 20
    textAlign: 'center',
},
lista: {
    borderRadius: 15, // Cambiado de 10 a 15
    borderWidth: 2, // Cambiado de 1 a 2
    borderColor: '#12161f',
    backgroundColor: '#11151f',
    marginTop: 40, // Cambiado de 30 a 40
    padding: 10, // Cambiado de 5 a 10
},
cardItemClima:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15, // Cambiado de 10 a 15
},
cardItemHour:{
    flexDirection: 'column',
    marginTop: 15, // Cambiado de 10 a 15
},
dateItem:{
    color: '#fff',
    fontWeight: 'normal', // Cambiado de light a normal
    fontSize: 20, // Cambiado de 17 a 20
    marginVertical: 15, // Cambiado de 12 a 15
    marginLeft: 15, // Cambiado de 10 a 15
},
tempItem:{
    color: '#fff',
    fontWeight: 'normal', // Cambiado de light a normal
    fontSize: 20, // Cambiado de 17 a 20
    marginVertical: 15, // Cambiado de 12 a 15
    marginRight: 15, // Cambiado de 10 a 15
    marginLeft: 15,
},
imgItemCard:{
    height: 60, // Aumentado de 50 a 60
    width: 60, // Aumentado de 50 a 60
}
});

export const colores={
    color1: '#9da4c4',
    color2: '#8189a8' ,
    color3: '#666e8b',
    color4: '#4a526f',
    color5: '#2f3752'
}
