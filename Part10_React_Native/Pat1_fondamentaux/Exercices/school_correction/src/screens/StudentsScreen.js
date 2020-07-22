
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

import { SchoolContext, average, selectMention } from '../store/SchoolProvider';

const Student = ({ navigation, student, mention }) => {

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Abscence', { student: student })}
        >
            <View
                style={[
                    styles.item,
                    { flex: 1, flexDirection: 'row' },
                    { backgroundColor: student.attendance > 5 ? '#6e3b6e' : '#f9c2ff' }
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
                    <Text>Mention : {mention}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const StudentsScreen = ({ navigation }) => {
    const [state, dispatch] = useContext(SchoolContext);
    const { students, order, behaviours } = state;

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }} >
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => dispatch({ type: 'RESET_ATTENDANCE' })}>
                <Text style={styles.buttonText}>Reset abscence</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => dispatch({ type: 'ORDER', order: !order })}>
                <Text style={styles.buttonText}>Ordonner la moyenne par ordre {order ? 'croissant' : 'décroissant'}</Text>
            </TouchableOpacity>
            {/** extraData permet de watcher un state pour forcer la mise à jour de la FlatList */}
            <FlatList
                style={styles.containerStudent}
                data={students}
                extraData={students}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {

                    return (
                        <Student
                            student={item}
                            navigation={navigation}
                            mention={selectMention(behaviours, item)}
                        />
                    );
                }}
            />
        </SafeAreaView>
    );

}

export default StudentsScreen;