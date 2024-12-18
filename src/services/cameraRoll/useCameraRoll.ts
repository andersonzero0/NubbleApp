import {useEffect, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';

import {CameraRoll} from '@react-native-camera-roll/camera-roll';

export function useCameraRoll() {
  const [list, setList] = useState<string[]>([]);

  async function getPhotos() {
    const hasPermission = await hasAndroidPermission();

    if (hasPermission) {
      const photoPage = await CameraRoll.getPhotos({
        first: 10,
      });
      setList(photoPage.edges.map(edge => edge.node.image.uri));
    }
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return {
    list,
  };
}

async function hasAndroidPermission() {
  if (Platform.OS === 'ios') {
    return true;
  }

  const getCheckPermissionPromise = async () => {
    if (Number(Platform.Version) >= 33) {
      const [hasReadMediaImagesPermission, hasReadMediaVideoPermission] =
        await Promise.all([
          PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          ),
          PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
          ),
        ]);
      return hasReadMediaImagesPermission && hasReadMediaVideoPermission;
    } else {
      return PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
    }
  };

  const hasPermission = await getCheckPermissionPromise();
  if (hasPermission) {
    return true;
  }
  const getRequestPermissionPromise = async () => {
    if (Number(Platform.Version) >= 33) {
      const statuses = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
      ]);
      return (
        statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
          PermissionsAndroid.RESULTS.GRANTED
      );
    } else {
      const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      return status === PermissionsAndroid.RESULTS.GRANTED;
    }
  };

  return await getRequestPermissionPromise();
}
