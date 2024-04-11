import {useState,useEffect,useRef} from 'react';
import { Text,View,  StyleSheet ,TouchableOpacity} from 'react-native';





const Stopwatch = ()=>{

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime,setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{

        if(isRunning){
        intervalIdRef.current=    setInterval(() => {
                setElapsedTime(Date.now()- startTimeRef.current)
            }, 10);
        }

        return ()=>{
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    const start = ()=>{
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;

    }

    const stop = ()=>{
        setIsRunning(false);


    }

    const reset = ()=>{
        setElapsedTime(0);
        setIsRunning(false);

    }

    const formatTime = ()=>{

        let hours = Math.floor(elapsedTime / (1000 * 60 *60))
        let minutes = Math.floor(elapsedTime / (1000 * 60 )% 60)
        let seconds = Math.floor(elapsedTime / (1000)% 60)
        let miliSeconds = Math.floor(elapsedTime % (1000) / 10)

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        miliSeconds = String(miliSeconds).padStart(2,"0");
        return `${hours}:${minutes}:${seconds}:${miliSeconds}`
    }

    return (
        <View style={styles.container}>
          <View style={styles.outerContainer}>
            <View style={styles.stopwatch}>
              <View style={styles.timer}>
                <Text style={styles.timerText}>
                  {formatTime()}
                </Text>
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.startButton]}
                  onPress={start}
                >
                  <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.stopButton]}
                  onPress={stop}
                >
                  <Text style={styles.buttonText}>Stop</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.resetButton]}
                  onPress={reset}
                >
                  <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      );
    }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'gray', 
        },
        outerContainer: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '80%',
        },
        stopwatch: {
          borderWidth: 6,
          borderColor: 'black',
          borderRadius: 15,
          padding: 20,
          alignItems: 'center',
        },
        timer: {
          marginBottom: 20,
        },
        timerText: {
          fontSize: 40,
        },
        btnContainer: {
          flexDirection: 'row',
        },
        button: {
          paddingVertical: 10,
          paddingHorizontal: 20,
          marginHorizontal: 5,
          borderRadius: 5,
        },
        buttonText: {
          fontSize: 18,
          color: 'white',
          textAlign: 'center',
        },
        startButton: {
          backgroundColor: 'black',
        },
        stopButton: {
          backgroundColor: 'black',
        },
        resetButton: {
          backgroundColor: 'black',
        },
      });
      
      

export default Stopwatch;