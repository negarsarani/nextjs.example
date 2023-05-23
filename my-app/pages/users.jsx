const users = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {user.name} , {user.email}
          </div>
        );
      })}
    </div>
  );
};

export default users;

export async function getStaticProps(params) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return {
    props: {
      users: data,
      
    },
  };
}
