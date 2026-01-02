import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const Player = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  // Example generic song URL
  const AUDIO_URI = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const loadSound = async () => {
    try {
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: AUDIO_URI },
        { shouldPlay: true },
        onPlaybackStatusUpdate
      );
      setSound(newSound);
      setIsPlaying(true);
    } catch (error) {
      console.error("Error loading sound", error);
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setPosition(status.positionMillis);
      setDuration(status.durationMillis);
      setIsPlaying(status.isPlaying);
      if (status.didJustFinish) {
          setIsPlaying(false);
      }
    }
  };

  const handlePlayPause = async () => {
    if (!sound) {
      await loadSound();
    } else {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
    }
  };

  const handleSliderChange = async (value) => {
    if (sound) {
      await sound.setPositionAsync(value);
    }
  };

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        minimumTrackTintColor="#1DB954"
        maximumTrackTintColor="#ccc"
        thumbTintColor="#1DB954"
        onSlidingComplete={handleSliderChange}
      />
      <View style={styles.content}>
        <View style={styles.infoContainer}>
            <Text style={styles.title} numberOfLines={1}>SoundHelix Song 1</Text>
            <Text style={styles.artist}>Artist Name</Text>
        </View>

        <View style={styles.controls}>
            <TouchableOpacity onPress={() => sound && sound.setPositionAsync(position - 10000)}>
                <Ionicons name="play-back-outline" size={24} color="#333" />
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePlayPause} style={styles.playBtn}>
                <Ionicons name={isPlaying ? "pause-circle" : "play-circle"} size={48} color="#1DB954" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => sound && sound.setPositionAsync(position + 10000)}>
                <Ionicons name="play-forward-outline" size={24} color="#333" />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingBottom: 2,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // Floating above the tab bar
    position: 'absolute',
    bottom: 49, // Approx standard tab bar height.
    // Ideally we would use useBottomTabBarHeight() hook if this component was inside the navigator context.
    // Since it's outside, we hardcode an approximation or need to pass it down.
    // Let's assume standard height + safe area is handled by the TabBar naturally,
    // but since this is absolute, it floats over the content.
    // The TabBar is usually around 49-60px.
    left: 0,
    right: 0,
    zIndex: 100, // Ensure it's above everything
  },
  slider: {
    width: '100%',
    height: 20,
    marginTop: -10,
    zIndex: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  infoContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  artist: {
    fontSize: 12,
    color: '#888',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playBtn: {
    marginHorizontal: 10,
  },
});

export default Player;
