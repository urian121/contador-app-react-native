import { Text, Pressable } from 'react-native';
import { styles } from '../styles';

const getPositionStyle = (position) => {
  if (position === 'center') return styles.positionCenter;
  if (position === 'right') return styles.positionRight;
  return styles.positionLeft;
};

const getOpacityStyle = (pressed) => ({
  opacity: pressed ? 0.7 : 1,
});

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
      <Text style={{ color: 'white', fontSize: 25 }}>{label}</Text>
    </Pressable>
  );
}
