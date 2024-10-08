export const findHighestValue = (arr: string[]) => {
  if (arr.length === 0) {
    return null;
  }

  let highestValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (compareKeys(arr[i], highestValue) > 0) {
      highestValue = arr[i];
    }
  }

  return highestValue;
};

export const compareKeys = (key1: string, key2: string) => {
  const parts1 = key1.split(".").map(Number);
  const parts2 = key2.split(".").map(Number);

  for (let i = 0; i < Math.min(parts1.length, parts2.length); i++) {
    if (parts1[i] > parts2[i]) return 1;
    if (parts1[i] < parts2[i]) return -1;
  }

  if (parts1.length > parts2.length) return 1;
  if (parts1.length < parts2.length) return -1;
  return 0;
};

export const updateVersion = (
  version: string,
  releaseType: "major" | "minor" | "patch"
) => {
  const [major, minor, patch] = version.split(".").map(Number);

  switch (releaseType) {
    case "major":
      return `${major + 1}.0.0`;
    case "minor":
      return `${major}.${minor + 1}.0`;
    case "patch":
      return `${major}.${minor}.${patch + 1}`;
    default:
      return version;
  }
};