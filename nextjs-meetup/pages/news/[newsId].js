import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  //console.log(router.query.newsId);
  const newsId = router.query.newsId;

  // Send a request to the backend API 
  // to fetch the news item with newsId

  return <h1>Detail Page</h1>
}

export default DetailPage;