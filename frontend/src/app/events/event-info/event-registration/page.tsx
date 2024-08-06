import RegisterEventForm from '@/ui/events/RegisterEventForm'
export default function EventRegistration() {
    return (
      <section id="register-for-event">
        <header className='flex justify-between text-white w-[80%] max-w-[1000px] mx-auto mt-[20px]'>
          <h1 className='font-bold text-[90px] pt-[10px]'>Event title</h1>
          <div className='text-[30px]'>
            <p>Date: <span className='underline font-bold'>Sunday February 30th</span></p>
            <p>Time: <span className='underline font-bold'>12:00pm-2.00pm</span></p>
            <p>Entry Fee: <span className='underline font-bold'>$6.00</span></p>
          </div>
        </header>
        <RegisterEventForm/>
      </section>
    );
  }