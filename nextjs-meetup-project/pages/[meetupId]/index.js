import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails(props) {
  return (
    <MeetupDetail 
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}
export async function getStaticPaths() {
  // fetch data from API
  const client = await MongoClient.connect('mongodb+srv://kizuyoko:packardbell1@cluster0.sgilcus.mongodb.net/meetups?retryWrites=true&w=majority'); 
  
  const db = client.db(); 
    
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({ 
      params: { meetupId: meetup._id.toString() },
    })),
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  // fetch data from API
  const client = await MongoClient.connect('mongodb+srv://kizuyoko:packardbell1@cluster0.sgilcus.mongodb.net/meetups?retryWrites=true&w=majority'); 
  
  const db = client.db(); 
    
  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      }
    }
  }
}