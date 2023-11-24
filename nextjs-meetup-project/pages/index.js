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
  },
  {
    id: 'm3',
    title: 'Third meetup',
    image: 'https://cdn-az.allevents.in/events5/banners/25c07fc896354de038d8168acad971c381788a29df07d9820ebb731677a9a216-rimg-w1200-h856-gmir.jpg?v=1699883486',
    address: 'Adress 1, Street 3',
    description: 'The thrid meetup'
  }
]

export default function HomePage(props) {
  return (
    <MeetupList meetups={props.meetups} />
  );
}

// A solution in server-side. Not reccomended if the content updates very often. Client side solution is below.
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;  
  
//   // fetch data from API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

// getStaticProps is a Next.js feature. If you export a function called getStaticProps (Static Site Generation) from a page, Next.js will pre-render this page at build time using the props returned by getStaticProps. There is an another way to do above.
export async function getStaticProps() {
  // fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  };
}


