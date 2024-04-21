import React from 'react';
import { View, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { bottomSheetStyles } from './bottomSheetStyles';

type BottomSheetProps = {
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const BottomSheet: React.FC<BottomSheetProps> = ({ isVisible, onClose, children }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={bottomSheetStyles.overlay}
                activeOpacity={1}
                onPress={onClose}
            >
                <View style={bottomSheetStyles.container}>
                    <View style={bottomSheetStyles.handle} />
                    {children}
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

export default BottomSheet;