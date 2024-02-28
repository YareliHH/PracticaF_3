import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { estilos } from './Estilos'

const Clima = () => {
    const [data,setData]=useState(null)
    const [load,setLoad]=useState(false)

    useEffect(()=>{
        fetch('https://api.weatherapi.com/v1/forecast.json?key=5117bcbba2b6463c9f8172627231110&q=huejutla&days=5&aqi=no&alerts=no&lang=es')
        .then(res=>res.json())
        .then(obj=>{
            setData(obj)
            setLoad(true)
        })
    },[])

    const UScreen = () => {
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} color={'blue'} />
            <Text>Cargando datos...</Text>
          </View>
        );
      };

      const Card = ({ fecha, iko, min, max }) => {
        return (
          <View style={styles.cardItemClima}>
            <Text style={styles.dateItem}>{fecha}</Text>
            <Image style={styles.imgItemCard} source={{ uri: 'https:' + iko }} />
            <Text style={styles.tempItem}>{min}°C / {max}°C</Text>
          </View>
        );
      };
      const CardHour = ({ hora, iko, temp }) => {
        // Dividir la cadena de hora para extraer solo la hora
        const horaCompleta = hora.split(" ")[1];
        return (
          <View style={styles.cardItemHour}>
            <Text style={styles.dateItem}>{horaCompleta}</Text>
            <Image style={styles.imgItemCard} source={{ uri: 'https:' + iko }} />
            <Text style={styles.tempItem}>{temp}°</Text>
          </View>
        );
      };
    
    
      const LScreen = () => {
        return (
          <View style={styles.mainContainer}>
            <Text style={styles.locate}>{data.location.name}</Text>
            <Text style={styles.temp}>{data.current.temp_c}°</Text>
            <Text style={styles.condicion}>
              {data.current.condition.text}{' '}
              {data.forecast.forecastday[0].day.maxtemp_c}°C{' '}
              / {data.forecast.forecastday[0].day.mintemp_c}°C
            </Text>
    
            <FlatList
              style={styles.lista}
              data={data.forecast.forecastday[0].hour}
              renderItem={({ item }) =>
                <CardHour
                  hora={item.time}
                  iko={item.condition.icon}
                  temp={item.temp_c}
                />
              }
              horizontal
              keyExtractor={(item, index) => index.toString()}
            />
    
            <FlatList
              style={styles.lista}
              data={data.forecast.forecastday}
              renderItem={({ item }) =>
                <Card
                  fecha={item.date}
                  iko={item.day.condition.icon}
                  min={item.day.mintemp_c}
                  max={item.day.maxtemp_c}
                />
              }
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        );
      };
    
      return (
        <View style={styles.container}>
          <Text>Clima</Text>
          {load ? <LScreen /> : <UScreen />}
        </View>
      );
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'skyblue',
          alignItems: 'center',
          justifyContent: 'center',
        },
        mainContainer: {
          flex: 2,
          backgroundColor: 'skyblue',
        },
        loadingContainer: {
          flex: 1,
          backgroundColor: 'skyblue',
          alignItems: 'center',
          justifyContent: 'center',
        },
        cardItemClima: {
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          marginBottom: 40,
      
      
        },
        cardItemHour: {
          alignItems: 'center',
          padding: 5,
        },
        dateItem: {
          marginRight: 20,
        },
        imgItemCard: {
          width: 50,
          height: 50,
          marginRight: 5,
          
        },
        tempItem: {
          fontWeight: 'bold',
          fontSize: 15,
        },
        locate: {
          fontWeight: 'bold',
          fontSize: 30,
          marginBottom: 40,
         
        },
        temp: {
          fontSize: 60,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        condicion: {
          marginBottom: 40,
          textAlign: 'center',
          
        },
        lista: {
          marginBottom: 40,
        },
  
  
    });
export default Clima