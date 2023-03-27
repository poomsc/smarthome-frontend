import axios from "axios";

const exampleData = {
  smoke: {
    _id: "6421db93a9962d3d431d2a9e",
    device: "Device-01",
    count: 294,
    fan: 0,
    buzzer: 0,
    smokeLevel: 272,
    timestamp: 1679940499958,
  },
  temperature: {
    _id: "6421bbbc75367fad13650822",
    id: 0,
    count: 0,
    device: "device-1",
    temeperature: 26,
    fanLevel: 40,
    timestamp: 1679932535,
  },
  light: {
    _id: "6421db96479abe76503b001c",
    id: 263,
    device: "AutoLight",
    room1: false,
    room2: false,
    room3: false,
    timestamp: 1679940502553,
  },
  curtain: {
    _id: "6421db966d1d2edc9729f2c3",
    id: 261,
    device: "curtain-device",
    lightLevel: 752,
    curtain: 1,
    timestamp: 1679940502517,
  },
};

class Fetcher {
  async roomInfo() {
    const res = await axios.get("http://localhost:5050/sync");

    return res.data;
  }
}

export const fetcher = new Fetcher();
