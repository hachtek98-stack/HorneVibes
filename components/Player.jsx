import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Slider } from 'react-native';
import { Audio } from 'expo-av';

const Player = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: 'http://example.com/song.mp3' },
      { shouldPlay: true }
    );
    setSound(sound);
    setIsPlaying(true);

    sound.setOnPlaybackStatusUpdate((status) => {
      setPosition(status.positionMillis);
      setDuration(status.durationMillis);
    });

    await sound.playAsync();
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const resumeSound = async () => {
    if (sound) {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
      setPosition(0);
    }
  };

  const handleSliderChange = async (value) => {
    if (sound) {
      await sound.setPositionAsync(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now Playing</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onValueChange={handleSliderChange}
      />
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => sound && sound.setPositionAsync(position - 15000)}>
          <Text style={styles.controlText}>⏪</Text>
        </TouchableOpacity>
        {isPlaying ? (
          <TouchableOpacity onPress={pauseSound}>
            <Text style={styles.controlText}>⏸️</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={resumeSound}>
            <Text style={styles.controlText}>▶️</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => sound && sound.setPositionAsync(position + 15000)}>
          <Text style={styles.controlText}>⏩</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  controlText: {
    fontSize: 24,
  },
});

export default Player;