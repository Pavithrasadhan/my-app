
export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts'); // Fetching data from an API
    const posts = await res.json(); // Parsing the response as JSON
  
    return {
      props: {
        posts, // Passing fetched posts as props
      },
    };
  }
  
  export default function Posts({ posts }) {
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  