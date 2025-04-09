import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useState } from 'react';
import Fab from './components/Fab';
import { styles } from './styles';


export default function App() {
  const [count, setCount] = useState(0);

  const aumentar = () => {
    setCount(count + 2);
  };
  const disminuir = () => {
    if (count === 0) return;
    setCount(count => count - 2);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: 700 }}>Contador con </Text>
      <Text style={{ fontSize: 60, fontWeight: 900, color: '#087ea4' }}>React Native</Text>
      <Text style={styles.textHuge}>{count}</Text>

      <Fab
        label="+2"
        onPress={aumentar}
        onLongPress={() => setCount(0)}
        position="right"
      />

      <Fab label="Reset" onPress={reset} position="center" disabled={count === 0} />

      <Fab
        label="-2"
        onPress={disminuir}
        onLongPress={() => setCount(0)}
        position="left"
        disabled={count === 0}
      />

      <StatusBar style="dark" />
    </View>
  );
}