
import React, { useContext } from 'react';
import {
    Text,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    View,
    Image
} from 'react-native';

import styles from '../styles';

import { SchoolContext, average } from '../store/SchoolProvider';

const Student = ({ student }) => {

    return (
        <View
            style={[
                styles.item,
                { flex: 1, flexDirection: 'row' }
            ]}
        >
            <View style={{ width: 110 }}>
                <Image
                    source={{ uri: `http://lorempixel.com/100/100/cats/${student.id}` }}
                    style={{ width: 100, height: 100, padding: 5 }}
                />
            </View>
            <View style={{ width: 200 }}>
                <Text>{student.name}</Text>
                <Text style={{ padding: 2, marginBottom: 2 }} >Nombre d'abscence(s) {student.attendance}</Text>
                <Text style={{ padding: 2, marginBottom: 2 }}  >Nombre de cours {student.lessons ? student.lessons.length : 0}</Text>
                <Text style={{ padding: 2, marginBottom: 2 }} >Moyenne {average(student.notes)}</Text>
                <Text>Mention : </Text>
            </View>
        </View>
    );
}

const StudentsScreen = ({ navigation }) => {
    const [state, dispatch] = useContext(SchoolContext);

    const { students, order, refresh } = state;

        return (
            <SafeAreaView style={{ flex: 1, alignItems: 'center' }} >
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    >
                    <Text style={styles.buttonText}>Reset abscence</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    >
                    <Text style={styles.buttonText}>Order average {order ? 'ascending' : 'descending'}</Text>
                </TouchableOpacity>
                { /* extraData permet de watcher les changements de students (state) comme avec useEffect, permet de reload la liste
                    sinon la liste de reload pas les données
                  */ }
                <FlatList
                    style={styles.containerStudent}
                    data={ students }
                    extraData={ students }
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {

                        return (
                            <Student
                                student={item}
                            />
                        );
                    }} 
                />
            </SafeAreaView>
        )

}

export default StudentsScreen;