import { Text, Pressable } from 'react-native';
import { styles } from "../assets/styles/styles";

// Obtener el estilo de posición basado en la prop 'position'
const getPositionStyle = (position) => {
  if (position === 'center') return styles.positionCenter;
  if (position === 'right') return styles.positionRight;
  return styles.positionLeft;
};

// Obtener el estilo de opacidad basado en si el botón está presionado
const getOpacityStyle = (pressed) => ({
  opacity: pressed ? 0.7 : 1,
});

// Componente FAB (Floating Action Button)
export default function FAB({
  label,
  onPress,
  onLongPress,
  position = 'right',
  disabled = false,
}) {
  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        styles.floatingButton,
        getPositionStyle(position),
        getOpacityStyle(pressed),
        disabled && { opacity: 0.5 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={styles.textLabel}>{label}</Text>
    </Pressable>
  );
}
