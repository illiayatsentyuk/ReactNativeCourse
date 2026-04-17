import { useEffect, useState } from "react";
import { Animated, Dimensions, StyleSheet, Text } from "react-native";
import { COLORS, FONTS } from "../tokens";
import { ErrorNotificationProps } from "./ErrorNotification.props";

export function ErrorNotification({ errorMessage }: ErrorNotificationProps) {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const animatedValue = new Animated.Value(-100);

	const onEnter = () => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 250,
			useNativeDriver: true,
		}).start();
	};

	useEffect(() => {
		if (!errorMessage) return;

		setIsVisible(true);
		const timerId = setTimeout(() => {
			setIsVisible(false);
		}, 3000);

		return () => clearTimeout(timerId);
	}, [errorMessage]);

	if (!isVisible) return null;

	return (
		<Animated.View
			style={{
				...styles.error,
				transform: [
					{
						translateY: animatedValue,
					},
				],
			}}
			onLayout={onEnter}
		>
			<Text style={styles.errorText}>{errorMessage}</Text>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	error: {
		position: "absolute",
		width: Dimensions.get("window").width,
		backgroundColor: COLORS.red,
		padding: 15,
		top: 60,
	},
	errorText: {
		fontSize: FONTS.f16,
		color: COLORS.white,
		textAlign: "center",
	},
});
