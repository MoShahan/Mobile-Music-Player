import {PermissionsAndroid, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SongRow from '../components/SongRow';
// import RNFetchBlob from 'react-native-fetch-blob';
// import { request, PERMISSIONS } from 'react-native-permissions';

const SongList = () => {
  const [songs, setSongs] = useState<any>([
    // {name: 'ABC', artist: 'QWE', genre: 'rock', image: null},
    // {name: 'ABC', artist: 'QWE', genre: 'rock', image: null},
    // {name: 'ABC', artist: 'QWE', genre: 'rock', image: null},
    // {name: 'ABC', artist: 'QWE', genre: 'rock', image: null},
  ]);

  const listAllMusicFiles = async () => {
    try {
      const musicDirectory = '/storage/emulated/0'; // Start from the root directory
      // const musicFiles = await listMusicFilesRecursively(musicDirectory);
      // console.log('musicFiles:', musicFiles);
      // setSongs(musicFiles);
    } catch (error) {
      console.error(error);
    }
  };

  // const listMusicFilesRecursively = async (directory: any) => {
  //   try {
  //     const files = await RNFetchBlob.fs.ls(directory);
  //     const musicFiles = files.filter(file => /\.(mp3|flac|opus|m4a|wav|ogg)$/i.test(file));
  //     const musicData = musicFiles.map(file => ({name: file, path: `${directory}/${file}`}));
  //     const subdirectories = await RNFetchBlob.fs.ls(directory);
  //     for (const subdirectory of subdirectories) {
  //       const subdirectoryPath = `${directory}/${subdirectory}`;
  //       const subdirectoryMusicFiles = await listMusicFilesRecursively(subdirectoryPath);
  //       musicData.push(...subdirectoryMusicFiles);
  //     }
  //     return musicData;
  //   } catch (error) {
  //     console.error(error);
  //     return [];
  //   }
  // };

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
        title: 'Storage Permission',
        message: 'This app needs access to your storage to list music files.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK'
      });
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage permission granted');
        listAllMusicFiles();
      } else {
        console.log('Storage permission denied');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    requestStoragePermission();
  }, []);

  useEffect(() => {
    console.log('songs:', songs);
  }, [songs]);

  return (
    <View>
      <Text>SongList</Text>
      {songs.map((song: any) => (
        <SongRow song={song} />
      ))}
    </View>
  );
};

export default SongList;

const styles = StyleSheet.create({});
