import React, {useState, useEffect} from 'react';
import ZebraScanner from 'react-native-zebra-scanner';
import { Text, View, StyleSheet} from 'react-native';

const App = (): JSX.Element => {
    const [codeScanned, setCodeScanned] = useState('');
    //console.log('test');

    const scanListener = (scannedCode: string): void => {
        setCodeScanned(scannedCode);
    } 

    useEffect(() => {
        //console.log('ZebraScanner', ZebraScanner);
        const checkAvailability = async () => {
            //await ZebraScanner.isAvailable();
            ZebraScanner.addScanListener(scanListener);
        }
        checkAvailability();
        return ZebraScanner.removeScanListener(scanListener);
    }, []);

    return (
        <View style={styles.container}>
            <Text>Hi</Text>
            <Text>Code Scanned: {codeScanned}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default App;