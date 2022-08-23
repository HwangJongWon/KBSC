import ProgressBar from 'react-bootstrap/ProgressBar';

function Mypage() {
  const now = 60;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default Mypage;