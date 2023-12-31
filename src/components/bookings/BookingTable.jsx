import React from "react";
import { useBookings } from "./hooks/useBookings.js";
import Table from "../ui/Table.jsx";
import BookingRow from "./BookingRow.jsx";
import Loader from "../ui/Loader.jsx";
import Pagination from "../ui/Pagination.jsx";
import Menu from "../ui/Menu.jsx";

function BookingTable() {
  const { isLoading, error, bookings, count } = useBookings();

  if (isLoading) return <Loader />;

  return (
    <Menu>
      <Table columns="bookingList">
        <Table.Header>
          <div>#</div>
          <div>Type</div>
          <div>User</div>
          <div>Booking Date</div>
          <div>Rental Duration</div>
          <div>Status</div>

          <div>Total Cost</div>
        </Table.Header>
        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow booking={booking} key={booking.id} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menu>
  );
}

export default BookingTable;
