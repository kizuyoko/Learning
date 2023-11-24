import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetail 
      image='https://cdn-az.allevents.in/events5/banners/25c07fc896354de038d8168acad971c381788a29df07d9820ebb731677a9a216-rimg-w1200-h856-gmir.jpg?v=1699883486'
      title='MeetupDetail'
      address='hhhhh'
      description='ddddd'
    />
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: {
        meetupId: 'm1',  
      }},
      { params: {
        meetupId: 'm2',  
      }},
    ]
  }
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  // This logs on the terminal, not on the browser.
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: 'https://cdn-az.allevents.in/events5/banners/25c07fc896354de038d8168acad971c381788a29df07d9820ebb731677a9a216-rimg-w1200-h856-gmir.jpg?v=1699883486',
        id: 'm1',
        title: 'MeetupData',
        address: 'hhhhh',
        description: 'ddddd',
      }
    }
  }
}