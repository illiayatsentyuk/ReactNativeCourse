import { useState } from "react";
import {
	Pressable,
	StyleSheet,
	TextInput,
	TextInputProps,
	View,
} from "react-native";
import EyeClosedIcon from "../../assets/icons/eye-closed";
import EyeOpenedIcon from "../../assets/icons/eye-opened";
import { COLORS, RADIUS } from "../tokens";

export function Input({
	isPassword,
	...props
}: TextInputProps & { isPassword?: boolean }) {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);

	return (
		<View>
			<TextInput
				style={styles.input}
				secureTextEntry={isPassword && !isPasswordVisible}
				placeholderTextColor={COLORS.gray}
				{...props}
			/>
			{isPassword && (
				<Pressable
					onPress={() => setIsPasswordVisible((state) => !state)}
					style={styles.eyeIcon}
				>
					{isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
				</Pressable>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 58,
		paddingVertical: 0,
		backgroundColor: COLORS.violetDark,
		paddingHorizontal: 24,
		borderRadius: RADIUS.r10,
		fontSize: 16,
		color: COLORS.gray,
	},
	eyeIcon: {
		position: "absolute",
		right: 0,
		paddingHorizontal: 20,
		paddingVertical: 18,
	},
});
