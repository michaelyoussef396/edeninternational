// components/BookingCalendar.tsx
import { FC, useState } from 'react';
import { Calendar, momentLocalizer, SlotInfo } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { createZoomMeeting } from '@/utils/zoomApi';

const localizer = momentLocalizer(moment);

const BookingCalendar: FC = () => {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = async (slotInfo: SlotInfo) => {
    const title = window.prompt('New Event name');
    if (title) {
      const newEvent = {
        title,
        start: slotInfo.start,
        end: slotInfo.end,
      };
      setEvents([...events, newEvent]);

      try {
        const zoomMeeting = await createZoomMeeting(title, slotInfo.start);
        alert(`Zoom meeting created: ${zoomMeeting.join_url}`);
      } catch (error) {
        alert('Failed to create Zoom meeting');
      }
    }
  };

  return (
    <div className="container mx-auto my-16">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};

export default BookingCalendar;
