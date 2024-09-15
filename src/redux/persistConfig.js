import storage from "redux-persist/lib/storage"; // Це localStorage

const persistConfig = {
  key: "favoriteCampers", // Ключ для зберігання
  storage, // Механізм зберігання
};

export default persistConfig;
