// import { useQuery } from "@tanstack/react-query";
// import { IOrderLineQuery } from "../../services/types";
// import { OrderService } from "../../services/orderService";

// const useOrderLines = (query?: IOrderLineQuery) => {
//   const { data, isLoading, isError, isRefetching, refetch } = useQuery({
//     queryKey: ["order", query],
//     queryFn: async () => {
//       if (query) {
//         const respose = await OrderService.getOrderLineById(query);
//         return respose;
//       }
//       return null;
//     },
//   });

//   return {
//     data,
//     isLoading,
//     isError,
//     isRefetching,
//     refetch,
//   };
// };

// export { useOrderLines };
