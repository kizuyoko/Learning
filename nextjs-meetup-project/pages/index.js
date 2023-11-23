import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First meetup',
    image: 'https://memberpress.com/wp-content/uploads/2019/10/Member-Meetup@2x.png',
    address: 'Adress 1, Street 3',
    description: 'The first meetup'
  },
  {
    id: 'm2',
    title: 'A Second meetup',
    image: 'https://cdn-az.allevents.in/events5/banners/25c07fc896354de038d8168acad971c381788a29df07d9820ebb731677a9a216-rimg-w1200-h856-gmir.jpg?v=1699883486',
    address: 'Adress 1, Street 3',
    description: 'The second meetup'
  }
]

export default function HomePage() {
  return (
    <MeetupList meetups={DUMMY_MEETUPS} />
  );
} 
