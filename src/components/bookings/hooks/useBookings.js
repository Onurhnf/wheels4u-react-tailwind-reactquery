import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../../services/bookings.service.js";

export function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { isLoading, error, bookings };
}
