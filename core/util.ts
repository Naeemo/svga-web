export enum Version {
  VERSION_1 = 1,
  VERSION_2 = 2,
}

export function getVersion (dataHeader: ArrayBuffer): Version {
  if (dataHeader[0] == 80 && dataHeader[1] == 75 && dataHeader[2] == 3 && dataHeader[3] == 4) {
    return Version.VERSION_1
  } else {
    return Version.VERSION_2
  }
}
