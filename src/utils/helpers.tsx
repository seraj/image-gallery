export function serialize(data: any) {
  if (!data) {
    return false;
  }
  return Object.keys(data)
    .map((keyName) => {
      // if (data[keyName]) {
      return `${encodeURIComponent(keyName)}=${
        data[keyName] === 0
          ? 0
          : data[keyName]
          ? encodeURIComponent(data[keyName])
          : ""
      }`;
      // }

      // return false;
    })
    .join("&");
}
