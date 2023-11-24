import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { Fragment } from 'react';

export default function NewMeetUpPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    //console.log(enteredMeetupData);
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }

  return (
    <Fragment>
      <Head>
        <title>Add a new meetup</title>
        <meta name='description' content='Meetupas here and there in the world' />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
} 