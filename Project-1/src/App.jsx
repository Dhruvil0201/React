import UserProfileCard from "./components/UserProfileCard/UserProfileCard"

function App() {

  let userdata = [ {
    profile: 'https://i.pinimg.com/originals/d1/5f/b9/d15fb99edfc68808c7f37c6b93c1208d.jpg',
    name: 'Nina',
    lname: 'Kapoor',
    course: 'Cyber Security',
    dob: '10-12-2000',
    gender: 'female',
    email: 'nina.kapoor@example.com',
    contact: '6478965345',
    address: 'Andheri, Mumbai'
},
{
    profile: 'https://i.pinimg.com/originals/0f/c2/97/0fc297275e9b6106ad08526400cb29ce.jpg',
    name: 'Vikram',
    lname: 'Singh',
    course: 'Cloud Computing',
    dob: '30-09-2002',
    gender: 'male',
    email: 'vikram.singh@example.com',
    contact: '6478965346',
    address: 'Sector 22, Noida'
},
{
    profile: 'https://i.pinimg.com/originals/83/ef/49/83ef492dddf24f2a2a124b931df65055.jpg',
    name: 'Sneha',
    lname: 'Agarwal',
    course: 'AI Development',
    dob: '11-04-2001',
    gender: 'female',
    email: 'sneha.agarwal@example.com',
    contact: '6478965347',
    address: 'Banjara Hills, Hyderabad'
},
{
    profile: 'https://i.pinimg.com/originals/67/46/ed/6746ed95f3853defca9df929e9c40e5c.jpg',
    name: 'Karan',
    lname: 'Jain',
    course: 'DevOps',
    dob: '08-08-2004',
    gender: 'male',
    email: 'karan.jain@example.com',
    contact: '6478965348',
    address: 'MG Road, Bengaluru'
},
{
    profile: 'https://i.pinimg.com/originals/93/37/be/9337be059870f414f4abe664f303a461.jpg',
    name: 'Anjali',
    lname: 'Verma',
    course: 'Software Engineering',
    dob: '17-07-2003',
    gender: 'female',
    email: 'anjali.verma@example.com',
    contact: '6478965349',
    address: 'Jayanagar, Bengaluru'
}];

  return (
    <>
      {userdata.map((ele) => {
        return <UserProfileCard profile={ele.profile} name={ele.name} lname={ele.lname} course={ele.course} dob={ele.dob} gender={ele.gender} email={ele.email} contact={ele.contact} address={ele.address} />
      })}
    </>
  )
}

export default App
