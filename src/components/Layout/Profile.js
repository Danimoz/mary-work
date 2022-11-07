import Container from 'react-bootstrap/Container';

const Profile = (props) => {
  return (
    <Container>
      <div className="bg-dark text-white">
        <article className="p-2 rounded">
          <img src={props.owner.avatar_url} alt = {props.owner.login} />
          <div>
            <h2>{props.owner.login}</h2>
            <p>{props.name}</p>
          </div>
        </article>

        <div>
          <a href={props.html_url} target="_blank" rel='noreferrer'>View Repo</a>
          <ul>
            <li>{props.stargazers_count.toLocaleString()} stars</li>
            <li>{props.watchers_count.toLocaleString()} watchers</li>
          </ul>
        </div>

        <div>
          <p>{props.language}</p>

          <ul>
            {props.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>

      </div>
    </Container>
    
  )
}

export default Profile;