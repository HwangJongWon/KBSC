import React from 'react';
import { useState, useEffect } from 'react';
// import { actionCreators as apiAction } from '../redux/modules/post';
import axios from 'axios';

function About() {

  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchArticles = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 articles 를 초기화하고
      setError(null);
      setArticles(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        // 'http://localhost:8080/api/articles'
        'http://localhost:8080/users'
      );
      setArticles(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

	// 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
  if (!articles) return null;

  return (
		<div>
	    <ul>
	      {articles.map(articles => (
	        <li key={articles.id}>
	          title: {articles.title}
	          <div></div>
	          content: {articles.contents}
	        </li>
	      ))}
	    </ul>
		    --button을 클릭하면 API를 다시 불러와줍니다.
			<button onClick={ fetchArticles }>다시 불러오기</button>
		</div>
  );

}

export default About;