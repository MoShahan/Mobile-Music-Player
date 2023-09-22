import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import RNFS from 'react-native-fs';

const FolderList = () => {
  const [musicFolders, setMusicFolders] = useState<any>([]);

  const listMusicFolders = async () => {
    try {
      const rootDirectory = RNFS.ExternalDirectoryPath; // External storage directory
      const allFiles = await RNFS.readDir(rootDirectory);
      console.log('------- allFiles -------');
      console.log(allFiles);

      const musicFolders = [];

      for (const file of allFiles) {
        if (file.isDirectory()) {
          const folderContainsMusic = await containsMusicFiles(file.path);
          if (folderContainsMusic) {
            musicFolders.push(file.name);
          }
        }
      }

      console.log('------- musicFolders -------');
      console.log(musicFolders);

      setMusicFolders(musicFolders);
    } catch (error) {
      console.error(error);
    }
  };

  const containsMusicFiles = async (folderPath: any) => {
    try {
      const files = await RNFS.readDir(folderPath);
      for (const file of files) {
        if (/\.(mp3|flac|opus|m4a|wav|ogg)$/i.test(file.name)) {
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const RenderFolderList = (folder: any) => {
    return <Text>{folder}</Text>;
  };

  useEffect(() => {
    listMusicFolders();
  }, []);

  return (
    <View>
      <Text>FolderList</Text>
      {musicFolders.map(RenderFolderList)}
    </View>
  );
};

export default FolderList;

const styles = StyleSheet.create({});
