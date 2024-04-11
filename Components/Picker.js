import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker'
import { Text,View ,StyleSheet, StatusBar, Button } from "react-native";


const Picker = ()=>{

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('EMPTY !');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        
        let tempDate = new Date(currentDate);
        let formatedDate = `Date: ${tempDate.getDate()} / ${tempDate.getMonth()+1} / ${tempDate.getFullYear()}`;
        let formatedTime = `Time ${tempDate.getHours() % 12 || 12}:${tempDate.getMinutes()} ${tempDate.getHours() >= 12 ? 'PM' : 'AM'}`;
    
        setText(`${"\n"}${formatedDate} \n  ${formatedTime} `);

        setDate(currentDate);
    
        
        setShow(false);
    }
    

    const showMode = (currnetMode)=>{
        setShow(true);
        setMode(currnetMode);
    }



    return (
        <View style={styles.container}>
            <Text style={{fontSize:25 ,fontWeight: 'bold', marginBottom: 30}}>select your appointment down below: </Text>
            <View style={{margin: 20, borderRadius: 5, borderColor: 'black', borderWidth: 4}}> 
                <Button  
                    title="Date Picker"
                    onPress={()=>showMode('date')        
                }
                />
            </View>
            <View style={{margin: 20,borderRadius: 5, borderColor: 'black', borderWidth: 4,}}> 
                <Button  
                    title="Time Picker"
                    onPress={()=>showMode('time')}
                />
            </View>
            {
                show && (
                    <DateTimePicker 
                        testID="dateTImePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    
                    />
                )
            }

            <StatusBar />
            <Text style={{fontSize:25, marginTop: 40}}>Appointment scheduled for: </Text>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
                {text}
            </Text>
        </View>
    )

}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'gray',
            alignItems: 'center',
            justifyContent: 'center'
        }

    }
)

export default Picker

