import Header from './Header'
import Nav from './Nav'

function Message() {
  const messages = [
    {
      id: 1,
      dateRange: 'date',
      name: 'amanda',
      image: 'amanda',
      defaultCompatibility: 'ahaha',
    },
  ]

  return (
    <>
      <Header />
      <p>{`messages from ${messages[0].name}`}</p>
      <Nav />
    </>
  )
}

export default Message
