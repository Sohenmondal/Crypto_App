import { create } from "zustand";
import axios from "axios";
import debounce from "../helpers/debounce";

const showStore = create((set) => ({
  graphData: [],

  fetchData: async (id) => {
    const [graphsRes, dataRes] = await Promise.all([
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=100&interval=daily&precision=2`
      ),
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=true&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
      ),
    ]);

    const graphData = graphsRes.data.prices.map((price) => {
      const [timeStamp, priceValue] = price;
      const date = new Date(timeStamp).toLocaleDateString("en-us");
      return {
        Date: date,
        Price: priceValue,
      };
    });
      console.log(dataRes);
    set({
      data: dataRes.data, // Set the fetched data to `store.data`
      graphData,
    });
  },
}));

export default showStore;