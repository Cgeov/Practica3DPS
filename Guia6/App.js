import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';
const App = () => {
  const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
  const [modalVisibleMonta, setmodalVisibleMonta] = useState(false);
  const [modalVisibleCity, setmodalVisibleCity] = useState(false);
  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleplaya}
          onRequestClose={() => {
            alert('Modal ha sido cerrado.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>HOTELES URBANOS O DE CIUDAD</Text>
              <Text>
              Están ubicados en las ciudades o áreas metropolitanas, ya sea en los centros históricos de las ciudades, en zonas de negocios o zonas comerciales. Los servicios de estos hoteles varían según la categoría de cada uno y están enfocados tanto al turismo como al alojamiento en los desplazamientos de negocios. Generalmente son funcionales y los orientados a clientes de negocios, suelen contar con instalaciones como salas de conferencias y “Business Center”.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleplaya(!modalVisibleplaya);
                }}></Button>
            </View>
          </View>
        </Modal>

        <View style={{flexDirection: 'row'}}>
          <Image style={styles.banner} source={require('./src/img/banner.jpg')} />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Hoteles Urbanos</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleplaya(!modalVisibleplaya);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/h4.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleplaya(!modalVisibleplaya);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/h5.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModalVisibleplaya(!modalVisibleplaya);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/h6.jpg')}
                />
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>



        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleMonta}
          onRequestClose={() => {
            alert('Modal ha sido cerrado.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>HOTELES DE AEROPUERTO</Text>
              <Text>
              Ubicados en las cercanías de las terminales aéreas, especialmente cuando éstas están alejadas de los centros urbanos a los que sirven. Sus clientes son por lo general pasajeros de tránsito y tripulaciones de líneas aéreas. Una característica de este tipo de hotel es que sus estancias por lo general son muy reducidas.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setmodalVisibleMonta(!modalVisibleMonta);
                }}></Button>
            </View>
          </View>
        </Modal>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Hoteles de Aeropuerto</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setmodalVisibleMonta(!modalVisibleMonta);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/h1.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setmodalVisibleMonta(!modalVisibleMonta);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/h2.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setmodalVisibleMonta(!modalVisibleMonta);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/h3.jpg')}
                />
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>





        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleCity}
          onRequestClose={() => {
            alert('Modal ha sido cerrado.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>HOTELES DE PLAYA</Text>
              <Text>
              Como su nombre lo indica, se encuentran cerca de las playas. Su clientela casi exclusivamente son turistas de turismo masivo gestionado por operadores aunque no faltan pequeños establecimientos dedicados a turismo individual. Las estancias suelen ser de varios días. Estos hoteles en su mayoría pertenecen a grandes cadenas hoteleras que generan ingresos y beneficios para las comunidades donde se construyen.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setmodalVisibleCity(!modalVisibleCity);
                }}></Button>
            </View>
          </View>
        </Modal>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Hoteles de Playa</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setmodalVisibleCity(!modalVisibleCity);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/h7.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setmodalVisibleCity(!modalVisibleCity);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/h8.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setmodalVisibleCity(!modalVisibleCity);
                }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/h9.jpg')}
                />
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listadoItem: {
    flexBasis: '49%',
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  },
});
export default App;
