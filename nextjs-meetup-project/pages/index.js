import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList"

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
  const client = await MongoClient.connect('mongodb+srv://kizuyoko:packardbell1@cluster0.sgilcus.mongodb.net/meetups?retryWrites=true&w=majority'); 
  
  const db = client.db(); 
    
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description:meetup.description 
      }))
    },
    revalidate: 1
  };
}


