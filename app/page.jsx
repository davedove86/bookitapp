import RoomCard from "@/components/RoomCard";
import Heading from "@/components/Heading";
import rooms from "@/data/rooms.json";

export default function Home() {
  return (
    <>
      <Heading title="Available Rooms" />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard key={room.id} room={room} />)
      ) : (
        <h3>No rooms available at the moment</h3>
      )}
    </>
  );
}
